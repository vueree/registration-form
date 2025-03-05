import { createRouter, createWebHistory } from "vue-router"; // Импортируем функции для создания роутера
import FormView from "../views/FormView.vue"; // Импорт главного представления (Форма)
import DataView from "../views/DataView.vue"; // Импорт представления для данных

// Определяем маршруты приложения
const routes = [
  {
    path: "/", // URL-адрес для главной страницы
    component: FormView, // Компонент, который будет отображаться
  },
  {
    path: "/data", // URL-адрес для страницы данных
    component: DataView, // Компонент, который будет отображаться
  },
];

// Создаем экземпляр маршрутизатора Vue
const router = createRouter({
  history: createWebHistory(), // Используем историю браузера (без хэшей в URL)
  routes, // Передаем массив маршрутов
});

export default router; // Экспортируем роутер для использования в приложении
