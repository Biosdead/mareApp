window.onload = function(){
    GetDay();
    // GetDayTides("11",Meses[2]);
};

function GetDay(){    
    var today = new Date();
    var day = (today.getDate() < 10 ? "0" + today.getDate() : today.getDate()); // retorna o dia do mês 1 - 31
    var realMonth = today.getMonth() + 1; // retorna 0 para Janeiro e 11 para Dezembro por isso somar mais 1
    var month = (realMonth < 10 ? "0" + realMonth : realMonth); 
    var year = today.getFullYear();
    var realDate = day + "/" + month + "/" + year;
    document.getElementById("Today").innerText += "" + realDate + "";
    GetDayTides(day,Meses[today.getMonth()]); // aqui que chamo a função de plotar os dados
}

function GetDayTides(day,month) {
    var weekDay = month[day].DIA;
    var moonPhase = month[day].LUA;
    var FirstTide =  month[day]["BAIXA1"]["Horário"];
    var FirstTideHeight = month[day]["BAIXA1"]["Altura"];
    var SecondTide =  month[day]["ALTA1"]["Horário"];
    var SecondTideHeight = month[day]["ALTA1"]["Altura"];
    var ThirdTide =  month[day]["BAIXA2"]["Horário"];
    var ThirdTideHeight = month[day]["BAIXA2"]["Altura"];
    var FourthTide =  month[day]["ALTA2"]["Horário"];
    var FourthTideHeight = month[day]["ALTA2"]["Altura"];
    document.getElementById("weekDay").innerText = "(" + weekDay + ")";
    document.getElementById("moon").innerText = "LUA " + moonPhase;
    document.getElementById("moonIcon").src = "/icones/"+moonPhase+".png";
    document.getElementById("FirstTide").innerText = FirstTide[0] + "" + FirstTide[1] + "h" + FirstTide[2] + "" + FirstTide[3] + "m";
    document.getElementById("FirstTideHeight").innerText = FirstTideHeight + " m";
    document.getElementById("SecondTide").innerText = SecondTide[0] + "" + SecondTide[1] + "h" + SecondTide[2] + "" + SecondTide[3] + "m";
    document.getElementById("SecondTideHeight").innerText = SecondTideHeight + " m";
    document.getElementById("ThirdTide").innerText = ThirdTide[0] + "" + ThirdTide[1] + "h" + ThirdTide[2] + "" + ThirdTide[3] + "m";
    document.getElementById("ThirdTideHeight").innerText = ThirdTideHeight + " m";
    document.getElementById("FourthTide").innerText = FourthTide[0] + "" + FourthTide[1] + "h" + FourthTide[2] + "" + FourthTide[3] + "m";
    document.getElementById("FourthTideHeight").innerText = FourthTideHeight + " m";
}