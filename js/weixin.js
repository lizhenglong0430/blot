let side_fx = document.querySelector(".side-fx")
let share_weixin = document.querySelector("#share_weixin")
let mysection = document.querySelector("#mysection")
let cyReward = document.querySelector(".fx-btn")
let body = document.querySelector("body")
side_fx.addEventListener("click",()=>{
    share_weixin.style.display = "block"
    share_weixin.style.width = 240 + "px"
    share_weixin.style.height = 325 + "px"
    if(body.clientWidth > 1023){
        share_weixin.style.top = side_fx.offsetTop + "px"
    }else{
        share_weixin.style.top = side_fx.offsetTop + mysection.clientHeight + "px"
    }
    share_weixin.style.left = "50%"
    share_weixin.style.transform = "translateX(-50%)"
})
document.querySelector(".weixin_close").addEventListener("click",()=>{
    document.querySelector("#share_weixin").style.display = "none"
})
cyReward.addEventListener("click",()=>{
    console.log("nihao");
    share_weixin.style.display = "block"
    share_weixin.style.width = 240 + "px"
    share_weixin.style.height = 325 + "px"
    if(body.clientWidth > 1023){
        share_weixin.style.top = side_fx.offsetTop + mysection.clientHeight - 400 + "px"
    }else{
        share_weixin.style.top = (side_fx.offsetTop + mysection.clientHeight - 400)  + "px"
    }
    share_weixin.style.left = "50%"
    share_weixin.style.transform = "translateX(-50%)"
})