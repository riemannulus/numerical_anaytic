function f(x) {
    return (x*x*x - x - 1.344);
}

function bisection(a, b) {
    let epslion = 0.0001;
    let iter = 0;
    let xc = 1;
    while(true){

        xc = (a+b) / 2;

        if(Math.abs(f(xc)) < epslion){
            break;
        }

        tableAdder([iter, a, b, xc, f(xc)]);

        if(f(a) * f(xc) < 0){
            b = xc;
        }
        else{
            a = xc;
        }
        iter++;
    }
    tableAdder([iter, a, b, xc, f(xc)]);
}

function tableAdder (dataList) {
    // dataList[5] == no, a, b, xc, fx;
    let tr = document.createElement('tr');
    let tdList = new Array(5);

    let iter = 0;
    dataList.forEach(function (e) {
        tdList[iter] = document.createElement('td');
        tdList[iter].style.width = "200";
        tdList[iter].innerText = e;
        iter++;
    });

    tdList.forEach(function (e) {
        tr.appendChild(e);
    });
    let table = document.getElementById("result");
    table.appendChild(tr);
}

bisection(1, 2);
