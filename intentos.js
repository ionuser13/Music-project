let x = true; //"=" value assignation
let y = false;
if (x == true){//"==" comparison; 
    alert("Me llamo John");
};

if(!y == false){
    alert("Si me llamo John");
}

var cuenta_cliente = true;
var cuenta_destinatario = true;
var saldo_cliente = 2000000;
var saldo_destinatario = 0;
var hora_transferencia = 13;
var monto_transferencia = 1000000;
var banco_cliente = "A";
var banco_destinatario = "A";
var costo_transacción = 100;

if(cuenta_cliente && cuenta_destinatario){
    if((hora_tranferencia>9 && hora_transferencia<12)^(hora_tranferencia>15 && hora_tranferencia<20)){
        if(banco_cliente == banco_destinatario){
            if(saldo_cliente>monto_tranferencia){
            saldo_destinatario = monto_tranferencia;
            saldo_cliente = saldo_cliente - monto_tranferencia;
        }
    }
    else{
        if(saldo_cliente>(monto_tranferencia + costo_transacción)){
            saldo_destinatario = monto_tranferencia;
            saldo_cliente = saldo_cliente - monto_tranferencia - costo_transacción;
        }
    }
}
else{
    alert("No hay sistema");
}
}
else{
    if(cuenta_cliente){
        alert("No se ha encontrado al destinatario")
    }
    else{
        alert("Por favor, cree una cuenta")
    }
}