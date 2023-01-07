function inserting(number){
    const result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result + number;
    
}

function clean(){
    document.getElementById("result").innerHTML = "";
}

function back(){
    var backNumber = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = backNumber.substring(0, backNumber.length -1)
}

function calculation(){
    var calculationNumber = document.getElementById("result").innerHTML;

    if(calculationNumber){
        document.getElementById("result").innerHTML = eval(calculationNumber)
    }else{
        document.getElementById("result").innerHTML = '0'
    }
}