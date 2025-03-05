<script setup>
// Импортируем необходимые функции из Vue
import { ref, computed, watch } from "vue";

// Импортируем валидаторы для разных типов ввода
import { createPhoneValidator } from "../validators/phoneValidator";
import { createEmailValidator } from "../validators/emailValidator";
import { createDateValidator } from "../validators/dateValidator";
import { createTextValidator } from "../validators/textValidator";

// Определяем пропсы компонента
const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ["phone", "email", "date", "text"].includes(value),
  },
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

// Определяем события, которые компонент может эмитить
const emit = defineEmits(["update:modelValue"]);

// Реактивные переменные
const inputValue = ref(props.modelValue); // Текущее значение поля ввода
const isTouched = ref(false); // Было ли поле затронуто
const isValid = ref(true); // Валидность значения
const errorMessage = ref(""); // Сообщение об ошибке

// Определяем валидатор в зависимости от типа ввода
const validator = computed(() => {
  switch (props.type) {
    case "phone":
      return createPhoneValidator();
    case "email":
      return createEmailValidator();
    case "date":
      return createDateValidator();
    case "text":
      return createTextValidator();
    default:
      return createTextValidator();
  }
});

// Определяем тип input для HTML (например, "date" обрабатываем как "text")
const inputType = computed(() => {
  return props.type === "date" ? "text" : props.type;
});

// Функция валидации значения
const validate = () => {
  const validationResult = validator.value.validate(inputValue.value);
  isValid.value = validationResult.isValid;
  errorMessage.value = validationResult.error || "";
};

// Обработчик ввода
const handleInput = (event) => {
  if (props.type === "phone") {
    // Форматируем телефонный номер перед установкой значения
    inputValue.value = validator.value.format(event.target.value);
  } else if (props.type === "date") {
    // Форматируем дату (ДД.ММ.ГГГГ)
    const cleaned = event.target.value.replace(/\D/g, ""); // Удаляем все символы, кроме цифр
    let formatted = "";

    // Автоматически вставляем точки между ДД, ММ и ГГГГ
    for (let i = 0; i < cleaned.length; i++) {
      if (i === 2 || i === 4) {
        formatted += ".";
      }
      formatted += cleaned[i];
    }

    // Ограничиваем длину (ДД.ММ.ГГГГ)
    inputValue.value = formatted.slice(0, 10);
  } else {
    // Обычный ввод для email и text
    inputValue.value = event.target.value;
  }

  validate(); // Проверяем валидность введенного значения
  emit("update:modelValue", inputValue.value); // Обновляем модельное значение
};

// Обработчик потери фокуса
const handleBlur = () => {
  isTouched.value = true;
  validate();
};

// Функция сброса состояния "затронутости" поля
const resetTouchState = () => {
  isTouched.value = false;
};

// Делаем isValid и resetTouchState доступными извне через defineExpose
defineExpose({
  isValid,
  resetTouchState,
});

// Следим за изменением modelValue, чтобы обновлять inputValue и валидировать
watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue;
    validate();
  }
);
</script>

<template>
  <div class="wrapper">
    <!-- Поле ввода -->
    <input
      :type="inputType"
      v-model="inputValue"
      :class="['input', { invalid: isTouched && !isValid }]"
      :maxlength="type === 'date' ? 10 : undefined"
      :placeholder="placeholder"
      @blur="handleBlur"
      @input="handleInput"
    />
    <!-- Сообщение об ошибке -->
    <span v-if="isTouched && !isValid" class="error-message">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style scoped>
/* Контейнер */
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Поле ввода */
.input {
  width: 300px;
  height: 60px;
  border-radius: 10px;
  font-size: 20px;
  padding: 8px 6px;
}

/* Ошибочное состояние */
.invalid {
  border-color: red;
}

/* Сообщение об ошибке */
.error-message {
  color: red;
}
</style>
