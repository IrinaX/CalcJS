let valueInTextArea = document.querySelector('.text-area');
function insert(sign) {
    document.form.textview.value += sign;
    console.log(valueInTextArea.value);
}
//можно писать значения атрибута name: .form.textview.
//
// function clear() {
//     document.form.textview.value = '';
// }
// не работает так как я ожидаю. Такая функция при нажатии на кнопку С не вызывается вообще


let clearButton = document.querySelector('.clear');
clearButton.onclick = function clear() {
    document.form.textview.value = '';
};
// это работает хотя по сути вроде бы одно и то же

function delLastSymbol(){
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}
function getResult() {
    let exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
    }
}