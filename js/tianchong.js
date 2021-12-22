document.querySelector(".blot_header").innerHTML = `
    <div class="blot_top">
                <div class="blot_left">
                    <div class="logo">
                        <img src="./image/h.gif" alt="">
                    </div>
                    <div class="web-xiaoxi">
                        <i class="iconfont icon-sound-max-full"></i>
                        <ul class="multiline">
                            <li>喜欢的话可以再GitHub上点个关注哦</li>
                            <li>政函数 - 博客</li>
                            <li>现在已经开放源码</li>
                        </ul>
                    </div>
                    <div class="mobile-nav">
                        <i class="iconfont icon-fenlei"></i>
                    </div>
                </div>
                <div class="mynav">
                    <ul>
                        <li><a href="./index.html">首页</a></li>
                        <li><a href="./list.html">博客</a></li>
                        <li class="drop_nav_father">分类 
                            <i class="iconfont icon-xiangxia"></i>
                            <div class="drop_nav" >
                                <ul>
                                    <li>
                                        <a href="./bigdata.html">大数据</a>
                                    </li>
                                    <li>
                                        <a href="./message.html">留言</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="./guidang.html">归档</a></li>
                        <li><a href="https://music.coor.top/">音乐</a></li>
                    </ul>
                </div>
                <div class="mob-menu">
                    <ul>
                        <li>
                            <a href="./index.html">首页</a>
                        </li>
                        <li>
                            <a href="./list.html">博客</a>
                        </li>
                        <li class="mob-drop">
                            <div>分类</div>
                            <ul class="mob-dropmenu" >
                                <li>
                                    <a href="./bigdata.html">大数据</a>
                                </li>
                                <li>
                                    <a href="./message.html">留言</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="./guidang.html">归档</a>
                        </li>
                        <li><a href="https://music.coor.top/">音乐</a></li>
                    </ul>
                </div>
            </div>
    `
document.querySelector(".myaside").innerHTML = `
    <!-- 关注我 -->
    <div id="share_weixin" style="display: none;">
        <div class="weixin_head">
            <span>分享到微信盆友圈</span>
            <a href="#" class="weixin_close">×</a>
        </div>
        <div class="weixin_main">
            <img src="./image/icon/qrcode.png" alt="">
        </div>
        <div class="weixin_foot">
            打开微信，点击底部的“发现”，
            <br>
            使用“扫一扫”即可将网页分享至朋友圈。
        </div>
    </div>
    <div class="focus-me bg-color animation-div" style="animation-name: fuxiasuo; animation-duration: 1s;">
        <h4 class="index_title"><i class="iconfont icon-xiai"></i>关注我
            <small>Follow</small>
        </h4>
        <div class="xiangguan">
            <div><a class="github" href="https://github.com/lizhenglong0430/blot.git" target="_blank">
                <i class="iconfont icon-github"></i></a><span>Github</span></div>
            <div><a class="benbo" href="https://github.com/lizhenglong0430/blot.git" target="_blank">
                <i class="iconfont icon-xiazai"></i></a><span>博客源码</span></div>
            <div><a class="side-fx"><i class="iconfont icon-fenxiang"></i></a><span>分享本博</span></div>
            <div><a class="mail-btn" href=""><i class="iconfont icon-xinxi"></i></a><span>订阅我</span></div>
        </div>
    </div>
     <!--最新咨询-->
    <div class="clos-new bg-color animation-div" style="animation-name: fuxiasuo; animation-duration: 1.14286s;">
        <h4 class="index_title"><i class="iconfont icon-dengpao"></i>最新资讯
            <small>News</small>
        </h4>
        <ul>
            <li><i class="iconfont icon-tianqi"></i>
                <iframe id="tianqi" scrolling="no" frameborder="0" allowtransparency="true"
                        src="https://i.tianqi.com/?c=code&a=getcode&id=34&h=25&w=280"></iframe>
            </li>

            <li><i class="iconfont icon-rili"></i>历史今天：<div id="today">2020,10,10</div>
                <iframe src="http://code.lssdjt.com/6.html?w=400&h=20&bky=dotted&bks=0&fs=14&fc=#565656&hg=20&ie=0&xhx=none&sd=1000&px=3&len=0&sk=1&n=0"
                        width="300" height="16" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
            </li>
        </ul>
    </div>
    <!--搜索-->
    <div class="search animation-div" style="animation-name: fuxiasuo; animation-duration: 1.28571s;">
        <form action="" method="get">
            <div class="search-index">
                <input name="key" type="text" placeholder="请输入关键字" onfocus="this.placeholder=''"
                    onblur=""/>
                <i class="iconfont icon-sousuo"><input value=" " type="submit"/></i>
            </div>
        </form>
    </div>
    <!--文章排行tab-->
    <div class="mytab bg-color animation-div" style="animation-name: fuxiasuo; animation-duration: 1.42857s;">
        <div class="tab-btn">
            <a class="hd-btn tab-active" href="javascript:;"><i class="iconfont icon-pinglun"></i>最新评论</a>
            <a class="ph-btn" href="javascript:;"><i class="iconfont icon-paihangbang"></i>文章排行</a>
        </div>
        <ul class="hudong-ul">
            <li>
                <div class="sd-name">
                    <span>
                        <i class="iconfont icon-bookmark"></i>
                        留言板 - 政函数
                    </span>
                    <a href="" class="blue-text" title="好滴">好滴</a>
                    <span style="text-align: right;">
                        - &nbsp;
                        <i class="iconfont icon-gerenxinxi"></i>
                    </span>
                </div>
            </li>
        </ul>
        <!--文章排行-->
        <ul class="paihang-ul" style="display: none;">
            <li>
                <span></span>
                <a href="./articles.html" title="Flume HDFS Sink写数据到S3">Flume HDFS Sink写数据到S3
                    <b><i class="iconfont icon-liulan"></i>(5)</b>
                </a>
            </li>
        </ul>
    </div>
    <!--标签-->
    <div class="cloud bg-color animation-div" style="animation-name: fuxiasuo; animation-duration: 1.57143s;">
        <h4 class="index_title"><i class="iconfont icon-bianqian"></i>标签
            <small>Tags</small>
        </h4>
        <ul id="3dcloud">
            
                <li><a href=""
                    title="标签：vue ">大数据</a></li>
            
        </ul>
    </div>
     <!--友情链接-->
    <div class="side-link animation-div" style="animation-name: fuxiasuo; animation-duration: 1.71429s;">
        <h4 class="index_title"><i class="iconfont icon-lianjie"></i>友情链接
            <small>Links</small>
            <a href="mailto:j_hao104@163.com?subject=博客友链互换&body=博客名称:<br> 博客描述:<br>博客地址:">
                <i class="iconfont icon-jia"></i>
                申请
            </a>
        </h4>
        <ul>
            <li><a href="https://www.zaoshu.io/" target="_blank" title="智能云爬虫">造数</a></li>
            <li><a href="http://brucedone.com/" target="_blank" title="大鱼的鱼塘 - 一个总会有收获的地方">大鱼的鱼塘</a></li>
            <li><a href="http://www.songluyi.com/" target="_blank" title="灯塔水母">灯塔水母</a></li>
            <li><a href="http://blog.topspeedsnail.com/" target="_blank" title="本博客专注于技术，Linux，编程，Python，C，Ubuntu、开源软件、Github等">斗大的熊猫</a></li>
            <li><a href="https://www.urlteam.org/" target="_blank" title="URL-team">URL-team</a></li>
        </ul>
    </div>
    `
document.querySelector("footer").innerHTML = `
    <div class="foot-nav">
        <div class="copy-right"><span>CopyRight © 2001-2021 lizhenglong's博客 &nbsp;&nbsp;&nbsp;     Design by lizhenglong</span></div>
        本客栈以安全运行<div id="showtime2"></div>
        <div class="license bottom-nav">
            <a href="http://www.miitbeian.gov.cn">@2020 spiderpy.cn 	江苏备17012574号-1</a>
        </div>
    </div>
    <div id="toTop" style="display: none;"></div>
    `