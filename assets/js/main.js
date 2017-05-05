function Squad(nombre,edad,hobbies){
	this.nombre= nombre;
	this.edad= edad;
	this.hobbies=hobbies;
	this.persona= function(){
       return ("<br><b> Nombre: </b> " + this.nombre + "<br><b>Edad: </b>" + this.edad + "<br><b>Hobbie: </b>" +"<br><li>" + this.hobbies + "</li>");
	}
}

var espe = new Squad('Esperanza Lucero','26','Fotografia','Diseñar');
var fer = new Squad('Fernanda Zamora','30', 'Escuchar música','fotografia');
var natalia = new Squad('Natalia Villalobos','30', 'Tocar bateria');
var vale = new Squad('Valentina Miranda','26','Dibujar', 'ver anime', 'cocinar');


var per1= espe.persona();
var per2= fer.persona();
var per3= natalia.persona();
var per4= vale.persona();

var todas = per1 + per2 + per3 + per4;

document.getElementById('persona').innerHTML = todas;