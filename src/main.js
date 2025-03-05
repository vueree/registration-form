// Импортируем необходимые модули из Vue
import { createApp } from "vue";
// Импортируем корневой компонент приложения
import App from "./App.vue";
// Импортируем маршрутизатор (vue-router) для навигации
import router from "./router";
// Импортируем Pinia — систему управления состоянием
import { createPinia } from "pinia";

// Создаем экземпляр Vue-приложения
const app = createApp(App);

// Подключаем маршрутизатор для управления страницами
app.use(router);

// Подключаем хранилище состояний Pinia
app.use(createPinia());

// Монтируем приложение в DOM-элемент с id "app"
app.mount("#app");
