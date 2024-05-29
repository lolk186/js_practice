function headerH1(){
    let headerH1 = document.getElementById("HeaderH1")
    headerH1.setAttribute("class","headerH1");
    headerH1.innerHTML = "ес -3 уху"
}
function Headerh1(){
    let headerH1 = document.getElementById("HeaderH1")
    headerH1.removeAttribute("class")
    headerH1.innerHTML = "Текст"
}
var num = 4;
function addli(){

    let list = document.getElementById("ul-list")
    var li = document.createElement("li")
    li.innerHTML = num++
    list.appendChild(li)
}
function deldiv(){
    let div_img = document.getElementById("div_img")
    div_img.remove()
}
function changeimg(){
    let img = document.getElementById("img")
    img.removeAttribute("src")
    img.setAttribute("src","/photo/photo_2024-05-26_21-43-49.jpg")
}
var num1=5
function addrow1(){
    
    let row1 = document.getElementById("1row")
    var addrow1 = document.createElement("td")
    addrow1.innerHTML = num1++
    row1.appendChild(addrow1)
}
var num2=5
function addrow2(){
    let row2 = document.getElementById("2row")
    var addrow2 = document.createElement("td")
    addrow2.innerHTML = num2++
    row2.appendChild(addrow2)
}
var num3 = 1
function addnewrow(){
    let row = document.getElementById("table")
    var addrow = document.createElement("tr")
    row.appendChild(addrow)
    addrow.setAttribute("id","3row")
    let row3 = document.getElementById("3row")
    var addrow3 = document.createElement("td")
    addrow3.innerHTML = num3++
    row3.appendChild(addrow3)
}
function addrow3(){
    let row3 = document.getElementById("3row")
    var addrow3 = document.createElement("td")
    addrow3.innerHTML = num3++
    row3.appendChild(addrow3)

}
function changetext(){
    let headh2 = document.getElementById("headerh2")
    headh2.innerHTML = "Ну и зачем"
}
function backtext(){
    let headh2 = document.getElementById("headerh2")
    headh2.innerHTML="не изменяй"
}
function unhidelist(){
    let list = document.getElementById("list")
    list.hidden = false
}
function hidelist(){
    let list = document.getElementById("list")
    list.hidden = true
}
function save(){
    const name = document.getElementById("inputtext").value;
    let div_paste = document.getElementById("paste_text")
    var div1 = document.createElement("h2")
    div1.innerHTML=name
    div_paste.appendChild(div1)
}
nummber=0
function clicker(){
    let btn = document.getElementById("clicker")
    let count = document.getElementById("span_clicker")
    nummber++
    btn.innerHTML=nummber
    count.innerHTML=nummber

}