function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  // var sec = today.getSeconds();
  ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;
  hr = checkTime(hr);
  min = checkTime(min);
  // sec = checkTime(sec);
  // document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
  document.getElementById("clock").innerHTML = hr + ":" + min + " " + ap;

  var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octobre', 'Noviembre', 'Diciembre'];
  // var days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  // var curWeekDay = days[today.getDay()];
  var curDay = today.getDate();
  var curMonth = months[today.getMonth()];
  // var curYear = today.getFullYear();
  // var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
  var date = curDay + " de " + curMonth;
  document.getElementById("date").innerHTML = date;

  var time = setTimeout(function () { startTime() }, 500);
}
function checkTime(i) {
  return i < 10 ? "0" + i : i;
}