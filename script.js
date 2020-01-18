let $ = function (id) {
    return document.getElementById(id);
};
let cls = function (id) {
    return document.getElementsByClassName(id);
};

window.onload = function() {
    let clrTxt = cls("tblLi");
    let day = $("day");
    let date = new Date();
    let massDay = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    day.innerHTML = massDay[date.getDay()];

    switch(date.getDay()) {
        case 1:
        case 3:
        case 6: day.style.backgroundColor = "violet";
        for (let i = 0; i < clrTxt.length; i++) {
            clrTxt[i].style.color = "violet";
        }
        break;
        case 2:
        case 5: day.style.backgroundColor = "aqua";
            for (let i = 0; i < clrTxt.length; i++) {
                clrTxt[i].style.color = "aqua";
            }
        break;
        case 4:
        case 0: day.style.backgroundColor = "orange";
            for (let i = 0; i < clrTxt.length; i++) {
                clrTxt[i].style.color = "orange";
            }
        break;
    }



};

function calc() {
    let wt = $('wt').value;
    let ht = $('ht').value;
    let imt = Math.floor((wt / Math.pow(ht, 2)) * 10000);
    document.body.innerHTML = imt;
}

