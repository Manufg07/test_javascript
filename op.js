function op(){

    var num1 = parseInt(document.getElementById('F1').value);
    var num2 = parseInt(document.getElementById('F2').value);
    var op=document.getElementById("select").value;
    var result;

    if(op== '+'){
        result=num1+num2;
    }else if(op== '-'){
        result=num1-num2;
    }else if(op== '*'){
        result=num1*num2;
    }else{
        result='invalid'
    }
    document.getElementById('result').innerHTML =( 'Result: ' + result);
}
