// some variable
let social_media = document.getElementById("social_media");
let night = document.querySelector(".night_mode input");
let videos = document.querySelectorAll(".my_work video");
let images = document.querySelectorAll(".my_work image");
var my_work = document.querySelectorAll(".header ul a")[1];
var skilles = document.querySelectorAll(".header ul a")[2];
let top_ = document.querySelector(".top");



// local storage
if (window.localStorage.check) { night.setAttribute(window.localStorage.check, ""); }
if (window.localStorage.White) {} else { window.localStorage.setItem("White", "white"); }
if (window.localStorage.Black) {} else { window.localStorage.setItem("Black", "black"); }




// night mode
function night_mode_f() {
    let a = document.querySelectorAll("header a")
    for (let i = 0; i < a.length; i++) {
        a[i].style.cssText =
            `color: ${window.localStorage.getItem("White")} ;`;
    }
    document.querySelector(".text").style.cssText = `color: ${window.localStorage.getItem("White")} ;`;
    window.localStorage.setItem("check", "checked");
    night.setAttribute(window.localStorage.check, "");
    document.querySelector(".photo img").style.cssText =
        `background-image: url("black_photo.png");`;
    document.querySelector(".number a").classList.add("my_num2");
    document.querySelector(".title_my_work").style.color = window.localStorage.getItem("White");
    document.querySelector(".title_work_with").style.color = window.localStorage.getItem("White");
    document.querySelector(".header").style.cssText =
        `box-shadow: 0 -9px 15px 2px ${window.localStorage.getItem("White")};`;
    let header_a = document.querySelectorAll(".header a");
    for (let x = 0; x < header_a.length; x++) {
        header_a[x].classList.add("before_a");
    }
    let o_ = document.querySelectorAll(".work_with div");
    for (let o = 0; o < o_.length; o++) {
        o_[o].classList.add("background_white");
    }
    let a_ = document.querySelectorAll(".social_media a");
    for (let i = 0; i < a_.length; i++) {
        a_[i].style.color = window.localStorage.getItem("White");
    }
    top_.style.cssText = `color: ${window.localStorage.getItem("Black")};
    background-color: ${window.localStorage.getItem("White")} ;`;
    window.localStorage.setItem("color", "black");
    document.body.style.backgroundColor = window.localStorage.getItem("color");
    document.querySelector(".night_mode input").style.backgroundColor = `rgba(255, 255, 255, 0.45)`;
}

function else_() {
    let a = document.querySelectorAll("header a")
    for (let i = 0; i < a.length; i++) {
        a[i].style.cssText =
            `color: ${window.localStorage.getItem("Black")} ;`;
    }
    document.querySelector(".text").style.cssText = `color: ${window.localStorage.getItem("Black")} ;`;
    window.localStorage.removeItem("check")
    document.querySelector(".photo img").style.cssText =
        `background-image: url("white_photo.png") ;`;
    document.querySelector(".number a").classList.remove("my_num2");
    document.querySelector(".title_my_work").style.color = window.localStorage.getItem("Black");
    document.querySelector(".title_work_with").style.color = window.localStorage.getItem("Black");
    document.querySelector(".header").style.cssText =
        `box-shadow: 0 -12px 15px 1px ${window.localStorage.getItem("Black")};`;
    let a_ = document.querySelectorAll(".social_media a");
    for (let i = 0; i < a_.length; i++) {
        a_[i].style.color = window.localStorage.getItem("Black");
    }
    let o_ = document.querySelectorAll(".work_with div")
    for (let o = 0; o < o_.length; o++) {
        o_[o].classList.remove("background_white")
    }
    let header_a = document.querySelectorAll(".header a");
    for (let x = 0; x < header_a.length; x++) {
        header_a[x].classList.remove("before_a");
    }
    top_.style.cssText = `color:${window.localStorage.getItem("White")}
    ; background-color: ${window.localStorage.getItem("Black")} ;`;
    window.localStorage.setItem("color", "white");
    document.body.style.backgroundColor = window.localStorage.getItem("color");
    document.querySelector(".night_mode input").style.backgroundColor = `rgba(0, 0, 0, 0.45)`;
}




night.onclick = function() {
    if (night.checked == 1) {
        night_mode_f()
    } else {
        else_()
    }
}
window.onload = function() {
    if (night.checked == 1) {
        night_mode_f()
    } else {
        else_()
    }
}









// social media
social_media.onclick = function() {
    document.querySelector(".social_media").style.cssText = `opacity: 1;`;
    setTimeout(function() {
        document.querySelector(".social_media").style.cssText = `opacity: 0;`;
    }, 90000)

}






// scrolling
my_work.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 1083,
        behavior: "smooth",
    })
}
skilles.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 2050,
        behavior: "smooth",
    })
}
window.onscroll = function() {
    if (scrollY >= 642) {
        top_.style.display = "block";
    } else {
        top_.style.display = "none";
    }
}
top_.onclick = function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}





// some functions 
for (let i = 0; i < videos.length; i++) {
    videos[i].onclick = function() {
        videos[i].setAttribute("controls", '');
    }
}