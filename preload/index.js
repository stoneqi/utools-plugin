import Nzh from 'nzh'

const getDigitConvertList = (numStr) => {
  const isQian = numStr.includes(',')
  if (isQian) numStr = numStr.replace(/,/g, '')
  const list = [{
    title: Nzh.cn.toMoney(numStr, { outSymbol: false }),
    description: '复制 - 大写人民币'
  }]
  if (!isQian && numStr.split('.')[0].length > 3) {
    list.push({
      title: numStr.replace(/\d+/, s => s.replace(/(\d)(?=(\d{3})+$)/g, '$1,')),
      description: '复制 - 人民币千分位'
    })
  }
  return list
}

const cityIndexes = [
  {
    title: '北京',
    description: '1',
  },
  {
    title: '天津',
    description: '7',
 },
  
]

let res =[]
cityIndexes.forEach(element => {
    let temp = {
      "code": "cityid"+element.title,
      "explain":element.description,
      // "icon": "res/xxx.png",u
      // "icon": "data:image/png;base64,xxx...",
      // "platform": ["win32", "darwin", "linux"]
      "cmds": [element.title, element.description]
    }
    console.log(temp)
    window.utools.setFeature(temp)
});


window.exports = {
  rmb: {
    mode: 'list',
    args: {
      placeholder: '输入阿拉伯数字',
      search: (action, searchWord, callbackSetList) => {
        searchWord = searchWord.trim()
        if (!searchWord) return callbackSetList([])
        if (!/^(\d{1,15}|\d{1,3}(?:,\d{3}){1,4})(?:\.\d{1,2})?$/.test(searchWord)) {
          return callbackSetList([])
        }
        callbackSetList(getDigitConvertList(searchWord))
      },
      select: (action, itemData) => {
        window.utools.hideMainWindow()
        window.utools.copyText(itemData.title)
        window.utools.outPlugin()
      }
    }
  },
  "cityid": { // 注意：键对应的是 plugin.json 中的 features.code
    mode: 'list',
    args: {
      placeholder: '输入城市名',
      search: (action, searchWord, callbackSetList) => {
        searchWord = searchWord.trim()
        if (!searchWord) return callbackSetList([])
        let res =[]
        cityIndexes.forEach(element => {
          if (element.title.indexOf(searchWord) >= 0 || element.description.indexOf(searchWord) >= 0) {
            let temp = {
              "code": "hosts"+element.title,
              "explain":element.description,
              // "icon": "res/xxx.png",
              // "icon": "data:image/png;base64,xxx...",
              // "platform": ["win32", "darwin", "linux"]
              "cmds": ["cityid"]
            }
            res.push(temp);
          }
        });
        window.utools.setFeature(res)
      },
      select: (action, itemData) => {
        window.utools.hideMainWindow()
        window.utools.copyText(itemData.title)
        window.utools.outPlugin()
      }
    }
 }
}
