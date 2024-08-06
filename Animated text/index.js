const BodyHun=document.getElementById("animated-text");
const text=["I am web Dev" , "I am Freelancer", "I am Tutor", "I am Youtuber" ];
let index=0;
function textChange(){
    BodyHun.textContent=text[index];
    index++;
    if(index >= text.length){
        index=0;
    }
    setTimeout(textChange,1000);
}
textChange();
