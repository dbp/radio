var shouldrun = true;

function run() {
  window.setInterval(function() { shouldrun = true; }, 300000);
  navigator.geolocation.watchPosition(getStation);
}

function getStation(position) {
  if (!shouldrun) {
    return;
  } else {
    shouldrun = false;
  }
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

  $.get("http://nominatim.openstreetmap.org/reverse?format=json&lat=" + lat + "&lon=" + lon, {}, function (resp) {
    var zip = resp.address.postcode;

    var iframe = $("<iframe style='border: 0; margin: 0 auto;' width=400 height=800 src='" + "http://radio-locator.com/cgi-bin/vacant?city=" + zip + "'></iframe>");
    $("body").children().remove();
    $("body").append(iframe);
  });
}
