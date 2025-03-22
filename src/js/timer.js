// 计时器
// 目前主要实现功能倒计时和显示日期
export default (str) => {
  let getTime = (str) => {
    // 时间格式应该为“2022年-3月-03日至06日”
    let _time = str.split('-')
    // 初始检查输入时间的格式是否正确
    if (_time.length < 3) {
      // 时间不正确则返回当前时间
      return new Date()
    } else {
      // 获取设定时间信息
      let _day = _time[2].substring(0, 2)
      if (_time[0] && _time[1] && _day) {
        // 分别获取年月日
        let year = parseInt(_time[0])
        let month = parseInt(_time[1])
        let day = parseInt(_day)
        // 返回设定时间对象
        return new Date(year, month - 1, day)
      } else {
        return new Date()
      }
    }
  }
  var ms = getTime(str) - new Date()
  var day
  let isOld = false
  // 计算倒计时时长
  if (ms > 0) {
    day = Math.ceil(ms / (24 * 60 * 60 * 1000)) - 1
  } else {
    // 如果倒计时已经过期那么直接返回当前日期
    let _day = new Date()
    day = _day.getDate()
    isOld = true
  }
  // 返回day和是否过期布尔值
  return {
    day, isOld
  }
}
