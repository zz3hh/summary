javascript在前端和后台(nodejs)规则
================================
##须知：
1.凡是req,res做参数的采用的[expressjs](http://www.expressjs.com.cn/)框架  [百度百科](http://baike.baidu.com/link?url=IyjgoIxyq1q1ZUo5cfGlku-aMTPWfeR56L0_tlkPuk9SChfYuYt88lcaU3RGIeNpLfMWv0ctN9tFCjryXmVBia)

2.凡是next作为参数不做中间件说明的默认采用的[Koajs](http://koa.bootcss.com/)框架

有事请留言，需留言者 [点这里](http://www.baiyatao.com/say)

看到公司原来的代码，总感觉无从下手，添加新功能都不知道怎么下手，所以认为制定一套规则是刻不容缓。代码杂乱无章就是因为没有规则，人人都一套自己的规则，不同的规则混合在一起必定造成代码风格统一的道路上偏离主道，偏离主道的时间越长再想回到主道的困难就更多，也许我们会说创业公司嘛，能实现功能上线然后融资后再重构一遍就得了呗。铁打营盘流水的兵，如果刚刚开始编程就不考虑后期维护的话，新人无法维护前人的代码，后期开发的速度会慢慢降下来，直至拖死然后旧代码直接全部抛弃，利害就不累述了。我的规则的总结是片面的，小弟毕竟经验有限，其它书中都有规则的建议，书中有的我就不写出了，别弄得说此段代码出自哪里搞的像抄什么的，如有雷同纯属自学来自书籍中的知识的一种变种。

无规矩不成方圆，无规则怎么能做到团队的代码风格统一，军人需要军纪才能做到统一调度打好战争，日本弹丸之地就能差点把中国给灭了，别人有统一的思想，统一的军纪，遭到伏击不慌乱撤退有序。也许认为我们不是军人我们没有必要做到代码风格统一，请问您是否在工作中被坑过，让您维护一段代码非常简单的事情，但是您却花费了半天去看原来的代码，有时想下手修改的时候，又不知道如何修改，项目达到一定程度，代码复合调用过度紧凑，有可能造成改好一个bug隐形造成几个新bug，让您修改代码是多么痛苦，您是否体会到了吗？

代码风格的统一可以让团队工作更高效，做到十个人其实就是一个孙悟空，做不到就是十个哈姆雷特，为什么BAT花大价格招毕业生，因为刚刚毕业的可塑性比较高，能够做到做事的统一(比较片面)。不要说自己代码风格已经形成了，那是自欺欺人，您可以做到融合到团队的，可以做到团队每位都是孙悟空。以下只是鄙人的片面建议，万不可作为编程的指导，不然岂不是罪人一个。

能写出代码是人人都会，写出不可维护的代码更是容易，写出可维护的代码是对美的一种追求，我们写的代码不单单需要计算机能读懂就好，而且首先需要人能读懂，让后继者能够读懂我们到底干什么了？然后期维护者能知道我们当时的思路。编写不可维护的代码让公司感觉您无可替代的同志们 [点这里](https://www.zhihu.com/question/35992354)

###1.代码要注释 重要的事情说三遍 注释 注释 注释

可能您认为大家英语都那么好，(自认为英语比较好的小伙伴)我写的方法名或者变量名难道读不懂吗？当时写代码是自己的思绪非常完美漂亮的解决了问题，但是您想过后期维护的人员看到没有注释代码是否能理解吗，您会说，难道他看不懂吗？几时我们不曾回过头来修改自己的代码，后来我们自己都看不懂了。失败是成功之母，我们犯过的错误才使得我们成长，如果我们痛恨别人代码的时候那就提高自己的代码质量。程序员何必为难程序员呢？

```javascript
// 例如下面代码我就不知道是什么意思
var idtype_inputhelp = function(req, res) {
    // access i18n
    var i18n = req.i18n;
    IDType.find({}, function(err, idtypes) {
        if (err) {
            res.json({
                code: 'ERR',
                msg: '内部服务器错误：' + err
            });
        };
        res.render('admin/ddic/idtype/input_help', {
            idtypes: idtypes
        });
    })
};

// 在我写这的时候我已经痛苦了好几天了，做梦在想是不是不妥，趁着这次机会修改一下,
// 因为过完年我看我写的代码就看不懂了，为什么当初写成这样，而且结果还是对的。不知道采用的什么奇巧淫计
/**
 * [*report_highcharts_data 得到九型人格测试结果的数据用于highcharts数据报表显示]
 * @param {Function} next          [description]
 * @yield {[type]}   [description]
 */
var report_highcharts_data = function*(next) {
    var id = this.query.id;

    try {
        if (!id) {
            throw Error('id is require');
        }
        var name_array = ["完美型", "助人型", "成就型", "感觉型", "思考型", "忠诚型", "活跃型", "领袖型", "和平型"];
        var temp_array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        var result_array = yield r.table(EnneagramTestInstanceItem.getTableName()).filter({
                ti: id,
                answer: true
            })
            .group('enneagram_code')
            .count()
            .run();

        result_array.map(function(item) {
            // 如果我们加这段注释之前，后期重构页面后期人员肯定不知道代码为什么要这么写，而且写的结果还是对的
            // 因为数据库中的主键enneagram_code是1，2，对应的是类型名称，然后传送到前端的数据是一一对照的
            var index = parseInt(item.group);
            var indexOf = index - 1;
            if (indexOf > -1 && indexOf < 9) {
                temp_array[indexOf] = item.reduction;
            }
        });

        this.body = {
            name_array: name_array,
            result_array: temp_array
        };
    } catch (e) {
        logger(e, 2);
        this.status = 500;
        this.body = {
            code: 999,
            msg: e.message
        };
    }
};
```

###2.保持代码的缩进，两个方法体留出一行空格

现在前端自动化，javascript,css这些在部署的时候都会合并压缩，不需要您为源码留空间，减少空格避免文件过大啥的，当项目过大时一个功能点的脚本就可能达到三四千行，代码不缩进，而且方法体没有任何结构化,都是一股脑的堆砌在一起，看着不感觉杂乱无章吗？也许您认为这样写我能找到就行了，修改代码时我知道在哪里，但是您能保证几天后，几个月后您还能看懂吗？后来加入的人能知道在哪里吗？也许我们现在用的 [sublime text](https://www.sublimetext.com/) 编辑器告诉我查找一下或者Control+D不就行了吗？

自己写代码不是写给计算机的一封信，但是即使写信也要写的漂亮一点吧，一股脑的堆砌文字。编程也有对美追求的方式，保持代码的缩进。

```javascript
var get_a = function(req,res){
  var query_id = req.query.id;
  DataTable.find({_id:query_id},function(err,data){
    if (err) {
        res.json({
            code: 'ERR',
            msg: '内部服务器错误：' + err
        });
    };
    res.render(data);
  });
};
var post_b = function(req,res){
  var data4create = req.body;
  DataTable.create(data4create, function(err, result) {
    if (err) {
        return res.status(500).json({
            code: 'ERR',
            msg: '内部服务器错误：' + err
        });
    };
    if (result) {
        return res.json({
            code: 'OK',
            msg: '创建成功!',
            _id: result._id,
        });
    } else {
        return res.status(500).json({
            code: 'ERR',
            msg: '创建失败!'
        });
    };
  });
};
```

###3. 配合if提前结束资源访问

想写出好的代码，就要把计算机做为您的朋友对待，计算机就是您的对象，啥时间别人再说没有对象的话，上去就盖个印章，不许再虐我们程序员单身狗，我的电脑我的代码就是我的对象，我可以造成成千上百个对象。您能吗？

中间件负责的看门功能，那么到我们执行方法体内是不是也应该加一道门，不满足提前结束呢？为什么非要等到数据库报错才去告诉前端我的数据出错了或者找不到，找不到因为条件不满足所以才找不到。不要相信前端传回的数据都是对，前端传回的数据就一股脑的忘数据库中存，给您个定时炸弹您也存？

```JavaScript
/**
 * [get_a 查询**数据]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
var get_a = function(req, res) {
    var query_id = req.query.id; // 主键Id

    if (!query_id) {
        res.json({
            code: 'ERR',
            msg: '却少参数，id is require！！'
        });
        return false;
    }

    DataTable.find({ _id: query_id }, function(err, data) {
        if (err) {
            res.json({
                code: 'ERR',
                msg: '内部服务器错误：' + err
            });
        };
        res.render(data);
    });
};

/**
 * [post_b 新增**数据]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
var post_b = function(req, res) {
    var data4create = req.body;

    if (_.isEmpty(data4create)) {
        return res.status(500).json({
            code: 'ERR',
            msg: '数据残缺：'
        });
    }
    
    // 如果此处数据判断过多还可以单独出来一个方法 例如 validate_aa(data4create)
    // 发现错误立即返回

    DataTable.create(data4create, function(err, result) {
        if (err) {
            return res.status(500).json({
                code: 'ERR',
                msg: '内部服务器错误：' + err
            });
        };
        if (result) {
            return res.json({
                code: 'OK',
                msg: '创建成功!',
                _id: result._id,
            });
        } else {
            return res.status(500).json({
                code: 'ERR',
                msg: '创建失败!'
            });
        };
    });
};
```

虽然后台代码要求我们要有异步编程思想，但是也不能把先天条件给忽略不计吧，上述代码只是一小部分，代码缩进，层级分开可以让我们代码看起来更美，更舒适，不满足提前结束访问，适时利用if尽快的给前端返回数据，非要让对象自己报错才知道错了，这能做好朋友吗？要为好朋友预见问题。



更新待续中，只是为了帮助和我一起编码的朋友们，现在先到这里。您若遇到了问题也可以和大家一起分享的哦，独乐乐不如众乐乐。



