
$(function(){
  $.fn.refresh = function() {
    return $(this.selector);
  };

  var fin = $("#finished")
  fin.hide();

  setInterval(function(){

    var hours = parseInt($("#hours").html());
    var minutes = parseInt($("#minutes").html());
    var seconds = parseInt($("#seconds").html());

    if(seconds === 0){
      if(minutes === 0){
        if(hours === 0){

          fin = fin.refresh();

          if(fin.html() === "not done"){
            $("#now").append("<p class='fin'>Time's up!</p>");
            fin.html("done");
          };

        }else{
          hours -= 1;
          minutes = 59;
          seconds = 59;
        };
      }else{
        minutes -= 1;
        seconds = 59;
      };
    }else{
      seconds -= 1;
    };

    hours = hours.toString();
    minutes = minutes.toString();
    seconds = seconds.toString();

    if(hours.length === 1) hours = "0" + hours  
    if(minutes.length === 1) minutes = "0" + minutes
    if(seconds.length === 1) seconds = "0" + seconds
      
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);
  },1000);

});