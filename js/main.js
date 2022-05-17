
var light = "white";
var dark = "black";
var btn = document.getElementById("switch");
var contactList = document.getElementById("contact-list");
var body = document.getElementById("card");
var list = document.getElementsByClassName("list-group-item")
function switchMode() {
  if(btn.checked){
    console.log("check");
    body.style.backgroundColor = dark;
    list.style.backgroundColor = dark;
    
  }
  else{
    body.style.backgroundColor = light;

  }
    
}
