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
        this.totop = document.querySelector("#toTop")
        this.banner_ul = document.querySelector(".banner")
        this.init()
        this.index = 0
        this.timer = null
        this.timer2 = null
        this.dateArr = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    }
    init(){
        this.autoPlay()
        this.zhuanzhuwo()
        this.oneday()
    }
    oneday(){
        setInterval(()=>{
            this.date2 = new Date();
            this.date3 = new Date(2021,11,19,10,10,10)
            this.day2 = this.date2.getDate();
            this.month2 = this.date2.getMonth(); //getMonth()是从0开始
            this.year2 = this.date2.getFullYear();
    
            this.day3 = this.date3.getDate();
            this.month3 = this.date3.getMonth(); //getMonth()是从0开始
            this.year3 = this.date3.getFullYear();
    
            this.hours2 = this.date2.getHours() + 1
            this.minutes2 = this.date2.getMinutes()
            this.seconds2 = this.date2.getSeconds()
            this.result = 0; // 目标年
            this.result2 = 0; // 初始年
            this.result3 = 0; // 总共
            for (var i = 0; i < this.month2; i++) {
                this.result += this.dateArr[i];
            }
            this.result += this.day2;
            //判断是否闰年 目标年
            if (this.month2 > 1 && (this.year2 % 4 == 0 && this.year2 % 100 != 0) || this.year2 % 400 == 0) {
                this.result += 1;
            }
            // console.log(result);
    
            for (var j = 0;j < this.month3; j++){
                this.result2 += this.dateArr[j]
            }
            this.result2 += this.day3
            // 判断是否闰年 初始年
            if (this.month3 > 1 && (this.year3 % 4 == 0 && this.year3 % 100 != 0) || this.year3 % 400 == 0) {
                this.result2 += 1;
            }
            for(var n = this.year3;n < this.year2;n++){
    
                if ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0) {
                    this.result3 += 1;
                }
                this.result3 += 365
            }
            this.result3 = this.result3 + this.result - this.result2
            document.getElementById("showtime2").innerHTML = this.result3 + "天" + this.hours2 + '时' + this.minutes2 + '分' + this.seconds2 + '秒';
            document.getElementById("today").innerHTML = this.date2
        }, 100);
    }
    toTop(){
        let timer = setInterval(()=>{
            let ispeed = Math.floor(document.documentElement.scrollTop / 5)
            document.documentElement.scrollTop -= ispeed;
            if (document.documentElement.scrollTop <=10) {
                document.documentElement.scrollTop === 0;
                clearInterval(timer);
            } else {
                return "difit"
        }
        },16)
    }
    zhuanzhuwo(){
        // 点击右下角图标快速到达顶部
        setInterval(()=>{
            if(this.banner_ul){

                this.banner_ul.style.height = this.banner_ul.clientWidth * 0.6 + "px"
            }else{
                return "nihao"
            }
            if(document.documentElement.scrollTop <= 10){
                this.totop.style.display = "none"
                document.documentElement.scrollTop === 0;
            }else if(document.documentElement.scrollTop > 10){
                this.totop.style.display = "block"
                this.totop.addEventListener("click",()=>{
                    this.toTop()
                })
            }
        },16)
        // 鼠标移动到li上，图片扩大
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
                if(this.xiaoxiBoxli){

                    this.xiaoxiBoxli.style.marginTop = -25*this.index + "px"
                }else{
                    return "shibai"
                }

            }else{
                this.index += 1
                if(this.xiaoxiBoxli){

                    this.xiaoxiBoxli.style.marginTop = -25*this.index + "px"
                }else{
                    return "shibai"
                }
            }
        }, 3000);
        if(this.drop_nav_father){
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
        }else{
            return "shibai"
        }
    }
}
new BoltHeader()
