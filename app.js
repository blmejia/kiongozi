openT = (e, tabName) =>{
    var i;
    var content;
    var tabs;


   


    content = document.getElementsByClassName("content-tab");

    for(i = 0; i < content.length; i++){
        content[i].style.display = "none";
    }

    tabs = document.getElementsByClassName("tab");
    for(i = 0; i < content.length; i++){
        tabs[i].className = tabs[i].className.replace("is-active", "");
    }
   

    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += "is-active";

}