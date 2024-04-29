function checkopp(){

        Number1 = document.getElementById("num1").value;
        Number2 = document.getElementById("num2").value;
        m_opp = document.getElementById("opp").value;

        add = +Number1 + +Number2;
        mul = Number1*Number2;
        div = Number1/Number2;
        sub = Number1-Number2;

        answer = document.getElementById("printanswer");
        
        switch(m_opp){
            
            case '+': answer.innerHTML = add;
            break;
            case '/': answer.innerHTML = div;
            break;
            case '*': answer.innerHTML = mul;
            break;
            case '-': answer.innerHTML = sub;
            break;

        }
}