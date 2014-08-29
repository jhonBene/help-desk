

var solucion = new Array(15);

solucion[1] = "Para consultar en cualquier momento el saldo de tu cuenta Digicel Prepago o Postpago, sigue por favor las siuientes instrucciones:</p><br><p>  1.Digita en tu celular *120#, y presiona la tecla para llamar.</p><p>  2.En segundos recibiras un mensaje con la informacion de tu saldo.";
solucion[2] = "Si seleccionaste un producto Digicel Prepago, actívalo marcando el *120# y presiona la tecla para llamar.  En el caso de productos Digicel Postpago, tu cuenta está activa desde el instante en que sales de la tienda.  ¡Así de fácil!";
solucion[3] = "1.Raspa el área donde se encuentra tu código secreto.</p><p>Digita en tu celular *121* y, a continuación y sin espacios, digita el código secreto y la tecla #. Ejemplo: *121*123456789012#</p> <p>Presiona la tecla para llamar y, automáticamente, recibirás en tu celular un mensaje confirmando tu  recarga.</p><p>Mira la sección de Planes y Precios (la primera del sitio) para conocer otras formas  convenientes de efectuar recargas. ";
solucion[4] = "Las tarjetas o Los montos de recarga comienzan a partir de USD $1.00.";
solucion[5] = "Si tienes una cuenta línea Digicel Prepago y has dejado transcurrir un período de NOVENTA DÍAS sin emitir realizar o recibir llamadas y/o enviar mensajes de texto.</p> <p>¿Cómo activo o desactivo el servicio suplementario de llamada en espera? </p><p>Para activar el servicio de llamada en espera marca desde tu celular *43# [SEND] Para desactivar el servicio de llamada en espera marca desde tu celular  #43#  [SEND] Para verificar el estado del servicio de llamada en espera marca desde tu celular *#43# [SEND] ";
solucion[6] = "La gran noticia es que ¡recibir llamadas en El Salvador es GRATIS!  Para un detalle completo de nuestras tarifas, mira la sección de Tarifas en este sitio web.";
solucion[7] = "No hay problema. Nosotros no te cobraremos ni un segundo más de lo que hables mientras te encuentres en El Salvador.  Es decir, cuando termines de hablar, nosotros paramos de cobrar. Así de simple.  Por favor, toma nota de que los cargos por roaming son por minuto. ";
solucion[8] = "Digicel ofrece una extensa cobertura nacional.  Para ver un mapa detallado, puedes consultar la sección de Cobertura en este sitio web, o visitar nuestras tiendas Digicel.";
solucion[9] = "¡Claro que sí! ¡Por supuesto! Puedes llamar a quien desees inclusive, llamar a otro país.  Solamente recuerda que si estás llamando al extranjero, debes marcar los códigos de país y de ciudad antes del número.";
solucion[10] = "La tecnología móvil GSM de Digicel opera en El Salvador en un solo nivel de frecuencia: 900 MHz.  Dos bandas significa que tu teléfono puede operar en niveles de frecuencia de 900 MHz y 1800 MHz. Tres bandas significa que tu teléfono puede operar en niveles de frecuencia de 900 MHz, 1800 MHz y 1900 MHz.  Por ejemplo, si vas a viajar a los Estados Unidos y planeas usar tu teléfono, necesitarás un teléfono de   tres bandas, ya que ellos operan en niveles de 1900 MHz.  Todos nuestros teléfonos son de dos bandas para   que disfrutes de una gran variedad de modelos ajustables a tu presupuesto.  También tenemos disponibilidad   de teléfonos de tres y cuatro bandas, en el caso de que requieras esa opción.";
solucion[11] = "No, no hay ningún cargo por activación para nuestros clientes Digicel Prepago.  Los cargos de activación son válidos únicamente en las cuentas de Postpago dependiendo del plan y modelo  solicitado.";
solucion[12] = "Los clientes de Prepago no tienen que pasar por un proceso de aprobación de crédito  Sin embargo, los clientes de Postpago sí deben pasar por este proceso.";
solucion[13] = "Si pierdes o te roban tu teléfono, debes reportarlo inmediatamente a Atención al Cliente Digicel al número 2504-DIGI (3444). Desde ese momento, suspenderemos el servicio de tu teléfono y, por lo tanto, no incurrirás en ningún gasto por llamadas posteriores.";
solucion[14] = "Los clientes del servicio de Postpago pueden hacerlo en más de 40 países alrededor del mundo.  Solamente recuerda llamar a Atención al Cliente antes de tu viaje para asegurarte de tener la información necesaria antes de partir de El Salvador.  Para obtener una lista completa de nuestros socios roaming, consulta la sección Roaming de este sitio web: Cobertura y Roaming."; 
solucion[15] = "Para llamar a Estados Unidos solo tienes que marcar:<br>001codigo de área, número de teléfono<br>+1 código de área, número de teléfono<br>166001 código de área, número de teléfono";
var opcion = Number(prompt("Igrese el numero que corresponda su interrogante:"));

switch(opcion){
	case 1:
	document.write("<p>"+solucion[1]+"</p>");
	break;
	case 2:
	document.write("<p>"+solucion[2]+"</p>");
	break;
	case 3:
	document.write("<p>"+solucion[3]+"</p>");
	break;
	case 4:
	document.write("<p>"+solucion[4]+"</p>");
	break;
	case 5:
	document.write("<p>"+solucion[5]+"</p>");
	break;
	case 6:
	document.write("<p>"+solucion[6]+"</p>");
	break;
	case 7:
	document.write("<p>"+solucion[7]+"</p>");
	break;
	case 8:
	document.write("<p>"+solucion[8]+"</p>");
	break;
	case 9:
	document.write("<p>"+solucion[9]+"</p>");
	break;
	case 10:
	document.write("<p>"+solucion[10]+"</p>");
	break;
	case 11:
	document.write("<p>"+solucion[11]+"</p>");
	break;
	case 12:
	document.write("<p>"+solucion[12]+"</p>");
	break;
	case 13:
	document.write("<p>"+solucion[13]+"</p>");
	break;
	case 14:
	document.write("<p>"+solucion[14]+"</p>");
	break;
	case 15:
	document.write("<p>"+solucion[15]+"</p>");
	break;
	default:
	alert("la opcion no es valida");
	break;

}

