var tolshHelper = (function(){

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var init = function(){
    $('body').append("<button id='tar-tolshHelper-init'>tar-tolshHelper-init</button>");

    addDayNames();

    $('#tar-tolshHelper-init').on('click', function(){
      addDayNames();
    });
  };

  var addDayNames = function(){
    $('.tar-dayname').remove();

    $('li.title').each(function(){
      
      var el = $(this);
      date = new Date(el.text().split(' ').slice(0, 3).join(' '));
      day = days[date.getDay()];

      el.html(el.html() + " " + "<strong class='tar-dayname'>" + day + "</strong>" );

    });

  };

  return {
    init: init
  }

})();

tolshHelper.init();