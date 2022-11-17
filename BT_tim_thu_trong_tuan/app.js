const days = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];
var date = new Date();
var day = date.getDay();

function findDay (n) {
    for (let i = 0; i < days.length; i++) {
        if ( i === n) {
            return days[i];
        }
    }
};

console.log('Hôm nay là '+ findDay(day));
