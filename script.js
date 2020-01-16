window.onload = function() {

    let date = new Date();
    let massDay = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let day = document.getElementById("day");
    day.innerHTML = massDay[date.getDay()];

};

let $ = function (id) {
    return document.getElementById(id);
};
let imt;

function calc() {
    let wt = $('wt').value;
    let ht = $('ht').value;
    imt = Math.floor((wt / Math.pow(ht, 2)) * 10000);
    document.body.innerHTML = imt;
}