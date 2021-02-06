let totalCash = +prompt("totalCash / сколько у вас денег?");
let watchesCount = +prompt("watchesCount / сколько ты хочешь часов?");
let earringsCount = +prompt("earringsCount / сколько ты хочешь сережек?");
let watchesSum = watchesCount* +prompt("watchOne / сколько стоят одни часы?");
let earringsSum = earringsCount* prompt("earringsOne / сколько стоят одни сережки?");
alert(watchesSum+earringsSum<=totalCash);