$(document).ready(function() {
    $("#formOne").submit(function(event) {
      let guitar = $("input:radio[name=guitar]:checked").val();
      let transp = $("input:radio[name=transp]:checked").val();
      let music = $("input:radio[name=music]:checked").val();

      if (guitar === "sg" && transp === "moto" && music === "rock") {
        $(".ruby").show();
        $(".c").hide();
        $(".python").hide();
      } else if (guitar === "sg" && transp === "van" && music === "rock") {
        $(".ruby").show();
        $(".c").hide();
        $(".python").hide();
      } else if (guitar === "sg" && transp === "blades" && music === "rock") {
        $(".ruby").show();
        $(".c").hide();
        $(".python").hide();
      } else if (guitar === "sg" && transp === "moto" && music === "cumbia") {
        $(".c").show();
        $(".ruby").hide();
        $(".python").hide();
      } else if (guitar === "sg" && transp === "van" && music === "cumbia") {
        $(".c").show();
        $(".ruby").hide();
        $(".python").hide();
      } else if (guitar === "sg" && transp === "blades" && music === "cumbia") {
        $(".c").show();
        $(".ruby").hide();
        $(".python").hide();
      } else if (guitar === "sg" && transp === "moto" && music === "techno") {
        $(".python").show();
        $(".ruby").hide();
        $(".c").hide();
      }  else if (guitar === "sg" && transp === "van" && music === "techno") {
        $(".python").show();
        $(".ruby").hide();
        $(".c").hide();
      }  else if (guitar === "sg" && transp === "blades" && music === "techno") {
        $(".python").show();
        $(".ruby").hide();
        $(".c").hide();
      } else if (guitar === "tele" && transp === "moto" && music === "rock") {
        $(".ruby").show();
        $(".python").hide();
        $(".c").hide();
      } else if (guitar === "tele" && transp === "van" && music === "rock") {
        $(".ruby").show();
        $(".python").hide();
        $(".c").hide();   
      } else if (guitar === "tele" && transp === "blades" && music === "rock") {
        $(".ruby").show();
        $(".python").hide();
        $(".c").hide();
      } else if (guitar === "tele" && transp === "moto" && music === "cumbia") {
        $(".c").show();
        $(".python").hide();
        $(".ruby").hide();
      } else if (guitar === "tele" && transp === "van" && music === "cumbia") {
        $(".c").show();
        $(".python").hide();
        $(".ruby").hide();
      } else if (guitar === "tele" && transp === "blades" && music === "cumbia") {
        $(".c").show();
        $(".python").hide();
        $(".ruby").hide();
      } else if (guitar === "tele" && transp === "moto" && music === "techno") {
        $(".python").show();
        $(".c").hide();
        $(".ruby").hide();
      }  else if (guitar === "tele" && transp === "van" && music === "techno") {
        $(".python").show();
        $(".c").hide();
        $(".ruby").hide();
      }  else if (guitar === "tele" && transp === "blades" && music === "techno") {
        $(".python").show();
        $(".c").hide();
        $(".ruby").hide();
      } else if (guitar === "v" && transp === "moto" && music === "rock") {
        $(".ruby").show();
        $(".c").hide();
        $(".python").hide();
      } else if (guitar === "v" && transp === "van" && music === "rock") {
        $(".ruby").show();
        $(".c").hide();
        $(".python").hide();   
      } else if (guitar === "v" && transp === "blades" && music === "rock") {
        $(".ruby").show();
        $(".c").hide();
        $(".python").hide();
      } else if (guitar === "v" && transp === "moto" && music === "cumbia") {
        $(".c").show();
        $(".ruby").hide();
        $(".python").hide();
      } else if (guitar === "v" && transp === "van" && music === "cumbia") {
        $(".c").show();
        $(".ruby").hide();
        $(".python").hide();
      } else if (guitar === "v" && transp === "blades" && music === "cumbia") {
        $(".c").show();
        $(".ruby").hide();
        $(".python").hide();
      } else if (guitar === "v" && transp === "moto" && music === "techno") {
        $(".python").show();
        $(".ruby").hide();
        $(".c").hide();
      }  else if (guitar === "v" && transp === "van" && music === "techno") {
        $(".python").show();
        $(".ruby").hide();
        $(".c").hide();
      }  else if (guitar === "v" && transp === "blades" && music === "techno") {
        $(".python").show();
        $(".ruby").hide();
        $(".c").hide();
      }


      event.preventDefault();
    })
});