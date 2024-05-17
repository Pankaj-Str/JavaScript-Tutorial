function print_data(){

    start_no =  document.getElementById("start_no").value;
    end_no = document.getElementById("end_no").value;

    
    print_result = document.getElementById("box");

    for(let i = start_no ; i <= end_no ; i++){
        print_result.innerHTML += "<li>"+i+"</li>";
    }

}