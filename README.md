# 🐾 Desafío Veterinaria JS

Este proyecto corresponde a un desafío introductorio de **Node.js**, cuyo objetivo es crear una pequeña aplicación backend que permita **registrar y leer citas de atención veterinaria** utilizando archivos y argumentos por línea de comando.

La aplicación trabaja directamente desde la terminal y guarda la información en un archivo JSON.

---

## 📂 Estructura del proyecto

```
📁 veterinaria-js
│── index.js          # Archivo principal, se ejecuta desde la terminal
│── operaciones.js    # Contiene las funciones registrar y leer
│── citas.json        # Archivo donde se almacenan las citas (arreglo JSON)
│── README.md         # Documentación del proyecto
```

---

## ⚙️ Funcionamiento general

* **index.js** recibe los argumentos desde la terminal y decide qué operación ejecutar.
* **operaciones.js** contiene:

  * `registrar`: agrega una nueva cita veterinaria al archivo `citas.json`.
  * `leer`: muestra por consola todas las citas registradas.
* **citas.json** almacena las citas en formato JSON como un arreglo.

---

## 🐶 Registrar una cita veterinaria

Para registrar una nueva cita se debe ejecutar el siguiente comando desde la terminal:

```bash
node index.js registrar Benito "2 años" perro blanco vomitos
```

### 📌 Significado de los argumentos

1. `registrar` → operación a ejecutar
2. `Benito` → nombre del animal
3. `"2 años"` → edad del animal (usar comillas si contiene espacios)
4. `perro` → tipo de animal
5. `blanco` → color del animal
6. `vomitos` → enfermedad

Al ejecutarse correctamente, la cita se guardará en `citas.json` y se mostrará un mensaje de confirmación.

---

## 📖 Leer citas registradas

Para mostrar todas las citas almacenadas en el archivo JSON, ejecutar:

```bash
node index.js leer
```

Este comando imprimirá en consola la lista de citas registradas. Si no existen citas, se mostrará un mensaje indicándolo.

---

## 🛠️ Tecnologías utilizadas

* Node.js
* Módulo nativo **File System (fs)**
* JavaScript

---

## ✅ Notas finales

* El archivo `citas.json` debe existir previamente y comenzar como un arreglo vacío:

```json
[]
```

* El proyecto se ejecuta completamente desde la terminal.
* No requiere dependencias externas.

---

🚀 Proyecto desarrollado como parte del **Desafío Veterinaria JS – Desafío Latam**
