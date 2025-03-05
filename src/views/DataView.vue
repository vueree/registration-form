<script setup>
// Импорт хранилища формы из Pinia
import { useFormStore } from "../stores/formStore";
// Импорт базового компонента таблицы
import TableBase from "../components/TableBase.vue";
// Импорт базового компонента навигации
import NavBase from "../components/NavBase.vue";

// Инициализация хранилища формы
const formStore = useFormStore();

// Загрузка сохранённых данных из localStorage при монтировании компонента
formStore.loadEntries();
</script>

<template>
  <div>
    <!-- Компонент навигации -->
    <NavBase />

    <!-- Заголовок страницы -->
    <h1>Данные</h1>

    <!-- Компонент таблицы с переданными данными из хранилища -->
    <TableBase :entries="formStore.getEntries" />
  </div>
</template>
