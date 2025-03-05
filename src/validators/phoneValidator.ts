// Регулярные выражения для работы с номерами телефонов
export const PHONE_PATTERNS = {
  BASIC: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, // Шаблон для проверки корректного формата номера
  DIGITS_ONLY: /\d/g, // Извлекает только цифры из строки
  CLEAN_PHONE: /\D/g, // Удаляет все нечисловые символы
};

// Фабрика для создания валидатора и форматтера номера телефона
export const createPhoneValidator = () => {
  return {
    // Метод для валидации номера телефона
    validate(value: string) {
      const isValid = PHONE_PATTERNS.BASIC.test(value); // Проверяем, соответствует ли формат шаблону

      return {
        isValid, // Булево значение: true, если номер корректен, иначе false
        error: isValid ? undefined : "Неверный формат телефона", // Сообщение об ошибке, если формат неверен
      };
    },

    // Метод для форматирования номера телефона
    format(value: string) {
      // Удаляем все нечисловые символы
      let cleaned = value.replace(PHONE_PATTERNS.CLEAN_PHONE, "");

      // Если номер не начинается с "7", добавляем "7" в начало
      if (!cleaned.startsWith("7")) cleaned = "7" + cleaned;

      // Обрезаем до 11 цифр (стандартный формат номера РФ)
      cleaned = cleaned.slice(0, 11);

      // Форматируем номер в читаемый вид +7 (XXX) XXX-XX-XX
      let formatted = "+7 ";
      if (cleaned.length > 1) formatted += `(${cleaned.slice(1, 4)}`;
      if (cleaned.length > 4) formatted += `) ${cleaned.slice(4, 7)}`;
      if (cleaned.length > 7) formatted += `-${cleaned.slice(7, 9)}`;
      if (cleaned.length > 9) formatted += `-${cleaned.slice(9, 11)}`;

      return formatted;
    },
  };
};
