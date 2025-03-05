<script setup>
import { RouterLink } from "vue-router"; // Импорт компонента для маршрутизации
</script>

<template>
  <!-- Навигационное меню -->
  <nav>
    <!-- Ссылка на главную страницу (Форма) -->
    <router-link to="/">Форма</router-link>
    <!-- Ссылка на страницу данных -->
    <router-link to="/data">Данные</router-link>
  </nav>
</template>

<style scoped>
/* Стили для навигационного меню */
nav {
  display: flex; /* Горизонтальное расположение элементов */
  justify-content: space-around; /* Равномерное распределение элементов */
  gap: 20px; /* Отступ между элементами */
  padding: 10px; /* Внутренние отступы */
  background-color: #f0f0f0; /* Цвет фона */
  border-bottom: 1px solid #ddd; /* Разделительная линия снизу */
}

/* Стили для ссылок */
nav a {
  text-decoration: none; /* Убираем подчеркивание */
  color: #42b983; /* Основной цвет текста */
  font-weight: bold; /* Жирный шрифт */
}

/* Стили для активной ссылки */
nav a.router-link-exact-active {
  color: #2c3e50; /* Цвет активной ссылки */
  border-bottom: 2px solid #42b983; /* Подчеркивание активной ссылки */
}
</style>
