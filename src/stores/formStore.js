import { ref, computed } from "vue"; // Импортируем реактивные свойства из Vue
import { defineStore } from "pinia"; // Импортируем функцию для создания хранилища Pinia

// Определяем хранилище формы с именем "form"
export const useFormStore = defineStore("form", () => {
  // Создаем реактивный массив для хранения записей
  const entries = ref([]);

  // Функция для добавления новой записи
  const addEntry = (entry) => {
    entries.value.push(entry); // Добавляем запись в массив
    localStorage.setItem("formEntries", JSON.stringify(entries.value)); // Сохраняем данные в локальное хранилище
  };

  // Функция для загрузки записей из localStorage при инициализации
  const loadEntries = () => {
    const storedEntries = localStorage.getItem("formEntries"); // Получаем данные из localStorage
    if (storedEntries) {
      entries.value = JSON.parse(storedEntries); // Разбираем JSON и обновляем массив записей
    }
  };

  // Вычисляемое свойство для получения списка записей
  const getEntries = computed(() => entries.value);

  // Возвращаем переменные и функции, чтобы они были доступны в компонентах
  return {
    entries,
    addEntry,
    loadEntries,
    getEntries,
  };
});
