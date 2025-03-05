<script setup>
import { ref, computed } from "vue";
import { useFormStore } from "../stores/formStore";
import InputField from "../components/InputField.vue";
import ButtonBase from "../components/ButtonBase.vue";
import NavBase from "../components/NavBase.vue";

// Поля формы
const fio = ref("");
const dob = ref("");
const phone = ref("");
const email = ref("");

// Реактивные ссылки на компоненты полей ввода
const fioRef = ref(null);
const dobRef = ref(null);
const phoneRef = ref(null);
const emailRef = ref(null);

// Используем хранилище формы (Pinia)
const formStore = useFormStore();

// Состояние для отображения сообщения об успешной отправке
const isSuccessMessageVisible = ref(false);

// Вычисляемое свойство для проверки валидности формы
const isFormValid = computed(() => {
  return (
    fio.value.trim() !== "" &&
    dob.value.trim() !== "" &&
    phone.value.trim() !== "" &&
    email.value.trim() !== "" &&
    fioRef.value?.isValid &&
    dobRef.value?.isValid &&
    phoneRef.value?.isValid &&
    emailRef.value?.isValid
  );
});

// Функция отправки формы
const submitForm = () => {
  const entry = {
    fio: fio.value,
    dob: dob.value,
    phone: phone.value,
    email: email.value,
  };

  // Добавление записи в хранилище
  formStore.addEntry(entry);

  // Очистка полей формы
  fio.value = "";
  dob.value = "";
  phone.value = "";
  email.value = "";

  // Сброс состояния валидации полей
  fioRef.value?.resetTouchState();
  dobRef.value?.resetTouchState();
  phoneRef.value?.resetTouchState();
  emailRef.value?.resetTouchState();

  // Отображение сообщения об успешной отправке
  isSuccessMessageVisible.value = true;

  // Скрытие сообщения через 5 секунд
  setTimeout(() => {
    isSuccessMessageVisible.value = false;
  }, 5000);
};
</script>

<template>
  <div class="layout">
    <h1>Форма регистрации</h1>

    <!-- Форма с обработчиком submit -->
    <form @submit.prevent="submitForm" class="form-wrapper">
      <div class="input-field">
        <!-- Поле ввода ФИО -->
        <InputField
          v-model="fio"
          ref="fioRef"
          type="text"
          :maxlength="100"
          placeholder="ФИО"
        />

        <!-- Поле ввода даты рождения -->
        <InputField
          v-model="dob"
          ref="dobRef"
          type="date"
          :maxlength="10"
          placeholder="Дата рождения"
        />

        <!-- Поле ввода телефона -->
        <InputField
          type="phone"
          v-model="phone"
          placeholder="Телефон"
          ref="phoneRef"
        />

        <!-- Поле ввода email -->
        <InputField
          type="email"
          v-model="email"
          placeholder="Email"
          ref="emailRef"
        />
      </div>

      <!-- Кнопка отправки -->
      <ButtonBase :disabled="!isFormValid">Отправить</ButtonBase>
    </form>

    <!-- Сообщение об успешной отправке -->
    <div v-if="isSuccessMessageVisible" class="success-message">
      Успешно отправлено
    </div>

    <!-- Навигационное меню -->
    <NavBase class="nav" />
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.form-wrapper {
  display: flex;
  gap: 20px;
  flex: 1;
  margin-top: 30px;
  justify-content: center;
}

.input-field {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav {
  margin-top: auto;
}

/* Стили для сообщения об успешной отправке */
.success-message {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  border-radius: 5px;
  animation: fadeOut 5s forwards;
}

/* Анимация скрытия сообщения */
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
