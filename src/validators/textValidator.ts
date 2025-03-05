// Фабрика для создания валидатора текстового поля
export const createTextValidator = () => {
  return {
    // Метод для проверки валидности текста
    validate(value: string) {
      // Проверяем, что строка не пустая после удаления пробелов
      const isValid = value.trim().length > 0;

      return {
        isValid, // true, если строка не пустая, иначе false
        error: isValid ? undefined : "Поле не может быть пустым", // Сообщение об ошибке при пустом поле
      };
    },
  };
};
