
# Notas Musicales Interactivas

---

## Descripción
Esta aplicación permite dibujar **notas musicales** de diferentes escalas (Sol y Fa) en un pentagrama interactivo, utilizando VexFlow como librería principal para la representación gráfica. Los usuarios pueden seleccionar una escala y una nota específica, y la aplicación mostrará la representación gráfica correspondiente en el pentagrama.

---

## Características
- **Selección de Escala**: Permite elegir entre la clave de Sol o Fa.
- **Dibujo de Notas**: Selecciona una nota (Do, Re, Mi, etc.) y observa cómo se dibuja en el pentagrama.
- **Compatibilidad con Notas Mayores**: Todas las notas están ajustadas para coincidir correctamente con la clave seleccionada.
- **Relleno Automático de Silencios**: Si no se selecciona una nota válida, la aplicación añade automáticamente un silencio para evitar errores en la representación.

---

## Captura de Pantalla
*Agrega aquí una captura de pantalla de la aplicación en acción, mostrando el pentagrama con una nota dibujada.*

---

## Requisitos
- **Navegador Compatible**: La aplicación funciona mejor en navegadores modernos como Chrome, Firefox o Edge.
- **Librería Externa**: Utiliza [VexFlow](https://github.com/0xfe/vexflow) para la representación musical.

---

## Cómo Usar
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. Abre el archivo `nota.html` en tu navegador.
3. Selecciona:
   - **Escala**: Escoge entre Sol (treble) o Fa (bass).
   - **Nota**: Elige una nota musical (Do, Re, Mi, etc.).
4. Haz clic en el botón **"Dibujar"** para ver la nota representada en el pentagrama.

---

## Estructura del Proyecto
```plaintext
.
├── index.html        # Archivo principal con la interfaz
├── styles.css        # Estilos de la aplicación
├── javascript.js     # Lógica principal de la aplicación
├── README.md         # Este archivo
```

---

## Tecnologías Utilizadas
- **HTML/CSS/JavaScript**: Para la estructura, diseño y funcionalidad.
- **VexFlow**: Librería para la representación musical en SVG.

---

## Próximos Pasos
- Añadir soporte para **acordes**.
- Implementar opciones para cambiar el tamaño del pentagrama.
- Agregar representación de figuras musicales avanzadas (corcheas, semicorcheas, etc.).

---

## Contribuciones
¡Contribuciones son bienvenidas! Si encuentras un problema o tienes ideas para mejorar la aplicación:
1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Haz tus cambios y realiza un commit:
   ```bash
   git commit -m "Añadida nueva funcionalidad"
   ```
4. Envía un Pull Request.

---

## Licencia
Este proyecto está bajo la Licencia MIT. Puedes consultar más detalles en el archivo [LICENSE](LICENSE).

---

## Agradecimientos
Gracias a [VexFlow](https://github.com/0xfe/vexflow) por proporcionar una librería increíble para la representación musical.
