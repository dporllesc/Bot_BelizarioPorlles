const db = require("..");

//Datos de ejemplo para el chatbot auditor - Poblado de tablas cuestionarios y preguntas

let cuestionarios = [
  "CUESTIONARIOS SOBRE LA EMPRESA BUMER SOLUTIONS Y SU CULTURA ORGANIZACIONAL.",
];

let preguntas = [
  "¿Paolo Guerrero llego a jugar en el Bayer de Munich?",
  "¿Cristiano Ronaldo dejo el Real Madrid el 2019?",
  "¿Es verdad que 30 + 25 + 25 - 70 + 10 - 5 = 25?",
  "¿La UPT cumple mas de 125 años (2021)?",
];

cuestionarios.forEach((cuestionario) => {
  db.query(
    `insert into cuestionarios(nombre) values('${cuestionario}')`,
    (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log("Se terminó de poblar la tabla cuestionarios", res.rows);
    }
  );
});

preguntas.forEach((pregunta, index) => {
  db.query(
    `insert into preguntas(pregunta,orden,id_cuestionario) values('${pregunta}',${
      index + 1
    },7)`,
    (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log("Se terminó de poblar la tabla preguntas", res.rows);
    }
  );
});
