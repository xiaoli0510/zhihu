//格式化时间戳为m/h/d/date
 const utils = {
    formatTimeStamp: (timeStamp) => {
        const diff = new Date().getTime() - timeStamp
        const minute = Math.floor(diff / 60000)
        let res
        if (minute < 60) {
            res = `${minute}分钟`
        } else if (minute < 1440) {
            res = `${Math.floor(minute / 60)}小时`
        } else {
            const day = Math.floor(minute / 1440)
            if (day <= 10) {
                res = `${Math.floor(minute / 1440)}天`
            } else {
                const date = new Date(timeStamp)
                res = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
            }
        }
        return res
    },
}
export default utils;
