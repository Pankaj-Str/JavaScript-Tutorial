function info(){
    // function body
    alert("welcome to codeswithpankaj")
}

function add(){
    
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById("print_result").innerHTML = result;


}