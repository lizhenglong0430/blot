class Mobile{
    constructor(){

        this.mobile_nav = document.querySelector(".mobile-nav")
        this.mob_dropmenu = document.querySelector(".mob-dropmenu")
        this.mob_drop = document.querySelector(".mob-drop")
        this.mob_menu = document.querySelector(".mob-menu")
        this.tab_btn = document.querySelectorAll(".tab-btn > a")
        this.tab_btn_i = document.querySelectorAll(".tab-btn > a > i")
        this.init()
    }
    init(){
        this.mobile_header()
        this.qiehuan()
    }
    mobile_header(){
        if(this.mobile_nav){
            this.mob_menu.style.display = "none"
            this.mob_dropmenu.style.display = "none"
            this.mob_menu.style.animation = "0.8s ease 0s 1 normal none running zuo3"
            this.mobile_nav.addEventListener("click",()=>{
                if(this.mob_menu.style.display === "block"){
                    this.mob_menu.style.animation = "zuo3 0.8s ease 0s 1 normal none running"
                    this.mob_menu.style.display = "none"
        
                }else if(this.mob_menu.style.display === "none"){
                    this.mob_menu.style.display = "block"
                    this.mob_menu.style.animation = "zuo 0.8s ease 0s 1 normal none running"
                }
            })
            this.mob_drop.addEventListener("click",()=>{
                if(this.mob_dropmenu.style.display === "none"){
                    this.mob_dropmenu.style.display = "block"
                }else if(this.mob_dropmenu.style.display === "block"){
                    this.mob_dropmenu.style.display = "none"
                }
            })
        }else{
            console.log("nihao");
        }
    }
    qiehuan(){
        for(let i = 0; i < this.tab_btn.length;i++){
            this.tab_btn_i[i].addEventListener("click",(e)=>{
                e.stopPropagation();  
                e.preventDefault()
            })
            this.tab_btn[i].addEventListener("click",(e)=>{
                e.stopPropagation()
                this.tab_btn[0].classList.remove("tab-active")
                this.tab_btn[1].classList.remove("tab-active")
                e.target.classList.add("tab-active")
                if(e.target === this.tab_btn[0]){
                    document.querySelector(".hudong-ul").style.display = "block"
                    document.querySelector(".paihang-ul").style.display = "none"
                }else if(e.target === this.tab_btn[1]){
                    document.querySelector(".hudong-ul").style.display = "none"
                    document.querySelector(".paihang-ul").style.display = "block"
                }
            })
        }
    }
}
new Mobile()