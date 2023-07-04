// ARCHIVOS!!
import readline from 'readline';
// import fs from 'fs';

// const cargarAlumnos = () => {
// 	const fileJson = fs.readFileSync('src/alumnos.json', 'utf-8');
// 	const dataJson = JSON.parse(fileJson);

// 	return dataJson;
// };

// const almunos = cargarAlumnos();

// console.log(almunos);
// almunos.push({ nombre: 'Pedro' }, { nombre: 'Federico', telefono: '4545' });

// // Guardado
// const guardarAlumno = () => {
// 	const data = JSON.stringify(almunos);
// 	const alumnos = fs.writeFileSync('src/alumnos.json', data);
// 	console.log('Se guardo la informacion');
// };

// guardarAlumno();

// FIN ARCHIVOS!!

// readline

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const alumno: any[] = [];

const formulario = () => {
	rl.question('Ingresar nombre: ', (nombre) => {
		rl.question('Ingresar apellido: ', (apellido) => {
			rl.question('Ingresar edad: ', (edad) => {
				const a = { nombre: nombre, apellido: apellido, edad: edad };
				alumno.push(a);
				console.log(alumno);
				rl.close();
			});
		});
	});
};

formulario();

// FIN readline
