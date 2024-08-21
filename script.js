let stat = document.querySelector(".status");
let but = document.querySelector("button")
let value = 0;

but.addEventListener("click", function () {
  
    if (value == 0) {
        stat.innerHTML = "Friend";
        stat.style.color = "green";
        stat.style.left = "36%"
        but.innerHTML = "Remove"
        but.style.color = "red";
        value = 1;

    } else if(value == 1){
        stat.innerHTML = "Stranger";
        stat.style.color = "rgb(76, 0, 0)";
        stat.style.left = "33%"
        but.innerHTML = "Add Friend"
        but.style.color = "green";
        value = 0;
    }
}) 
