let today = new Date();
const dailyInfo = (JSON.parse(localStorage.getItem("todayDailyInfo")) || []);

if (dailyInfo.length !== 0) {

    const timeInStorage = new Date(dailyInfo["date"]);
    
    if (!isSameDay(timeInStorage, today)) {
        setDailyInfo();
    }
} else {
    setDailyInfo();
}

function setDailyInfo() {
    let formulasRandom = Math.random();
    let quoteRandom = Math.random();
    let quizRandom = Math.random();

    let todayDailyInfo = {
        "date": today,
        "formula": formulasRandom,
        "quote": quoteRandom,
        "quiz": quizRandom
    }

    localStorage.setItem("todayDailyInfo", JSON.stringify(todayDailyInfo));
}

function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}