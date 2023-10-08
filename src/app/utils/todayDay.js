export function getDiaHoy() {
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  return diasSemana[new Date().getDay()];
}

export function getPicoyPlaca() {
  const ciudades = [
    {
      nombre: "Bogotá",
      reglas: [
        {
          dia: "Lunes",
          placas: ["6", "7", "8", "9", "0"],
        },
        {
          dia: "Martes",
          placas: ["1", "2", "3", "4", "5"],
        },
        {
          dia: "Miércoles",
          placas: ["6", "7", "8", "9", "0"],
        },
        {
          dia: "Jueves",
          placas: ["1", "2", "3", "4", "5"],
        },
        {
          dia: "Viernes",
          placas: ["6", "7", "8", "9", "0"],
        },
        {
            dia: "Sábado",
            placas: "No aplica",
          },
          {
            dia: "Domingo",
            placas: "No aplica",
          },
      ],
    },
    {
      nombre: "Medellín",
      reglas: [
        {
          dia: "Lunes",
          placas: ["7", "1"],
        },
        {
          dia: "Martes",
          placas: ["3", "0"],
        },
        {
          dia: "Miércoles",
          placas: ["4", "6"],
        },
        {
          dia: "Jueves",
          placas: ["5", "9"],
        },
        {
          dia: "Viernes",
          placas: ["8", "2"],
        },
        {
          dia: "Sábado",
          placas: "No aplica",
        },
        {
          dia: "Domingo",
          placas: "No aplica",
        },
      ],
    },
    {
      nombre: "Cali",
      reglas: [
        {
          dia: "Lunes",
          placas: ["1", "2"],
        },
        {
          dia: "Martes",
          placas: ["3", "4"],
        },
        {
          dia: "Miércoles",
          placas: ["5", "6"],
        },
        {
          dia: "Jueves",
          placas: ["7", "8"],
        },
        {
          dia: "Viernes",
          placas: ["9", "0"],
        },
        {
            dia: "Sábado",
            placas: "No aplica",
          },
          {
            dia: "Domingo",
            placas: "No aplica",
          },
      ],
    },
  ];
  return ciudades;
}
