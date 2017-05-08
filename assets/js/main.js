var fotos=[]; // Arreglo para poder insertar imagenes.

	fotos["Fernanda Zamora"]= "fer.jpg";
	fotos["Natalia Villalobos"]= "natalia.jpg";  //ruta de imagenes a insertar.
  fotos["Diana Villasmil"]= "diana.jpg";

//Hice una clase con un constructor para realizar luego las instancias.
class Squad {

	constructor(nombre, edad, hobbies) {

  this.imagen= new Image();
	this.nombre= nombre;
	this.edad= edad;
	this.hobbies=hobbies;

	this.imagen.src=fotos[this.nombre]; //Llame a la ruta en que se encontraban las imagenes, pero no me fue posible mostrarlas.
   }
};

var grupo= []; //Arreglo que contiene todaas las nuevas instancias a ingresar.

    grupo.push(new Squad('Esperanza Lucero','26',['Fotografia','Diseñar','Dormir']));
    grupo.push( new Squad('Fernanda Zamora','30', ['Escuchar música','Fotografia','Pensar en el existencialismo']));
    grupo.push( new Squad('Natalia Villalobos','30',['Tocar bateria', 'Hacer queques','Dormir']));
    grupo.push( new Squad('Valentina Miranda','26',['Dibujar', 'Ver anime', 'Cocinar']));                            //instancias
    grupo.push(new Squad('Diana Villasmil','29', ['Ver series Coreanas', 'Cantar', 'Escuchar música']));
    grupo.push(new Squad('Cindialy Berrios', '23',['Trekking','Deporte', 'Escuchar musica']));



//El forEach se ocupo para recorrer el arreglo grupo(que contieene las instancias), para luego generar una var presentacion, que contenga los detalles que mostrare de cada instancia.
grupo.forEach(function(per){
	var presentacion= "<br><b> Nombre: </b> " + per.nombre + "<br><b>Edad: </b>" + per.edad +" años" + "<br><b>Hobbies: </b>";

//Realiza el recorrido de cada persona pero en el arreglo de hobbies y se le agrega a la var presentacion.
per.hobbies.forEach(function(hobbie){
	presentacion += "<ul><li>" + hobbie + "</li></ul>";
});
//Se agrega a un div creado en HTML a traves de su id, el contenido de la var presentacion y haciendolo visible por medio de un innerHTML.
document.getElementById('persona').innerHTML += presentacion ;
});

//Trate de crear una clase para comenarios pero no resulto.
class Comentario {

	constructor(id_miembro, comentario, likes) {


		this.id_miembro = id_miembro;
		this.comentario = comentario;
		this.likes = likes;
	}

};

//Esta funcion genera un contador cada vez que se realice un click al boton.
var i = 0;

function meGusta() {
    i+=1; //Suma de 1 cada click.
  document.getElementById("cuenta").innerHTML= i; //Puede hacer visible el conteo.
};

//Logra generar un comentario cada vez que se genere un click.
function agregarComentario(id_miembro){


  res= document.getElementById("comentar").value; //Se toma a traves del id, el comentario realizado(valor).
  document.getElementById("mostrarComentario").innerHTML+= res + "<br>"; //Hace visible el comentario relizado.
	res= document.getElementById("comentar").value= "";//Despues que se genera el click vuelve al valor original.
};
