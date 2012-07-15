/*
 *	Copyright 2012
 *	Iván Eixarch <ivan@sinanimodelucro.org>
 *	https://github.com/joker-x/jquery-cuenta-atras
 *
 *	This program is free software; you can redistribute it and/or modify
 *	it under the terms of the GNU General Public License as published by
 *	the Free Software Foundation; either version 2 of the License, or
 *	(at your option) any later version.
 *
 *	This program is distributed in the hope that it will be useful,
 *	but WITHOUT ANY WARRANTY; without even the implied warranty of
 *	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *	GNU General Public License for more details.
 *
 *	You should have received a copy of the GNU General Public License
 *	along with this program; if not, write to the Free Software
 *	Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 *	MA 02110-1301, USA.
 */

;(function($){	

	$.fn.cuentaAtras = function() {
		return this.each (function(indice) {
			if ($(this).attr('id') === undefined) $(this).attr('id', 'cntdwn'+indice);
			if ($(this).attr('title') === undefined) $(this).attr ('title', '¡Es la hora!');
			var fecha = new Date ($(this).text()),
			contenedor = '#'+$(this).attr('id'),
			mensaje = $(this).attr('title');
			$.fn.cuentaAtras.refresca(Math.floor(new Date(fecha-new Date()).valueOf()/1000), contenedor, mensaje);
		});
	};

	$.fn.cuentaAtras.refresca = function(secs, id, mensaje) {

			function calcage(secs, num1, num2) {
				s = ((Math.floor(secs/num1))%num2).toString();
				if (s.length < 2)
					s = "0" + s;
				return s;
			};

			if (secs < 0) {
				$(id).html(mensaje);
			} else {
				var dia = calcage(secs,86400,100000),
				hora = calcage(secs,3600,24),
				min = calcage(secs,60,60),
				seg = calcage(secs,1,60);

				$(id).html (dia+"d "+hora+":"+min+":"+seg);
				setTimeout("$.fn.cuentaAtras.refresca(" + (secs-1) + ", '" + id + "', '"+ mensaje +"')", 1000);
			};

			return this;
		};

})(jQuery);
