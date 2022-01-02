let
    mynum = document.getElementById("my_num"),
    photo = document.getElementById("image"),
    red = document.getElementById("red"),
    blue = document.getElementById("blue"),
    black = document.getElementById("black"),
    white = document.getElementById("white"),
    darkMode = document.getElementById("dark_mode"),
    help1 = document.getElementById("help"),
    upbtn = document.querySelector(".up_btn")
    ;








/* function ChangePhoto(){
    let x = document.getElementById("image");
    if (document.getElementById("dark_mode").checked == 1) {
        x.style.transition = '0ms' ;
        x.style.opacity = 0;

        setTimeout(function(){
            window.image.src = "black_photo.png";
            setTimeout(function(){
            x.style.transition = '1000ms';
            x.style.opacity = 1;
            },1100)
        },90)
        window.logo_header.src = "logo_black.png";


    }else{

        x.style.transition = '0ms' ;
        x.style.opacity = 0;

        setTimeout(function(){
            window.image.src = "white_new.png";
                
            setTimeout(function(){
            x.style.transition = '1000ms' ;
            x.style.opacity = 1;
            },1100)
        },100)
        window.logo_header.src = "logo_white.png";
    }
    
} */





function Dark_Mode(){
    setTimeout(function (){
        if (darkMode.checked == 1) {
            darkMode.innerHTML =
            "<style>"+
    
            "body {"+
            "background-color: black ;"+
            "}"+
            
    
    
            "#my_num{"+
                "color:white;"+
                "border: rgb(228, 61, 192) solid 4px;"+
                "text-shadow: 0 0 10px white, 0 0 30px rgb(228, 61, 192) ,0 0 30px rgb(228, 61, 192);"+
                "box-shadow: 0 0 15px 2px rgb(228, 61, 192) inset,0 0 20px 13px rgb(228, 61, 192) ;"+
            "}"+
                
            "#my_num::before{"+
                "background-color: rgb(228, 61, 192);"+
            '}'+
    
            "#my_num:hover{"+
                "background-color: rgb(228, 61, 192);"+
                "color: white ;"+
            "}"+
    
            "#my_num::after{"+
                "box-shadow: 0 0 50px 20px rgb(228, 61, 192);"+
                "opacity: 0;"+
            "}"+
    
            "#my_num:hover::after{"+
            "opacity: 1 ;"+
            "}"+
    
            "@keyframes light_my_num{"+
                "0%{"+ 
                    "background-color: black ;"+
                '}'+
                '3%{ '+
                    'background-color:rgb(228, 61, 192) ;'+
                '}'+
                '6%{ '+
                    'background-color: black ;'+
                '}'+
            '8%{'+
                    'background-color: rgb(228, 61, 192) ;'+
                '}'+
            '9%{'+
                    'background-color: black ;'+
            ' }'+
            
            '}'+
    
            "#bph{"+
                "background-color: white;"+
            "}"+
            "header{"+
                "box-shadow:0 3px 10px -5px white;"+
                "background-color: black ;"+
            "}"+
    
            "nav a{"+
            "color: white ;"+
            "}"+
    
            ".content h1,h4{"+
            "color: white ;"+
            "}"+
            ".content p{"+
            "color: white ;"+
            "}"+
    
            ".photo label{"+
                "background-color: rgb(255, 245, 245);border-radius: 90px;"+
            "}"+
    
            ".up_btn button{"+
                "background-color: white ;"+
                "color: black ;"+
            "}"+
    
            ".title_my_work h2, .title_work_with h2 {"+
            "color: white ;"+
            "}"+
    
            ".my_work{"+
            "background: none ;"+
            "}"+
    
            ".bar_color{"+
            "background-color: rgba(255, 255, 255, 0.300) ;"+
            "}"+
    
            ".sm_bar a {"+
            "color: white ;"+
            "}"+
    
            ".work_with{"+
            "background:none;"+
            "}"+
    
            ".work_with h6{"+
            " color: white;"+
            "}"+
    
    
            ".sm_bar a:hover{"+
                "color: red;"+
            "}"+
    
    
            ".up_btn button:hover{color: red; background-color: black ;}"+
            
            
            ".slider{"+
            "border: 1px solid rgb(255, 255, 255);"+
            "}"+
    
            "::-webkit-scrollbar-track{background-color: black;}"+
            "::-webkit-scrollbar-thumb{background-color: white ;}"+
            "::-webkit-scrollbar-thumb:hover{background-color: red;}"+
            
    
            "</style>"
        }
        else{
            darkMode.innerHTML =
            "<style>"+
            ""+
            "</style>"; 
        }
        },300)
}





function my_work() {
    window.scrollTo({
        top: 1200,
        left:0,
        behavior: "smooth"
    });
}


function work_with() {
    window.scrollTo({
        top: 3500 ,
        left:0,
        behavior: "smooth"

    });
}



function up_window() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



function whatsapp_header(){
    window.scrollTo({
        top: 600,
        behavior : "smooth"
    });
}



window.onscroll = function (){
    if (window.scrollY >= 410){
        upbtn.style.display = "block";
    }
    else{
        upbtn.style.display = "none";
    }
}

