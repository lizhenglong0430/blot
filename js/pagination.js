class Pagination {
    constructor (ele,options={}){
        this.ele = document.querySelector(ele)

        // 1.设置一套默认值出来
        this.default = {
            current:options.current || 1, // 当前是第几页
            total:options.total || 90, // 一共多少条数据
            totalpage:9, // 多少页
            pagesize:options.pagesize || 10, // 一页上多少条数据
            first:options.first || 'first', // 默认首页文本 
            prev:options.prev || 'prev', // 默认上一页文本
            next:options.next || 'next', // 默认下一页文本
            last:options.last || 'last', // 默认尾页文本
            go:options.go || 'go', // 默认跳转按钮文本
            change:options.change || (()=>{}), // 每次改变的时候出发的函数
            // styles:{}, // 用户设置的独立样式
        }
        // 单独提取一套按钮样式
        this.btnCss = {
            float: "left",
            padding: "0 14px",
            margin: "0 5px",
            lineHeight: "38px",
            textDecoration: "none",
            backgroundColor: "rgba(255,255,255,0.6)",
            color: "#0181da",
            boxSizing: "border-box",
            cursor: "url(image/link.cur),auto"
        }
        this.btnCss2 = {
            float: "right",
            padding: "0 14px",
            margin: "0 5px",
            lineHeight: "38px",
            textDecoration: "none",
            backgroundColor: "rgba(255,255,255,0.6)",
            color: "#0181da",
            boxSizing: "border-box",
            cursor: "url(image/link.cur),auto"
        }

        this.init()
    }

    init () {
        // 计算总页数
        this.default.totalpage = Math.ceil(this.default.total / this.default.pagesize)
        this.renderHtml()
        this.setBoxStyle()
        this.bindEvent()
    }
    // 2.渲染 DOM 结构
    renderHtml (){
        const {first,prev,next,last,current,totalpage,total} = this.default
      
        // 因为要渲染很多的结构进去
        // 准备一个“筐”
        const frg = document.createDocumentFragment()

        // 1.创建一个首页标签
        frg.appendChild(setCss(creEle('div','first',first),this.btnCss))
        frg.appendChild(setCss(creEle('div','prev',prev),this.btnCss))
        frg.appendChild(setCss(creEle('div','next',next),this.btnCss))
        frg.appendChild(setCss(creEle('div','last',last),this.btnCss))
        frg.appendChild(setCss(creEle('div','num',`共${total}条`),this.btnCss2))
        frg.appendChild(setCss(creEle('div','list',`第${current}-${totalpage}页`),this.btnCss2))
        
        // 最后一次性放到 this.ele
        this.ele.innerHTML = ''
        this.ele.appendChild(frg)

        // 调用用户传递进来的函数
        this.default.change(current)
    }
    // 3.设置大盒子样式 
    setBoxStyle () {
        setCss(this.ele,{
            width:"800px",
            height:"50px",
            padding:"10px 30px 0",
            position:"absolute"
        })
    }
    // 4.绑定事件 - 事件委托
    bindEvent () {
        this.ele.addEventListener('click',e => {
            e = e || window.event
            const target = e.target || e.srcElement
            // 解构赋值
            const {current,totalpage} = this.default

            // 判断下一页，并且是在最后一页
            if (target.className === 'next' && current < totalpage) {
                this.default.current++
                this.renderHtml()
            }
            // 判断上一页，并且是在第一页之后
            if(target.className === 'prev' && current > 1){
                this.default.current--
                this.renderHtml()
            }
            // 判断最后一页，并且在最后一页之前
            if(target.className === 'last' && current < totalpage){
                this.default.current = totalpage
                this.renderHtml()
            }
            // 判断是第一页，并且是在第一页之后
            if(target.className === 'first' && current > 1){
                this.default.current = 1
                this.renderHtml()
            }
        })
    }
}

// 额外的两个方法

// 创建 DOM 结构
// 社么标签？
// 社么类名？
// 社么文本内容？
function creEle(nodeName,className,text) {
    const ele = document.createElement(nodeName)
    ele.className = className
    // 最好使用innerHTML
    ele.innerHTML = text

    return ele
}

// 添加 css 样式
// 给谁添加？
// 添加设么样式
function setCss(ele,styles) {
    for(let key in styles) {
        ele.style[key] = styles[key]
    }
    // 上面的for 循环，是在ele 添加样式
    // ele 就是要添加样式的元素
    return ele
}