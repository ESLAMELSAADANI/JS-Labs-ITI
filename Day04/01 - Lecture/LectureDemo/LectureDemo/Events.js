addEventListener('load', function () {
    function createfun() {
        alert("BTN Created")
    }


    updatebtn.onclick = updatefun;
    function updatefun() {
        alert("Content updateds")

    }


    showbtn.onclick = function () {
        alert("Content Showed")

    }

    sendbtn.onclick = sendfun;
    function sendfun() {
        document.title = "Data Sent"
    }


    sendbtn.onclick = function () {
        document.body.style.backgroundColor="lightgreen"
    }

   // sendbtn.addEventListener('click', sendfun)
    sendbtn.addEventListener('click', function (event) {

        document.title = "Data Sent"
        console.log(event)
    })

    // MouseEvents
    testingdiv.addEventListener('mouseover', function (e) {

       // console.log("mouseover")
       // console.log(this)// this >> testingdiv
        // testingdiv.innerText = ".Net Treack"
        //testingdiv.innerHTML = "<h1 align='center'>.Net</h1>"

        console.log(e)

    })//mpuseover

    testingdiv.addEventListener('mousemove', function (e) {

        //console.log("mousemove")
        this.innerHTML="<h1 align='center'><font color='darkcyan'>"+e.x+":"+e.y+"</font></h1>"


    })//mousemove

    testingdiv.addEventListener('mouseout', function () {

        console.log("mouseout")

    })//mpuseout




    // key down
    //txt.addEventListener('keydown', function () {
    //    result.innerText = this.value
    //    result.style.font="bold 20px agness"
    //})
    // keyup
    //txt.addEventListener('keyup', function () {
    //    result.innerText = this.value
    //    result.style.font = "bold 20px agness"
    //    result.style.color = "cyan"

    //})

    // key press
    txt.addEventListener('keypress', function () {
        result.innerText = this.value
        result.style.font = "bold 20px agness"
        result.style.color = "red"

    })

    city.addEventListener('change', function () {

        result.innerText = this.value
        result.style.font = "bold 20px agness"
        result.style.color = "lightgreen"
    })


})