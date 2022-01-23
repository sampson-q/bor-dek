var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function checkDateOfBirth() {
    var dateofbirth = document.getElementById('dob').value;
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var systemdate;
    
    if (dateofbirth.slice(5, 6) == '0') { systemdate = year + '-0' + (month + 1) + '-' + day + '.'; }
    else {systemdate = year + '-' + (month + 1) + '-' + day + '.';}

    if (dateofbirth.slice(0, 4) > year) { alert('Wrong date selection'); }
    else if (dateofbirth.slice(0, 4) == year && dateofbirth.slice(5, 7) > (month + 1)) { alert('Wrong date selection'); }
    else if (dateofbirth.slice(5, 7) == (month + 1) && dateofbirth.slice(8, 10) > day) { alert('Wrong date selection'); }
}