function valueButton(e){
	calculatorform.screen.value +=e.value;
}
function Clear(){
	calculatorform.screen.value =   null
}
function Calculate(){
calculatorform.screen.value	= eval(calculatorform.screen.value)
}
function back() {
    var value = document.getElementById("d").value;
    document.getElementById("d").value = value.substr(0, value.length - 1);
}