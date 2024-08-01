const bodyElement= document.querySelector("body");

bodyElement.addEventListener("mousemove",(event)=>{
        const xPos=event.offsetX;
        const yPos=event.offsetY;
        const spanEl=document.createElement("span");
        spanEl.style.left=xPos + "px";
        spanEl.style.top=yPos + "px";

        const size=Math.random()*100;
        spanEl.style.width=size +"px";
        spanEl.style.height= size+"px";

        bodyElement.appendChild(spanEl);

        setTimeout(() => {
                spanEl.remove();
            }, 700);

});


