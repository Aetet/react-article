var Vow = require('vow');
var BookingManager = {
  saveData: function (data) {
    var dfd = Vow.defer();
    //Мы можем сконвертировать дату в любой нужный нам формат.
    setTimeout(function () {
      dfd.resolve('Hello, Habra!' + JSON.stringify(data));
    });

    return dfd.promise();
  }
};

module.exports = BookingManager;