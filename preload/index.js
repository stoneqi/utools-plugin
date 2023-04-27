import Nzh from 'nzh'
import { cityIds } from "./cityid";
//@ts-check

const cityIndexes = cityIds

const setFeature =  (title, description, cmd) => {
  let temp = {
    "code": "cityid",
    "explain":description,
    // "icon": "res/xxx.png",u
    // "icon": "data:image/png;base64,xxx...",
    // "platform": ["win32", "darwin", "linux"]
    "cmds": cmd
  }
  window.utools.setFeature(temp)
}

const init =  ()=>{
  cityIndexes.forEach(element => {
    setFeature(element.title, element.description, [element.title,element.description,element.py])
  });
}
init()


window.exports = {
  "cityid": { // 注意：键对应的是 plugin.json 中的 features.code
    mode: 'list',
    args: {
      enter: (action) =>  {
        window.utools.hideMainWindow()
        console.log(action)
        window.utools.copyText(action)
        window.utools.outPlugin()
      }
    }
 }
}
