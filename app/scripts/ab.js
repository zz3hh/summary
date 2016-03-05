! function() {
    var t = "/site/op/report/",
        e = { USER_URL: t + "get_user_report", WXORDER_URL: t + "get_wxorder_report", POSITION_URL: t + "get_positon_report", RONGCLOUD_URL: t + "get_rongcloud_report" },
        o = function(t, e, o, a) { $.ajax({ url: t, type: "GET", data: { start_time: e, end_time: o } }).done(function(t) { a(null, t) }).fail(function() { a("请求服务数据发生错误") }) },
        a = function(t, e) {
            if (t) return console.log(t);
            var o = [];
            e = e.map(function(t) {
                return o.push(t.show_day.substr(5)), t.amount }), r(null, { title: o, position: e }) },
        r = function(t, e) {
            return t ? !1 : ($("#js_statistics-position").highcharts({ title: { text: "企业新增职位", x: -20 }, xAxis: { categories: e.title }, yAxis: { title: { text: "个" }, plotLines: [{ value: 0, width: 1, color: "#808080" }] }, tooltip: { valueSuffix: "个" }, legend: { layout: "vertical", align: "right", verticalAlign: "middle", borderWidth: 0 }, series: [{ name: "新增职位", type: "spline", data: e.position }] }), h(), void 0) },
        i = function(t, e) {
            if (t) return console.log(t);
            var o = [],
                a = e.user,
                r = e.employer;
            a = a.map(function(t) {
                return o.push(t.show_day.substr(5)), t.amount }), r = r.map(function(t) {
                return t.amount }), s(null, { title: o, user_data: a, employer_data: r }) },
        s = function(t, e) {
            return t ? !1 : ($("#js_statistics-user").highcharts({ chart: { zoomType: "xy" }, title: { text: "每日新增用户量" }, colors: ["#ffc107", "#AdCE00"], xAxis: [{ categories: e.title, crosshair: !0 }], yAxis: [{ labels: { format: "{value} 人", style: { color: Highcharts.getOptions().colors[1] } }, title: { text: "个人", style: { color: Highcharts.getOptions().colors[1] } }, opacity: .2 }, { title: { text: "企业", style: { color: Highcharts.getOptions().colors[0] } }, labels: { format: "{value} 人", style: { color: Highcharts.getOptions().colors[0] } }, opposite: !0 }], tooltip: { shared: !0 }, legend: { layout: "vertical", align: "left", x: 120, verticalAlign: "top", y: 100, floating: !0, backgroundColor: Highcharts.theme && Highcharts.theme.legendBackgroundColor || "#FFFFFF" }, series: [{ name: "新增雇主", type: "spline", yAxis: 1, data: e.employer_data, tooltip: { valueSuffix: " 人" } }, { name: "新增牛人", type: "spline", data: e.user_data, tooltip: { valueSuffix: "人" } }] }), h(), void 0) },
        l = function(t, e) {
            if (t) return console.log(t);
            var o = [],
                a = e.user_order,
                r = e.employer_order;
            a = a.map(function(t) {
                return o.push(t.show_day.substr(5)), t.amount }), r = r.map(function(t) {
                return t.amount }), n(null, { title: o, user_data: a, employer_data: r }) },
        n = function(t, e) {
            return t ? !1 : ($("#js_statistics-wxorder").highcharts({ chart: { zoomType: "xy" }, title: { text: "微信订单每日收益" }, colors: ["#ffc107", "#AdCE00"], xAxis: [{ categories: e.title, crosshair: !0 }], yAxis: [{ labels: { format: "{value} 元", style: { color: Highcharts.getOptions().colors[1] } }, title: { text: "个人", style: { color: Highcharts.getOptions().colors[1] } }, opacity: .2 }, { title: { text: "企业", style: { color: Highcharts.getOptions().colors[0] } }, labels: { format: "{value} 元", style: { color: Highcharts.getOptions().colors[0] } }, opposite: !0 }], tooltip: { shared: !0 }, legend: { layout: "vertical", align: "left", x: 120, verticalAlign: "top", y: 100, floating: !0, backgroundColor: Highcharts.theme && Highcharts.theme.legendBackgroundColor || "#FFFFFF" }, series: [{ name: "企业订单", type: "spline", yAxis: 1, data: e.employer_data, tooltip: { valueSuffix: " 元" } }, { name: "个人订单", type: "spline", data: e.user_data, tooltip: { valueSuffix: "元" } }] }), h(), void 0) },
        c = function(t, e) {
            if (t) return console.log(t);
            var o = [],
                a = e.user,
                r = e.service;
            a = a.map(function(t) {
                return o.push(t.show_day.substr(5)), t.amount }), r = r.map(function(t) {
                return t.amount }), u(null, { title: o, user_data: a, service_data: r }) },
        u = function(t, e) {
            return t ? !1 : ($("#js_statistics-rongcloud").highcharts({ chart: { zoomType: "xy" }, title: { text: "每日融云消息量" }, colors: ["#ffc107", "#AdCE00"], xAxis: [{ categories: e.title, crosshair: !0 }], yAxis: [{ labels: { format: "{value} 条", style: { color: Highcharts.getOptions().colors[1] } }, title: { text: "客服消息", style: { color: Highcharts.getOptions().colors[1] } }, opacity: .2 }, { title: { text: "个人消息", style: { color: Highcharts.getOptions().colors[0] } }, labels: { format: "{value} 条", style: { color: Highcharts.getOptions().colors[0] } }, opposite: !0 }], tooltip: { shared: !0 }, legend: { layout: "vertical", align: "left", x: 120, verticalAlign: "top", y: 100, floating: !0, backgroundColor: Highcharts.theme && Highcharts.theme.legendBackgroundColor || "#FFFFFF" }, series: [{ name: "个人消息", type: "spline", yAxis: 1, data: e.user_data, tooltip: { valueSuffix: " 条" } }, { name: "客服消息", type: "spline", data: e.service_data, tooltip: { valueSuffix: "条" } }] }), h(), void 0) },
        h = function() { $("text:contains(Highcharts)").remove(), $(".highcharts-button").remove(), $("desc:contains(Highcharts)").remove() },
        p = function(t) {
            var e = { start_time: null };
            switch (e.end_time = new Date(moment().format("YYYY-MM-DD") + " 23:59:59").valueOf(), t) {
                case "一个月":
                    e.start_time = new Date(moment().subtract(1, "M").format("YYYY-MM-DD") + " 00:00:01").valueOf();
                    break;
                case "三个月":
                    e.start_time = new Date(moment().subtract(3, "M").format("YYYY-MM-DD") + " 00:00:01").valueOf();
                    break;
                case "半年":
                    e.start_time = new Date(moment().subtract(6, "M").format("YYYY-MM-DD") + " 00:00:01").valueOf();
                    break;
                case "年":
                    e.start_time = new Date(moment().subtract(1, "y").format("YYYY-MM-DD") + " 00:00:01").valueOf() }
            return e },
        m = function(t, r) {
            switch (t) {
                case "wxorder":
                    o(e.WXORDER_URL, r.start_time, r.end_time, l);
                    break;
                case "user":
                    o(e.USER_URL, r.start_time, r.end_time, i);
                    break;
                case "position":
                    o(e.POSITION_URL, r.start_time, r.end_time, a);
                    break;
                case "rongcloud":
                    o(e.RONGCLOUD_URL, r.start_time, r.end_time, c) } };
    $(document).ready(function() { o(e.WXORDER_URL, null, null, l), o(e.USER_URL, null, null, i), o(e.POSITION_URL, null, null, a), o(e.RONGCLOUD_URL, null, null, c), h() }), $(".js_statistics_btn .btn").off("click").on("click", function() {
        var t = $(this);
        if (!t.hasClass("btn-info")) { t.removeClass("btn-white").addClass("btn-info").siblings().removeClass("btn-info").addClass("btn-white");
            var e = $(this).html(),
                o = $(this).parent().data("show"),
                a = p(e);
            m(o, a) } }) }();
