$(function () {
    /*请求页码*/
    $.ajax({
        type: "get",
        url: "/git/dome/xm/lby/getcx.php",
        dataType: "json",
        success: function (response) {
            if (response.status == "error") {
                alert("网络繁忙，请检查网络连接");
            } else {
                console.log("count", response.data.count);
                //创建3个标签显示在页面中
                $("#page").empty();
                for (var i = 0; i < response.data.count; i++) {
                    $("#page").append(`<a href="javascript:;">${i + 1}</a>`);
                }
                $("#page").children("a:first").addClass("active");
            }
        }
    });
    let getList = (page, type) => {
        $.ajax({
            type: "post",
            url: "/git/dome/xm/lby/server.php",
            data: `page=${page}&type=${type}`,
            dataType: "json",
            success: function (response) {
                var res = response.map(ele => {
                    console.log(ele.sale_price);
                    return `<li class="item">
                    <div class="goods-content">
                        <div class="goods-pic">
                            <a href="">
                                <img src=${ele.src} alt="">
                            </a>
                        </div>
                        <div class="goods-info">
                            <div class="goods-pic-scroll-show"></div>
                            <div class="goods-name">
                                <a href="">${ele.title}</a>
                            </div>
                            <div class="goods-price">
                                <em class="sale-price">￥${ele.sale_price}</em>
                                <em class="market-price">￥${ele.market_price}</em>
                                <span class="raty">
                                    <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="">
                                    <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="">
                                    <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="">
                                    <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="">
                                    <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="">
                                </span>
                            </div>
                            <div class="goods-sub">
                                <span class="goods-compare">
                                    <i></i>加入对比
                                </span>
                            </div>
                            <div class="sell-stat">
                                <ul>
                                    <li>
                                        <a href="">1</a>
                                        <p>商品销量</p>
                                    </li>
                                    <li>
                                        <a href="">0</a>
                                        <p>用户评论</p>
                                    </li>
                                    <li>
                                        <em>&nbsp;</em>
                                    </li>
                                </ul>
                            </div>
                            <div class="store">
                                <a href="">${ele.names}</a>
                            </div>
                            <div class="add-cart">
                                <a href="">
                                    <i></i>加入购物车</a>
                            </div>
                        </div>
                    </div>
                </li>`
                }).join("");
                $(".list_pic").html(res);
            }
        })
    }
    var orderType = ["default", "price"];
    var type = "default";
    getList(0, type);

    $("#page").on("click", "a", function () {
        // console.log($(this).index());
        /* 设置当前标签的选中状态 */
        getList($(this).index(), type);
        $("#page").children("a").eq($(this).index()).addClass("active").siblings().removeClass("active");
    })

    /* 点击排序 */
    $("#main-nav-holder li").click(function () {
        type = orderType[$(this).index()];
        /* 设置当前标签的选中状态 */
        getList(0, type);
        $("#page").children("a").eq(0).addClass("active").siblings().removeClass("active");
    })
})