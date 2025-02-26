---
title: '¿Cómo mejorar tu lógica de programación y no llorar en el intento?😭'
description: 'Consejos de cómo mejorar nuestra lógica, pero también cómo enfrentarnos a esos problemas teniendo en cuenta otros aspectos.'
date: '2024-11-21'
draft: false
tags:
  - dev
author: 01-victor-q
---

---

## Introducción

Muchos programadores, y me incluyo, hemos sufrido alguna vez intentando resolver un problema. A veces sentimos mucha frustración cuando estamos estancados en algo y no encontramos solución. En ese momento de frustración, debemos respirar y dividir el problema en pequeñas soluciones.

Una vez alguien me dijo: _**"Debemos tomar ese problema grande y dividirlo en pequeños fragmentos, y poco a poco ir resolviendo cada pequeño fragmento que te hará resolver ese rompecabezas."**_

Ahora bien, **¿cómo podemos mejorar nuestra lógica a la hora de resolver un problema?** Quizá la respuesta sea un poco obvia, como: _**"Necesitas practicar ejercicios"**_ o _**"Mejoras en programación, programando"**_ y es completamente cierto. No puedes mejorar en algo que no practicas. Pero antes de caer en la frustración de no poder resolver un primer ejercicio, déjame darte unos pequeños consejos:

- **Analiza el problema antes de comenzar a codear**. Está bien que tengas la motivación para hacerlo y no te rindas, pero de nada vale empezar a escribir código si no sabes cuál es el problema principal.
- **Divide el problema en pequeños fragmentos y ve resolviendo uno por uno**. No importa si un ejercicio al principio te toma más líneas de lo que esperas, lo importante es resolverlo y, de allí, partir para saber qué puedes cambiar o refactorizar.
- **La programación no es fácil**, lleva tiempo, dedicación y mucha disciplina. En 3 meses no serás el mejor programador del mundo. Date tiempo para mejorar y, cada día, tener la posibilidad de crecer más.
- Al principio, **aprende a querer el código**. De nada vale querer aprender a programar pensando en cuánto dinero puedes ganar porque no es así. Como ya dije, lleva tiempo y dedicación. Intenta respirar cada vez que tengas 1000 errores en consola, aunque es casi imposible hacerlo. Pero, al final del día, la satisfacción está en ver ese resultado que esperabas.

Ahora vamos a poner en práctica nuestra lógica🚀

<div align='center'><img src='https://github.com/user-attachments/assets/54f6b5ac-b4cb-4faa-915b-f6383f811155'/></div>

---

## Ejercicio para practicar👨🏻💻

- **Ejercicio Two Sum**

Ahora tenemos el siguiente ejercicio, mejor conocido como Two Sum. Es el problema de las dos sumas que consiste en encontrar dos números en una matriz que sumen un número objetivo dado. Cabe destacar que este ejercicio puede ser más complejo de lo que parece si empezamos a cuestionar o imaginar otros casos. Usaremos dos métodos distintos para resolverlo.

**Problema:** Dado un array de enteros, devuelve los índices de los dos números que suman un objetivo dado.

```bash
-- Ejemplos Inputs y Outputs --

// Ejemplo 1:

Input: nums = [6, 2, 3]; target = 8
Output: [0, 1]

// Ejemplo 2:

Input: nums = [3, 2, 4]; target = 6
Output: [1, 2]

// Ejemplo 3:

Input: nums = [5, 7, 5]; target = 10
Output: [0, 2]
```

Necesitamos encontrar la combinación de que la suma de dos números dé el target deseado. Entonces, ¿qué podemos hacer?🤔 Pues aquí es donde entra uno de los consejos, antes de codear, dividir el problema en fragmentos.

### Comprender el problema

- Comprender el problema, para eso debemos saber cuál es el objetivo, el cual es encontrar dos números en un array que sumen un valor y que devuelvan el índice.
- Tenemos una entrada que está conformada por un array de enteros 'nums' y un entero llamado 'target'. También tenemos una salida que representa los índices de los números que suman el 'target'.

### Definir los casos de prueba del ejercicio

```bash
// Input: nums = [6, 2, 3]; target = 8

// Output: [0, 1] (Porque nums[0] + nums[1] es 6 + 2, que es igual a 8)
```

Pero, ¿qué sucede si no hay dos números que sumen el objetivo?🤔

### Plantear una estrategia

- Usar dos bucles anidados para verificar las combinaciones posibles.
- Usar un diccionario (hash map) para almacenar números vistos y sus índices.

---

**Método a:**

- Primero necesitamos iterar sobre cada par posible de números, esto para poder comparar el primer número con los demás números de la matriz, luego pasamos al siguiente y lo comparamos con todos los demás, y así seguimos hasta que encontremos la solución.
- Luego debemos comprobar si el par dado suma nuestro `target`, si es así entonces nos va a retornar los dos índices.
- Si no hay ninguna combinación devuelve un texto.

```javascript
function twoSum(nums, target) {
  // 1. Iterar sobre los pares de números posibles
  for (let i = 0; i < nums.length; i++) {
    // j está siempre por delante de i para no revaluar sumas ya evaluadas
    for (let j = i + 1; j < nums.length; j++) {
      // 2. Comprobar si un par dado coincide con nuestro target
      if (nums[i] + nums[j] == target) {
        // Devuelve los indices cuando se ha encontrado un par
        return [i, j]
      }
    }
  }
  return 'No se ha encontrado ninguna combinación que sume el target'
}
```

<div align="center">
<b>Ejercicio Two Sum - Método a</b>
</div>

---

**Método b:**

- Se inicializa un objeto vacío llamado "seen" para almacenar los números que hemos visto y sus índices.
- Luego, al igual que en el otro método, vamos a iterar sobre cada elemento del array `nums`.
- Necesitamos guardar el número actual dentro de una variable, la podemos llamar "currentNum".
- Luego necesitamos calcular y almacenar en una variable el complemento que con el "currentNum" suma al `target`.
- Verificamos si el complemento existe, si existe devolvemos el índice del complemento y el número actual, si no existe, guardamos el número actual y su índice en "seen".

```javascript
function twoSum(nums, target) {
  // Creamos un objecto (diccionario) para almacenar los números vistos y sus indices
  const seen = {}
  // Iteramos a través del array nums
  for (let i = 0; i < nums.length; i++) {
    // Guardamos el número actual en una variable
    const currentNum = nums[i]

    // Calculamos el componente que, junto con currentNum, suma target
    const complement = target - currentNum

    // Verificamos si el componente ya esta en el objeto seen
    if (seen[complement] !== undefined) {
      // Si está, devolvemos los indices del complemento y del número actual
      return [seen[complement], i]
    }
    // Si el complemento no está, guardamos el número actual y su indice en seen
    seen[currentNum] = i
  }
}
```

<div align='center'><img src='https://github.com/user-attachments/assets/e735d4b2-7a78-4221-b1cd-ad77eaefdf6b'/><p>Et voilà. El ejercicio está resuelto🤯</p></div>

---

**En conclusión**, debemos practicar para mejorar, pero siempre teniendo en cuenta que necesitas saber antes de resolver un ejercicio. Como dije, la programación no es fácil, pero terminar el día sabiendo que llegaste al resultado esperado es lo que hace que la programación sea maravillosa.

Siempre ten en cuenta que:

> _**La grandeza nace de los pequeños comienzos.**_ - Francis Drake
