//get请求
$.ajax({
    type: 'get',
    url: 'https://apis.map.qq.com/ws/location/v1/ip',
    data: {
        key: 'JOCBZ-5FCRV-CWTP7-5HXTF-OODC2-2PF6R',
        output: 'jsonp',
        callback: '?',
    },
    dataType: 'jsonp',
    success: function (res) {
        window.ipLocation = res;
    }
})
function getDistance(e1, n1, e2, n2) {
    const R = 6371
    const { sin, cos, asin, PI, hypot } = Math
    let getPoint = (e, n) => {
        e *= PI / 180
        n *= PI / 180
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
    }

    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = asin(c / 2) * 2 * R
    return Math.round(r);
}

function showWelcome() {

    let dist = getDistance(112.92358, 35.79807, ipLocation.result.location.lng, ipLocation.result.location.lat); //这里记得换成自己的经纬度
    let pos = ipLocation.result.ad_info.nation;
    let ip;
    let posdesc;
    //根据国家、省份、城市信息自定义欢迎语
    switch (ipLocation.result.ad_info.nation) {
        case "日本":
            posdesc = "よろしく，一起去看樱花吗";
            break;
        case "美国":
            posdesc = "Let us live in peace!";
            break;
        case "英国":
            posdesc = "想同你一起夜乘伦敦眼";
            break;
        case "俄罗斯":
            posdesc = "干了这瓶伏特加！";
            break;
        case "法国":
            posdesc = "C'est La Vie";
            break;
        case "德国":
            posdesc = "Die Zeit verging im Fluge.";
            break;
        case "澳大利亚":
            posdesc = "一起去大堡礁吧！";
            break;
        case "加拿大":
            posdesc = "拾起一片枫叶赠予你";
            break;
        case "中国":
            pos = ipLocation.result.ad_info.province + " " + ipLocation.result.ad_info.city + " " + ipLocation.result.ad_info.district;
            ip = ipLocation.result.ip;
            switch (ipLocation.result.ad_info.province) {
                /* 4 直辖市 */
                case "北京市":
                    posdesc = "北——京——欢迎你~~~";
                    break;
                case "天津市":
                    posdesc = "讲段相声吧";
                    break;
                case "上海市":
                    posdesc = "众所周知，中国只有两个城市";
                    break;
                case "重庆市":
                    posdesc = "8D魔幻城市，导航听了都摇头";
                    break;

                /* 河北 */
                case "河北省":
                    switch (ipLocation.result.ad_info.city) {
                        case "石家庄市":   posdesc = "正宗安徽牛肉板面发源地！"; break;
                        case "唐山市":     posdesc = "烧烤配麻糖，工业风拿捏了"; break;
                        case "秦皇岛市":   posdesc = "阿那亚的孤独图书馆，假装在圣托里尼"; break;
                        case "邯郸市":     posdesc = "学步桥警告：别邯郸学步嗷"; break;
                        case "邢台市":     posdesc = "太行山最绿的地儿，懂行的都去天河山"; break;
                        case "保定市":     posdesc = "驴火宇宙中心，加焖子才够味"; break;
                        case "张家口市":   posdesc = "崇礼滑雪，冬天也要整点‘雪’业"; break;
                        case "承德市":     posdesc = "避暑山庄：皇上都说凉快"; break;
                        case "沧州市":     posdesc = "武术之乡，八极拳申请出战"; break;
                        case "廊坊市":     posdesc = "北京的后花园，通勤两小时"; break;
                        case "衡水市":     posdesc = "衡水老白干，一杯就上头"; break;
                        default: posdesc = "山势巍巍成壁垒，天下雄关铁马金戈由此向，无限江山";
                    }
                    break;

                /* 山西 */
                case "山西省":
                    switch (ipLocation.result.ad_info.city) {
                        case "太原市":       posdesc = "秋叶蓝不城"; break;
                        case "大同市":       posdesc = "刀削面配兔头，碳水快乐星球"; break;
                        case "阳泉市":       posdesc = "刘慈欣老家，三体人从这儿起飞"; break;
                        case "长治市":       posdesc = "上党从来天下脊，撸串配潞酒"; break;
                        case "晋城市":       posdesc = "一方水土养一方人，晋城话说给晋城人..."; break;
                        case "朔州市":       posdesc = "右玉羊肉，吃草羊的天花板"; break;
                        case "晋中市":       posdesc = "平遥古城拍拍照，晋商票号走一遭"; break;
                        case "运城市":       posdesc = "关公老家，天天‘义’起来"; break;
                        case "忻州市":       posdesc = "五台山拜佛，顺便许个愿"; break;
                        case "临汾市":       posdesc = "洪洞大槐树，寻根问祖集中地"; break;
                        case "吕梁市":       posdesc = "杏花村汾酒，喝出魏晋风骨"; break;
                        default: posdesc = "展开坐具长三尺，已占山河五百余";
                    }
                    break;

                /* 内蒙古 */
                case "内蒙古自治区":
                    switch (ipLocation.result.ad_info.city) {
                        case "呼和浩特市": posdesc = "来碗羊杂碎，草原的早晨醒啦"; break;
                        case "包头市":     posdesc = "稀土之都，钢铁侠看了都眼馋"; break;
                        case "乌海市":     posdesc = "沙漠里看海，赛博朋克即视感"; break;
                        case "赤峰市":     posdesc = "对夹夹一切，赤峰人的汉堡"; break;
                        case "通辽市":     posdesc = "科尔沁风干牛肉，越嚼越上头"; break;
                        case "鄂尔多斯市": posdesc = "羊绒衫暖和，土豪也多"; break;
                        case "呼伦贝尔市": posdesc = "大草原配套马杆，汉子诚不欺我"; break;
                        case "巴彦淖尔市": posdesc = "河套面粉，馒头好吃到哭"; break;
                        case "乌兰察布市": posdesc = "土豆开会，薯条自由"; break;
                        case "兴安盟":     posdesc = "阿尔山秋景，美到内存爆炸"; break;
                        case "锡林郭勒盟": posdesc = "羊肉届鄙视链顶端"; break;
                        case "阿拉善盟":   posdesc = "左手沙漠右手胡杨，YYDS"; break;
                        default: posdesc = "天苍苍，野茫茫，风吹草低见牛羊";
                    }
                    break;

                /* 辽宁 */
                case "辽宁省":
                    switch (ipLocation.result.ad_info.city) {
                        case "沈阳市":   posdesc = "鸡架老雪花，沈阳人的快乐水"; break;
                        case "大连市":   posdesc = "浪漫之都，海鲜吃到扶墙"; break;
                        case "鞍山市":   posdesc = "鞍钢硬朗，千山更硬朗"; break;
                        case "抚顺市":   posdesc = "煤都往事，麻辣拌续命"; break;
                        case "本溪市":   posdesc = "本溪水洞，东北地下艺术宫殿"; break;
                        case "丹东市":   posdesc = "草莓超大颗，对岸就是朝鲜"; break;
                        case "锦州市":   posdesc = "锦州烧烤，小串卷一切"; break;
                        case "营口市":   posdesc = "东北小三亚，鲅鱼圈冲鸭"; break;
                        case "阜新市":   posdesc = "玛瑙之都，剁手也要买"; break;
                        case "辽阳市":   posdesc = "白塔青年，古城也很潮"; break;
                        case "盘锦市":   posdesc = "蟹稻共生，盘锦螃蟹YYDS"; break;
                        case "铁岭市":   posdesc = "宇宙的尽头，李雪琴盖章"; break;
                        case "朝阳市":   posdesc = "古生物化石，恐龙看了都点赞"; break;
                        case "葫芦岛市": posdesc = "兴城海滨，东北人自己的马尔代夫"; break;
                        default: posdesc = "我想吃烤鸡架！";
                    }
                    break;

                /* 吉林 */
                case "吉林省":
                    switch (ipLocation.result.ad_info.city) {
                        case "长春市":   posdesc = "汽车之城，东北F4老大"; break;
                        case "吉林市":   posdesc = "雾凇奇观，冬日限定皮肤"; break;
                        case "四平市":   posdesc = "李连贵熏肉大饼，碳水+脂肪的双重暴击"; break;
                        case "辽源市":   posdesc = "袜子走天下，辽源制造"; break;
                        case "通化市":   posdesc = "葡萄酒之乡，干杯老铁"; break;
                        case "白山市":   posdesc = "长白山天池，水怪等你合影"; break;
                        case "松原市":   posdesc = "查干湖冬捕，一网几十万斤"; break;
                        case "白城市":   posdesc = "向海鹤舞，丹顶鹤的T台"; break;
                        case "延边州":   posdesc = "朝鲜族美食宇宙中心，冷面泡菜的快乐老家"; break;
                        default: posdesc = "状元阁就是东北烧烤之王";
                    }
                    break;

                /* 黑龙江 */
                case "黑龙江省":
                    switch (ipLocation.result.ad_info.city) {
                        case "哈尔滨市":   posdesc = "中央大街走一走，俄式风情拿捏"; break;
                        case "齐齐哈尔市": posdesc = "BBQ烤肉配鹤舞，真·鹤城"; break;
                        case "鸡西市":     posdesc = "刀削面加辣，鸡西人的乡愁"; break;
                        case "鹤岗市":     posdesc = "房价白菜，躺平圣地"; break;
                        case "双鸭山市":   posdesc = "宝清大白板，瓜子界天花板"; break;
                        case "大庆市":     posdesc = "铁人精神+坑烤，香到犯规"; break;
                        case "伊春市":     posdesc = "林都氧吧，每一口都是洗肺"; break;
                        case "佳木斯市":   posdesc = "蔓越莓老家，洋气得很"; break;
                        case "七台河市":   posdesc = "短道速滑冠军制造机"; break;
                        case "牡丹江市":   posdesc = "镜泊湖跳水，瀑布下饺子"; break;
                        case "黑河市":     posdesc = "早市买大列巴，对岸俄国即视感"; break;
                        case "绥化市":     posdesc = "寒地黑土，东北粮仓"; break;
                        case "大兴安岭地区": posdesc = "找北请到漠河，泼水成冰"; break;
                        default: posdesc = "很喜欢哈尔滨大剧院";
                    }
                    break;

                /* 江苏 */
                case "江苏省":
                    switch (ipLocation.result.ad_info.city) {
                        case "南京市": posdesc = "这是我挺想去的城市啦"; break;
                        case "无锡市": posdesc = "太湖明珠，酱排骨甜到心坎"; break;
                        case "徐州市": posdesc = "地锅鸡+烧烤，苏北硬核碳水"; break;
                        case "常州市": posdesc = "恐龙园冲鸭，暴龙陪你自拍"; break;
                        case "苏州市": posdesc = "上有天堂，下有苏杭"; break;
                        case "南通市": posdesc = "教育卷王，学霸生产线"; break;
                        case "连云港市": posdesc = "花果山见猴哥，连岛看海"; break;
                        case "淮安市": posdesc = "世界美食之都，盱眙龙虾冲"; break;
                        case "盐城市": posdesc = "丹顶鹤与麋鹿的双厨狂喜"; break;
                        case "扬州市": posdesc = "早上皮包水，晚上水包皮"; break;
                        case "镇江市": posdesc = "香醋摆不坏，肴肉不当菜"; break;
                        case "泰州市": posdesc = "早茶三巨头，烫干丝安排"; break;
                        case "宿迁市": posdesc = "刘强东老家，客服之都"; break;
                        default: posdesc = "散装是必须要散装的";
                    }
                    break;

                /* 浙江 */
                case "浙江省":
                    switch (ipLocation.result.ad_info.city) {
                        case "杭州市": posdesc = "西湖醋鱼警告，不好吃别打我"; break;
                        case "宁波市": posdesc = "汤圆加海鲜，甜咸永动机"; break;
                        case "温州市": posdesc = "江南皮革厂回归，老板没跑"; break;
                        case "嘉兴市": posdesc = "粽子宇宙中心，肉粽yyds"; break;
                        case "湖州市": posdesc = "安吉白茶配太湖蟹，双倍快乐"; break;
                        case "绍兴市": posdesc = "孔乙己的茴香豆，加酒不加水"; break;
                        case "金华市": posdesc = "义乌小商品，买全球卖全球"; break;
                        case "衢州市": posdesc = "三头一掌，辣到灵魂出窍"; break;
                        case "舟山市": posdesc = "东海小黄鱼，鲜到眉毛掉"; break;
                        case "台州市": posdesc = "糯叽叽嵌糕，台州人的汉堡"; break;
                        case "丽水市": posdesc = "云和梯田，摄影佬的卷王"; break;
                        default: posdesc = "东风渐绿西湖柳，雁已还人未南归";
                    }
                    break;

                /* 安徽 */
                case "安徽省":
                    switch (ipLocation.result.ad_info.city) {
                        case "合肥市":     posdesc = "风投之城，赌出来的霸都"; break;
                        case "芜湖市":     posdesc = "芜湖起飞，起飞~"; break;
                        case "蚌埠市":     posdesc = "蚌埠住了，真的住了"; break;
                        case "淮南市":     posdesc = "牛肉汤+烧饼，淮南人的早晨"; break;
                        case "马鞍山市":   posdesc = "因钢设市，李白终老于此"; break;
                        case "淮北市":     posdesc = "口子窖，喝出安徽的烈"; break;
                        case "铜陵市":     posdesc = "铜都，铜臭味儿香得很"; break;
                        case "安庆市":     posdesc = "黄梅戏一开嗓，谁不说家乡好"; break;
                        case "黄山市":     posdesc = "迎客松打卡，腿已断"; break;
                        case "滁州市":     posdesc = "琅琊山醉翁亭，欧阳修都说赞"; break;
                        case "阜阳市":     posdesc = "格拉条界的天花板，碳水炸弹"; break;
                        case "宿州市":     posdesc = "砀山梨，一口下去全是汁"; break;
                        case "六安市":     posdesc = "六安瓜片，茶香飘出皖西"; break;
                        case "亳州市":     posdesc = "华佗故里，药材香飘全国"; break;
                        case "池州市":     posdesc = "九华山许愿，佛系青年集合"; break;
                        case "宣城市":     posdesc = "文房四宝之乡，笔墨纸砚管够"; break;
                        default: posdesc = "蚌埠住了，芜湖起飞";
                    }
                    break;

                /* 福建 */
                case "福建省":
                    switch (ipLocation.result.ad_info.city) {
                        case "福州市": posdesc = "佛跳墙警告，香到隔壁台湾"; break;
                        case "厦门市": posdesc = "鼓浪屿挤爆，网红拍照机位排队"; break;
                        case "莆田市": posdesc = "假鞋之都，真香定律"; break;
                        case "三明市": posdesc = "沙县小吃出三明，全球开店"; break;
                        case "泉州市": posdesc = "宋元东方第一大港，蟳蜅女簪花围"; break;
                        case "漳州市": posdesc = "四果汤+卤面，闽南胃的天堂"; break;
                        case "南平市": posdesc = "武夷山岩茶，一泡就破产"; break;
                        case "龙岩市": posdesc = "客家土楼，大鱼海棠取景地"; break;
                        case "宁德市": posdesc = "霞浦滩涂，摄影佬的卷王"; break;
                        default: posdesc = "井邑白云间，岩城远带山";
                    }
                    break;

                /* 江西 */
                case "江西省":
                    switch (ipLocation.result.ad_info.city) {
                        case "南昌市":   posdesc = "拌粉+瓦罐汤，南昌人的早晨"; break;
                        case "景德镇市": posdesc = "千年瓷都，买瓷器按斤称"; break;
                        case "萍乡市":   posdesc = "武功山金顶，云海配帐篷"; break;
                        case "九江市":   posdesc = "庐山恋，爱情开始的地方"; break;
                        case "新余市":   posdesc = "钢铁之城，仙女湖许愿"; break;
                        case "鹰潭市":   posdesc = "龙虎山天师府，道家仙气"; break;
                        case "赣州市":   posdesc = "脐橙管饱，客家围屋走一圈"; break;
                        case "吉安市":   posdesc = "井冈山红色之旅，星星之火"; break;
                        case "宜春市":   posdesc = "月亮之都，温汤富硒"; break;
                        case "抚州市":   posdesc = "才子之乡，王安石汤显祖"; break;
                        case "上饶市":   posdesc = "婺源油菜花，摄影内存告急"; break;
                        default: posdesc = "落霞与孤鹜齐飞，秋水共长天一色";
                    }
                    break;

                /* 山东 */
                case "山东省":
                    switch (ipLocation.result.ad_info.city) {
                        case "济南市":   posdesc = "大明湖夏雨荷，你还记得吗"; break;
                        case "青岛市":   posdesc = "哈啤酒吃嘎啦，塑料袋打酒"; break;
                        case "淄博市":   posdesc = "烧烤三件套，灵魂蘸料"; break;
                        case "枣庄市":   posdesc = "台儿庄古城，辣子鸡真香"; break;
                        case "东营市":   posdesc = "黄河入海口，看鸳鸯锅"; break;
                        case "烟台市":   posdesc = "张裕葡萄酒，微醺在海边"; break;
                        case "潍坊市":   posdesc = "风筝之都，天上全是佩奇"; break;
                        case "济宁市":   posdesc = "曲阜三孔，拜见孔夫子"; break;
                        case "泰安市":   posdesc = "泰山十八盘，腿抖到明年"; break;
                        case "威海市":   posdesc = "干净到反光，韩餐便宜哭"; break;
                        case "日照市":   posdesc = "日出先照，海鲜吃到撑"; break;
                        case "临沂市":   posdesc = "物流之都，煎饼卷宇宙"; break;
                        case "德州市":   posdesc = "德州扒鸡，高铁必带"; break;
                        case "聊城市":   posdesc = "东昌湖配阿胶，补血又浪漫"; break;
                        case "滨州市":   posdesc = "沾化冬枣，甜过初恋"; break;
                        case "菏泽市":   posdesc = "牡丹甲天下，曹州烧饼酥掉渣"; break;
                        default: posdesc = "遥望齐州九点烟，一泓海水杯中泻";
                    }
                    break;

                /* 河南 */
                case "河南省":
                    switch (ipLocation.result.ad_info.city) {
                        case "郑州市":   posdesc = "豫州之域，天地之中"; break;
                        case "开封市":   posdesc = "刚正不阿包青天"; break;
                        case "洛阳市":   posdesc = "洛阳牡丹甲天下"; break;
                        case "平顶山市": posdesc = "中原大佛，抬头颈椎病好了"; break;
                        case "安阳市":   posdesc = "甲骨文老家，文字博物馆走起"; break;
                        case "鹤壁市":   posdesc = "朝歌夜弦，封神榜起源"; break;
                        case "新乡市":   posdesc = "比干庙打卡，忠臣Buff"; break;
                        case "焦作市":   posdesc = "云台山瀑布，飞流直下三千尺"; break;
                        case "濮阳市":   posdesc = "中华龙乡，杂技之乡"; break;
                        case "许昌市":   posdesc = "曹魏故都，胖东来逛断腿"; break;
                        case "漯河市":   posdesc = "卫龙辣条，童年回忆杀"; break;
                        case "三门峡市": posdesc = "天鹅之城，黄河第一坝"; break;
                        case "南阳市":   posdesc = "臣本布衣，躬耕于南阳此南阳非彼南阳！"; break;
                        case "商丘市":   posdesc = "火文化起源，燧人氏钻木取火"; break;
                        case "信阳市":   posdesc = "毛尖茶香，热干面河南分面"; break;
                        case "周口市":   posdesc = "老子故里，胡辣汤配油条"; break;
                        case "驻马店市": posdesc = "峰峰有奇石，石石挟仙气嵖岈山的花很美哦！"; break;
                        case "济源市":   posdesc = "愚公移山，山还在人已富"; break;
                        default: posdesc = "可否带我品尝河南烩面啦？";
                    }
                    break;

                /* 湖北 */
                case "湖北省":
                    switch (ipLocation.result.ad_info.city) {
                        case "武汉市":   posdesc = "热干面配豆皮，过早天堂"; break;
                        case "黄石市":   posdesc = "矿冶古都，仙岛湖打卡"; break;
                        case "十堰市":   posdesc = "武当山修仙，问道金顶"; break;
                        case "宜昌市":   posdesc = "三峡大坝，国之重器"; break;
                        case "襄阳市":   posdesc = "郭靖守过的城，牛肉面管饱"; break;
                        case "鄂州市":   posdesc = "武昌鱼原产地，真香警告"; break;
                        case "荆门市":   posdesc = "明显陵+漳河鱼，历史与美食"; break;
                        case "孝感市":   posdesc = "麻糖米酒，孝感人自带甜味"; break;
                        case "荆州市":   posdesc = "荆州古城，关羽大意失荆州"; break;
                        case "黄冈市":   posdesc = "红安将军县！辈出将才！"; break;
                        case "咸宁市":   posdesc = "温泉泡到爽，桂花糕管够"; break;
                        case "随州市":   posdesc = "炎帝故里，编钟一响谁与争锋"; break;
                        case "恩施州":   posdesc = "恩施大峡谷，一炷香镇楼"; break;
                        case "仙桃市":   posdesc = "体操之乡，李小双李大双"; break;
                        case "潜江市":   posdesc = "油焖大虾，夜宵霸主"; break;
                        case "天门市":   posdesc = "蒸菜三蒸，香到邻居敲门"; break;
                        case "神农架林区": posdesc = "野人出没，注意熊出没"; break;
                        default: posdesc = "来碗热干面~";
                    }
                    break;

                /* 湖南 */
                case "湖南省":
                    switch (ipLocation.result.ad_info.city) {
                        case "长沙市":   posdesc = "74751，长沙斯塔克"; break;
                        case "株洲市":   posdesc = "火车拖来的城市，湘菜也硬核"; break;
                        case "湘潭市":   posdesc = "毛氏红烧肉，伟人同款"; break;
                        case "衡阳市":   posdesc = "南岳衡山，寿比南山"; break;
                        case "邵阳市":   posdesc = "邵阳米粉，辣到灵魂出窍"; break;
                        case "岳阳市":   posdesc = "岳阳楼记，先天下之忧而忧"; break;
                        case "常德市":   posdesc = "常德牛肉粉，嗦粉人集合"; break;
                        case "张家界市": posdesc = "阿凡达取景地，悬浮山真香"; break;
                        case "益阳市":   posdesc = "安化黑茶，越陈越香"; break;
                        case "郴州市":   posdesc = "雾漫小东江，摄影佬天堂"; break;
                        case "永州市":   posdesc = "柳宗元打call，永州之野产异蛇"; break;
                        case "怀化市":   posdesc = "芷江受降坊，历史不能忘"; break;
                        case "娄底市":   posdesc = "蚩尤故里，梅山文化"; break;
                        case "湘西州":   posdesc = "凤凰古城，沈从文笔下的边城"; break;
                        default: posdesc = "74751，长沙斯塔克";
                    }
                    break;

                /* 广东 */
                case "广东省":
                    switch (ipLocation.result.ad_info.city) {
                        case "广州市":   posdesc = "看小蛮腰，喝早茶了嘛~"; break;
                        case "韶关市":   posdesc = "丹霞山阳元石，脸红心跳"; break;
                        case "深圳市":   posdesc = "今天你逛商场了嘛~"; break;
                        case "珠海市":   posdesc = "情侣路走断腿，日月贝打卡"; break;
                        case "汕头市":   posdesc = "牛肉丸弹到飞起，粿条管够"; break;
                        case "佛山市":   posdesc = "无影脚黄飞鸿，顺德美食天堂"; break;
                        case "江门市":   posdesc = "开平碉楼，让子弹飞取景"; break;
                        case "湛江市":   posdesc = "生蚝按盆吃，快乐似神仙"; break;
                        case "茂名市":   posdesc = "荔枝之乡，杨贵妃同款"; break;
                        case "肇庆市":   posdesc = "七星岩+鼎湖山，天然氧吧"; break;
                        case "惠州市":   posdesc = "双月湾冲浪，巽寮湾发呆"; break;
                        case "梅州市":   posdesc = "客家娘酒，酿出乡愁"; break;
                        case "汕尾市":   posdesc = "二马路夜市，吃到扶墙"; break;
                        case "河源市":   posdesc = "万绿湖绿出屏，矿泉水直接喝"; break;
                        case "阳江市":   posdesc = "阳春合水！博主家乡~ 欢迎来玩~"; break;
                        case "清远市":   posdesc = "清远鸡滑到筷子夹不住"; break;
                        case "东莞市":   posdesc = "世界工厂，潮玩之都"; break;
                        case "中山市":   posdesc = "孙中山故里，乳鸽脆皮流油"; break;
                        case "潮州市":   posdesc = "牛肉火锅+粿条，潮汕味拉满"; break;
                        case "揭阳市":   posdesc = "普宁豆干，外酥里嫩"; break;
                        case "云浮市":   posdesc = "石材王国，云石艺术"; break;
                        default: posdesc = "来两斤福建人~";
                    }
                    break;

                /* 广西 */
                case "广西壮族自治区":
                    switch (ipLocation.result.ad_info.city) {
                        case "南宁市":   posdesc = "友仔友女，撩螺咩？"; break;
                        case "柳州市":   posdesc = "螺蛳粉真香，鼻子先流泪"; break;
                        case "桂林市":   posdesc = "桂林山水甲天下"; break;
                        case "梧州市":   posdesc = "龟苓膏原产地，苦尽甘来"; break;
                        case "北海市":   posdesc = "银滩冲浪，涠洲岛潜水"; break;
                        case "防城港市": posdesc = "京族三岛，中国最后的海上吉普赛"; break;
                        case "钦州市":   posdesc = "大蚝自由，烧烤配啤酒"; break;
                        case "贵港市":   posdesc = "荷美覃塘，莲藕排骨汤"; break;
                        case "玉林市":   posdesc = "狗肉节争议，牛腩粉真香"; break;
                        case "百色市":   posdesc = "芒果之乡，甜过初恋"; break;
                        case "贺州市":   posdesc = "黄姚古镇，发圈假装在江南"; break;
                        case "河池市":   posdesc = "巴马长寿村，吸氧续命"; break;
                        case "来宾市":   posdesc = "世界瑶都，瑶族风情"; break;
                        case "崇左市":   posdesc = "德天跨国瀑布，越南一步之遥"; break;
                        default: posdesc = "桂林山水甲天下";
                    }
                    break;

                /* 海南 */
                case "海南省":
                    switch (ipLocation.result.ad_info.city) {
                        case "海口市":   posdesc = "老爸茶一坐一下午，悠闲省"; break;
                        case "三亚市":   posdesc = "椰梦长廊，潜水看珊瑚"; break;
                        case "三沙市":   posdesc = "祖国最南端，海景房缺房"; break;
                        case "儋州市":   posdesc = "东坡书院，海南文化担当"; break;
                        case "五指山市": posdesc = "黎族三月三，竹竿舞跳起来"; break;
                        case "琼海市":   posdesc = "博鳌论坛，高端大气上档次"; break;
                        case "文昌市":   posdesc = "航天发射场，看火箭飞天"; break;
                        case "万宁市":   posdesc = "日月湾冲浪，浪到飞起"; break;
                        case "东方市":   posdesc = "鱼鳞洲灯塔，最美晚霞"; break;
                        case "定安县":   posdesc = "仙沟牛肉，现切现涮"; break;
                        case "屯昌县":   posdesc = "油画之乡，艺术气息"; break;
                        case "澄迈县":   posdesc = "富硒福地，长寿老人扎堆"; break;
                        case "临高县":   posdesc = "临高角灯塔，海南最北端"; break;
                        case "白沙县":   posdesc = "绿茶飘香，天然氧吧"; break;
                        case "昌江县":   posdesc = "木棉花开，红满山坡"; break;
                        case "乐东县":   posdesc = "莺歌海盐场，天空之镜"; break;
                        case "陵水县":   posdesc = "清水湾会唱歌的沙滩"; break;
                        case "保亭县":   posdesc = "七仙岭温泉，泡到不想走"; break;
                        case "琼中县":   posdesc = "黎母山探秘，雨林徒步"; break;
                        default: posdesc = "朝观日出逐白浪，夕看云起收霞光";
                    }
                    break;

                /* 四川 */
                case "四川省":
                    switch (ipLocation.result.ad_info.city) {
                        case "成都市":     posdesc = "巴适得板，熊猫儿等你"; break;
                        case "自贡市":     posdesc = "恐龙之乡，盐帮菜辣哭"; break;
                        case "攀枝花市":   posdesc = "阳光花城，芒果甜到爆"; break;
                        case "泸州市":     posdesc = "1573国窖，喝出高级感"; break;
                        case "德阳市":     posdesc = "三星堆上新，外星人实锤"; break;
                        case "绵阳市":     posdesc = "科技城+米粉，文武双全"; break;
                        case "广元市":     posdesc = "剑门关鸟道，腿抖到明年"; break;
                        case "遂宁市":     posdesc = "观音故里，灵泉寺许愿"; break;
                        case "内江市":     posdesc = "大千故里，蜜饯甜到齁"; break;
                        case "乐山市":     posdesc = "大佛脚底下吃跷脚牛肉"; break;
                        case "南充市":     posdesc = "川北凉粉，辣到喷火"; break;
                        case "眉山市":     posdesc = "东坡肘子，肥而不腻"; break;
                        case "宜宾市":     posdesc = "五粮液配燃面，上头"; break;
                        case "广安市":     posdesc = "邓小平故里，红色之旅"; break;
                        case "达州市":     posdesc = "灯影牛肉，薄如纸片"; break;
                        case "雅安市":     posdesc = "熊猫老家，三雅文化"; break;
                        case "巴中市":     posdesc = "光雾山红叶，美到窒息"; break;
                        case "资阳市":     posdesc = "安岳柠檬，酸爽炸裂"; break;
                        case "阿坝州":     posdesc = "九寨沟归来不看水"; break;
                        case "甘孜州":     posdesc = "丁真家乡，理塘打卡"; break;
                        case "凉山州":     posdesc = "西昌烧烤，火盆边撸串"; break;
                        default: posdesc = "康康川妹子";
                    }
                    break;

                /* 贵州 */
                case "贵州省":
                    switch (ipLocation.result.ad_info.city) {
                        case "贵阳市":     posdesc = "避暑之都，丝娃娃卷一切"; break;
                        case "六盘水市":   posdesc = "凉都19℃，夏天盖被子"; break;
                        case "遵义市":     posdesc = "遵义会议，红色圣地"; break;
                        case "安顺市":     posdesc = "黄果树瀑布，水帘洞打卡"; break;
                        case "毕节市":     posdesc = "百里杜鹃，花海刷屏"; break;
                        case "铜仁市":     posdesc = "梵净山蘑菇石，天空之城"; break;
                        case "黔西南州":   posdesc = "万峰林骑行，最美喀斯特"; break;
                        case "黔东南州":   posdesc = "千户苗寨，银饰叮当"; break;
                        case "黔南州":     posdesc = "天眼FAST，找外星人"; break;
                        default: posdesc = "茅台，学生，再塞200";
                    }
                    break;

                /* 云南 */
                case "云南省":
                    switch (ipLocation.result.ad_info.city) {
                        case "昆明市":     posdesc = "春城无处不飞花，过桥米线管饱"; break;
                        case "曲靖市":     posdesc = "宣威火腿，云腿月饼香"; break;
                        case "玉溪市":     posdesc = "红塔山+抚仙湖，烟与湖"; break;
                        case "保山市":     posdesc = "腾冲温泉，火山热海"; break;
                        case "昭通市":     posdesc = "苹果之城，丑苹果甜到心"; break;
                        case "丽江市":     posdesc = "古城艳遇，玉龙雪山蓝月谷"; break;
                        case "普洱市":     posdesc = "左手咖啡右手茶，人生赢家"; break;
                        case "临沧市":     posdesc = "冰岛老寨，普洱茶天花板"; break;
                        case "楚雄州":     posdesc = "彝人古镇，火把节狂欢"; break;
                        case "红河州":     posdesc = "元阳梯田，光影天堂"; break;
                        case "文山州":     posdesc = "普者黑荷花，三生三世"; break;
                        case "西双版纳州": posdesc = "星光夜市，傣味烧烤"; break;
                        case "大理州":     posdesc = "苍山雪洱海月，风花雪月"; break;
                        case "德宏州":     posdesc = "芒市泡鲁达，缅味十足"; break;
                        case "怒江州":     posdesc = "丙中洛人神共居，世外桃源"; break;
                        case "迪庆州":     posdesc = "香格里拉，心中的日月"; break;
                        default: posdesc = "玉龙飞舞云缠绕，万仞冰川直耸天";
                    }
                    break;

                /* 西藏 */
                case "西藏自治区":
                    switch (ipLocation.result.ad_info.city) {
                        case "拉萨市":   posdesc = "日光之城，布达拉宫朝圣"; break;
                        case "日喀则市": posdesc = "珠峰大本营，8848.86打卡"; break;
                        case "昌都市":   posdesc = "然乌湖倒影，318此生必驾"; break;
                        case "林芝市":   posdesc = "桃花沟十里桃林，三生三世"; break;
                        case "山南市":   posdesc = "羊卓雍措，天鹅之湖"; break;
                        case "那曲市":   posdesc = "羌塘草原，藏羚羊奔跑"; break;
                        case "阿里地区": posdesc = "冈仁波齐转山，信仰之旅"; break;
                        default: posdesc = "躺在茫茫草原上，仰望蓝天";
                    }
                    break;

                /* 陕西 */
                case "陕西省":
                    switch (ipLocation.result.ad_info.city) {
                        case "西安市":     posdesc = "碳水之都，肉夹馍配冰峰"; break;
                        case "铜川市":     posdesc = "药王故里，孙思邈养生"; break;
                        case "宝鸡市":     posdesc = "青铜器博物院，何尊镇馆"; break;
                        case "咸阳市":     posdesc = "秦始皇老家，biangbiang面"; break;
                        case "渭南市":     posdesc = "华山论剑，险中求胜"; break;
                        case "延安市":     posdesc = "宝塔山+枣园，红色之旅"; break;
                        case "汉中市":     posdesc = "油菜花田，汉人老家"; break;
                        case "榆林市":     posdesc = "镇北台+榆林豆腐，塞上江南"; break;
                        case "安康市":     posdesc = "瀛湖烤鱼，陕南小江南"; break;
                        case "商洛市":     posdesc = "金丝峡漂流，天然空调"; break;
                        default: posdesc = "来份臊子面加馍";
                    }
                    break;

                /* 甘肃 */
                case "甘肃省":
                    switch (ipLocation.result.ad_info.city) {
                        case "兰州市":   posdesc = "一碗牛肉面，拉开甘肃序幕"; break;
                        case "嘉峪关市": posdesc = "天下第一雄关，长城终点"; break;
                        case "金昌市":   posdesc = "镍都金昌，紫金花海"; break;
                        case "白银市":   posdesc = "黄河石林，大自然的鬼斧神工"; break;
                        case "天水市":   posdesc = "麦积山石窟，东方雕塑馆"; break;
                        case "武威市":   posdesc = "马踏飞燕，中国旅游标志"; break;
                        case "张掖市":   posdesc = "七彩丹霞，打翻调色盘"; break;
                        case "平凉市":   posdesc = "崆峒山论剑，武侠梦"; break;
                        case "酒泉市":   posdesc = "敦煌飞天，卫星发射"; break;
                        case "庆阳市":   posdesc = "香包刺绣，陇绣一绝"; break;
                        case "定西市":   posdesc = "马铃薯之乡，洋芋擦擦"; break;
                        case "陇南市":   posdesc = "官鹅沟秋景，陇上小九寨"; break;
                        case "临夏州":   posdesc = "刘家峡水库，蓝到犯规"; break;
                        case "甘南州":   posdesc = "扎尕那石城，神仙居住"; break;
                        default: posdesc = "羌笛何须怨杨柳，春风不度玉门关";
                    }
                    break;

                /* 青海 */
                case "青海省":
                    switch (ipLocation.result.ad_info.city) {
                        case "西宁市":   posdesc = "青海湖骑行，塔尔寺转经"; break;
                        case "海东市":   posdesc = "喇家遗址，一碗4000年前的面条"; break;
                        case "海北州":   posdesc = "门源花海，金色海洋"; break;
                        case "黄南州":   posdesc = "热贡艺术，唐卡小镇"; break;
                        case "海南州":   posdesc = "龙羊峡大坝，黄河第一坝"; break;
                        case "果洛州":   posdesc = "年保玉则，天神后花园"; break;
                        case "玉树州":   posdesc = "三江之源，可可西里"; break;
                        case "海西州":   posdesc = "茶卡盐湖，天空之镜"; break;
                        default: posdesc = "牛肉干和老酸奶都好好吃";
                    }
                    break;

                /* 宁夏 */
                case "宁夏回族自治区":
                    switch (ipLocation.result.ad_info.city) {
                        case "银川市":   posdesc = "塞上江南，手抓羊排"; break;
                        case "石嘴山市": posdesc = "沙湖苇舟，鸟的天堂"; break;
                        case "吴忠市":   posdesc = "早茶拉面，吴忠人的早晨"; break;
                        case "固原市":   posdesc = "六盘山红军长征，红色之旅"; break;
                        case "中卫市":   posdesc = "沙坡头滑沙，黄河飞索"; break;
                        default: posdesc = "大漠孤烟直，长河落日圆";
                    }
                    break;

                /* 新疆 */
                case "新疆维吾尔自治区":
                    switch (ipLocation.result.ad_info.city) {
                        case "乌鲁木齐市":   posdesc = "国际大巴扎，烤包子真香"; break;
                        case "克拉玛依市":   posdesc = "黑油山，石油之城"; break;
                        case "吐鲁番市":     posdesc = "火焰山+葡萄沟，冰火两重天"; break;
                        case "哈密市":       posdesc = "哈密瓜原产地，甜到齁"; break;
                        case "昌吉州":       posdesc = "天山天池，王母娘娘洗脚盆"; break;
                        case "博尔塔拉州":   posdesc = "赛里木湖，大西洋最后一滴泪"; break;
                        case "巴音郭楞州":   posdesc = "巴音布鲁克，九曲十八弯"; break;
                        case "阿克苏地区":   posdesc = "冰糖心苹果，甜到心坎"; break;
                        case "克孜勒苏州":   posdesc = "帕米尔高原，冰山上的来客"; break;
                        case "喀什地区":     posdesc = "古城开城仪式，一秒穿越"; break;
                        case "和田地区":     posdesc = "和田玉买买提，剁手之旅"; break;
                        case "伊犁州":       posdesc = "杏花沟花海，美到窒息"; break;
                        case "塔城地区":     posdesc = "手抓肉大盘，吃肉不吃蒜"; break;
                        case "阿勒泰地区":   posdesc = "喀纳斯湖怪，等你来找"; break;
                        default: posdesc = "驼铃古道丝绸路，胡马犹闻唐汉风";
                    }
                    break;

    /* 港澳台 */
    case "台湾省":
        posdesc = "我在这头，大陆在那头";
        break;
    case "香港特别行政区":
        posdesc = "永定贼有残留地鬼嚎，迎击光非岁玉";
        break;
    case "澳门特别行政区":
        posdesc = "性感荷官，在线发牌";
        break;

    /* 兜底 */
    default:
        posdesc = "带我去你的城市逛逛吧！";
}
            break;
        default:
            posdesc = "带我去你的国家逛逛吧";
            break;
    }

    //根据本地时间切换欢迎语
    let timeChange;
    let date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 7) timeChange = "<span>🌤️ 早上好，一日之计在于晨</span>";
    else if (date.getHours() >= 7 && date.getHours() < 11) timeChange = "<span>🌞 上午好，工作顺利吗？</span>";
    else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span>☀️ 中午好，记得午休喔~</span>";
    else if (date.getHours() >= 13 && date.getHours() < 17) timeChange = "<span>🕞 下午好，开始摸鱼</span>";
    else if (date.getHours() >= 17 && date.getHours() < 18) timeChange = "<span>🚶‍♂️ 即将下班，记得按时吃饭~</span>";
    else if (date.getHours() >= 18 && date.getHours() < 23) timeChange = "<span>🌙 晚上好，夜生活嗨起来！</span>";
    else if (date.getHours() >= 23 || date.getHours() < 5) timeChange = "<span>🌌 夜深了，早点休息，少熬夜</span>";
    else timeChange = "夜深了，早点休息，少熬夜";

// 新增ipv6显示为指定内容
    if (ip.includes(":")) {
        ip = "<br>好复杂，咱看不懂~(ipv6)";
    }
    try {
        //自定义文本和需要放的位置
        document.getElementById("welcome-ip-location-info").innerHTML =
            `欢迎来自 <b><span style="color: var(--kouseki-ip-color);font-size: var(--kouseki-gl-size)">${pos}</span></b> 的小友💖<br>${posdesc}🍂<br>当前位置距博主约 <b><span style="color: var(--kouseki-ip-color)">${dist}</span></b> 公里！<br>您的IP地址为：<b><span class="ip-mask">${ip}</span></b><br>${timeChange} <br>`;
    } catch (err) {
         console.log("Pjax无法获取元素")
    }
}
window.onload = showWelcome;
// 如果使用了pjax在加上下面这行代码

document.addEventListener('pjax:complete', showWelcome);
