# Design System – Portfolio Nguyễn Quốc Anh

## 1. Màu sắc (Color Palette)

### Light Mode

| Token | Hex | Mô tả |
|-------|-----|-------|
| `--bg-primary` | `#f8fafc` | Nền chính (slate-50) |
| `--bg-secondary` | `#ffffff` | Nền card/section |
| `--text-primary` | `#0f172a` | Chữ chính (slate-900) |
| `--text-secondary` | `#64748b` | Chữ phụ (slate-500) |
| `--accent` | `#4f46e5` | Màu nhấn chính (indigo-600) |
| `--accent-hover` | `#4338ca` | Hover state (indigo-700) |

### Dark Mode

| Token | Hex | Mô tả |
|-------|-----|-------|
| `--bg-primary` | `#020617` | Nền chính (slate-950) |
| `--bg-secondary` | `#0f172a` | Nền card (slate-900) |
| `--text-primary` | `#e2e8f0` | Chữ chính (slate-200) |
| `--text-secondary` | `#94a3b8` | Chữ phụ (slate-400) |
| `--accent` | `#818cf8` | Màu nhấn (indigo-400) |

### Gradient

```css
/* Avatar glow */
background: linear-gradient(to top right, #6366f1, #a855f7);

/* Text gradient (name) */
background: linear-gradient(to right, #0f172a, #3730a3, #0f172a);
/* Dark: */
background: linear-gradient(to right, #ffffff, #a5b4fc, #ffffff);
```

---

## 2. Typography

### Font Family

| Mục đích | Font | Weight |
|----------|------|--------|
| Primary | Inter | 300, 400, 600, 800 |
| Display (Hero) | Inter | 800 (extrabold) |
| Accent (Wedding) | Great Vibes | 400 |
| Serif (Wedding) | Playfair Display | 400, 600, 700 |

### Font Size Scale

| Class | Size | Usage |
|-------|------|-------|
| `text-xs` | 12px | Labels, hints |
| `text-sm` | 14px | Descriptions |
| `text-base` | 16px | Body text |
| `text-lg` | 18px | Subheadings |
| `text-xl` | 20px | Card titles |
| `text-2xl` | 24px | Section subheading |
| `text-3xl` | 30px | Section heading |
| `text-4xl` | 36px | Hero subtitle |
| `text-5xl` | 48px | Hero name |

---

## 3. Spacing

Sử dụng Tailwind spacing scale (4px base):

| Token | Value | Usage |
|-------|-------|-------|
| `p-4` | 16px | Card padding (mobile) |
| `p-6` | 24px | Card padding (desktop) |
| `p-8` | 32px | Section content |
| `py-24` | 96px | Section vertical padding |
| `gap-4` | 16px | Grid/flex gap mặc định |
| `gap-8` | 32px | Card grid gap |
| `mb-6` | 24px | Section title margin |

---

## 4. Border Radius

| Component | Radius | Tailwind Class |
|-----------|--------|----------------|
| Button (pill) | 9999px | `rounded-full` |
| Card | 24px | `rounded-3xl` |
| Service card | 24px | `rounded-3xl` |
| Icon container | 16px | `rounded-2xl` |
| Input | 12px | `rounded-xl` |
| Avatar | 50% | `rounded-full` |

---

## 5. Shadow

| Level | CSS | Usage |
|-------|-----|-------|
| Soft | `box-shadow: 0 10px 25px rgba(0,0,0,.06)` | Cards |
| Medium | `shadow-lg` | Buttons hover |
| Strong | `shadow-xl` | Hero avatar |
| Glow | `shadow-indigo-500/30` | CTA buttons |

---

## 6. Animation

### AOS (Animate On Scroll)

```javascript
AOS.init({
  once: false,
  mirror: true,
  offset: 50,
  duration: 1000,
  easing: 'ease-out-cubic',
});
```

| Effect | Usage |
|--------|-------|
| `fade-up` | Text content, cards |
| `zoom-in` | Avatar, hero elements |
| `zoom-in-up` | Contact card |
| `fade-in` | Scroll indicator |

### CSS Animations

```css
/* Pulse glow */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Bounce (scroll indicator) */
.animate-bounce { animation: bounce 1s infinite; }

/* Float blobs (wedding) */
@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

### Transitions

| Property | Duration | Easing |
|----------|----------|--------|
| Color/Background | 300ms | ease |
| Transform | 300ms / 500ms | ease |
| Shadow | 300ms | ease |

---

## 7. Components

### Button Variants

| Variant | Style |
|---------|-------|
| Primary | `bg-slate-900 text-white dark:bg-white dark:text-slate-900` |
| Ghost | `bg-transparent border border-slate-200` |
| Icon | `w-12 h-12 rounded-full border` |
| CTA | `bg-indigo-600 text-white rounded-full shadow-lg` |

### Card Structure

```html
<div class="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 
            border border-slate-100 dark:border-slate-700 
            hover:shadow-xl transition-all duration-300">
  <!-- Icon -->
  <div class="w-14 h-14 rounded-2xl bg-{color}-100 ...">
    <i class="fa-solid fa-{icon}"></i>
  </div>
  <!-- Content -->
  <h4>Title</h4>
  <p>Description</p>
</div>
```

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Mobile | < 640px | Single column, smaller text |
| Tablet | ≥ 768px | 2-column grid |
| Desktop | ≥ 1024px | 3-column grid, larger padding |

### Grid Examples

```css
/* Services */
.grid-cols-1 md:grid-cols-3 gap-8

/* Projects slider */
slidesPerView: 1 (mobile) → 2 (tablet) → 3 (desktop)
```

---

## 9. Dark Mode Implementation

```javascript
// Toggle logic
const isDark = html.classList.toggle('dark');
localStorage.setItem('theme', isDark ? 'dark' : 'light');

// Auto-detect system preference
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
```

```html
<!-- Dark mode classes -->
<body class="bg-slate-50 dark:bg-slate-950 
             text-slate-900 dark:text-slate-200 
             transition-colors duration-300">
```

---

## 10. Accessibility

- ✅ Semantic HTML (`section`, `header`, `nav`, `footer`)
- ✅ Alt text cho images
- ✅ Color contrast đạt WCAG AA
- ✅ Focus states cho interactive elements
- ✅ Responsive font sizes

---

## 11. File Structure

```
portifolio_nguyen_quoc_anh/
├── index.html              # Trang portfolio chính
├── data.json               # Dữ liệu profile/projects
├── CNAME                   # Custom domain
├── sitemap.xml             # SEO sitemap
├── README.md               # Documentation
├── assets/
│   └── img/                # Hình ảnh
├── spec/
│   ├── Aboutme.md          # Thông tin cá nhân
│   ├── proposal.md         # Bản đề xuất dự án
│   └── design.md           # Design system (file này)
├── tech-toolkit-v1.html    # Bộ công cụ KTV
├── psuUtil.html            # PSU Calculator
├── taothiepcuoi.html       # Thiệp cưới generator
└── inputDateTime-custom.html
```
