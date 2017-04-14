
$.fn.lastWord = function() {
  var text = this.text().trim().split(" ");
  var last = text.pop();
  this.html(text.join(" ") + (text.length > 0 ? " <span class='lastWord'>" + last + "</span>" : last));
};
$.fn.firstWord = function() {
  var text = this.text().trim().split(" ");
  var first = text.shift();
  this.html((text.length > 0 ? "<span class='firstWord'>"+ first + "</span> " : first) + text.join(" "));
};
$(".footer>div>div>div:nth-child(2)>span:nth-of-type(1)").firstWord();
$(".footer>div>div>div:nth-child(2)>span:nth-of-type(2)").firstWord();
$(".footer>div>div>div:nth-child(2)>span:nth-of-type(3)").lastWord();
function initMap() {
        var uluru = {lat:52.13 , lng: -106.67};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }