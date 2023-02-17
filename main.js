window.onload =  loadWitPopUp()
window.addEventListener("beforeunload", function(event) {
    document.getElementById("checkbox1").checked = false;
    document.getElementById("AgreementId").classList.remove("NotificationClose")
  });
function loadWitPopUp(){
window.removeEventListener('scroll', () => {scrollFunc()});

let windowOffset = window.pageYOffset
if(windowOffset > 0){
    window.scrollTo({top:0,behavior:'smooth'})
    setTimeout(() => {
        window.addEventListener('scroll', () => {scrollFunc()});
    }, windowOffset);
}else{
    window.addEventListener('scroll', () => {scrollFunc()});  
}

let storedIitem = localStorage.getItem("countMeIn")
if(storedIitem){
    const nowDateTime = new Date();
    const storedDateTime = new Date(storedIitem);
    let DateTimeDiffInMinutes = diff_minutes(storedDateTime, nowDateTime);
    if(DateTimeDiffInMinutes > 10){
        localStorage.removeItem("countMeIn");
        //show box
        if(document.getElementById("NewsLetter").classList.contains("closePopUp destroyPopUp"))
        document.getElementById("NewsLetter").classList.remove("closePopUp destroyPopUp");
    }else{
        //close box
        document.getElementById("NewsLetter").classList.add("destroyPopUp")
    }
}
}


function scrollFunc(){
    let storedIitem = localStorage.getItem("countMeIn")
    const maxHeight = document.body.scrollHeight - window.innerHeight;
    let Percent = (window.pageYOffset * 100) / maxHeight;
    if(parseFloat(Percent) > 33.3333333333){
        if(!storedIitem){
            document.getElementById("NewsLetter").classList.remove("destroyPopUp")
            setTimeout(() => {
             document.getElementById("NewsLetter").classList.add("newsletterPanelAnimate")   
            }, 100);
           
        }
    }
}

function countMeIn(){
    let storedIitem = localStorage.getItem("countMeIn")
    if(!storedIitem){
        const currentDateTime = new Date();
        localStorage.setItem("countMeIn", currentDateTime);
        //close box
        document.getElementById("NewsLetter").classList.remove("newsletterPanelAnimate") 
        document.getElementById("NewsLetter").classList.add("closePopUp")
        setTimeout(() => {
        document.getElementById("NewsLetter").classList.add("destroyPopUp")
    }, 1000);
    }
}

function diff_minutes(dt2, dt1) 
 {
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
 }

 function AgreementButton(){
    const element = document.getElementById("AgreementId");
    setTimeout(() => {
        element.classList.add("NotificationClose")
    }, 700);
 }