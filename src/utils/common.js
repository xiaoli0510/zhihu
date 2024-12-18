//格式化时间戳为m/h/d/date
 const utils = {
    formatTimeStamp: (timeStamp) => {
        const diff = new Date().getTime() - timeStamp
        const minute = Math.floor(diff / 60000)
        let res
        if (minute < 60) {
            res = `${minute}分钟前`
        } else if (minute < 1440) {
            res = `${Math.floor(minute / 60)}小时前`
        } else {
            const day = Math.floor(minute / 1440)
            if (day <= 10) {
                res = `${Math.floor(minute / 1440)}天前`
            } else {
                const date = new Date(timeStamp)
                res = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
            }
        }
        return res
    },
    /**
     * 人气格式化
     * @param {*} num 人气
     * @return string; 
     */
    formatPeopleNumber: (num) => {
      const res = num>=10000?Math.ceil(num/10000)+'万':num;
      return res;
    },
}
export default utils;
