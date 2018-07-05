export default {
  formatNum: function (str) {
    let newStr = ''
    let count = 0
    str = '' + str

    if (str.indexOf('.') === -1) {
      for (let i = str.length - 1; i >= 0; i--) {
        if (count % 3 === 0 && count !== 0) {
          newStr = str.charAt(i) + ',' + newStr
        } else {
          newStr = str.charAt(i) + newStr
        }
        count++
      }
      str = newStr // 自动补小数点后两位
    } else {
      for (let i = str.indexOf('.') - 1; i >= 0; i--) {
        if (count % 3 === 0 && count !== 0) {
          newStr = str.charAt(i) + ',' + newStr
        } else {
          newStr = str.charAt(i) + newStr // 逐个字符相接起来
        }
        count++
      }
      str = newStr + (str + '00').substr((str + '00').indexOf('.'), 3)
    }
    return str
  },
  formatDate: function (date, op) {
    let d = new Date(date)
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    let year = d.getFullYear()

    if (month.length < 2) {
      month = '0' + month
    }
    if (day.length < 2) {
      day = '0' + day
    }
    return [year, month, day].join(op)
  }
}
