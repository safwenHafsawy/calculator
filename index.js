$(document).ready(function () {
    let expression = [];
    let calculation = [];
    let operation=false;
    let decimal = false;
    let res = '';
    $(".operation-btn").on('click', e =>{
        const ID = e.target.id;
        switch(ID){
            case "subtract":
                expression.push($(`#${ID}`).text());
                calculation.push($(`#${ID}`).text());
                console.log()
                $("#display").text(expression.join(''));
                break;
            case "clear":
                expression  = [];
                calculation =[];
                operation=false;
                $("#display").text("0");
                break;
            case "deleteLast":
                expression.pop($(`#${ID}`).text());
                calculation.pop($(`#${ID}`).text());
                expression.length >0 ? $("#display").text(expression.join('')) : $("#display").text("0")
                break
            case "equals":
                res = eval(calculation.join(''));
                res = parseFloat(res).toFixed(4);
                isNaN(res) ? ("#display").text("ERROR") : $("#display").text(eval(res));
                expression = [];
                calculation = [];
                break;
            case "decimal":
                if(operation){
                    calculation.pop();
                }
                if(!decimal){
                    decimal = true;
                    expression.push($(`#${ID}`).text());
                    calculation.push($(`#${ID}`).text());
                    $("#display").text(expression.join(''));
                }
                break;
            default :
                operation = true;
                expression.push($(`#${ID}`).text());
                calculation.push($(`#${ID}`).text());
                $("#display").text(expression.join(''));
        }
    });
    $(".numbers-btn").on('click', e =>{
        const ID = e.target.id;
        let check = $("#display").text();
        if(check === "0" && ID === "zero"){
            $("#display").text(check);
        }else{       
            expression.push($(`#${ID}`).text());
            calculation.push($(`#${ID}`).text());
            operation = false;
            $("#display").text(expression.join(''));
        }
    });
});