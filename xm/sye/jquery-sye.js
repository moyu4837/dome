window.onload = function () {
    class SyeManager {
        constructor(data) {
            this.title = data.title;
            this.activeClass = data.activeClass;
            this.dataList = data.dataList;
            this.uls = null;
            this.currentIndex = 0;
        }
        createHTML() {
            var oconcent = $(`<div class="box">${this.createconcentHTML() + this.createfooterHTML()}</div>`);
            $("body").append(oconcent);
            this.uls = oconcent.find(".concent")
        }
        createconcentHTML() {
            let res = "";
            this.dataList.forEach((element, index) => {
                let lisStr = element.map((ele) => {
                    let html = ` <li>
                <span class="istoday">今日</span>
                <img src="${ele.src}" alt="">
                <div class="name">${ele.active_type}</div>
                <span class="price-final">${ele.original_price}</span>
                <a class="buy-icon" href="">去下单</a>
            </li>`
                    return html;
                }).join("");
                let ulStr = `<div class="concent"><div class="ns_tab">
            <div class="bn_fl">
                <ul>${this.title[index]}</ul>
            </div>
            <div class="bn_fr">每天10点上新</div>
        </div>
        <ul class=" clearfix">${this.activeClass[index]}
        </ul>
        <ul class="list">
            ${lisStr}
        </ul></div>`;
                res += ulStr;
            });
            return res;
        }
        createfooterHTML() {
            let html = ` <div class="nsgfoot-bz"><div class="w-1200"><img src="https://www.nanshig.com/shop/templates/default/images/nsgfoot_bz.png" alt=""></div></div>
            <div class="nsgfoot-bottom"><div class="bottom-box"><div class="bottom-box-left"><div class="bottom-app-code"></div><p>男士购客服</p>
            <p>添加微信号</p></div><ul class="box-center">
            <li><h3>新手指南</h3><a href="">找回密码</a><a href="">注册账号</a><a href="">交易条款</a></li>
            <li><h3>支付配送</h3><a href="">网上支付</a><a href=""> 配送运费</a><a href="">配送方式</a></li>
            <li><h3>售后服务</h3><a href="">售后政策</a><a href="">售后流程</a><a href="">售后申请</a></li>                  
            <li><h3>关于我们</h3><a href="">公司介绍</a><a href="">隐私声明</a><a href="">招贤纳士</a></li>        
        </ul><div class="contact-us"><h3>联系我们</h3><p>客服微信：gebuzaishuai</p><p>工作日：9:00-20:00</p><div class="gb-okhqb-yj">意见反馈</div></div><div class="attention-us"><h3>关注我们</h3><div class="weiXin"></div><div class="weiBo"></div></div>
        </div></div><div class="nsgfoot-rz"><p class="nsgfoot-link"><a href="">友情链接：</a>
        <a href=""> 男士平台</a>
        <a href="">男士购APP</a>
        <a href="">男士穿搭</a>
        <a href="">男士购APP升级</a>
        <a href="">男士购APP2.6版</a>
        <a href="">男士购使用教程</a>
        <a href="">男士购物平台</a>
        <a href="">潮男服装搭配</a></p><p class="nsgfoot-copy">Copyright © 2010-2018 男士购 版权所有 <a href="">桂ICP备15008077号-1  </a>
        <a href="">站长统计</a></p></div>`
            return html;
        }
        init() {

            this.createHTML();
        }
    }
    $.getJSON("./sye.json", (json) => (new SyeManager(json)).init())
}
