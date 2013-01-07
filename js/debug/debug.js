var debug = {
    log: function (value) {
      console.log(value);
    },

    logEach: function (object) {
      $.each(object, function(index, value) {console.log(value)});
    },

    logMessage: function(text) {
      console.log(text.toString());
    }

 };