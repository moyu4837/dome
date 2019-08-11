var Getmain = function () {
    let gid = (location.search).split("?")[1].split("=")[1]
    $.ajax({
        url: "http://127.0.0.1/git/dome/xm/xqy/getxqy.php",
        data: `gid=${gid}`,
        dataType: "json",
        success(ele) {
            let self = ele.data[0]
            $(".name>h2").html(self.title);
            $(".cost-price strong").html(`￥${self.market_price}`);
            $(".price strong").html(`￥${self.sale_price}`);
            $(".clearfix img")[0].src = self.src;
            $(".small-img").html(`<img src="${self.src}">`)
            $(".rem_txt").html(self.transaction);
        }
    })
}
Getmain()
