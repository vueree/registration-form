<script setup>
import { defineProps } from "vue";

// Определяем входной пропс 'entries', который содержит массив записей
const props = defineProps({
  entries: {
    type: Array, // Ожидается массив объектов
    required: true, // Пропс является обязательным
  },
});
</script>

<template>
  <!-- Таблица для отображения списка записей -->
  <table>
    <thead>
      <tr>
        <!-- Заголовки столбцов -->
        <th>ФИО</th>
        <th>Дата рождения</th>
        <th>Телефон</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <!-- Перебираем массив entries и создаем строки таблицы -->
      <tr v-for="(entry, index) in entries" :key="index">
        <td>{{ entry.fio }}</td>
        <!-- Фамилия, имя, отчество -->
        <td>{{ entry.dob }}</td>
        <!-- Дата рождения -->
        <td>{{ entry.phone }}</td>
        <!-- Телефон -->
        <td>{{ entry.email }}</td>
        <!-- Электронная почта -->
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
/* Общие стили для таблицы */
table {
  width: 100%; /* Растягиваем таблицу на всю ширину */
  border-collapse: collapse; /* Убираем двойные границы */
  margin-top: 20px; /* Отступ сверху */
}

/* Стили для заголовков и ячеек */
th,
td {
  padding: 12px; /* Внутренний отступ */
  border: 1px solid #ddd; /* Границы ячеек */
  text-align: left; /* Выравнивание текста влево */
}

/* Стили для заголовков */
th {
  background-color: #42b983; /* Цвет фона заголовка */
  color: white; /* Цвет текста заголовка */
}

/* Чередование цвета строк (зебра) */
tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* Эффект при наведении на строку */
tr:hover {
  background-color: #f1f1f1;
}
</style>
