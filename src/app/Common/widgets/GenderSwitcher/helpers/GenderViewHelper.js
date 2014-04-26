var GenderViewHelper = {
  /**
   * Получаем класс для мужчин
   * @param  {String} gender Текущий пол
   * @param  {Array} defaultClasses Классы по умолчанию.
   * @return {String} Класс для мужчин
   */
  generateMaleClass: function (gender, defaultClasses) {
    var className = defaultClasses.join(' '),
        activeClass = (gender === 'm') ? ' btn-primary' : '';
    return className + activeClass;
  },

  /**
   * Получаем класс для женщин
   * @param  {String} gender Текущий пол
   * @param  {Array} defaultClasses Классы по умолчанию.
   * @return {String} Класс для женщин
   */
  generateFemaleClass: function (gender, defaultClasses) {
    var className = defaultClasses.join(' '),
        activeClass = (gender === 'f') ? ' btn-primary' : '';
    return className + activeClass;
  }
};

module.exports = GenderViewHelper;