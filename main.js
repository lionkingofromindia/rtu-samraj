function func() {
  var roll = document.getElementById("rollnumber").value;
  var name = document.getElementById("name").value;
  // var Roll = document.getElementById("rollnumber").value;
  // var Roll = document.getElementById("rollnumber").value;
  
  window.open("result.html?name="+name+"&roll="+roll);
  
}