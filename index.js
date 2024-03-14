window.onload = function(){
    GetDay();
};

function GetDay(){    
    var today = new Date();
    var day = (today.getDate() < 10 ? "0" + today.getDate() : today.getDate()); // retorna o dia do mês 1 - 31
    var realMonth = today.getMonth() + 1; // retorna 0 para Janeiro e 11 para Dezembro por isso somar mais 1
    var month = (realMonth < 10 ? "0" + realMonth : realMonth); 
    var year = today.getFullYear();
    var realDate = day + "/" + month + "/" + year;
    document.getElementById("Today").innerText += "" + realDate + "";
}