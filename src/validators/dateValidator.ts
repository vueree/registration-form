export const createDateValidator = () => {
  return {
    validate(value: string) {
      // Проверка формата ДД.ММ.ГГГГ
      const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
      if (!dateRegex.test(value)) {
        return {
          isValid: false,
          error: "Некорректный формат даты",
        };
      }

      // Разбиваем дату на день, месяц и год
      const [day, month, year] = value.split(".").map(Number);

      // Проверка, что дата не позже текущего дня
      const currentDate = new Date();
      const inputDate = new Date(year, month - 1, day);

      if (inputDate > currentDate) {
        return {
          isValid: false,
          error: "Дата не может быть позже текущего дня",
        };
      }

      // Проверка, что дата валидна (например, 30.02.2023 не существует)
      const isValidDate =
        inputDate.getFullYear() === year &&
        inputDate.getMonth() === month - 1 &&
        inputDate.getDate() === day;

      if (!isValidDate) {
        return {
          isValid: false,
          error: "Некорректная дата",
        };
      }

      return {
        isValid: true,
        error: undefined,
      };
    },

    format(value: string) {
      // Удаляем все, кроме цифр
      const cleaned = value.replace(/\D/g, "");

      // Добавляем точки автоматически
      let formatted = "";
      for (let i = 0; i < cleaned.length; i++) {
        if (i === 2 || i === 4) {
          formatted += ".";
        }
        formatted += cleaned[i];
      }

      // Ограничиваем длину (ДД.ММ.ГГГГ)
      return formatted.slice(0, 10);
    },
  };
};
