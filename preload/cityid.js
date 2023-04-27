/*
 * @Author: zq nickyangziqi@didiglobal.com
 * @Date: 2023-04-26 17:44:06
 * @LastEditors: zq nickyangziqi@didiglobal.com
 * @LastEditTime: 2023-04-27 14:04:41
 * @FilePath: /utools-plugin/preload/cityid.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


const cityIds = [
  {
    "description":  "0",
    "title": "全国",
    "py": "zhanquchengshi"
  },
  {
    "description":  "1",
    "title": "北京市",
    "py": "beijingshi"
  },
  {
    "description":  "2",
    "title": "深圳市",
    "py": "shenshi"
  },
  {
    "description":  "3",
    "title": "广州市",
    "py": "guangzhoushi"
  },
  {
    "description":  "4",
    "title": "上海市",
    "py": "shanghaishi"
  },
  {
    "description":  "5",
    "title": "杭州市",
    "py": "hangzhoushi"
  },
  {
    "description":  "6",
    "title": "武汉市",
    "py": "wuhanshi"
  },
  {
    "description":  "7",
    "title": "天津市",
    "py": "tianjinshi"
  },
  {
    "description":  "8",
    "title": "沈阳市",
    "py": "shenyangshi"
  },
  {
    "description":  "9",
    "title": "郑州市",
    "py": "zhengzhoushi"
  },
  {
    "description":  "10",
    "title": "西安市",
    "py": "xianshi"
  },
  {
    "description":  "11",
    "title": "南京市",
    "py": "nanjingshi"
  },
  {
    "description":  "12",
    "title": "济南市",
    "py": "jinanshi"
  },
  {
    "description":  "13",
    "title": "青岛市",
    "py": "qingdaoshi"
  },
  {
    "description":  "14",
    "title": "大连市",
    "py": "dalianshi"
  },
  {
    "description":  "15",
    "title": "合肥市",
    "py": "hefeishi"
  },
  {
    "description":  "16",
    "title": "哈尔滨市",
    "py": "haerbinshi"
  },
  {
    "description":  "17",
    "title": "成都市",
    "py": "chengdushi"
  },
  {
    "description":  "18",
    "title": "重庆市",
    "py": "zhongqingshi"
  },
  {
    "description":  "19",
    "title": "昆明市",
    "py": "kunmingshi"
  },
  {
    "description":  "20",
    "title": "宁波市",
    "py": "ningboshi"
  },
  {
    "description":  "21",
    "title": "东莞市",
    "py": "dongshi"
  },
  {
    "description":  "22",
    "title": "石家庄市",
    "py": "shijiazhuangshi"
  },
  {
    "description":  "23",
    "title": "苏州市",
    "py": "suzhoushi"
  },
  {
    "description":  "24",
    "title": "长沙市",
    "py": "changshashi"
  },
  {
    "description":  "25",
    "title": "长春市",
    "py": "changchunshi"
  },
  {
    "description":  "26",
    "title": "太原市",
    "py": "taiyuanshi"
  },
  {
    "description":  "27",
    "title": "洛阳市",
    "py": "luoyangshi"
  },
  {
    "description":  "28",
    "title": "西宁市",
    "py": "xiningshi"
  },
  {
    "description":  "29",
    "title": "烟台市",
    "py": "yantaishi"
  },
  {
    "description":  "30",
    "title": "兰州市",
    "py": "lanzhoushi"
  },
  {
    "description":  "32",
    "title": "厦门市",
    "py": "xiamenshi"
  },
  {
    "description":  "33",
    "title": "南宁市",
    "py": "nanningshi"
  },
  {
    "description":  "34",
    "title": "福州市",
    "py": "fuzhoushi"
  },
  {
    "description":  "35",
    "title": "泉州市",
    "py": "quanzhoushi"
  },
  {
    "description":  "36",
    "title": "佛山市",
    "py": "foshanshi"
  },
  {
    "description":  "37",
    "title": "三亚市",
    "py": "sanyashi"
  },
  {
    "description":  "38",
    "title": "南昌市",
    "py": "nanchangshi"
  },
  {
    "description":  "39",
    "title": "徐州市",
    "py": "xuzhoushi"
  },
  {
    "description":  "40",
    "title": "唐山市",
    "py": "tangshanshi"
  },
  {
    "description":  "41",
    "title": "呼和浩特市",
    "py": "huhehaoteshi"
  },
  {
    "description":  "42",
    "title": "威海市",
    "py": "weihaishi"
  },
  {
    "description":  "43",
    "title": "鄂尔多斯市",
    "py": "eerduosishi"
  },
  {
    "description":  "44",
    "title": "遵义市",
    "py": "zunyishi"
  },
  {
    "description":  "45",
    "title": "常州市",
    "py": "changzhoushi"
  },
  {
    "description":  "46",
    "title": "廊坊市",
    "py": "langfangshi"
  },
  {
    "description":  "47",
    "title": "无锡市",
    "py": "wuxishi"
  },
  {
    "description":  "48",
    "title": "大庆市",
    "py": "daqingshi"
  },
  {
    "description":  "49",
    "title": "银川市",
    "py": "yinchuanshi"
  },
  {
    "description":  "50",
    "title": "绵阳市",
    "py": "mianyangshi"
  },
  {
    "description":  "51",
    "title": "宜昌市",
    "py": "yichangshi"
  },
  {
    "description":  "52",
    "title": "乌鲁木齐市",
    "py": "wulumuqishi"
  },
  {
    "description":  "53",
    "title": "南充市",
    "py": "nanchongshi"
  },
  {
    "description":  "54",
    "title": "株洲市",
    "py": "zhuzhoushi"
  },
  {
    "description":  "55",
    "title": "湘潭市",
    "py": "xiangtanshi"
  },
  {
    "description":  "56",
    "title": "岳阳市",
    "py": "yueyangshi"
  },
  {
    "description":  "57",
    "title": "淄博市",
    "py": "ziboshi"
  },
  {
    "description":  "58",
    "title": "临沂市",
    "py": "linyishi"
  },
  {
    "description":  "59",
    "title": "沧州市",
    "py": "cangzhoushi"
  },
  {
    "description":  "60",
    "title": "邯郸市",
    "py": "handanshi"
  },
  {
    "description":  "61",
    "title": "秦皇岛市",
    "py": "qinhuangdaoshi"
  },
  {
    "description":  "62",
    "title": "保定市",
    "py": "baodingshi"
  },
  {
    "description":  "63",
    "title": "包头市",
    "py": "baotoushi"
  },
  {
    "description":  "64",
    "title": "鞍山市",
    "py": "anshanshi"
  },
  {
    "description":  "65",
    "title": "齐齐哈尔市",
    "py": "qiqihaershi"
  },
  {
    "description":  "66",
    "title": "抚顺市",
    "py": "fushunshi"
  },
  {
    "description":  "67",
    "title": "邢台市",
    "py": "xingtaishi"
  },
  {
    "description":  "68",
    "title": "锦州市",
    "py": "jinzhoushi"
  },
  {
    "description":  "69",
    "title": "铁岭市",
    "py": "tielingshi"
  },
  {
    "description":  "70",
    "title": "葫芦岛市",
    "py": "huludaoshi"
  },
  {
    "description":  "71",
    "title": "晋中市",
    "py": "jinzhongshi"
  },
  {
    "description":  "72",
    "title": "承德市",
    "py": "chengdeshi"
  },
  {
    "description":  "73",
    "title": "东营市",
    "py": "dongyingshi"
  },
  {
    "description":  "74",
    "title": "吉林市",
    "py": "jilinshi"
  },
  {
    "description":  "75",
    "title": "辽阳市",
    "py": "liaoyangshi"
  },
  {
    "description":  "76",
    "title": "营口市",
    "py": "yingkoushi"
  },
  {
    "description":  "77",
    "title": "本溪市",
    "py": "benxishi"
  },
  {
    "description":  "78",
    "title": "张家口市",
    "py": "zhangjiakoushi"
  },
  {
    "description":  "79",
    "title": "济宁市",
    "py": "jiningshi"
  },
  {
    "description":  "80",
    "title": "衡水市",
    "py": "hengshuishi"
  },
  {
    "description":  "81",
    "title": "潍坊市",
    "py": "weifangshi"
  },
  {
    "description":  "82",
    "title": "贵阳市",
    "py": "guiyangshi"
  },
  {
    "description":  "83",
    "title": "海口市",
    "py": "haikoushi"
  },
  {
    "description":  "84",
    "title": "珠海市",
    "py": "zhuhaishi"
  },
  {
    "description":  "85",
    "title": "温州市",
    "py": "wenzhoushi"
  },
  {
    "description":  "86",
    "title": "金华市",
    "py": "jinhuashi"
  },
  {
    "description":  "87",
    "title": "台州市",
    "py": "taizhoushi"
  },
  {
    "description":  "88",
    "title": "嘉兴市",
    "py": "jiaxingshi"
  },
  {
    "description":  "89",
    "title": "绍兴市",
    "py": "shaoxingshi"
  },
  {
    "description":  "90",
    "title": "湖州市",
    "py": "huzhoushi"
  },
  {
    "description":  "91",
    "title": "扬州市",
    "py": "yangzhoushi"
  },
  {
    "description":  "92",
    "title": "南通市",
    "py": "nantongshi"
  },
  {
    "description":  "93",
    "title": "镇江市",
    "py": "zhenjiangshi"
  },
  {
    "description":  "94",
    "title": "盐城市",
    "py": "yanchengshi"
  },
  {
    "description":  "95",
    "title": "泰州市",
    "py": "taizhoushi"
  },
  {
    "description":  "96",
    "title": "连云港市",
    "py": "lianyungangshi"
  },
  {
    "description":  "97",
    "title": "淮安市",
    "py": "huaianshi"
  },
  {
    "description":  "98",
    "title": "芜湖市",
    "py": "wuhushi"
  },
  {
    "description":  "99",
    "title": "马鞍山市",
    "py": "maanshanshi"
  },
  {
    "description":  "100",
    "title": "蚌埠市",
    "py": "bangbushi"
  },
  {
    "description":  "101",
    "title": "九江市",
    "py": "jiujiangshi"
  },
  {
    "description":  "102",
    "title": "赣州市",
    "py": "ganzhoushi"
  },
  {
    "description":  "103",
    "title": "平顶山市",
    "py": "pingdingshanshi"
  },
  {
    "description":  "104",
    "title": "运城市",
    "py": "yunchengshi"
  },
  {
    "description":  "105",
    "title": "衡阳市",
    "py": "hengyangshi"
  },
  {
    "description":  "106",
    "title": "常德市",
    "py": "changdeshi"
  },
  {
    "description":  "107",
    "title": "郴州市",
    "py": "chenzhoushi"
  },
  {
    "description":  "108",
    "title": "襄阳市",
    "py": "xiangyangshi"
  },
  {
    "description":  "109",
    "title": "荆州市",
    "py": "jingzhoushi"
  },
  {
    "description":  "110",
    "title": "开封市",
    "py": "kaifengshi"
  },
  {
    "description":  "111",
    "title": "新乡市",
    "py": "xinxiangshi"
  },
  {
    "description":  "112",
    "title": "许昌市",
    "py": "xuchangshi"
  },
  {
    "description":  "113",
    "title": "南阳市",
    "py": "nanyangshi"
  },
  {
    "description":  "114",
    "title": "周口市",
    "py": "zhoukoushi"
  },
  {
    "description":  "115",
    "title": "汉中市",
    "py": "hanzhongshi"
  },
  {
    "description":  "116",
    "title": "咸阳市",
    "py": "xianyangshi"
  },
  {
    "description":  "117",
    "title": "泸州市",
    "py": "zhoushi"
  },
  {
    "description":  "118",
    "title": "宜宾市",
    "py": "yibinshi"
  },
  {
    "description":  "119",
    "title": "攀枝花市",
    "py": "panzhihuashi"
  },
  {
    "description":  "120",
    "title": "德州市",
    "py": "dezhoushi"
  },
  {
    "description":  "121",
    "title": "泰安市",
    "py": "taianshi"
  },
  {
    "description":  "122",
    "title": "莱芜市",
    "py": "laiwushi"
  },
  {
    "description":  "123",
    "title": "聊城市",
    "py": "liaochengshi"
  },
  {
    "description":  "124",
    "title": "菏泽市",
    "py": "hezeshi"
  },
  {
    "description":  "125",
    "title": "大同市",
    "py": "datongshi"
  },
  {
    "description":  "126",
    "title": "阳泉市",
    "py": "yangquanshi"
  },
  {
    "description":  "127",
    "title": "长治市",
    "py": "changzhishi"
  },
  {
    "description":  "128",
    "title": "绥化市",
    "py": "suihuashi"
  },
  {
    "description":  "129",
    "title": "牡丹江市",
    "py": "mudanjiangshi"
  },
  {
    "description":  "130",
    "title": "四平市",
    "py": "sipingshi"
  },
  {
    "description":  "131",
    "title": "延吉市",
    "py": "yanjishi"
  },
  {
    "description":  "132",
    "title": "中山市",
    "py": "zhongshanshi"
  },
  {
    "description":  "133",
    "title": "惠州市",
    "py": "huizhoushi"
  },
  {
    "description":  "134",
    "title": "柳州市",
    "py": "liuzhoushi"
  },
  {
    "description":  "135",
    "title": "桂林市",
    "py": "guilinshi"
  },
  {
    "description":  "136",
    "title": "大理州",
    "py": "dalizhou"
  },
  {
    "description":  "137",
    "title": "丽江市",
    "py": "lijiangshi"
  },
  {
    "description":  "138",
    "title": "曲靖市",
    "py": "qujingshi"
  },
  {
    "description":  "139",
    "title": "丽水市",
    "py": "lishuishi"
  },
  {
    "description":  "140",
    "title": "衢州市",
    "py": "zhoushi"
  },
  {
    "description":  "141",
    "title": "黄山市",
    "py": "huangshanshi"
  },
  {
    "description":  "142",
    "title": "漳州市",
    "py": "zhangzhoushi"
  },
  {
    "description":  "143",
    "title": "莆田市",
    "py": "putianshi"
  },
  {
    "description":  "144",
    "title": "宁德市",
    "py": "ningdeshi"
  },
  {
    "description":  "145",
    "title": "南平市",
    "py": "nanpingshi"
  },
  {
    "description":  "146",
    "title": "舟山市",
    "py": "zhoushanshi"
  },
  {
    "description":  "147",
    "title": "宿迁市",
    "py": "suqianshi"
  },
  {
    "description":  "148",
    "title": "滁州市",
    "py": "chuzhoushi"
  },
  {
    "description":  "149",
    "title": "安庆市",
    "py": "anqingshi"
  },
  {
    "description":  "150",
    "title": "淮南市",
    "py": "huainanshi"
  },
  {
    "description":  "151",
    "title": "景德镇市",
    "py": "jingdezhenshi"
  },
  {
    "description":  "152",
    "title": "新余市",
    "py": "xinyushi"
  },
  {
    "description":  "153",
    "title": "江门市",
    "py": "jiangmenshi"
  },
  {
    "description":  "154",
    "title": "揭阳市",
    "py": "jieyangshi"
  },
  {
    "description":  "155",
    "title": "茂名市",
    "py": "maomingshi"
  },
  {
    "description":  "156",
    "title": "梅州市",
    "py": "meizhoushi"
  },
  {
    "description":  "157",
    "title": "清远市",
    "py": "qingyuanshi"
  },
  {
    "description":  "158",
    "title": "汕头市",
    "py": "shantoushi"
  },
  {
    "description":  "159",
    "title": "湛江市",
    "py": "zhanjiangshi"
  },
  {
    "description":  "160",
    "title": "肇庆市",
    "py": "zhaoqingshi"
  },
  {
    "description":  "161",
    "title": "北海市",
    "py": "beihaishi"
  },
  {
    "description":  "162",
    "title": "玉林市",
    "py": "yulinshi"
  },
  {
    "description":  "163",
    "title": "丹东市",
    "py": "dandongshi"
  },
  {
    "description":  "164",
    "title": "阜新市",
    "py": "fuxinshi"
  },
  {
    "description":  "165",
    "title": "盘锦市",
    "py": "panjinshi"
  },
  {
    "description":  "166",
    "title": "滨州市",
    "py": "binzhoushi"
  },
  {
    "description":  "167",
    "title": "日照市",
    "py": "rizhaoshi"
  },
  {
    "description":  "168",
    "title": "枣庄市",
    "py": "zaozhuangshi"
  },
  {
    "description":  "169",
    "title": "天水市",
    "py": "tianshuishi"
  },
  {
    "description":  "170",
    "title": "宝鸡市",
    "py": "baojishi"
  },
  {
    "description":  "171",
    "title": "延安市",
    "py": "yananshi"
  },
  {
    "description":  "172",
    "title": "榆林市",
    "py": "yulinshi"
  },
  {
    "description":  "173",
    "title": "德阳市",
    "py": "deyangshi"
  },
  {
    "description":  "174",
    "title": "安阳市",
    "py": "anyangshi"
  },
  {
    "description":  "175",
    "title": "焦作市",
    "py": "jiaozuoshi"
  },
  {
    "description":  "176",
    "title": "濮阳市",
    "py": "yangshi"
  },
  {
    "description":  "177",
    "title": "商丘市",
    "py": "shangqiushi"
  },
  {
    "description":  "178",
    "title": "拉萨市",
    "py": "lasashi"
  },
  {
    "description":  "179",
    "title": "喀什地区",
    "py": "kashidiqu"
  },
  {
    "description":  "180",
    "title": "克拉玛依市",
    "py": "kelamayishi"
  },
  {
    "description":  "181",
    "title": "石河子市",
    "py": "shihezishi"
  },
  {
    "description":  "182",
    "title": "宣城市",
    "py": "xuanchengshi"
  },
  {
    "description":  "183",
    "title": "淮北市",
    "py": "huaibeishi"
  },
  {
    "description":  "184",
    "title": "铜陵市",
    "py": "tonglingshi"
  },
  {
    "description":  "185",
    "title": "宿州市",
    "py": "suzhoushi"
  },
  {
    "description":  "186",
    "title": "六安市",
    "py": "liuanshi"
  },
  {
    "description":  "187",
    "title": "池州市",
    "py": "chizhoushi"
  },
  {
    "description":  "188",
    "title": "阜阳市",
    "py": "fuyangshi"
  },
  {
    "description":  "189",
    "title": "亳州市",
    "py": "zhoushi"
  },
  {
    "description":  "190",
    "title": "晋城市",
    "py": "jinchengshi"
  },
  {
    "description":  "191",
    "title": "朔州市",
    "py": "shuozhoushi"
  },
  {
    "description":  "192",
    "title": "忻州市",
    "py": "xinzhoushi"
  },
  {
    "description":  "193",
    "title": "临汾市",
    "py": "linfenshi"
  },
  {
    "description":  "194",
    "title": "吕梁市",
    "py": "lvliangshi"
  },
  {
    "description":  "195",
    "title": "乌海市",
    "py": "wuhaishi"
  },
  {
    "description":  "196",
    "title": "赤峰市",
    "py": "chifengshi"
  },
  {
    "description":  "197",
    "title": "通辽市",
    "py": "tongliaoshi"
  },
  {
    "description":  "198",
    "title": "呼伦贝尔市",
    "py": "hulunbeiershi"
  },
  {
    "description":  "199",
    "title": "巴彦淖尔市",
    "py": "bayannaoershi"
  },
  {
    "description":  "200",
    "title": "乌兰察布市",
    "py": "wulanchabushi"
  },
  {
    "description":  "201",
    "title": "锡林郭勒盟",
    "py": "xilinguolemeng"
  },
  {
    "description":  "202",
    "title": "阿拉善盟",
    "py": "alashanmeng"
  },
  {
    "description":  "203",
    "title": "兴安盟",
    "py": "xinganmeng"
  },
  {
    "description":  "204",
    "title": "巢湖市",
    "py": "chaohushi"
  },
  {
    "description":  "205",
    "title": "朝阳市",
    "py": "chaoyangshi"
  },
  {
    "description":  "206",
    "title": "辽源市",
    "py": "liaoyuanshi"
  },
  {
    "description":  "207",
    "title": "通化市",
    "py": "tonghuashi"
  },
  {
    "description":  "208",
    "title": "白山市",
    "py": "baishanshi"
  },
  {
    "description":  "209",
    "title": "松原市",
    "py": "songyuanshi"
  },
  {
    "description":  "210",
    "title": "白城市",
    "py": "baichengshi"
  },
  {
    "description":  "211",
    "title": "鸡西市",
    "py": "jixishi"
  },
  {
    "description":  "212",
    "title": "鹤岗市",
    "py": "hegangshi"
  },
  {
    "description":  "213",
    "title": "双鸭山市",
    "py": "shuangyashanshi"
  },
  {
    "description":  "214",
    "title": "伊春市",
    "py": "yichunshi"
  },
  {
    "description":  "215",
    "title": "佳木斯市",
    "py": "jiamusishi"
  },
  {
    "description":  "216",
    "title": "七台河市",
    "py": "qitaiheshi"
  },
  {
    "description":  "217",
    "title": "黑河市",
    "py": "heiheshi"
  },
  {
    "description":  "218",
    "title": "大兴安岭地区",
    "py": "daxinganlingdiqu"
  },
  {
    "description":  "219",
    "title": "萍乡市",
    "py": "pingxiangshi"
  },
  {
    "description":  "220",
    "title": "鹰潭市",
    "py": "yingtanshi"
  },
  {
    "description":  "221",
    "title": "吉安市",
    "py": "jianshi"
  },
  {
    "description":  "222",
    "title": "宜春市",
    "py": "yichunshi"
  },
  {
    "description":  "223",
    "title": "抚州市",
    "py": "fuzhoushi"
  },
  {
    "description":  "224",
    "title": "上饶市",
    "py": "shangraoshi"
  },
  {
    "description":  "225",
    "title": "三明市",
    "py": "sanmingshi"
  },
  {
    "description":  "226",
    "title": "龙岩市",
    "py": "longyanshi"
  },
  {
    "description":  "227",
    "title": "黄石市",
    "py": "huangshishi"
  },
  {
    "description":  "228",
    "title": "十堰市",
    "py": "shiyanshi"
  },
  {
    "description":  "229",
    "title": "荆门市",
    "py": "jingmenshi"
  },
  {
    "description":  "230",
    "title": "鄂州市",
    "py": "ezhoushi"
  },
  {
    "description":  "231",
    "title": "孝感市",
    "py": "xiaoganshi"
  },
  {
    "description":  "232",
    "title": "黄冈市",
    "py": "huanggangshi"
  },
  {
    "description":  "233",
    "title": "咸宁市",
    "py": "xianningshi"
  },
  {
    "description":  "234",
    "title": "随州市",
    "py": "suizhoushi"
  },
  {
    "description":  "235",
    "title": "恩施州",
    "py": "enshizhou"
  },
  {
    "description":  "236",
    "title": "仙桃市",
    "py": "xiantaoshi"
  },
  {
    "description":  "237",
    "title": "天门市",
    "py": "tianmenshi"
  },
  {
    "description":  "238",
    "title": "潜江市",
    "py": "qianjiangshi"
  },
  {
    "description":  "239",
    "title": "神农架林区",
    "py": "shennongjialinqu"
  },
  {
    "description":  "240",
    "title": "邵阳市",
    "py": "shaoyangshi"
  },
  {
    "description":  "241",
    "title": "张家界市",
    "py": "zhangjiajieshi"
  },
  {
    "description":  "242",
    "title": "益阳市",
    "py": "yiyangshi"
  },
  {
    "description":  "243",
    "title": "永州市",
    "py": "yongzhoushi"
  },
  {
    "description":  "244",
    "title": "怀化市",
    "py": "huaihuashi"
  },
  {
    "description":  "245",
    "title": "娄底市",
    "py": "loudishi"
  },
  {
    "description":  "246",
    "title": "湘西州",
    "py": "xiangxizhou"
  },
  {
    "description":  "247",
    "title": "鹤壁市",
    "py": "hebishi"
  },
  {
    "description":  "248",
    "title": "漯河市",
    "py": "heshi"
  },
  {
    "description":  "249",
    "title": "三门峡市",
    "py": "sanmenxiashi"
  },
  {
    "description":  "250",
    "title": "信阳市",
    "py": "xinyangshi"
  },
  {
    "description":  "251",
    "title": "驻马店市",
    "py": "zhumadianshi"
  },
  {
    "description":  "252",
    "title": "济源市",
    "py": "jiyuanshi"
  },
  {
    "description":  "253",
    "title": "韶关市",
    "py": "shaoguanshi"
  },
  {
    "description":  "254",
    "title": "河源市",
    "py": "heyuanshi"
  },
  {
    "description":  "255",
    "title": "汕尾市",
    "py": "shanweishi"
  },
  {
    "description":  "256",
    "title": "阳江市",
    "py": "yangjiangshi"
  },
  {
    "description":  "257",
    "title": "潮州市",
    "py": "chaozhoushi"
  },
  {
    "description":  "258",
    "title": "云浮市",
    "py": "yunfushi"
  },
  {
    "description":  "259",
    "title": "梧州市",
    "py": "wuzhoushi"
  },
  {
    "description":  "260",
    "title": "防城港市",
    "py": "fangchenggangshi"
  },
  {
    "description":  "261",
    "title": "钦州市",
    "py": "qinzhoushi"
  },
  {
    "description":  "262",
    "title": "贵港市",
    "py": "guigangshi"
  },
  {
    "description":  "263",
    "title": "百色市",
    "py": "baiseshi"
  },
  {
    "description":  "264",
    "title": "贺州市",
    "py": "hezhoushi"
  },
  {
    "description":  "265",
    "title": "河池市",
    "py": "hechishi"
  },
  {
    "description":  "266",
    "title": "来宾市",
    "py": "laibinshi"
  },
  {
    "description":  "267",
    "title": "崇左市",
    "py": "chongzuoshi"
  },
  {
    "description":  "268",
    "title": "五指山市",
    "py": "wuzhishanshi"
  },
  {
    "description":  "269",
    "title": "琼海市",
    "py": "qionghaishi"
  },
  {
    "description":  "270",
    "title": "儋州市",
    "py": "zhoushi"
  },
  {
    "description":  "271",
    "title": "文昌市",
    "py": "wenchangshi"
  },
  {
    "description":  "272",
    "title": "万宁市",
    "py": "wanningshi"
  },
  {
    "description":  "273",
    "title": "东方市",
    "py": "dongfangshi"
  },
  {
    "description":  "274",
    "title": "澄迈县",
    "py": "chengmaixian"
  },
  {
    "description":  "275",
    "title": "定安县",
    "py": "dinganxian"
  },
  {
    "description":  "276",
    "title": "屯昌县",
    "py": "tunchangxian"
  },
  {
    "description":  "277",
    "title": "临高县",
    "py": "lingaoxian"
  },
  {
    "description":  "278",
    "title": "白沙黎族自治县",
    "py": "baishalizuzizhixian"
  },
  {
    "description":  "279",
    "title": "自贡市",
    "py": "zigongshi"
  },
  {
    "description":  "280",
    "title": "广元市",
    "py": "guangyuanshi"
  },
  {
    "description":  "281",
    "title": "遂宁市",
    "py": "suiningshi"
  },
  {
    "description":  "282",
    "title": "内江市",
    "py": "neijiangshi"
  },
  {
    "description":  "283",
    "title": "乐山市",
    "py": "leshanshi"
  },
  {
    "description":  "284",
    "title": "广安市",
    "py": "guanganshi"
  },
  {
    "description":  "285",
    "title": "达州市",
    "py": "dazhoushi"
  },
  {
    "description":  "286",
    "title": "眉山市",
    "py": "meishanshi"
  },
  {
    "description":  "287",
    "title": "雅安市",
    "py": "yaanshi"
  },
  {
    "description":  "288",
    "title": "巴中市",
    "py": "bazhongshi"
  },
  {
    "description":  "289",
    "title": "资阳市",
    "py": "ziyangshi"
  },
  {
    "description":  "290",
    "title": "阿坝州",
    "py": "abazhou"
  },
  {
    "description":  "291",
    "title": "甘孜州",
    "py": "ganzizhou"
  },
  {
    "description":  "292",
    "title": "凉山州",
    "py": "liangshanzhou"
  },
  {
    "description":  "293",
    "title": "六盘水市",
    "py": "liupanshuishi"
  },
  {
    "description":  "294",
    "title": "安顺市",
    "py": "anshunshi"
  },
  {
    "description":  "295",
    "title": "铜仁地区",
    "py": "tongrendiqu"
  },
  {
    "description":  "296",
    "title": "毕节地区",
    "py": "bijiediqu"
  },
  {
    "description":  "297",
    "title": "黔西南州",
    "py": "qianxinanzhou"
  },
  {
    "description":  "298",
    "title": "黔东南州",
    "py": "qiandongnanzhou"
  },
  {
    "description":  "299",
    "title": "黔南州",
    "py": "qiannanzhou"
  },
  {
    "description":  "300",
    "title": "玉溪市",
    "py": "yuxishi"
  },
  {
    "description":  "301",
    "title": "保山市",
    "py": "baoshanshi"
  },
  {
    "description":  "302",
    "title": "昭通市",
    "py": "zhaotongshi"
  },
  {
    "description":  "303",
    "title": "普洱市",
    "py": "puershi"
  },
  {
    "description":  "304",
    "title": "临沧市",
    "py": "lincangshi"
  },
  {
    "description":  "305",
    "title": "文山州",
    "py": "wenshanzhou"
  },
  {
    "description":  "306",
    "title": "红河州",
    "py": "honghezhou"
  },
  {
    "description":  "307",
    "title": "西双版纳州",
    "py": "xishuangbannazhou"
  },
  {
    "description":  "308",
    "title": "楚雄州",
    "py": "chuxiongzhou"
  },
  {
    "description":  "309",
    "title": "德宏州",
    "py": "dehongzhou"
  },
  {
    "description":  "310",
    "title": "怒江州",
    "py": "nujiangzhou"
  },
  {
    "description":  "311",
    "title": "迪庆州",
    "py": "diqingzhou"
  },
  {
    "description":  "312",
    "title": "那曲地区",
    "py": "naqudiqu"
  },
  {
    "description":  "313",
    "title": "昌都地区",
    "py": "changdudiqu"
  },
  {
    "description":  "314",
    "title": "山南地区",
    "py": "shannandiqu"
  },
  {
    "description":  "315",
    "title": "日喀则地区",
    "py": "rikazediqu"
  },
  {
    "description":  "316",
    "title": "阿里地区",
    "py": "alidiqu"
  },
  {
    "description":  "317",
    "title": "林芝地区",
    "py": "linzhidiqu"
  },
  {
    "description":  "318",
    "title": "铜川市",
    "py": "tongchuanshi"
  },
  {
    "description":  "319",
    "title": "渭南市",
    "py": "weinanshi"
  },
  {
    "description":  "320",
    "title": "安康市",
    "py": "ankangshi"
  },
  {
    "description":  "321",
    "title": "商洛市",
    "py": "shangluoshi"
  },
  {
    "description":  "322",
    "title": "金昌市",
    "py": "jinchangshi"
  },
  {
    "description":  "323",
    "title": "白银市",
    "py": "baiyinshi"
  },
  {
    "description":  "324",
    "title": "嘉峪关市",
    "py": "jiayuguanshi"
  },
  {
    "description":  "325",
    "title": "武威市",
    "py": "wuweishi"
  },
  {
    "description":  "326",
    "title": "张掖市",
    "py": "zhangyeshi"
  },
  {
    "description":  "327",
    "title": "平凉市",
    "py": "pingliangshi"
  },
  {
    "description":  "328",
    "title": "酒泉市",
    "py": "jiuquanshi"
  },
  {
    "description":  "329",
    "title": "庆阳市",
    "py": "qingyangshi"
  },
  {
    "description":  "330",
    "title": "定西市",
    "py": "dingxishi"
  },
  {
    "description":  "331",
    "title": "陇南市",
    "py": "longnanshi"
  },
  {
    "description":  "332",
    "title": "临夏州",
    "py": "linxiazhou"
  },
  {
    "description":  "333",
    "title": "甘南州",
    "py": "gannanzhou"
  },
  {
    "description":  "334",
    "title": "石嘴山市",
    "py": "shizuishanshi"
  },
  {
    "description":  "335",
    "title": "吴忠市",
    "py": "wuzhongshi"
  },
  {
    "description":  "336",
    "title": "固原市",
    "py": "guyuanshi"
  },
  {
    "description":  "337",
    "title": "中卫市",
    "py": "zhongweishi"
  },
  {
    "description":  "338",
    "title": "海东地区",
    "py": "haidongdiqu"
  },
  {
    "description":  "339",
    "title": "海北州",
    "py": "haibeizhou"
  },
  {
    "description":  "340",
    "title": "黄南州",
    "py": "huangnanzhou"
  },
  {
    "description":  "341",
    "title": "海南州",
    "py": "hainanzhou"
  },
  {
    "description":  "342",
    "title": "果洛州",
    "py": "guoluozhou"
  },
  {
    "description":  "343",
    "title": "玉树州",
    "py": "yushuzhou"
  },
  {
    "description":  "344",
    "title": "海西州",
    "py": "haixizhou"
  },
  {
    "description":  "345",
    "title": "吐鲁番地区",
    "py": "tulufandiqu"
  },
  {
    "description":  "346",
    "title": "哈密地区",
    "py": "hamidiqu"
  },
  {
    "description":  "347",
    "title": "和田地区",
    "py": "hetiandiqu"
  },
  {
    "description":  "348",
    "title": "阿克苏地区",
    "py": "akesudiqu"
  },
  {
    "description":  "349",
    "title": "克孜勒苏柯州",
    "py": "kezilesukezhou"
  },
  {
    "description":  "350",
    "title": "巴音郭楞州",
    "py": "bayinguolengzhou"
  },
  {
    "description":  "351",
    "title": "昌吉州",
    "py": "changjizhou"
  },
  {
    "description":  "352",
    "title": "博尔塔拉州",
    "py": "boertalazhou"
  },
  {
    "description":  "353",
    "title": "伊犁州",
    "py": "yilizhou"
  },
  {
    "description":  "354",
    "title": "塔城地区",
    "py": "tachengdiqu"
  },
  {
    "description":  "355",
    "title": "阿勒泰地区",
    "py": "aletaidiqu"
  },
  {
    "description":  "356",
    "title": "阿拉尔市",
    "py": "alaershi"
  },
  {
    "description":  "357",
    "title": "香港",
    "py": "xianggang"
  },
  {
    "description":  "358",
    "title": "澳门",
    "py": "aomen"
  },
  {
    "description":  "359",
    "title": "五家渠市",
    "py": "wujiaqushi"
  },
  {
    "description":  "360",
    "title": "陵水黎族自治县",
    "py": "lingshuilizuzizhixian"
  },
  {
    "description":  "361",
    "title": "三沙市",
    "py": "sanshashi"
  },
  {
    "description":  "362",
    "title": "乐东黎族自治县",
    "py": "ledonglizuzizhixian"
  },
  {
    "description":  "363",
    "title": "昌江黎族自治县",
    "py": "changjianglizuzizhixian"
  },
  {
    "description":  "364",
    "title": "保亭黎族苗族自治县",
    "py": "baotinglizumiaozuzizhixian"
  },
  {
    "description":  "365",
    "title": "琼中黎族苗族自治县",
    "py": "qiongzhonglizumiaozuzizhixian"
  },
  {
    "description":  "366",
    "title": "图木舒克市",
    "py": "tumushukeshi"
  },
  {
    "description":  "372",
    "title": "杨凌示范区",
    "py": "yanglingshifanqu"
  },
  {
    "description":  "1801",
    "title": "重庆主城",
    "py": "zhongqingzhucheng"
  },
  {
    "description":  "1802",
    "title": "重庆郊县",
    "py": "zhongqingjiaoxian"
  },
  {
    "description":  "100001",
    "title": "华北区域",
    "py": "huabeiquyu"
  },
  {
    "description":  "100002",
    "title": "广东区域",
    "py": "guangdongquyu"
  },
  {
    "description":  "100003",
    "title": "中南区域",
    "py": "zhongnanquyu"
  },
  {
    "description":  "100004",
    "title": "中西区域",
    "py": "zhongxiquyu"
  },
  {
    "description":  "100005",
    "title": "西南区域",
    "py": "xinanquyu"
  },
  {
    "description":  "100006",
    "title": "沪苏区域",
    "py": "husuquyu"
  },
  {
    "description":  "100008",
    "title": "鲁津冀区域",
    "py": "lujinjiquyu"
  },
  {
    "description":  "110001",
    "title": "昆玉市",
    "py": "kunyushi"
  }
]

export {
    cityIds
}