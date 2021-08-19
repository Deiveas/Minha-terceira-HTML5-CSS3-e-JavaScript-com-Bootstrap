var dt=new Date();
        var dia=dt.getDate();
        var mes=dt.getMonth();
        var ano=dt.getUTCFullYear();
        var hora=dt.getHours();
        var minutos=dt.getMinutes();
        var segundos=dt.getSeconds();


        var meses=new Array("1","2","3","4","5","6","7","8","9","10","11","12")
        var data=("Data: ");
        var tempo=("Hora: ");
        document.write(data);
        document.write(dia +"/"+ meses[mes] +"/" + ano);
        document.write("<br>");
        document.write(tempo);
        document.write(hora,":",minutos,":",segundos,);
        document.write("<br>");           

var agora = new Date()
var hora = agora.getHours()
var ds = agora.getDay()

if(hora < 12){
    document.write('Bom dia!!')
}else if(hora <= 18){
    document.write('Boa Tarde!!')
}else {
    document.write('Boa Noite!!')
}
document.write("<br>");
var ds = agora.getDay();

    switch (ds){
    case 0:
    document.write('Domingo')
    break
    case 1:
    document.write('Segunda-Feira')
    break
    case 2:
    document.write('Terça-Feira')
    break
    case 3:
    document.write('Quarta-Feira')
    break
    case 4:
    document.write('Quinta-Feira')
    break
    case 5:
    document.writeg('Sexta-Feira')
    break
    case 6:
    document.write('Sábado')
    break
}

