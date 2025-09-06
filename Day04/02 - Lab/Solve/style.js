
//Part01
// a) Find all images in page (two ways)
var imgs01 = document.images;
var imgs02 = document.getElementsByTagName("img");

// b) Find all options for City drop down list
var cityOptions = document.getElementsByName("City")[0].options;

// c) Find all rows for second table in page
var tables = document.getElementsByTagName("table");
var secondTableRows = tables[1].rows;

// d) Find all elements that contain class name fontBlue
var fontBlueElements = document.getElementsByClassName("fontBlue");


//==================================================

//Part02
// a) Get first anchor inside the second table and change href to "Training.com" +and text to "Training"
var firstAnchor = tables[1].getElementsByTagName("a")[0];
firstAnchor.href = "http://training.com";
firstAnchor.textContent = "Training";

// b) Find last image and change its border
let lastImg = document.images[document.images.length - 1];
lastImg.style.border = "2px solid pink";

// c) Function to find all checked checkboxes in userData form
function showCheckedValues() {
    let form = document.forms["regForm"];  // form name="regForm"
    let checkboxes = form.querySelectorAll("input[type=checkbox]:checked");
    checkboxes.forEach(cb => alert(cb.value));
}

// d) Find element with id="example" and change background to pink
document.getElementById("example").style.backgroundColor = "pink";
