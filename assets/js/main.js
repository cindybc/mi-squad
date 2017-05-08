var fotos=[];

	fotos["Fernanda Zamora"]= "fer.jpg";
	fotos["Natalia Villalobos"]= "natalia.jpg";
  fotos["Diana Villasmil"]= "diana.jpg";


class Squad {

	constructor(nombre, edad, hobbies) {

  this.imagen= new Image();
	this.nombre= nombre;
	this.edad= edad;
	this.hobbies=hobbies;

	this.imagen.src=fotos[this.nombre];
   }

}

var grupo= [];

    grupo.push(new Squad('Esperanza Lucero','26',['Fotografia','Diseñar','Dormir']));
    grupo.push( new Squad('Fernanda Zamora','30', ['Escuchar música','Fotografia','Pensar en el existencialismo']));
    grupo.push( new Squad('Natalia Villalobos','30',['Tocar bateria', 'Hacer queques','Dormir']));
    grupo.push( new Squad('Valentina Miranda','26',['Dibujar', 'Ver anime', 'Cocinar']));
    grupo.push(new Squad('Diana Villasmil','29', ['Ver series Coreanas', 'Cantar', 'Escuchar música']));
    grupo.push(new Squad('Cindialy Berrios', '23',['Trekking','Deporte', 'Escuchar musica']));


grupo.forEach(function(per){
	var presentacion= "<br><b> Nombre: </b> " + per.nombre + "<br><b>Edad: </b>" + per.edad +" años" + "<br><b>Hobbies: </b>";

per.hobbies.forEach(function(hobbie){
	presentacion += "<ul><li>" + hobbie + "</li></ul>";
});

document.getElementById('persona').innerHTML += presentacion ;
});


class Comentario {

	constructor(id_miembro, comentario, likes) {


		this.id_miembro = id_miembro;
		this.comentario = comentario;
		this.likes = likes;
	}

};
var i = 0;

function meGusta() {
    i+=1;
  document.getElementById("cuenta").innerHTML= i;
};


function agregarComentario(){

  res= document.getElementById("comentar").value;
  document.getElementById("mostrarComentario").innerHTML+= res + "<br>";
	res= document.getElementById("comentar").value= "";
};
