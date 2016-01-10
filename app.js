function run() {
  navigator.geolocation.watchPosition(getStation);
}

function getStation(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

  $.get("http://nominatim.openstreetmap.org/reverse?format=json&lat=" + lat + "&lon=" + lon, {}, function (resp) {
    var zip = resp.address.postcode;

    var iframe = $("<iframe height=800 src='" + "http://radio-locator.com/cgi-bin/vacant?city=" + zip + "'></iframe>");
    $("body").children().remove();
    $("body").append(iframe);
  });
}
