// ARCHIVOS!!
import readline from 'readline';
//import fs from 'fs'; // se puede usar sin instalar por que ya viene en node

 //const cargarAlumnos = () => {// lo almacena en un arreglo
	//const fileJson = fs.readFileSync('src/alumnos.json', 'utf-8'); // lee el archivo.El utf es para que lea los simbolos
	//const dataJson = JSON.parse(fileJson); //lo parsea y me lo devuelve. Lo transforma a json

	//return dataJson; // y lo devulve en json. arreglo de objetos
 //};

 //const almunos = cargarAlumnos(); 

 //console.log(almunos);
 //almunos.push({ nombre: 'Pedro' }, { nombre: 'Federico', telefono: '4545' });

// // Guardado
 //const guardarAlumno = () => { 
 	//const data = JSON.stringify(almunos); // string que converti 
 	//const alumnos = fs.writeFileSync('src/alumnos.json', data); // que escriba lo que guardo
 	//console.log('Se guardo la informacion');
 //};

 //guardarAlumno();

// FIN ARCHIVOS!!

// readline

const rl = readline.createInterface({ //readline nos permite preguntar 
	input: process.stdin, // entrar
	output: process.stdout, //devolver
});

const alumno: any[] = [];

const formulario = () => {
	rl.question('Ingresar nombre: ', (nombre) => { // nombre es un callback. En nombre se deberia aclarar string ej nombre:string
		rl.question('Ingresar apellido: ', (apellido) => { // las preguntas evan en cadena
			rl.question('Ingresar edad: ', (edad) => {
				const a = { nombre: nombre, apellido: apellido, edad: edad };
				alumno.push(a);
				console.log(alumno);
				rl.close(); //cierra la funcion
			});
		});
	});
};

formulario();

// FIN readline
