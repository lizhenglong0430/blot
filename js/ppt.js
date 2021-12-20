class Banner{
    constructor(){
        this.imgBox = document.querySelector('.banner > ul')
        this.pointBox = document.querySelector('.banner > ol')
        this.banner = document.querySelector('.banner')
        this.mysection = document.querySelector('.mysection')
        this.banner_li = document.getElementsByClassName('banner_li')
        this.banner_width = this.banner.clientWidth
        this.index = 1
        this.timer = 0
        this.flag = true
        this.init()
    }
    init(){
        this.copyEle()
        // this.autoPlay()
        this.overOut()
        this.bindEvent()
        this.changeTab()
        this.addStyle()
    }
    addStyle(){
        for(let i = 0;i < this.banner_li.length;i++){
            this.banner_li[i].style.width = this.mysection.clientWidth + "px"
        }
    }
    copyEle(){
        let first  = this.imgBox.firstElementChild.cloneNode(true)
        let last = this.imgBox.lastElementChild.cloneNode(true)

        this.imgBox.appendChild(first)
        this.imgBox.insertBefore(last , this.imgBox.firstChild)
        this.imgBox.style.width = this.imgBox.children.length * 100 + '%'
        this.imgBox.style.left = -this.banner_width + 'px'
    }
    autoPlay(){
        this.timer = setInterval(()=>{
            this.index++
            this.move(this.imgBox,{left:-this.index*this.banner_width},this.moveEnd())
        },3000)
    }
    move(ele,target,fn=()=>{}){
        let timer_count = setInterval(()=>{
            let count = 0
            for(let key in target){
                count ++
                if (key === 'opacity') target[key] * 100
                let current = key === 'opacity' ? getStyle(ele,'opacity') * 100 : parseInt(getStyle(ele,key))
                let distance = (target[key] - current) /10
                distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance)
                if(current === target[key]){
                    count --
                    if(!count){
                        fn()
                    }
                    clearInterval(timer_count)
                }else{
                    ele.style[key] = key === 'opacity' ? (current+distance) / 100 : current + distance + 'px'
                }
            }
        },10) 
    }
    moveEnd(){
        if(this.index === this.imgBox.children.length - 1){
            this.index = 1
            this.imgBox.style.left = -this.index*this.banner_width + 'px'
        }
        if(this.index === 0){
            this.index = this.imgBox.children.length - 2
            this.imgBox.style.left = -this.index*this.banner_width + 'px'
        }
        this.flag = true
    }
    
    overOut(){
        this.banner.addEventListener('mouseover', ()=>clearInterval(this.timer))
        this.banner.addEventListener('mouseout',()=>this.autoPlay())
    }
    bindEvent(){
        this.banner.addEventListener('click',e => {
            e = e || window.event
            const target = e.target || e.srcElement
            if(target.className === 'right'){
                if(!this.flag) return
                this.flag = false
                this.index ++
                this.move(this.imgBox,{left:-this.index*this.banner_width},this.moveEnd())
            }
            if(target.className === 'left'){
                if(!this.flag) return
                this.flag = false
                this.index --
                this.move(this.imgBox,{left:-this.index*this.banner_width},this.moveEnd())
            }
        }) 
    }
    changeTab(){
        document.addEventListener('visibilitychange',()=>{
            if(document.visibilityState === 'hidden'){
                clearInterval(this.timer)
            }else if(document.visibilityState === 'visible'){
                this.autoPlay()
            }
        })
    }
}
new Banner()