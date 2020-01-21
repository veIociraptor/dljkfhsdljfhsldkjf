let $ = function (id) {
    return document.getElementById(id);
};
let cls = function (id) {
    return document.getElementsByClassName(id);
};

let user  = {
    name: $('nm'),
    age: $('dt'),
    wt:  $('wt'),
    ht:  $('ht'),
    imt: 0,
};
function test() {
    user.imt = Number(Math.floor((this.wt.value / Math.pow(this.ht.value, 2) * 10000)));
    alert(user.imt);
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
        case 6: day.style.backgroundColor = '#7f4494';
        for (let i = 0; i < clrTxt.length; i++) {
            clrTxt[i].style.color = '#7f4494';
        }
        break;
        case 2:
        case 5: day.style.backgroundColor = "#35c1d2";
            for (let i = 0; i < clrTxt.length; i++) {
                clrTxt[i].style.color = "#35c1d2";
            }
        break;
        case 4:
        case 0: day.style.backgroundColor = "#f26722";
            for (let i = 0; i < clrTxt.length; i++) {
                clrTxt[i].style.color = "#f26722";
            }
        break;
    }

};


