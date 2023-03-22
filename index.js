
function openSidebar(){
   document.querySelector(".sideBar").classList.add("sidey");
}
function closeSideBar(){

    document.querySelector(".sideBar").classList.remove("sidey");
}
document.querySelector(".openBtn").addEventListener("click",openSidebar);
document.getElementById("cross").addEventListener("click",closeSideBar);


$(document).ready(function(){
    $(window).scroll(function(){
        if($(document).scrollTop()>10){
            $(".navbar").addClass("scroll");
        } else{
            $(".navbar").removeClass("scroll");
        }
    })
})