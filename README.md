# Registration App

Этот проект представляет собой SPA-приложение на Vue 3 с использованием Vite, Pinia и Vue Router. Для управления зависимостями используется **Yarn** (версия 4.7.0).

## 🚀 Стек технологий

- **Vue 3** (^3.5.13) — современный фреймворк для создания пользовательских интерфейсов.
- **Vite** (^6.1.0) — быстрый инструмент для сборки приложений.
- **Pinia** (^3.0.1) — управление состоянием.
- **Vue Router** (^4.5.0) — маршрутизация.
- **Vite Plugin Vue DevTools** (^7.7.2) — отладочные инструменты для Vue.

## 📦 Установка и запуск

### Установка зависимостей

```sh
yarn install

Запуск в режиме разработки

yarn dev

Сборка проекта

yarn build

Предпросмотр собранного проекта

yarn preview

📁 Структура проекта

📂 registration
├── 📂 src
│   ├── 📂 components  # Компоненты приложения
│   ├── 📂 router      # Файлы маршрутизации
│   ├── 📂 store       # Хранилище (Pinia)
│   ├── 📂 views       # Страницы приложения
│   ├── App.vue        # Корневой компонент
│   ├── main.ts        # Точка входа
├── 📄 index.html      # Основной HTML-файл
├── 📄 package.json    # Конфигурация проекта
├── 📄 vite.config.ts  # Конфигурация Vite

🔧 Конфигурация Vite

Файл vite.config.ts включает поддержку Vue, а также настройку алиасов:

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

📜 Инициализация приложения
Файл main.ts содержит код инициализации Vue-приложения:

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount("#app");

📌 Требования
	•	Node.js 16+
	•	Yarn 4.7.0+ (используется yarn@4.7.0+sha512...)

📝 Лицензия
Этот проект распространяется под лицензией MIT.
