var thisYear = new Date();
thisYear.setTime(thisYear.getTime());
document.getElementById("spanDate").innerHTML = "&#169 " + thisYear.getFullYear();