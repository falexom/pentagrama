document.getElementById('dibujar').addEventListener('click', () => {
  const escala = document.getElementById('escala').value; // Escala seleccionada (Sol o Fa)
  const notaInicial = document.getElementById('nota').value.toLowerCase(); // Nota inicial seleccionada

  // Limpia el contenedor del pentagrama
  const pentagramaDiv = document.getElementById('pentagrama');
  pentagramaDiv.innerHTML = '';

  // Crear un renderer de VexFlow
  const VF = Vex.Flow;
  const renderer = new VF.Renderer(pentagramaDiv, VF.Renderer.Backends.SVG);

  // Tamaño del pentagrama
  renderer.resize(700, 200);

  const context = renderer.getContext();
  context.setFont('Arial', 10, '').setBackgroundFillStyle('#FFF');

  // Crear el sistema del pentagrama
  const stave = new VF.Stave(10, 40, 650);

  // Añadir clave (según la escala seleccionada)
  if (escala === 'sol') {
    stave.addClef('treble');
  } else if (escala === 'fa') {
    stave.addClef('bass');
  }

  stave.setContext(context).draw();

  // Define las notas de las escalas mayores
  const escalas = {
    // Escalas para clave de Sol
    sol: {
      c: ['c/4', 'd/4', 'e/4', 'f/4', 'g/4', 'a/4', 'b/4', 'c/5'], // Do mayor
      d: ['d/4', 'e/4', 'f#/4', 'g/4', 'a/4', 'b/4', 'c#/5', 'd/5'], // Re mayor
      e: ['e/4', 'f#/4', 'g#/4', 'a/4', 'b/4', 'c#/5', 'd#/5', 'e/5'], // Mi mayor
      f: ['f/4', 'g/4', 'a/4', 'bb/4', 'c/5', 'd/5', 'e/5', 'f/5'], // Fa mayor
      g: ['g/4', 'a/4', 'b/4', 'c/5', 'd/5', 'e/5', 'f#/5', 'g/5'], // Sol mayor
      a: ['a/4', 'b/4', 'c#/5', 'd/5', 'e/5', 'f#/5', 'g#/5', 'a/5'], // La mayor
      b: ['b/4', 'c#/5', 'd#/5', 'e/5', 'f#/5', 'g#/5', 'a#/5', 'b/5'], // Si mayor
    },
    // Escalas para clave de Fa (ajustadas)
    fa: {
      c: ['c/3', 'd/3', 'e/3', 'f/3', 'g/3', 'a/3', 'b/3', 'c/4'], // Do mayor
      d: ['d/3', 'e/3', 'f#/3', 'g/3', 'a/3', 'b/3', 'c#/4', 'd/4'], // Re mayor
      e: ['e/3', 'f#/3', 'g#/3', 'a/3', 'b/3', 'c#/4', 'd#/4', 'e/4'], // Mi mayor
      f: ['f/3', 'g/3', 'a/3', 'bb/3', 'c/4', 'd/4', 'e/4', 'f/4'], // Fa mayor
      g: ['g/3', 'a/3', 'b/3', 'c/4', 'd/4', 'e/4', 'f#/4', 'g/4'], // Sol mayor
      a: ['a/3', 'b/3', 'c#/4', 'd/4', 'e/4', 'f#/4', 'g#/4', 'a/4'], // La mayor
      b: ['b/3', 'c#/4', 'd#/4', 'e/4', 'f#/4', 'g#/4', 'a#/4', 'b/4'], // Si mayor
    },
  };

  // Seleccionar las notas según la clave y escala
  const notas =
    escala === 'sol'
      ? escalas.sol[notaInicial] || []
      : escalas.fa[notaInicial] || [];

  if (notas.length === 0) {
    console.error(`No se encontraron notas para la escala seleccionada: ${notaInicial}`);
    return; // Salimos si no hay notas definidas
  }

  // Crear las notas de la escala
  const notes = notas.map((nota) =>
    new VF.StaveNote({
      clef: escala === 'sol' ? 'treble' : 'bass',
      keys: [nota],
      duration: 'q', // Negra (1 tiempo)
    })
  );

  // Crear la voz con las notas
  const voice = new VF.Voice({ num_beats: notas.length, beat_value: 4 });
  voice.addTickables(notes);

  // Formatear y dibujar las notas
  const formatter = new VF.Formatter().joinVoices([voice]).format([voice], 600);
  voice.draw(context, stave);
});
