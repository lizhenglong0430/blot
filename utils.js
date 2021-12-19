/**
 * @param {ELEMENT} ele 
 * @param {STRING} style    
 * @return {STRING}
 */

function getStyle(ele,style){
    if('getComputedStyle' in window){
        return window.getComputedStyle(ele)[style]
    }else{
        return ele.currentStyle[style]
    }
}


/** 简单版多属性运动函数
 * @param {ELEMENT} ele 要云顶的元素
 * @param {OBJECT} style  要运动的属性（对象）  
 * @return {FUNCTION} fn 运动结束的回调函数
 */

 function move(ele, target, fn = () => { }) {
    // 准备一个计数器
    let count = 0
    for (let key in target) {
        // 开启定时器之前，就做好判断
        if (key === 'opacity') target[key] *= 100
        // 没开启一个定时器计数器++
        count++
        let timer = setInterval(() => {
            let current = key === 'opacity' ? getStyle(ele, 'opacity') * 100 : parseInt(getStyle(ele, key))
            let distance = (target[key] - current) / 10
            distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance)

            // 判断是否达到目标位置
            if (current === target[key]) {
                clearInterval(timer)
                // 没结束一个属性，关闭一个定时器，计数器--
                count--
                // 当 count === 0 的时候，表示所有的属性都运动结束了
                if (!count) {
                    // 把你传进来的函数执行一下
                    fn()
                }
            } else {
                // 赋值的时候，分开赋值，有的需要加px，有的需要缩小100倍
                ele.style[key] = key === 'opacity' ? (current + distance) / 100 : current + distance + 'px'
            }
        }, 30)
    }
}


/**
 * creXhr 创建 ajax 对象
 * @return {OBJECT} 当前浏览器使用的 ajax 对象
*/

function creXhr(){
    console.log('我执行了');
    var xhr = null
    var flag = false
    var arr =[
        function (){return new XMLHttpRequest()},
        function (){return new ActiveXObject('Microsoft.XMLHTTP')},
        function (){return new ActiveXObject('Msxml.XMLHTTP')},
        function (){return new ActiveXObject('Msxml2.XMLHTTP')}
    ]
    for (let i =0;i < arr.length; i++){
        try{
            xhr = arr[i]()
            creXhr = arr[i]
            flag = true
            break
        } catch (e) {}
    }
    if(!flag){
        xhr = '您的浏览器不支持 ajax，请更换浏览器重试'
        throw new Error(xhr)
    }
    return xhr
}


/** creXhr 创建 ajax 对象
 * @return {OBJECT} 当前浏览器使用的 ajax 对象
*/
function ajax(options = {}){
    if(!options.url){
        throw new Error('url 为必填选项')
    }
    if (!(options.type === undefined || options.type.toUpperCase() === 'GET' || options.type.toUpperCase() === 'POST')){
        throw new Error('目前只接受 GET 或者 POST 请求方式，请期待更新')
    }
    if(!(options.async == undefined || typeof options.async === 'boolean')){
        throw new Error('async 需要一个 Boolean 数据类型')
    }
    if(!(options.dataType == undefined || options.dataType === 'string' || options.dataType === 'json')){
        throw new Error('目前只支持 string 和 json 格式解析，请期待更新')
    }
    if(!(options.data === undefined || typeof options.data === 'string' || Object.prototype.toString.call(options.data) === '[object Object]')){
        throw new Error('data只支持 string 和 object，请期待更新')
    }
    if(!(options.success === undefined || typeof options.success === 'function')){
        throw new Error('success 传递一个函数类型')
    }
    if(!(options.error === undefined || typeof options.error === 'function')){
        throw new Error('error 传递一个函数类型')
    }
    var _default = {
        url:options.url,
        type:options.type || 'GET',
        async:typeof options.async === 'boolean' ? options.async : true,
        dataType:options.dataType || 'string',
        data: options.data || '',
        success:options.success || function (){},
        error:options.error || function (){},
    }
    if(typeof _default.data === 'object'){
        var str = ''
        for(var key in _default.data){
            str += key + '=' + _default.data[key] + '&'
        }
        _default.data = str.slice(0,-1)
    }
    var xhr = creXhr()
    if(_default.type.toUpperCase() === 'GET' && _default.data){
        _default.url += '?' + _default.data
    }
    console.log(_default);
    xhr.open(_default.type,_default.url,_default.async)
    xhr.onreadystatechange = function(){
        if(xhr.status >= 200 && xhr.status < 300 && xhr.readyState === 4){
            // 3-3,如果datatype是json
            if(_default.dataType === 'json'){
                _default.success(JSON.parse(xhr.responseText));
            }else if (_default.dataType === 'string'){
                _default.success(xhr.responseText);
            }
        }
    }
    if (xhr.readyState === 4 && xhr.status >= 400){
        _default.error(xhr.status)
    }

    if(_default.type.toUpperCase() === 'POST'){
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
    }
    xhr.send(_default.data)
}



