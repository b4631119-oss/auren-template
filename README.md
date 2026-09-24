# Auren

<div align="center">
  <img src="./public/screenshot.png" alt="Auren — главная страница" width="800" />
</div>

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#-лицензия)

</div>

**Auren** — минималистичный интернет-магазин моды и электроники: два языка, три валюты, светлая и тёмная тема из коробки. **[Открыть демо →](https://auren.example)**

## ✨ Возможности

- 🛍️ **Каталог товаров** — фильтры по категориям, страницы товаров с галереей, рейтингом и отзывами покупателей
- 🛒 **Корзина и избранное** — выезжающая панель корзины, wishlist, всё сохраняется в `localStorage`
- 💳 **Пошаговый чекаут** — информация → доставка → оплата, анимированный прогресс и подтверждение заказа
- 🌍 **Два языка RU / EN** — маршруты `/` и `/en/*` на next-intl, переключение без перезагрузки страницы
- 💱 **Три валюты KGS / USD / RUB** — конвертация всех цен на лету, курсы задаются в одном месте (`lib/currency.ts`)
- 🌓 **Светлая и тёмная тема** — next-themes без мигания при загрузке, светлая по умолчанию
- 📱 **Адаптивная вёрстка** — от 320px до десктопа; переключатели языка, валюты и темы аккуратно спрятаны в мобильное меню
- 🔍 **SEO из коробки** — уникальные `title`/`description` и OpenGraph для каждой страницы и локали, `robots.txt` и `sitemap.xml`

## 🛠️ Стек

| Технология | Зачем |
| --- | --- |
| [![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org) | App Router, SSG-маршруты, метаданные |
| [![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev) | Server и Client Components |
| [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org) | Строгая типизация во всём проекте |
| [![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com) | Стилизация на утилитах и CSS-переменных тем |
| [![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black)](https://ui.shadcn.com) | Доступные компоненты: dropdown, sheet, accordion |
| [![next-intl](https://img.shields.io/badge/next--intl-4-blue)](https://next-intl.dev) | i18n RU/EN: словари, маршрутизация, плюрализация |
| [![next-themes](https://img.shields.io/badge/next--themes-0.4-purple)](https://github.com/pacocoursey/next-themes) | Переключение темы классом на `<html>` |

## 📁 Структура проекта

```
├── app/                  # Маршруты App Router
│   ├── [locale]/         # Локализованные страницы (ru — по умолчанию, en — /en/*)
│   ├── icon.svg          # Favicon: тёмный квадрат с буквой A
│   ├── robots.ts         # Генерация robots.txt
│   └── sitemap.ts        # Генерация sitemap.xml
├── assets/               # Логотип бренда
├── components/           # React-компоненты
│   ├── ui/               # Базовые компоненты shadcn/ui
│   ├── cart-context.tsx  # Состояние корзины (localStorage)
│   ├── currency-*        # Контекст и переключатель валют
│   ├── locale-switch.tsx # Переключатель RU/EN
│   ├── theme-*           # Провайдер и кнопка темы
│   └── shadcn-space/     # Секции страниц: hero, футер, карточки, чекаут
├── hooks/                # Общие React-хуки
├── i18n/                 # Конфигурация next-intl: routing, navigation, request
├── lib/                  # Каталог товаров, курсы валют, хелперы локализации
├── messages/             # Словари интерфейса: ru.json и en.json
├── proxy.ts              # Middleware next-intl (Next 16)
└── public/               # Статика: изображения товаров и секций
```

## 🚀 Быстрый старт

Требуется [Node.js 20+](https://nodejs.org) и [pnpm](https://pnpm.io).

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/your-username/auren.git
   cd auren
   ```

2. Установите зависимости:

   ```bash
   pnpm install
   ```

3. Переменные окружения не требуются — шаблон работает из коробки. При необходимости создайте `.env.local`:

   ```bash
   # NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

4. Запустите dev-сервер:

   ```bash
   pnpm dev
   ```

   Откройте [http://localhost:3000](http://localhost:3000) — русский интерфейс, английский доступен по `/en`.

Другие команды:

```bash
pnpm build       # production-сборка
pnpm start       # запуск собранного приложения
pnpm typecheck   # проверка типов
pnpm lint        # ESLint
```

## 📸 Скриншоты

<table>
  <tr>
    <td align="center"><strong>Светлая тема</strong></td>
    <td align="center"><strong>Тёмная тема</strong></td>
    <td align="center"><strong>Мобильная версия</strong></td>
  </tr>
  <tr>
    <td><img src="./docs/screenshots/light.png" alt="Светлая тема" /></td>
    <td><img src="./docs/screenshots/dark.png" alt="Тёмная тема" /></td>
    <td><img src="./docs/screenshots/mobile.png" alt="Мобильная версия" /></td>
  </tr>
</table>

## 📄 Лицензия

Проект распространяется по лицензии [MIT](./LICENSE).
