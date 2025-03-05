<script setup>
// Импортируем необходимые функции из Vue
import { defineProps, defineEmits } from "vue";

// Определяем пропсы компонента
const props = defineProps({
  // Пропс `disabled` управляет доступностью кнопки
  disabled: {
    type: Boolean,
    default: false, // По умолчанию кнопка активна
  },
});

// Определяем события, которые компонент может эмитить
const emit = defineEmits(["click"]);

// Функция обработки клика по кнопке
const onClick = () => {
  emit("click"); // Генерируем событие "click", чтобы родительский компонент мог на него реагировать
};
</script>

<template>
  <!-- Кнопка, у которой отключается клик, если передан пропс `disabled` -->
  <button :disabled="disabled" @click="onClick">
    <slot>Отправить</slot>
    <!-- Слот для содержимого кнопки, по умолчанию "Отправить" -->
  </button>
</template>

<style scoped>
/* Стили кнопки */
button {
  padding: 10px 20px;
  background-color: #42b983; /* Основной цвет кнопки */
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  height: 80px;
  font-size: 20px;
}

/* Стили для отключенной кнопки */
button:disabled {
  background-color: #ccc; /* Серый фон для неактивной кнопки */
  cursor: not-allowed; /* Изменение курсора для обозначения недоступности */
}
</style>
