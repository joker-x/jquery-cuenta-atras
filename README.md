Plugin jQuery Cuenta Atrás
==========================

Este pequeño plugin (1,9K sin comprimir) sirve para mostrar tantos contadores regresivos como quieras en una 
página web.

USO
---

1. Incluir jquery y jquery.cuenta-atras.js en el head de tu página:
`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>`
`<script src="jquery.cuenta-atras.js" type="text/javascript"></script>`
2. Definir la etiqueta donde vas a mostrar el contador regresivo:
`<div class="reloj" title="El evento ya ha pasado">09/12/2013 12:00</div>`
  * La etiqueta debe contener un formato Date válido para javascript: mes/día/año hora:minuto, por ejemplo.
  * Una vez pasada la fecha se mostrará el texto del atributo title
3. Invocar el script:
<pre>
`<script type="text/javascript">`
		;$(function(){
  	    $('.reloj').cuentaAtras();
		});
`</script>`
</pre>    	

