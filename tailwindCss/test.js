
var dif = (endtime, starttime) => {
    let d = (new Date("1970-01-11 " + endtime) - new Date("1970-01-11 " + starttime))
    let weekdays = Math.floor(d / 1000 / 60 / 60 / 24 / 7);
    let days = Math.floor(d / 1000 / 60 / 60 / 24 - weekdays * 7);
    let hours = Math.floor(d / 1000 / 60 / 60 - weekdays * 7 * 24 - days * 24);
    let minutes = Math.floor(d / 1000 / 60 - weekdays * 7 * 24 * 60 - days * 24 * 60 - hours * 60);
    // let weekdays = Math.floor(data / 1000 / 60 / 60 / 24 / 7);
    console.log('77568867', hours);
}

console.log('>>>>>>>>>', dif('09:00:00', '09:40:00'))
