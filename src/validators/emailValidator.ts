// Фабрика для создания валидатора email
export const createEmailValidator = () => {
  return {
    // Метод для валидации email
    validate(value: string) {
      // Регулярное выражение для проверки email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Проверяем, соответствует ли значение шаблону email
      const isValid = emailRegex.test(value);

      return {
        isValid, // Булево значение: true, если email корректен, иначе false
        error: isValid ? undefined : "Некорректный email", // Сообщение об ошибке, если email некорректен
      };
    },
  };
};
