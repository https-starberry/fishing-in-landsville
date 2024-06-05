function myFunction() {
    var x = document.getElementById("myLinks");

    if (x.style.display === "block") {
        x.style.display  = "none";
    }

    else {
        x.style.display = "block";
        x.style.position = "absolute"
        x.style.width = "100%"
        x.style.backgroundColor = "white"
        x.style.zIndex = "1"
    }
}
