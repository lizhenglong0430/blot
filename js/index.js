class BoltHeader{
    constructor(){
        this.xiaoxiBoxli = document.querySelectorAll(".multiline > li")[0]
        this.drop_nav_father = document.querySelector(".drop_nav_father")
        this.drop_nav = document.querySelector(".drop_nav")
        this.drop_nav_i = document.querySelector(".drop_nav_father > i")
        this.drop_nav_children = document.querySelectorAll(".drop_nav > ul")
        this.xiangguan_div_a = document.querySelectorAll(".xiangguan > div > a")
        this.xiangguan_div_a_i = document.querySelectorAll(".xiangguan > div > a >i")
        this.arclist_ul_li = document.querySelectorAll(".arclist > ul > li")
        this.arcimg_img = document.querySelectorAll(".arcimg > img")
        this.init()
        this.index = 0
        this.timer = null
        this.timer2 = null
    }
    init(){
        this.autoPlay()
        this.zhuanzhuwo()
    }
    zhuanzhuwo(){
        for(let i = 0;i < this.arclist_ul_li.length;i++){
            this.arclist_ul_li[i].addEventListener("mouseover",e=>{
                this.arcimg_img[i].style.transform = "scale(1.3)"
            })
            this.arclist_ul_li[i].addEventListener("mouseout",e=>{
                this.arcimg_img[i].style.transform = "scale(1)"
            })
        }
        for(let i = 0;i < this.xiangguan_div_a.length;i++){
            this.xiangguan_div_a[i].addEventListener("mouseover",e=>{
                this.xiangguan_div_a[i].style.width = 60 + "px"
                this.xiangguan_div_a[i].style.height = 60 + "px"
                this.xiangguan_div_a[i].style.marginTop = -5 +"px"
                this.xiangguan_div_a_i[i].style.fontSize = 35 + "px"
                this.xiangguan_div_a_i[i].style.lineHeight = 60 + "px"
                this.xiangguan_div_a[i].style.animationName = "zhuan"
                this.xiangguan_div_a[i].style.animationDuration = "1s"

            })
            this.xiangguan_div_a[i].addEventListener("mouseout",e=>{
                this.xiangguan_div_a[i].style.width = 50 + "px"
                this.xiangguan_div_a[i].style.height = 50 + "px"
                this.xiangguan_div_a[i].style.marginTop = 0
                this.xiangguan_div_a_i[i].style.fontSize = 20 + "px"
                this.xiangguan_div_a_i[i].style.lineHeight = 50 + "px"
                this.xiangguan_div_a[i].style.animationName = "zhuan1"
                this.xiangguan_div_a[i].style.animationDuration = "1s"
            })
        }
    }
    autoPlay(){
        setInterval(() => {
            if(this.index === 2){
                this.index = 0
                this.xiaoxiBoxli.style.marginTop = -25*this.index + "px"

            }else{
                this.index += 1
                this.xiaoxiBoxli.style.marginTop = -25*this.index + "px"
            }
        }, 3000);
        
        this.drop_nav_father.addEventListener("mouseover",e => {
            this.drop_nav_i.classList.remove("icon-xiangxia")
            this.drop_nav_i.classList.add("icon-xiangshang1")
            this.drop_nav_i.style.color = "#fff"
            this.drop_nav.style.display = "block"
            this.drop_nav.style.animation = "zuo1 0.8s ease 0s 1 normal none running"
        })
        this.drop_nav_father.addEventListener("mouseout",e => {
            this.drop_nav_i.classList.add("icon-xiangxia")
            this.drop_nav_i.classList.remove("icon-xiangshang1")
            this.drop_nav_i.style.color = "orange"
            this.drop_nav.style.animation = "zuo2 0.8s ease 0s 1 normal none running"
            this.timer2 = setTimeout(() => {
                this.drop_nav.style.display = "none"
            }, 1000);
        })
    }
}
new BoltHeader()
