const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const rootDir = __dirname;
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
};

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';

    req.on('data', chunk => {
      raw += chunk;
      if (raw.length > 1_000_000) {
        reject(new Error('Payload quá lớn.'));
        req.destroy();
      }
    });

    req.on('end', () => resolve(raw));
    req.on('error', reject);
  });
}

async function handleContact(req, res) {
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramToken) {
    return sendJson(res, 500, {
      error: 'Server chưa cấu hình Telegram bot token.',
    });
  }

  if (!telegramChatId) {
    return sendJson(res, 500, {
      error: 'Thiếu TELEGRAM_CHAT_ID. Hãy gửi /start cho @quoctri_bot rồi chạy script lấy chat_id.',
    });
  }

  let payload;
  try {
    const raw = await readRequestBody(req);
    payload = JSON.parse(raw || '{}');
  } catch (error) {
    return sendJson(res, 400, { error: 'Dữ liệu gửi lên không hợp lệ.' });
  }

  const name = String(payload.name || '').trim();
  const replyTo = String(payload.replyTo || '').trim();
  const preferredContact = String(payload.preferredContact || '').trim();
  const topic = String(payload.topic || '').trim();
  const message = String(payload.message || '').trim();

  if (!name || !replyTo || !message) {
    return sendJson(res, 400, {
      error: 'Thiếu tên, cách liên hệ hoặc nội dung.',
    });
  }

  const submittedAt = new Intl.DateTimeFormat('vi-VN', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Asia/Ho_Chi_Minh',
  }).format(new Date());

  const telegramMessage = [
    'New portfolio contact',
    '',
    `Ho ten: ${name}`,
    `Lien he lai: ${replyTo}`,
    `Kenh uu tien: ${preferredContact || 'Khong ro'}`,
    `Chu de: ${topic || 'Khong ro'}`,
    `Thoi gian: ${submittedAt}`,
    '',
    'Noi dung:',
    message,
  ].join('\n');

  try {
    const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: telegramMessage,
      }),
    });

    const result = await response.json();
    if (!response.ok || !result.ok) {
      throw new Error(result.description || 'Telegram API rejected the message.');
    }

    return sendJson(res, 200, { ok: true });
  } catch (error) {
    return sendJson(res, 502, {
      error: 'Không gửi được sang Telegram. Kiểm tra lại bot hoặc chat_id.',
    });
  }
}

function serveStatic(req, res) {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const cleanPath = decodeURIComponent(requestUrl.pathname === '/' ? '/index.html' : requestUrl.pathname);
  const absolutePath = path.normalize(path.join(rootDir, cleanPath));

  if (!absolutePath.startsWith(rootDir)) {
    sendJson(res, 403, { error: 'Forbidden' });
    return;
  }

  fs.stat(absolutePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      sendJson(res, 404, { error: 'Not found' });
      return;
    }

    const extension = path.extname(absolutePath).toLowerCase();
    const contentType = mimeTypes[extension] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(absolutePath).pipe(res);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/api/contact') {
    return handleContact(req, res);
  }

  if (req.method === 'GET' || req.method === 'HEAD') {
    return serveStatic(req, res);
  }

  return sendJson(res, 405, { error: 'Method not allowed' });
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Portfolio server running at http://127.0.0.1:${port}`);
});
