var array = [0,1,2,3,4,5,6,7,8];
var roulette;

    function start() {
        roulette = setInterval(function() {
          var idx = Math.floor( Math.random() * array.length) ;
          document.getElementById("roulette").innerHTML = idx;
        }, 100);
      }

      function stop() {
        if(roulette) {
          clearInterval(roulette);
        }
      }