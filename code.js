function ToggleMenu(){
    if(document.getElementById("menuLateralClosed").style.display == "flex" || document.getElementById("menuLateralClosed").style.display == ""){
        document.getElementById("menuLateralClosed").style.display = "none"
        document.getElementById("menuLateralOpened").style.display = "block"
    }else{
        document.getElementById("menuLateralClosed").style.display = "flex"
        document.getElementById("menuLateralOpened").style.display = "none"
    }
}