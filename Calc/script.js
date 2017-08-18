

document.getElementsByClassName('butt')[0].addEventListener('click', foo);

let od = document.getElementsByClassName('odin')[0];
let od2 = document.getElementsByClassName('odin')[1];
let od3 = document.getElementsByClassName('odin')[2]; 
let od4 = document.getElementsByClassName('odin')[3];
let od5 = document.getElementsByClassName('result')[0];
let od6 = document.getElementsByClassName('odin2')[0];
let od7 = document.getElementsByClassName('odin2')[1];
let od8 = document.getElementsByClassName('result')[1];
let od9 = document.getElementsByClassName('result')[2];

let Globo = {};


/*Функция калькулятора*/

function foo() {

/*Калькулятор общий*/
var Total = Number(od.value) * Number(od2.value)/1000  + Number(od3.value) * Number(od4.value)/1000;
var Total2 = Number(od.value) * Number(od2.value)/1000 * Number(od6.value)  + Number(od3.value) * Number(od4.value)/1000 * Number(od7.value);

Total = Total.toFixed(2);
Total2 = Total2.toFixed(2);
od5.innerHTML = 'Общаяя масса и стоимость на всех: ' + Total + ' кг.' + ' ' + Total2 + ' рублей.'


/*Калькулятор парней*/
Total3 = Number(od.value) * Number(od2.value)/1000;
Total4 = Number(od.value) * Number(od2.value)/1000 * Number(od6.value);
Total4 = Total4.toFixed(2);

/*Калькулятор девушек*/
Total5 = Number(od3.value) * Number(od4.value)/1000;
Total6 = Number(od3.value) * Number(od4.value)/1000 * Number(od7.value);
Total6 = Total6.toFixed(2);


od8.innerHTML = 'Масса и стоимость на парней: ' + Total3 + ' кг. ' + Total4 + ' рублей.';


od9.innerHTML = 'Масса и стоимость на девушек: ' + Total5 + ' кг. ' + Total6 + ' рублей.';

od.value = od2.value = od3.value = od4.value = od6.value = od7.value = "";

Globo.Tot1 = Total;
Globo.Tot2 = Total2;
Globo.Tot3 = Total3;
Globo.Tot4 = Total4;
Globo.Tot5 = Total5;
Globo.Tot6 = Total6;

};



/*Функция todoList'a*/

document.getElementsByClassName('butt2')[0].addEventListener('click', foo2);

let ProductsGroup = document.getElementsByClassName('totable')[0];

function foo2() {

	var stroka = document.createElement('tr');
	stroka.innerHTML = '<tr><td>'+ ProductsGroup.value +'</td><td>'+ Globo.Tot1 +' кг/л</td><td class="total_summa">' + Globo.Tot2 + ' рублей</td><td>'+ Globo.Tot3 +' кг/л</td><td class="total_summa1">'+ Globo.Tot4 +' рублей</td><td>'+ Globo.Tot5 +' кг/л</td><td class="total_summa2">'+ Globo.Tot6 +' рублей</td></tr>';
	let Tbl = document.getElementsByClassName('Table')[0];
	Tbl.insertBefore(stroka, Tbl.lastChild); 



let numb = document.getElementsByClassName('total_summa').length;
let summa = 0;
let summa2 = 0;
let summa3 = 0;

for(var i = 0; i< numb; i++) {

/*Общая сумма за все продукты*/

let total = parseInt(document.getElementsByClassName('total_summa')[i].innerHTML);
total = Number(total);
summa += total;
let total_sum1 = document.getElementsByClassName('total_sum1')[0].innerHTML = summa + ' рублей';


/*Общая сумма за все продукты с парней*/
let total2 = parseInt(document.getElementsByClassName('total_summa1')[i].innerHTML);
total2 = Number(total2);
summa2 += total2;
let total_sum2 = document.getElementsByClassName('total_sum2')[0].innerHTML = summa2 + ' рублей';

/*Общая сумма за все продукты с девушек*/
let total3 = parseInt(document.getElementsByClassName('total_summa2')[i].innerHTML);
total3 = Number(total3);
summa3 += total3;
let total_sum3 = document.getElementsByClassName('total_sum3')[0].innerHTML = summa3 + ' рублей';




};

};
