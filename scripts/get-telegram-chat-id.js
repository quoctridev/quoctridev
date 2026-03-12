const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error('Missing TELEGRAM_BOT_TOKEN.');
  process.exit(1);
}

const response = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
const payload = await response.json();

if (!payload.ok) {
  console.error('Telegram API error:', payload.description || 'Unknown error');
  process.exit(1);
}

const chats = new Map();
for (const update of payload.result || []) {
  const chat = update.message?.chat || update.channel_post?.chat || update.edited_message?.chat;
  if (!chat) continue;
  chats.set(chat.id, {
    id: chat.id,
    type: chat.type,
    title: chat.title || '',
    username: chat.username || '',
    first_name: chat.first_name || '',
    last_name: chat.last_name || '',
  });
}

if (!chats.size) {
  console.log('No chat found.');
  console.log('Send /start to the bot or add it to a group, then run this script again.');
  process.exit(0);
}

console.log('Available chats:');
for (const chat of chats.values()) {
  console.log(JSON.stringify(chat));
}
