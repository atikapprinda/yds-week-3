var button = document.getElementById("menu");
var mobilenav = document.getElementById("mobileNav");

mobilenav.style.display = "none";
button.style.opacity = 1;

button.onclick = function(){
    if(mobilenav.style.display == "none"){
        mobilenav.style.display = "block";
        button.style.opacity = 0.5;
    }
    else{
        mobilenav.style.display = "none";
        button.style.opacity = 1;
    }
}

// fungsi ketika user men scroll ke bawah 
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
// fungsi ketika user meng klik tombol back to top maka halaman akan menscroll ke atas
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
