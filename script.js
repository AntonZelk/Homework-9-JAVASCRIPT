const URL_BYN = 'http://www.nbrb.by/api/exrates/rates?periodicity=0';
const URL = 'http://www.nbrb.by/API/ExRates/Currencies';
const BUY_USD_MTB = document.getElementById('buyUSDmtb');
const SALE_USD_MTB = document.getElementById('saleUSDmtb');
const BUY_EUR_MTB = document.getElementById('buyEURmtb');
const SALE_EUR_MTB = document.getElementById('saleEURmtb');
const BUY_RUB_MTB = document.getElementById('buyRUBmtb');
const SALE_RUB_MTB = document.getElementById('saleRUBmtb');
const rel1MTB = document.getElementById('relationship1MTB');
const rel2MTB = document.getElementById('relationship2MTB');

const BUY_USD_BEL = document.getElementById('buyUSDbel');
const SALE_USD_BEL = document.getElementById('saleUSDbel');
const BUY_EUR_BEL = document.getElementById('buyEURbel');
const SALE_EUR_BEL = document.getElementById('saleEURbel');
const BUY_RUB_BEL = document.getElementById('buyRUBbel');
const SALE_RUB_BEL = document.getElementById('saleRUBbel');
const rel1BEL = document.getElementById('relationship1BEL');
const rel2BEL = document.getElementById('relationship2BEL');

const BUY_USD_IN = document.getElementById('buyUSDin');
const SALE_USD_IN = document.getElementById('saleUSDin');
const BUY_EUR_IN = document.getElementById('buyEURin');
const SALE_EUR_IN = document.getElementById('saleEURin');
const BUY_RUB_IN = document.getElementById('buyRUBin');
const SALE_RUB_IN = document.getElementById('saleRUBin');
const rel1IN = document.getElementById('relationship1IN');
const rel2IN = document.getElementById('relationship2IN');

const BUY_USD_ALF = document.getElementById('buyUSDalf');
const SALE_USD_ALF = document.getElementById('saleUSDalf');
const BUY_EUR_ALF = document.getElementById('buyEURalf');
const SALE_EUR_ALF = document.getElementById('saleEURalf');
const BUY_RUB_ALF = document.getElementById('buyRUBalf');
const SALE_RUB_ALF = document.getElementById('saleRUBalf');
const rel1ALF = document.getElementById('relationship1ALF');
const rel2ALF = document.getElementById('relationship2ALF');

const BUY_USD_ABS = document.getElementById('buyUSDabs');
const SALE_USD_ABS = document.getElementById('saleUSDabs');
const BUY_EUR_ABS = document.getElementById('buyEURabs');
const SALE_EUR_ABS = document.getElementById('saleEURabs');
const BUY_RUB_ABS = document.getElementById('buyRUBabs');
const SALE_RUB_ABS = document.getElementById('saleRUBabs');
const rel1ABS = document.getElementById('relationship1ABS');
const rel2ABS = document.getElementById('relationship2ABS');

const convert = document.getElementById('convert');
const convertBtn = document.getElementById('convertBtn');
const covertUSD = document.getElementById("covertUSD");
const covertEUR = document.getElementById("covertEUR");
const covertRUB = document.getElementById("covertRUB");
const addCash = document.getElementById("addCash");
const result = document.getElementById("result");



function fixed (elem, buyUSD, saleUSD, buyEUR, saleEUR, buyRUB, saleRUB, curUSD, curEUR, curRUB, rel1, rel2) {
    let num1, num2 , num3, num4, num5, num6, num7, num8;
    switch (elem) {
        case "MTB":
            num1 = curUSD * 1.005;
            buyUSD.innerHTML = num1.toFixed(3);
            num2 = curUSD * 1.05;
            saleUSD.innerHTML = num2.toFixed(3);
            num3 = curEUR * 1.01;
            buyEUR.innerHTML = num3.toFixed(3);
            num4 = curEUR * 1.07;
            saleEUR.innerHTML = num4.toFixed(3);
            num5 = curRUB * 1.03;
            buyRUB.innerHTML = num5.toFixed(3);
            num6 = curRUB * 1.08;
            saleRUB.innerHTML = num6.toFixed(3);
            num7 = num3 / num1;
            rel1.innerHTML = num7.toFixed(3);
            num8 = num4 / num2;
            rel2.innerHTML = num8.toFixed(3);
        break;
        case "BEL":
            num1 = curUSD * 1.002;
            buyUSD.innerHTML = num1.toFixed(3);
            num2 = curUSD * 1.07;
            saleUSD.innerHTML = num2.toFixed(3);
            num3 = curEUR * 1.002;
            buyEUR.innerHTML = num3.toFixed(3);
            num4 = curEUR * 1.1;
            saleEUR.innerHTML = num4.toFixed(3);
            num5 = curRUB * 1.002;
            buyRUB.innerHTML = num5.toFixed(3);
            num6 = curRUB * 1.07;
            saleRUB.innerHTML = num6.toFixed(3);
            num7 = num3 / num1;
            rel1.innerHTML = num7.toFixed(3);
            num8 = num4 / num2;
            rel2.innerHTML = num8.toFixed(3);
        break;
        case "IN":
            num1 = curUSD * 1.007;
            buyUSD.innerHTML = num1.toFixed(3);
            num2 = curUSD * 1.055;
            saleUSD.innerHTML = num2.toFixed(3);
            num3 = curEUR * 1.008;
            buyEUR.innerHTML = num3.toFixed(3);
            num4 = curEUR * 1.09;
            saleEUR.innerHTML = num4.toFixed(3);
            num5 = curRUB * 1.007;
            buyRUB.innerHTML = num5.toFixed(3);
            num6 = curRUB * 1.09;
            saleRUB.innerHTML = num6.toFixed(3);
            num7 = num3 / num1;
            rel1.innerHTML = num7.toFixed(3);
            num8 = num4 / num2;
            rel2.innerHTML = num8.toFixed(3);
        break;  
        case "ALF":
            num1 = curUSD * 1.01;
            buyUSD.innerHTML = num1.toFixed(3);
            num2 = curUSD * 1.06;
            saleUSD.innerHTML = num2.toFixed(3);
            num3 = curEUR * 1.013;
            buyEUR.innerHTML = num3.toFixed(3);
            num4 = curEUR * 1.093;
            saleEUR.innerHTML = num4.toFixed(3);
            num5 = curRUB * 1.01;
            buyRUB.innerHTML = num5.toFixed(3);
            num6 = curRUB * 1.06;
            saleRUB.innerHTML = num6.toFixed(3);
            num7 = num3 / num1;
            rel1.innerHTML = num7.toFixed(3);
            num8 = num4 / num2;
            rel2.innerHTML = num8.toFixed(3);
        break;
        case "ABS":
            num1 = curUSD * 1.008;
            buyUSD.innerHTML = num1.toFixed(3);
            num2 = curUSD * 1.1;
            saleUSD.innerHTML = num2.toFixed(3);
            num3 = curEUR * 1.0095;
            buyEUR.innerHTML = num3.toFixed(3);
            num4 = curEUR * 1.2;
            saleEUR.innerHTML = num4.toFixed(3);
            num5 = curRUB * 1.008;
            buyRUB.innerHTML = num5.toFixed(3);
            num6 = curRUB * 1.1;
            saleRUB.innerHTML = num6.toFixed(3);
            num7 = num3 / num1;
            rel1.innerHTML = num7.toFixed(3);
            num8 = num4 / num2;
            rel2.innerHTML = num8.toFixed(3);
        break;    
    }
}    

function getData(param){
    fetch(param).then(response => {
        response.json()
        .then(data => {
            let curUSD;
            let curEUR;
            let curRUB;
            curUSD = `${data[4].Cur_OfficialRate}`;
            curEUR = `${data[5].Cur_OfficialRate}`;
            curRUB = `${data[16].Cur_OfficialRate}`;

            convert.addEventListener("change", function() {
                switch (convert.value) {
                    case "USD":
                      res = addCash.value * curUSD;
                      result.value = res.toFixed(2);
                      break;
                    case "EUR":
                      res = addCash.value * curEUR;
                      result.value = res.toFixed(2);
                      break;
                    case "RUB":
                      res = addCash.value * curRUB * 10;
                      result.value = res.toFixed(2);
                      break;
                  }
            }); 
            convertBtn.addEventListener("click", function() {
                switch (convert.value) {
                    case "USD":
                      res = addCash.value * curUSD;
                      result.value = res.toFixed(2);
                      break;
                    case "EUR":
                      res = addCash.value * curEUR;
                      result.value = res.toFixed(2);
                      break;
                    case "RUB":
                      res = addCash.value * curRUB * 10;
                      result.value = res.toFixed(2);
                      break;
                  }
            }); 

            fixed('MTB', BUY_USD_MTB, SALE_USD_MTB, BUY_EUR_MTB, SALE_EUR_MTB, BUY_RUB_MTB, SALE_RUB_MTB, curUSD, curEUR, curRUB, rel1MTB, rel2MTB);
            fixed('BEL', BUY_USD_BEL, SALE_USD_BEL, BUY_EUR_BEL, SALE_EUR_BEL, BUY_RUB_BEL, SALE_RUB_BEL, curUSD, curEUR, curRUB, rel1BEL, rel2BEL);
            fixed('IN', BUY_USD_IN, SALE_USD_IN, BUY_EUR_IN, SALE_EUR_IN, BUY_RUB_IN, SALE_RUB_IN, curUSD, curEUR, curRUB, rel1IN, rel2IN);
            fixed('ALF', BUY_USD_ALF, SALE_USD_ALF, BUY_EUR_ALF, SALE_EUR_ALF, BUY_RUB_ALF, SALE_RUB_ALF, curUSD, curEUR, curRUB, rel1ALF, rel2ALF);
            fixed('ABS', BUY_USD_ABS, SALE_USD_ABS, BUY_EUR_ABS, SALE_EUR_ABS, BUY_RUB_ABS, SALE_RUB_ABS, curUSD, curEUR, curRUB, rel1ABS, rel2ABS);
        }) 
        .catch(() =>{
            console.log('Erorr 404!!!');
        })
    })
}

getData(URL_BYN);

