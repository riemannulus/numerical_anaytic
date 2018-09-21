function f(x) {
    return (x*x*x - x - 1.344);
}

function rfmfpm(a, b) {
    let epslion = 0.0001;
    let iter = 0;
    let xc = b - (f(b) * (a - b) / (f(a) - f(b)));

    while(true){

        if(Math.abs(f(xc)) < epslion){
            break;
        }

        tableAdder([iter, a, b, xc, f(xc)]);

        if(f(a) * f(xc) < 0){
            b = xc;
            xc = b - (f(b) * (a - b) / (f(a)/2 - f(b)));
        }
        else{
            a = xc;
            xc = b - (f(b)/2 * (a - b) / (f(a) - f(b)/2));
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

rfmfpm(1, 2);