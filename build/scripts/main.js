document.getElementById("animate_confetti").addEventListener("click",()=>{var t={particleCount:500,spread:90,startVelocity:70,origin:{x:0,y:.5},angle:45};confetti(t),t.origin.x=1,t.angle=135,confetti(t)});