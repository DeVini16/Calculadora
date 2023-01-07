function inserting(number){
    const result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result + number;
    
}

function clean(){
    document.getElementById("result").innerHTML = "0";
}