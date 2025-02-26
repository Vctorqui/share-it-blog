---
title: 'Sucesión de Fibonacci con JavaScript'
description: 'Qué es la sucesión de Fibonacci y cómo podemos resolverla con Recursividad y el Bucle for.'
date: '2024-04-30'
draft: false
tags: 
  - dev
  - js
author: 01-victor-q
---

---

## ¿Qué es la Sucesión de Fibonacci? 🤔

En matemáticas, la sucesión de Fibonacci es una serie infinita de números naturales que empieza con los valores iniciales 0 y 1, y continúa añadiendo números que son la suma de los anteriores. Es decir: 0, 1, 1, 2, 3, 5, 8, y así sucesivamente. Quizá ahora te estés preguntando, ¿cómo puedo resolver esa sucesión usando JavaScript? Pues ahora te voy a mostrar dos formas en las que podemos implementarla para obtener dichos resultados.

---

## La Recursividad

La recursividad en programación es una técnica que consiste en que una función se llame a sí misma.

Ahora vienen las incógnitas, si una función se llama a sí misma, ¿cómo puedo evitar que se llame infinitamente? Para evitar lo que normalmente conocemos como el _bucle infinito_, esta función debe tener una condición base.

Como podemos ver en el código de abajo, la forma en la que evitamos que esta función entre en un bucle infinito es añadiéndole una condición que permita que, si la misma no se cumple, podamos salir del bucle.

```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}
```

<div align="center">
<b>Recursividad</b>
</div>

---

Ahora bien, tenemos otra forma de resolver el mismo ejercicio obteniendo los mismos resultados. A continuación, el **bucle For.**

## Bucle For

La estructura de control **for** es bastante útil para ejecutar una serie de instrucciones un número determinado de veces, pero debemos comprender cómo funciona ya que este bucle tiene tres partes separadas por punto y coma (;).

**La inicialización**: esta se realiza antes de que se inicie el bucle y se utiliza para declarar y, a su vez, asignarle valores iniciales a las variables.

**La condición**: es una expresión de tipo _booleana_ que se evalúa antes de cada iteración, lo que permite que el código se ejecute si es _true_, y termine si la expresión se evalúa como _false_.

**La actualización**: esta se utiliza para actualizar el valor de la variable del bucle después de cada iteración. Normalmente se incrementa el valor de la variable, pero también se puede decrementar según lo que necesitemos.

```javascript
function fibonacci(n) {
  const fib = [0, 1]
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib[n]
}
```

<div align="center">
<b>Bucle for</b>
</div>

---

**En conclusión**, en la programación podemos llegar al mismo resultado utilizando diferentes métodos. Es increíble cómo diferentes soluciones pueden resolver el mismo problema; será nuestra forma de verlo y evaluarlo la que determinará cuál es la mejor. Espero que este artículo te ayude a entender mejor la recursividad y el bucle **for**, y puedas aplicarlos con mayor confianza a la hora de trabajar en algún proyecto.

Siempre ten en cuenta que:

> _**La grandeza nace de los pequeños comienzos.**_ - Francis Drake
