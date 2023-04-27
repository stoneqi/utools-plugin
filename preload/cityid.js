/*
 * @Author: zq nickyangziqi@didiglobal.com
 * @Date: 2023-04-26 17:44:06
 * @LastEditors: zq nickyangziqi@didiglobal.com
 * @LastEditTime: 2023-04-26 17:44:08
 * @FilePath: /utools-plugin/preload/cityid.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


const cityIds = [
  {
    "description":  " 城市ID：0",
    "title": "全国",
    "py": "zhanquchengshi"
  },
  {
    "description":  " 城市ID：1",
    "title": "北京市",
    "py": "beijingshi"
  },
  {
    "description":  " 城市ID：2",
    "title": "深圳市",
    "py": "shenshi"
  },
  {
    "description":  " 城市ID：3",
    "title": "广州市",
    "py": "guangzhoushi"
  },
  {
    "description":  " 城市ID：4",
    "title": "上海市",
    "py": "shanghaishi"
  },
  {
    "description":  " 城市ID：5",
    "title": "杭州市",
    "py": "hangzhoushi"
  },
  {
    "description":  " 城市ID：6",
    "title": "武汉市",
    "py": "wuhanshi"
  },
  {
    "description":  " 城市ID：7",
    "title": "天津市",
    "py": "tianjinshi"
  },
  {
    "description":  " 城市ID：8",
    "title": "沈阳市",
    "py": "shenyangshi"
  },
  {
    "description":  " 城市ID：9",
    "title": "郑州市",
    "py": "zhengzhoushi"
  },
  {
    "description":  " 城市ID：10",
    "title": "西安市",
    "py": "xianshi"
  },
  {
    "description":  " 城市ID：11",
    "title": "南京市",
    "py": "nanjingshi"
  },
  {
    "description":  " 城市ID：12",
    "title": "济南市",
    "py": "jinanshi"
  },
  {
    "description":  " 城市ID：13",
    "title": "青岛市",
    "py": "qingdaoshi"
  },
  {
    "description":  " 城市ID：14",
    "title": "大连市",
    "py": "dalianshi"
  },
  {
    "description":  " 城市ID：15",
    "title": "合肥市",
    "py": "hefeishi"
  },
  {
    "description":  " 城市ID：16",
    "title": "哈尔滨市",
    "py": "haerbinshi"
  },
  {
    "description":  " 城市ID：17",
    "title": "成都市",
    "py": "chengdushi"
  },
  {
    "description":  " 城市ID：18",
    "title": "重庆市",
    "py": "zhongqingshi"
  },
  {
    "description":  " 城市ID：19",
    "title": "昆明市",
    "py": "kunmingshi"
  },
  {
    "description":  " 城市ID：20",
    "title": "宁波市",
    "py": "ningboshi"
  },
  {
    "description":  " 城市ID：21",
    "title": "东莞市",
    "py": "dongshi"
  },
  {
    "description":  " 城市ID：22",
    "title": "石家庄市",
    "py": "shijiazhuangshi"
  },
  {
    "description":  " 城市ID：23",
    "title": "苏州市",
    "py": "suzhoushi"
  },
  {
    "description":  " 城市ID：24",
    "title": "长沙市",
    "py": "changshashi"
  },
  {
    "description":  " 城市ID：25",
    "title": "长春市",
    "py": "changchunshi"
  },
  {
    "description":  " 城市ID：26",
    "title": "太原市",
    "py": "taiyuanshi"
  },
  {
    "description":  " 城市ID：27",
    "title": "洛阳市",
    "py": "luoyangshi"
  },
  {
    "description":  " 城市ID：28",
    "title": "西宁市",
    "py": "xiningshi"
  },
  {
    "description":  " 城市ID：29",
    "title": "烟台市",
    "py": "yantaishi"
  },
  {
    "description":  " 城市ID：30",
    "title": "兰州市",
    "py": "lanzhoushi"
  },
  {
    "description":  " 城市ID：32",
    "title": "厦门市",
    "py": "xiamenshi"
  },
  {
    "description":  " 城市ID：33",
    "title": "南宁市",
    "py": "nanningshi"
  },
  {
    "description":  " 城市ID：34",
    "title": "福州市",
    "py": "fuzhoushi"
  },
  {
    "description":  " 城市ID：35",
    "title": "泉州市",
    "py": "quanzhoushi"
  },
  {
    "description":  " 城市ID：36",
    "title": "佛山市",
    "py": "foshanshi"
  },
  {
    "description":  " 城市ID：37",
    "title": "三亚市",
    "py": "sanyashi"
  },
  {
    "description":  " 城市ID：38",
    "title": "南昌市",
    "py": "nanchangshi"
  },
  {
    "description":  " 城市ID：39",
    "title": "徐州市",
    "py": "xuzhoushi"
  },
  {
    "description":  " 城市ID：40",
    "title": "唐山市",
    "py": "tangshanshi"
  },
  {
    "description":  " 城市ID：41",
    "title": "呼和浩特市",
    "py": "huhehaoteshi"
  },
  {
    "description":  " 城市ID：42",
    "title": "威海市",
    "py": "weihaishi"
  },
  {
    "description":  " 城市ID：43",
    "title": "鄂尔多斯市",
    "py": "eerduosishi"
  },
  {
    "description":  " 城市ID：44",
    "title": "遵义市",
    "py": "zunyishi"
  },
  {
    "description":  " 城市ID：45",
    "title": "常州市",
    "py": "changzhoushi"
  },
  {
    "description":  " 城市ID：46",
    "title": "廊坊市",
    "py": "langfangshi"
  },
  {
    "description":  " 城市ID：47",
    "title": "无锡市",
    "py": "wuxishi"
  },
  {
    "description":  " 城市ID：48",
    "title": "大庆市",
    "py": "daqingshi"
  },
  {
    "description":  " 城市ID：49",
    "title": "银川市",
    "py": "yinchuanshi"
  },
  {
    "description":  " 城市ID：50",
    "title": "绵阳市",
    "py": "mianyangshi"
  },
  {
    "description":  " 城市ID：51",
    "title": "宜昌市",
    "py": "yichangshi"
  },
  {
    "description":  " 城市ID：52",
    "title": "乌鲁木齐市",
    "py": "wulumuqishi"
  },
  {
    "description":  " 城市ID：53",
    "title": "南充市",
    "py": "nanchongshi"
  },
  {
    "description":  " 城市ID：54",
    "title": "株洲市",
    "py": "zhuzhoushi"
  },
  {
    "description":  " 城市ID：55",
    "title": "湘潭市",
    "py": "xiangtanshi"
  },
  {
    "description":  " 城市ID：56",
    "title": "岳阳市",
    "py": "yueyangshi"
  },
  {
    "description":  " 城市ID：57",
    "title": "淄博市",
    "py": "ziboshi"
  },
  {
    "description":  " 城市ID：58",
    "title": "临沂市",
    "py": "linyishi"
  },
  {
    "description":  " 城市ID：59",
    "title": "沧州市",
    "py": "cangzhoushi"
  },
  {
    "description":  " 城市ID：60",
    "title": "邯郸市",
    "py": "handanshi"
  },
  {
    "description":  " 城市ID：61",
    "title": "秦皇岛市",
    "py": "qinhuangdaoshi"
  },
  {
    "description":  " 城市ID：62",
    "title": "保定市",
    "py": "baodingshi"
  },
  {
    "description":  " 城市ID：63",
    "title": "包头市",
    "py": "baotoushi"
  },
  {
    "description":  " 城市ID：64",
    "title": "鞍山市",
    "py": "anshanshi"
  },
  {
    "description":  " 城市ID：65",
    "title": "齐齐哈尔市",
    "py": "qiqihaershi"
  },
  {
    "description":  " 城市ID：66",
    "title": "抚顺市",
    "py": "fushunshi"
  },
  {
    "description":  " 城市ID：67",
    "title": "邢台市",
    "py": "xingtaishi"
  },
  {
    "description":  " 城市ID：68",
    "title": "锦州市",
    "py": "jinzhoushi"
  },
  {
    "description":  " 城市ID：69",
    "title": "铁岭市",
    "py": "tielingshi"
  },
  {
    "description":  " 城市ID：70",
    "title": "葫芦岛市",
    "py": "huludaoshi"
  },
  {
    "description":  " 城市ID：71",
    "title": "晋中市",
    "py": "jinzhongshi"
  },
  {
    "description":  " 城市ID：72",
    "title": "承德市",
    "py": "chengdeshi"
  },
  {
    "description":  " 城市ID：73",
    "title": "东营市",
    "py": "dongyingshi"
  },
  {
    "description":  " 城市ID：74",
    "title": "吉林市",
    "py": "jilinshi"
  },
  {
    "description":  " 城市ID：75",
    "title": "辽阳市",
    "py": "liaoyangshi"
  },
  {
    "description":  " 城市ID：76",
    "title": "营口市",
    "py": "yingkoushi"
  },
  {
    "description":  " 城市ID：77",
    "title": "本溪市",
    "py": "benxishi"
  },
  {
    "description":  " 城市ID：78",
    "title": "张家口市",
    "py": "zhangjiakoushi"
  },
  {
    "description":  " 城市ID：79",
    "title": "济宁市",
    "py": "jiningshi"
  },
  {
    "description":  " 城市ID：80",
    "title": "衡水市",
    "py": "hengshuishi"
  },
  {
    "description":  " 城市ID：81",
    "title": "潍坊市",
    "py": "weifangshi"
  },
  {
    "description":  " 城市ID：82",
    "title": "贵阳市",
    "py": "guiyangshi"
  },
  {
    "description":  " 城市ID：83",
    "title": "海口市",
    "py": "haikoushi"
  },
  {
    "description":  " 城市ID：84",
    "title": "珠海市",
    "py": "zhuhaishi"
  },
  {
    "description":  " 城市ID：85",
    "title": "温州市",
    "py": "wenzhoushi"
  },
  {
    "description":  " 城市ID：86",
    "title": "金华市",
    "py": "jinhuashi"
  },
  {
    "description":  " 城市ID：87",
    "title": "台州市",
    "py": "taizhoushi"
  },
  {
    "description":  " 城市ID：88",
    "title": "嘉兴市",
    "py": "jiaxingshi"
  },
  {
    "description":  " 城市ID：89",
    "title": "绍兴市",
    "py": "shaoxingshi"
  },
  {
    "description":  " 城市ID：90",
    "title": "湖州市",
    "py": "huzhoushi"
  },
  {
    "description":  " 城市ID：91",
    "title": "扬州市",
    "py": "yangzhoushi"
  },
  {
    "description":  " 城市ID：92",
    "title": "南通市",
    "py": "nantongshi"
  },
  {
    "description":  " 城市ID：93",
    "title": "镇江市",
    "py": "zhenjiangshi"
  },
  {
    "description":  " 城市ID：94",
    "title": "盐城市",
    "py": "yanchengshi"
  },
  {
    "description":  " 城市ID：95",
    "title": "泰州市",
    "py": "taizhoushi"
  },
  {
    "description":  " 城市ID：96",
    "title": "连云港市",
    "py": "lianyungangshi"
  },
  {
    "description":  " 城市ID：97",
    "title": "淮安市",
    "py": "huaianshi"
  },
  {
    "description":  " 城市ID：98",
    "title": "芜湖市",
    "py": "wuhushi"
  },
  {
    "description":  " 城市ID：99",
    "title": "马鞍山市",
    "py": "maanshanshi"
  },
  {
    "description":  " 城市ID：100",
    "title": "蚌埠市",
    "py": "bangbushi"
  },
  {
    "description":  " 城市ID：101",
    "title": "九江市",
    "py": "jiujiangshi"
  },
  {
    "description":  " 城市ID：102",
    "title": "赣州市",
    "py": "ganzhoushi"
  },
  {
    "description":  " 城市ID：103",
    "title": "平顶山市",
    "py": "pingdingshanshi"
  },
  {
    "description":  " 城市ID：104",
    "title": "运城市",
    "py": "yunchengshi"
  },
  {
    "description":  " 城市ID：105",
    "title": "衡阳市",
    "py": "hengyangshi"
  },
  {
    "description":  " 城市ID：106",
    "title": "常德市",
    "py": "changdeshi"
  },
  {
    "description":  " 城市ID：107",
    "title": "郴州市",
    "py": "chenzhoushi"
  },
  {
    "description":  " 城市ID：108",
    "title": "襄阳市",
    "py": "xiangyangshi"
  },
  {
    "description":  " 城市ID：109",
    "title": "荆州市",
    "py": "jingzhoushi"
  },
  {
    "description":  " 城市ID：110",
    "title": "开封市",
    "py": "kaifengshi"
  },
  {
    "description":  " 城市ID：111",
    "title": "新乡市",
    "py": "xinxiangshi"
  },
  {
    "description":  " 城市ID：112",
    "title": "许昌市",
    "py": "xuchangshi"
  },
  {
    "description":  " 城市ID：113",
    "title": "南阳市",
    "py": "nanyangshi"
  },
  {
    "description":  " 城市ID：114",
    "title": "周口市",
    "py": "zhoukoushi"
  },
  {
    "description":  " 城市ID：115",
    "title": "汉中市",
    "py": "hanzhongshi"
  },
  {
    "description":  " 城市ID：116",
    "title": "咸阳市",
    "py": "xianyangshi"
  },
  {
    "description":  " 城市ID：117",
    "title": "泸州市",
    "py": "zhoushi"
  },
  {
    "description":  " 城市ID：118",
    "title": "宜宾市",
    "py": "yibinshi"
  },
  {
    "description":  " 城市ID：119",
    "title": "攀枝花市",
    "py": "panzhihuashi"
  },
  {
    "description":  " 城市ID：120",
    "title": "德州市",
    "py": "dezhoushi"
  },
  {
    "description":  " 城市ID：121",
    "title": "泰安市",
    "py": "taianshi"
  },
  {
    "description":  " 城市ID：122",
    "title": "莱芜市",
    "py": "laiwushi"
  },
  {
    "description":  " 城市ID：123",
    "title": "聊城市",
    "py": "liaochengshi"
  },
  {
    "description":  " 城市ID：124",
    "title": "菏泽市",
    "py": "hezeshi"
  },
  {
    "description":  " 城市ID：125",
    "title": "大同市",
    "py": "datongshi"
  },
  {
    "description":  " 城市ID：126",
    "title": "阳泉市",
    "py": "yangquanshi"
  },
  {
    "description":  " 城市ID：127",
    "title": "长治市",
    "py": "changzhishi"
  },
  {
    "description":  " 城市ID：128",
    "title": "绥化市",
    "py": "suihuashi"
  },
  {
    "description":  " 城市ID：129",
    "title": "牡丹江市",
    "py": "mudanjiangshi"
  },
  {
    "description":  " 城市ID：130",
    "title": "四平市",
    "py": "sipingshi"
  },
  {
    "description":  " 城市ID：131",
    "title": "延吉市",
    "py": "yanjishi"
  },
  {
    "description":  " 城市ID：132",
    "title": "中山市",
    "py": "zhongshanshi"
  },
  {
    "description":  " 城市ID：133",
    "title": "惠州市",
    "py": "huizhoushi"
  },
  {
    "description":  " 城市ID：134",
    "title": "柳州市",
    "py": "liuzhoushi"
  },
  {
    "description":  " 城市ID：135",
    "title": "桂林市",
    "py": "guilinshi"
  },
  {
    "description":  " 城市ID：136",
    "title": "大理州",
    "py": "dalizhou"
  },
  {
    "description":  " 城市ID：137",
    "title": "丽江市",
    "py": "lijiangshi"
  },
  {
    "description":  " 城市ID：138",
    "title": "曲靖市",
    "py": "qujingshi"
  },
  {
    "description":  " 城市ID：139",
    "title": "丽水市",
    "py": "lishuishi"
  },
  {
    "description":  " 城市ID：140",
    "title": "衢州市",
    "py": "zhoushi"
  },
  {
    "description":  " 城市ID：141",
    "title": "黄山市",
    "py": "huangshanshi"
  },
  {
    "description":  " 城市ID：142",
    "title": "漳州市",
    "py": "zhangzhoushi"
  },
  {
    "description":  " 城市ID：143",
    "title": "莆田市",
    "py": "putianshi"
  },
  {
    "description":  " 城市ID：144",
    "title": "宁德市",
    "py": "ningdeshi"
  },
  {
    "description":  " 城市ID：145",
    "title": "南平市",
    "py": "nanpingshi"
  },
  {
    "description":  " 城市ID：146",
    "title": "舟山市",
    "py": "zhoushanshi"
  },
  {
    "description":  " 城市ID：147",
    "title": "宿迁市",
    "py": "suqianshi"
  },
  {
    "description":  " 城市ID：148",
    "title": "滁州市",
    "py": "chuzhoushi"
  },
  {
    "description":  " 城市ID：149",
    "title": "安庆市",
    "py": "anqingshi"
  },
  {
    "description":  " 城市ID：150",
    "title": "淮南市",
    "py": "huainanshi"
  },
  {
    "description":  " 城市ID：151",
    "title": "景德镇市",
    "py": "jingdezhenshi"
  },
  {
    "description":  " 城市ID：152",
    "title": "新余市",
    "py": "xinyushi"
  },
  {
    "description":  " 城市ID：153",
    "title": "江门市",
    "py": "jiangmenshi"
  },
  {
    "description":  " 城市ID：154",
    "title": "揭阳市",
    "py": "jieyangshi"
  },
  {
    "description":  " 城市ID：155",
    "title": "茂名市",
    "py": "maomingshi"
  },
  {
    "description":  " 城市ID：156",
    "title": "梅州市",
    "py": "meizhoushi"
  },
  {
    "description":  " 城市ID：157",
    "title": "清远市",
    "py": "qingyuanshi"
  },
  {
    "description":  " 城市ID：158",
    "title": "汕头市",
    "py": "shantoushi"
  },
  {
    "description":  " 城市ID：159",
    "title": "湛江市",
    "py": "zhanjiangshi"
  },
  {
    "description":  " 城市ID：160",
    "title": "肇庆市",
    "py": "zhaoqingshi"
  },
  {
    "description":  " 城市ID：161",
    "title": "北海市",
    "py": "beihaishi"
  },
  {
    "description":  " 城市ID：162",
    "title": "玉林市",
    "py": "yulinshi"
  },
  {
    "description":  " 城市ID：163",
    "title": "丹东市",
    "py": "dandongshi"
  },
  {
    "description":  " 城市ID：164",
    "title": "阜新市",
    "py": "fuxinshi"
  },
  {
    "description":  " 城市ID：165",
    "title": "盘锦市",
    "py": "panjinshi"
  },
  {
    "description":  " 城市ID：166",
    "title": "滨州市",
    "py": "binzhoushi"
  },
  {
    "description":  " 城市ID：167",
    "title": "日照市",
    "py": "rizhaoshi"
  },
  {
    "description":  " 城市ID：168",
    "title": "枣庄市",
    "py": "zaozhuangshi"
  },
  {
    "description":  " 城市ID：169",
    "title": "天水市",
    "py": "tianshuishi"
  },
  {
    "description":  " 城市ID：170",
    "title": "宝鸡市",
    "py": "baojishi"
  },
  {
    "description":  " 城市ID：171",
    "title": "延安市",
    "py": "yananshi"
  },
  {
    "description":  " 城市ID：172",
    "title": "榆林市",
    "py": "yulinshi"
  },
  {
    "description":  " 城市ID：173",
    "title": "德阳市",
    "py": "deyangshi"
  },
  {
    "description":  " 城市ID：174",
    "title": "安阳市",
    "py": "anyangshi"
  },
  {
    "description":  " 城市ID：175",
    "title": "焦作市",
    "py": "jiaozuoshi"
  },
  {
    "description":  " 城市ID：176",
    "title": "濮阳市",
    "py": "yangshi"
  },
  {
    "description":  " 城市ID：177",
    "title": "商丘市",
    "py": "shangqiushi"
  },
  {
    "description":  " 城市ID：178",
    "title": "拉萨市",
    "py": "lasashi"
  },
  {
    "description":  " 城市ID：179",
    "title": "喀什地区",
    "py": "kashidiqu"
  },
  {
    "description":  " 城市ID：180",
    "title": "克拉玛依市",
    "py": "kelamayishi"
  },
  {
    "description":  " 城市ID：181",
    "title": "石河子市",
    "py": "shihezishi"
  },
  {
    "description":  " 城市ID：182",
    "title": "宣城市",
    "py": "xuanchengshi"
  },
  {
    "description":  " 城市ID：183",
    "title": "淮北市",
    "py": "huaibeishi"
  },
  {
    "description":  " 城市ID：184",
    "title": "铜陵市",
    "py": "tonglingshi"
  },
  {
    "description":  " 城市ID：185",
    "title": "宿州市",
    "py": "suzhoushi"
  },
  {
    "description":  " 城市ID：186",
    "title": "六安市",
    "py": "liuanshi"
  },
  {
    "description":  " 城市ID：187",
    "title": "池州市",
    "py": "chizhoushi"
  },
  {
    "description":  " 城市ID：188",
    "title": "阜阳市",
    "py": "fuyangshi"
  },
  {
    "description":  " 城市ID：189",
    "title": "亳州市",
    "py": "zhoushi"
  },
  {
    "description":  " 城市ID：190",
    "title": "晋城市",
    "py": "jinchengshi"
  },
  {
    "description":  " 城市ID：191",
    "title": "朔州市",
    "py": "shuozhoushi"
  },
  {
    "description":  " 城市ID：192",
    "title": "忻州市",
    "py": "xinzhoushi"
  },
  {
    "description":  " 城市ID：193",
    "title": "临汾市",
    "py": "linfenshi"
  },
  {
    "description":  " 城市ID：194",
    "title": "吕梁市",
    "py": "lvliangshi"
  },
  {
    "description":  " 城市ID：195",
    "title": "乌海市",
    "py": "wuhaishi"
  },
  {
    "description":  " 城市ID：196",
    "title": "赤峰市",
    "py": "chifengshi"
  },
  {
    "description":  " 城市ID：197",
    "title": "通辽市",
    "py": "tongliaoshi"
  },
  {
    "description":  " 城市ID：198",
    "title": "呼伦贝尔市",
    "py": "hulunbeiershi"
  },
  {
    "description":  " 城市ID：199",
    "title": "巴彦淖尔市",
    "py": "bayannaoershi"
  },
  {
    "description":  " 城市ID：200",
    "title": "乌兰察布市",
    "py": "wulanchabushi"
  },
  {
    "description":  " 城市ID：201",
    "title": "锡林郭勒盟",
    "py": "xilinguolemeng"
  },
  {
    "description":  " 城市ID：202",
    "title": "阿拉善盟",
    "py": "alashanmeng"
  },
  {
    "description":  " 城市ID：203",
    "title": "兴安盟",
    "py": "xinganmeng"
  },
  {
    "description":  " 城市ID：204",
    "title": "巢湖市",
    "py": "chaohushi"
  },
  {
    "description":  " 城市ID：205",
    "title": "朝阳市",
    "py": "chaoyangshi"
  },
  {
    "description":  " 城市ID：206",
    "title": "辽源市",
    "py": "liaoyuanshi"
  },
  {
    "description":  " 城市ID：207",
    "title": "通化市",
    "py": "tonghuashi"
  },
  {
    "description":  " 城市ID：208",
    "title": "白山市",
    "py": "baishanshi"
  },
  {
    "description":  " 城市ID：209",
    "title": "松原市",
    "py": "songyuanshi"
  },
  {
    "description":  " 城市ID：210",
    "title": "白城市",
    "py": "baichengshi"
  },
  {
    "description":  " 城市ID：211",
    "title": "鸡西市",
    "py": "jixishi"
  },
  {
    "description":  " 城市ID：212",
    "title": "鹤岗市",
    "py": "hegangshi"
  },
  {
    "description":  " 城市ID：213",
    "title": "双鸭山市",
    "py": "shuangyashanshi"
  },
  {
    "description":  " 城市ID：214",
    "title": "伊春市",
    "py": "yichunshi"
  },
  {
    "description":  " 城市ID：215",
    "title": "佳木斯市",
    "py": "jiamusishi"
  },
  {
    "description":  " 城市ID：216",
    "title": "七台河市",
    "py": "qitaiheshi"
  },
  {
    "description":  " 城市ID：217",
    "title": "黑河市",
    "py": "heiheshi"
  },
  {
    "description":  " 城市ID：218",
    "title": "大兴安岭地区",
    "py": "daxinganlingdiqu"
  },
  {
    "description":  " 城市ID：219",
    "title": "萍乡市",
    "py": "pingxiangshi"
  },
  {
    "description":  " 城市ID：220",
    "title": "鹰潭市",
    "py": "yingtanshi"
  },
  {
    "description":  " 城市ID：221",
    "title": "吉安市",
    "py": "jianshi"
  },
  {
    "description":  " 城市ID：222",
    "title": "宜春市",
    "py": "yichunshi"
  },
  {
    "description":  " 城市ID：223",
    "title": "抚州市",
    "py": "fuzhoushi"
  },
  {
    "description":  " 城市ID：224",
    "title": "上饶市",
    "py": "shangraoshi"
  },
  {
    "description":  " 城市ID：225",
    "title": "三明市",
    "py": "sanmingshi"
  },
  {
    "description":  " 城市ID：226",
    "title": "龙岩市",
    "py": "longyanshi"
  },
  {
    "description":  " 城市ID：227",
    "title": "黄石市",
    "py": "huangshishi"
  },
  {
    "description":  " 城市ID：228",
    "title": "十堰市",
    "py": "shiyanshi"
  },
  {
    "description":  " 城市ID：229",
    "title": "荆门市",
    "py": "jingmenshi"
  },
  {
    "description":  " 城市ID：230",
    "title": "鄂州市",
    "py": "ezhoushi"
  },
  {
    "description":  " 城市ID：231",
    "title": "孝感市",
    "py": "xiaoganshi"
  },
  {
    "description":  " 城市ID：232",
    "title": "黄冈市",
    "py": "huanggangshi"
  },
  {
    "description":  " 城市ID：233",
    "title": "咸宁市",
    "py": "xianningshi"
  },
  {
    "description":  " 城市ID：234",
    "title": "随州市",
    "py": "suizhoushi"
  },
  {
    "description":  " 城市ID：235",
    "title": "恩施州",
    "py": "enshizhou"
  },
  {
    "description":  " 城市ID：236",
    "title": "仙桃市",
    "py": "xiantaoshi"
  },
  {
    "description":  " 城市ID：237",
    "title": "天门市",
    "py": "tianmenshi"
  },
  {
    "description":  " 城市ID：238",
    "title": "潜江市",
    "py": "qianjiangshi"
  },
  {
    "description":  " 城市ID：239",
    "title": "神农架林区",
    "py": "shennongjialinqu"
  },
  {
    "description":  " 城市ID：240",
    "title": "邵阳市",
    "py": "shaoyangshi"
  },
  {
    "description":  " 城市ID：241",
    "title": "张家界市",
    "py": "zhangjiajieshi"
  },
  {
    "description":  " 城市ID：242",
    "title": "益阳市",
    "py": "yiyangshi"
  },
  {
    "description":  " 城市ID：243",
    "title": "永州市",
    "py": "yongzhoushi"
  },
  {
    "description":  " 城市ID：244",
    "title": "怀化市",
    "py": "huaihuashi"
  },
  {
    "description":  " 城市ID：245",
    "title": "娄底市",
    "py": "loudishi"
  },
  {
    "description":  " 城市ID：246",
    "title": "湘西州",
    "py": "xiangxizhou"
  },
  {
    "description":  " 城市ID：247",
    "title": "鹤壁市",
    "py": "hebishi"
  },
  {
    "description":  " 城市ID：248",
    "title": "漯河市",
    "py": "heshi"
  },
  {
    "description":  " 城市ID：249",
    "title": "三门峡市",
    "py": "sanmenxiashi"
  },
  {
    "description":  " 城市ID：250",
    "title": "信阳市",
    "py": "xinyangshi"
  },
  {
    "description":  " 城市ID：251",
    "title": "驻马店市",
    "py": "zhumadianshi"
  },
  {
    "description":  " 城市ID：252",
    "title": "济源市",
    "py": "jiyuanshi"
  },
  {
    "description":  " 城市ID：253",
    "title": "韶关市",
    "py": "shaoguanshi"
  },
  {
    "description":  " 城市ID：254",
    "title": "河源市",
    "py": "heyuanshi"
  },
  {
    "description":  " 城市ID：255",
    "title": "汕尾市",
    "py": "shanweishi"
  },
  {
    "description":  " 城市ID：256",
    "title": "阳江市",
    "py": "yangjiangshi"
  },
  {
    "description":  " 城市ID：257",
    "title": "潮州市",
    "py": "chaozhoushi"
  },
  {
    "description":  " 城市ID：258",
    "title": "云浮市",
    "py": "yunfushi"
  },
  {
    "description":  " 城市ID：259",
    "title": "梧州市",
    "py": "wuzhoushi"
  },
  {
    "description":  " 城市ID：260",
    "title": "防城港市",
    "py": "fangchenggangshi"
  },
  {
    "description":  " 城市ID：261",
    "title": "钦州市",
    "py": "qinzhoushi"
  },
  {
    "description":  " 城市ID：262",
    "title": "贵港市",
    "py": "guigangshi"
  },
  {
    "description":  " 城市ID：263",
    "title": "百色市",
    "py": "baiseshi"
  },
  {
    "description":  " 城市ID：264",
    "title": "贺州市",
    "py": "hezhoushi"
  },
  {
    "description":  " 城市ID：265",
    "title": "河池市",
    "py": "hechishi"
  },
  {
    "description":  " 城市ID：266",
    "title": "来宾市",
    "py": "laibinshi"
  },
  {
    "description":  " 城市ID：267",
    "title": "崇左市",
    "py": "chongzuoshi"
  },
  {
    "description":  " 城市ID：268",
    "title": "五指山市",
    "py": "wuzhishanshi"
  },
  {
    "description":  " 城市ID：269",
    "title": "琼海市",
    "py": "qionghaishi"
  },
  {
    "description":  " 城市ID：270",
    "title": "儋州市",
    "py": "zhoushi"
  },
  {
    "description":  " 城市ID：271",
    "title": "文昌市",
    "py": "wenchangshi"
  },
  {
    "description":  " 城市ID：272",
    "title": "万宁市",
    "py": "wanningshi"
  },
  {
    "description":  " 城市ID：273",
    "title": "东方市",
    "py": "dongfangshi"
  },
  {
    "description":  " 城市ID：274",
    "title": "澄迈县",
    "py": "chengmaixian"
  },
  {
    "description":  " 城市ID：275",
    "title": "定安县",
    "py": "dinganxian"
  },
  {
    "description":  " 城市ID：276",
    "title": "屯昌县",
    "py": "tunchangxian"
  },
  {
    "description":  " 城市ID：277",
    "title": "临高县",
    "py": "lingaoxian"
  },
  {
    "description":  " 城市ID：278",
    "title": "白沙黎族自治县",
    "py": "baishalizuzizhixian"
  },
  {
    "description":  " 城市ID：279",
    "title": "自贡市",
    "py": "zigongshi"
  },
  {
    "description":  " 城市ID：280",
    "title": "广元市",
    "py": "guangyuanshi"
  },
  {
    "description":  " 城市ID：281",
    "title": "遂宁市",
    "py": "suiningshi"
  },
  {
    "description":  " 城市ID：282",
    "title": "内江市",
    "py": "neijiangshi"
  },
  {
    "description":  " 城市ID：283",
    "title": "乐山市",
    "py": "leshanshi"
  },
  {
    "description":  " 城市ID：284",
    "title": "广安市",
    "py": "guanganshi"
  },
  {
    "description":  " 城市ID：285",
    "title": "达州市",
    "py": "dazhoushi"
  },
  {
    "description":  " 城市ID：286",
    "title": "眉山市",
    "py": "meishanshi"
  },
  {
    "description":  " 城市ID：287",
    "title": "雅安市",
    "py": "yaanshi"
  },
  {
    "description":  " 城市ID：288",
    "title": "巴中市",
    "py": "bazhongshi"
  },
  {
    "description":  " 城市ID：289",
    "title": "资阳市",
    "py": "ziyangshi"
  },
  {
    "description":  " 城市ID：290",
    "title": "阿坝州",
    "py": "abazhou"
  },
  {
    "description":  " 城市ID：291",
    "title": "甘孜州",
    "py": "ganzizhou"
  },
  {
    "description":  " 城市ID：292",
    "title": "凉山州",
    "py": "liangshanzhou"
  },
  {
    "description":  " 城市ID：293",
    "title": "六盘水市",
    "py": "liupanshuishi"
  },
  {
    "description":  " 城市ID：294",
    "title": "安顺市",
    "py": "anshunshi"
  },
  {
    "description":  " 城市ID：295",
    "title": "铜仁地区",
    "py": "tongrendiqu"
  },
  {
    "description":  " 城市ID：296",
    "title": "毕节地区",
    "py": "bijiediqu"
  },
  {
    "description":  " 城市ID：297",
    "title": "黔西南州",
    "py": "qianxinanzhou"
  },
  {
    "description":  " 城市ID：298",
    "title": "黔东南州",
    "py": "qiandongnanzhou"
  },
  {
    "description":  " 城市ID：299",
    "title": "黔南州",
    "py": "qiannanzhou"
  },
  {
    "description":  " 城市ID：300",
    "title": "玉溪市",
    "py": "yuxishi"
  },
  {
    "description":  " 城市ID：301",
    "title": "保山市",
    "py": "baoshanshi"
  },
  {
    "description":  " 城市ID：302",
    "title": "昭通市",
    "py": "zhaotongshi"
  },
  {
    "description":  " 城市ID：303",
    "title": "普洱市",
    "py": "puershi"
  },
  {
    "description":  " 城市ID：304",
    "title": "临沧市",
    "py": "lincangshi"
  },
  {
    "description":  " 城市ID：305",
    "title": "文山州",
    "py": "wenshanzhou"
  },
  {
    "description":  " 城市ID：306",
    "title": "红河州",
    "py": "honghezhou"
  },
  {
    "description":  " 城市ID：307",
    "title": "西双版纳州",
    "py": "xishuangbannazhou"
  },
  {
    "description":  " 城市ID：308",
    "title": "楚雄州",
    "py": "chuxiongzhou"
  },
  {
    "description":  " 城市ID：309",
    "title": "德宏州",
    "py": "dehongzhou"
  },
  {
    "description":  " 城市ID：310",
    "title": "怒江州",
    "py": "nujiangzhou"
  },
  {
    "description":  " 城市ID：311",
    "title": "迪庆州",
    "py": "diqingzhou"
  },
  {
    "description":  " 城市ID：312",
    "title": "那曲地区",
    "py": "naqudiqu"
  },
  {
    "description":  " 城市ID：313",
    "title": "昌都地区",
    "py": "changdudiqu"
  },
  {
    "description":  " 城市ID：314",
    "title": "山南地区",
    "py": "shannandiqu"
  },
  {
    "description":  " 城市ID：315",
    "title": "日喀则地区",
    "py": "rikazediqu"
  },
  {
    "description":  " 城市ID：316",
    "title": "阿里地区",
    "py": "alidiqu"
  },
  {
    "description":  " 城市ID：317",
    "title": "林芝地区",
    "py": "linzhidiqu"
  },
  {
    "description":  " 城市ID：318",
    "title": "铜川市",
    "py": "tongchuanshi"
  },
  {
    "description":  " 城市ID：319",
    "title": "渭南市",
    "py": "weinanshi"
  },
  {
    "description":  " 城市ID：320",
    "title": "安康市",
    "py": "ankangshi"
  },
  {
    "description":  " 城市ID：321",
    "title": "商洛市",
    "py": "shangluoshi"
  },
  {
    "description":  " 城市ID：322",
    "title": "金昌市",
    "py": "jinchangshi"
  },
  {
    "description":  " 城市ID：323",
    "title": "白银市",
    "py": "baiyinshi"
  },
  {
    "description":  " 城市ID：324",
    "title": "嘉峪关市",
    "py": "jiayuguanshi"
  },
  {
    "description":  " 城市ID：325",
    "title": "武威市",
    "py": "wuweishi"
  },
  {
    "description":  " 城市ID：326",
    "title": "张掖市",
    "py": "zhangyeshi"
  },
  {
    "description":  " 城市ID：327",
    "title": "平凉市",
    "py": "pingliangshi"
  },
  {
    "description":  " 城市ID：328",
    "title": "酒泉市",
    "py": "jiuquanshi"
  },
  {
    "description":  " 城市ID：329",
    "title": "庆阳市",
    "py": "qingyangshi"
  },
  {
    "description":  " 城市ID：330",
    "title": "定西市",
    "py": "dingxishi"
  },
  {
    "description":  " 城市ID：331",
    "title": "陇南市",
    "py": "longnanshi"
  },
  {
    "description":  " 城市ID：332",
    "title": "临夏州",
    "py": "linxiazhou"
  },
  {
    "description":  " 城市ID：333",
    "title": "甘南州",
    "py": "gannanzhou"
  },
  {
    "description":  " 城市ID：334",
    "title": "石嘴山市",
    "py": "shizuishanshi"
  },
  {
    "description":  " 城市ID：335",
    "title": "吴忠市",
    "py": "wuzhongshi"
  },
  {
    "description":  " 城市ID：336",
    "title": "固原市",
    "py": "guyuanshi"
  },
  {
    "description":  " 城市ID：337",
    "title": "中卫市",
    "py": "zhongweishi"
  },
  {
    "description":  " 城市ID：338",
    "title": "海东地区",
    "py": "haidongdiqu"
  },
  {
    "description":  " 城市ID：339",
    "title": "海北州",
    "py": "haibeizhou"
  },
  {
    "description":  " 城市ID：340",
    "title": "黄南州",
    "py": "huangnanzhou"
  },
  {
    "description":  " 城市ID：341",
    "title": "海南州",
    "py": "hainanzhou"
  },
  {
    "description":  " 城市ID：342",
    "title": "果洛州",
    "py": "guoluozhou"
  },
  {
    "description":  " 城市ID：343",
    "title": "玉树州",
    "py": "yushuzhou"
  },
  {
    "description":  " 城市ID：344",
    "title": "海西州",
    "py": "haixizhou"
  },
  {
    "description":  " 城市ID：345",
    "title": "吐鲁番地区",
    "py": "tulufandiqu"
  },
  {
    "description":  " 城市ID：346",
    "title": "哈密地区",
    "py": "hamidiqu"
  },
  {
    "description":  " 城市ID：347",
    "title": "和田地区",
    "py": "hetiandiqu"
  },
  {
    "description":  " 城市ID：348",
    "title": "阿克苏地区",
    "py": "akesudiqu"
  },
  {
    "description":  " 城市ID：349",
    "title": "克孜勒苏柯州",
    "py": "kezilesukezhou"
  },
  {
    "description":  " 城市ID：350",
    "title": "巴音郭楞州",
    "py": "bayinguolengzhou"
  },
  {
    "description":  " 城市ID：351",
    "title": "昌吉州",
    "py": "changjizhou"
  },
  {
    "description":  " 城市ID：352",
    "title": "博尔塔拉州",
    "py": "boertalazhou"
  },
  {
    "description":  " 城市ID：353",
    "title": "伊犁州",
    "py": "yilizhou"
  },
  {
    "description":  " 城市ID：354",
    "title": "塔城地区",
    "py": "tachengdiqu"
  },
  {
    "description":  " 城市ID：355",
    "title": "阿勒泰地区",
    "py": "aletaidiqu"
  },
  {
    "description":  " 城市ID：356",
    "title": "阿拉尔市",
    "py": "alaershi"
  },
  {
    "description":  " 城市ID：357",
    "title": "香港",
    "py": "xianggang"
  },
  {
    "description":  " 城市ID：358",
    "title": "澳门",
    "py": "aomen"
  },
  {
    "description":  " 城市ID：359",
    "title": "五家渠市",
    "py": "wujiaqushi"
  },
  {
    "description":  " 城市ID：360",
    "title": "陵水黎族自治县",
    "py": "lingshuilizuzizhixian"
  },
  {
    "description":  " 城市ID：361",
    "title": "三沙市",
    "py": "sanshashi"
  },
  {
    "description":  " 城市ID：362",
    "title": "乐东黎族自治县",
    "py": "ledonglizuzizhixian"
  },
  {
    "description":  " 城市ID：363",
    "title": "昌江黎族自治县",
    "py": "changjianglizuzizhixian"
  },
  {
    "description":  " 城市ID：364",
    "title": "保亭黎族苗族自治县",
    "py": "baotinglizumiaozuzizhixian"
  },
  {
    "description":  " 城市ID：365",
    "title": "琼中黎族苗族自治县",
    "py": "qiongzhonglizumiaozuzizhixian"
  },
  {
    "description":  " 城市ID：366",
    "title": "图木舒克市",
    "py": "tumushukeshi"
  },
  {
    "description":  " 城市ID：372",
    "title": "杨凌示范区",
    "py": "yanglingshifanqu"
  },
  {
    "description":  " 城市ID：1801",
    "title": "重庆主城",
    "py": "zhongqingzhucheng"
  },
  {
    "description":  " 城市ID：1802",
    "title": "重庆郊县",
    "py": "zhongqingjiaoxian"
  },
  {
    "description":  " 城市ID：100001",
    "title": "华北区域",
    "py": "huabeiquyu"
  },
  {
    "description":  " 城市ID：100002",
    "title": "广东区域",
    "py": "guangdongquyu"
  },
  {
    "description":  " 城市ID：100003",
    "title": "中南区域",
    "py": "zhongnanquyu"
  },
  {
    "description":  " 城市ID：100004",
    "title": "中西区域",
    "py": "zhongxiquyu"
  },
  {
    "description":  " 城市ID：100005",
    "title": "西南区域",
    "py": "xinanquyu"
  },
  {
    "description":  " 城市ID：100006",
    "title": "沪苏区域",
    "py": "husuquyu"
  },
  {
    "description":  " 城市ID：100008",
    "title": "鲁津冀区域",
    "py": "lujinjiquyu"
  },
  {
    "description":  " 城市ID：110001",
    "title": "昆玉市",
    "py": "kunyushi"
  }
]

export {
    cityIds
}