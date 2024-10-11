function trafficLigths(road, n) {
  const results = [road]; // Almacenar el estado inicial del camino
  const roadLength = road.length;

  // Mapeamos el estado inicial de los autos y luces
  let cars = road.split("").map((char) => char === "C");
  let lights = road.split("").map((char) => {
    if (char === "G") return { state: "G", timer: 5 };
    if (char === "O") return { state: "O", timer: 1 };
    if (char === "R") return { state: "R", timer: 5 };
    return null;
  });

  // Función para cambiar el estado de los semáforos
  const nextLightState = (light) => {
    switch (light.state) {
      case "G":
        return { state: "O", timer: 1 };
      case "O":
        return { state: "R", timer: 5 };
      case "R":
        return { state: "G", timer: 5 };
    }
  };

  // Simular por 'n' unidades de tiempo
  for (let t = 1; t <= n; t++) {
    // Actualizamos los semáforos
    for (let i = 0; i < roadLength; i++) {
      if (lights[i]) {
        lights[i].timer--;
        if (lights[i].timer === 0) {
          lights[i] = nextLightState(lights[i]);
        }
      }
    }

    // Movemos los autos
    let newCars = Array(roadLength).fill(false);
    for (let i = 0; i < roadLength; i++) {
      if (cars[i]) {
        const nextPos = i + 1;
        if (nextPos < roadLength && !newCars[nextPos]) {
          // El auto avanza si no hay semáforo, o si el semáforo está en verde
          if (!lights[nextPos] || lights[nextPos].state === "G") {
            newCars[nextPos] = true;
          }
          // Si el semáforo está en naranja y el auto ya está dentro, continúa
          else if (lights[nextPos].state === "O" && !lights[i]) {
            newCars[nextPos] = true;
          }
        }
      }
    }
    cars = newCars;

    // Construimos el estado del camino para la unidad de tiempo actual
    let roadState = "";
    for (let i = 0; i < roadLength; i++) {
      if (cars[i]) {
        roadState += "C";
      } else if (lights[i]) {
        roadState += lights[i].state;
      } else {
        roadState += ".";
      }
    }

    // Guardamos el estado actual del camino
    results.push(roadState);
  }

  return results;
}

// Ejemplo de uso:
const road = "CCC.G...R...";
const n = 16;
console.log(trafficLigths(road, n));
