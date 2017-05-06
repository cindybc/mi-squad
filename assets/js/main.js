
var grupo= [];

function Squad(nombre,edad,hobbies){
	this.nombre= nombre;
	this.edad= edad;
	this.hobbies=hobbies;
}

function xikas(){
var espe = new Squad('Esperanza Lucero','26',['Fotografia','Diseñar','Dormir']);
var fer = new Squad('Fernanda Zamora','30', ['Escuchar música','Fotografia','Pensar en el existencialismo']);
var natalia = new Squad('Natalia Villalobos','30',['Tocar bateria', 'Hacer queques','Dormir']);
var vale = new Squad('Valentina Miranda','26',['Dibujar', 'Ver anime', 'Cocinar']);
var diana= new Squad('Diana Villasmil','29', ['Ver series Coreanas', 'Cantar', 'Escuchar música']);
var cindy= new Squad('Cindialy Berrios', '23',['Trekking','Deporte', 'Escuchar musica']);

grupo.push(espe);
grupo.push(fer);
grupo.push(natalia);
grupo.push(vale);
grupo.push(diana);
grupo.push(cindy);
};

xikas();

grupo.forEach(function(per){
	var presentacion="<br><b> Nombre: </b> " + per.nombre + "<br><b>Edad: </b>" + per.edad + "<br><b>Hobbies: </b>";

per.hobbies.forEach(function(hobbie){
	presentacion += "<ul><li>" + hobbie + "</li></ul>";
});

document.getElementById('persona').innerHTML += presentacion ;
});
