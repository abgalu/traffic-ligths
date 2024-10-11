# Traffic ligths

Este proyecto simula el comportamiento de autos en una carretera con semáforos. Los autos se mueven a lo largo de la carretera, respetando las reglas de tráfico, mientras que los semáforos cambian de estado siguiendo un ciclo predefinido.

## Descripción

La simulación toma como entrada una cadena que representa la carretera. Los autos (`C`) se mueven de izquierda a derecha, y deben obedecer las señales de tráfico (`G` para verde, `O` para naranja, y `R` para rojo).

Cada semáforo tiene un ciclo:

- **Verde (`G`)**: 5 unidades de tiempo.
- **Naranja (`O`)**: 1 unidad de tiempo.
- **Rojo (`R`)**: 5 unidades de tiempo.

Los autos siguen estas reglas:

- Los autos pueden moverse 1 posición por unidad de tiempo.
- Si un auto encuentra una luz verde, puede moverse a la misma posición que el semáforo.
- Si encuentra una luz naranja, debe detenerse a menos que ya haya entrado en la intersección.
- Si encuentra una luz roja, debe detenerse y esperar hasta que el semáforo cambie a verde.

## Ejemplo

Dado el estado inicial de la carretera:

```
"CCC.G...R..."
```

Si simulamos 16 unidades de tiempo, la salida sería:

```
[
  "CCC.G...R...", // 0: estado inicial
  ".CCCG...R...", // 1
  "..CCC...R...", // 2
  "..CCGC..R...", // 3
  "...CC.C.R...", // 4
  "...COC.CG...", // 5
  "...CR.C.C...", // 6
  "...CR..CGC..", // 7
  "...CR...C.C.", // 8
  "...CR...GC.C", // 9
  "...CR...O.C.", // 10
  "....C...R..C", // 11
  "....GC..R...", // 12
  "....G.C.R...", // 13
  "....G..CR...", // 14
  "....G..CR...", // 15
  "....O...C..."  // 16
]
```

## Cómo Probar

### Requisitos

Necesitas tener instalado **Node.js** para ejecutar este proyecto.

### Pasos

1. Clona este repositorio:

   ```bash
   git clone https://github.com/abgalu/traffic-ligths.git
   ```

2. Entra en el directorio del proyecto:

   ```bash
   cd traffic-ligths
   ```

3. Ejecuta el archivo JavaScript:

   ```bash
   node trafficLigths.js
   ```

4. Verás la salida simulada de la carretera durante las `n` unidades de tiempo.

## Personalización

Puedes personalizar la carretera inicial cambiando el valor de la variable `road`, así como el número de unidades de tiempo que deseas simular ajustando `n`.

## Licencia

Este proyecto está bajo la Licencia MIT.
