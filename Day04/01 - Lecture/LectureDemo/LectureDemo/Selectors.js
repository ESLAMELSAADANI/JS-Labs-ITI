// Selectors 
ulobj = document.getElementById("list1")
document.getElementsByTagName("p")// return collection

pone=document.getElementsByTagName("p")[0]

document.getElementsByTagName("ul")//collection

document.getElementsByClassName("bGrey")//collection
document.getElementsByClassName("bGrey")[2] // return form

document.getElementsByName("hoppy")
check1 = document.getElementsByName("hoppy")[0]

document.querySelector("#list1")
document.querySelector("p")
document.querySelectorAll("p")
document.querySelectorAll(".bGrey")

tbl1=document.getElementsByTagName("table")[0]
tr1 = tbl1.getElementsByTagName("tr")[0]
td2 = tr1.getElementsByTagName("td")[1]
//td2.innerHTML = "<h1>.Net</h1>"

td1 = tbl1.children[0].children[0].children[0]

//tbl1.setAttribute("align", "center")
//tbl1.setAttribute("class", "bPink")
tbl1.getAttribute("border")//null

tbl1.getAttribute("class")

//tbl1.classList.add("iti")
// check1.checked=false
imgs = document.querySelectorAll("img")
for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.border="5px dashed yellow"
}

// create 
 liobj=document.createElement("li")
liobj.innerText = "dotNet Mansoura"
liobj.style.backgroundColor = "cyan"
 ulobj.appendChild(liobj)






