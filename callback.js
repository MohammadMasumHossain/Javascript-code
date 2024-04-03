function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallBack){
    sumCallBack(a,b);
}
calculator(a,b,sum);

