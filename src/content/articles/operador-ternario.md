---
title: 'Operador Ternario ?: en C#'
description: 'El operador ternario es un operador condicional en C# como en múltiples lenguajes de programación. En este artículo puedes aprender sobre su uso en C# y como aprovecharlo en tus proyectos.'
date: '2025-01-27'
draft: false
category: 'CSharp'
author: 05-brandon-v
---

![Elvis Presley con un signo de interrogación en el cabello y dos puntos en los ojos](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zrcylun1av05izzpftee.png)

## ¿Qué es el operador ternario?

El operador ternario es un operador condicional en C# como en múltiples lenguajes de programación. Si te sirve para recordarlo puedes hacer referencia al nombre de Elvis Operator, aunque este nombre es el nombre del operador de nulos en Kotlin y se aplica de forma distinta, pero a mí me sirve para recordar que debemos usar un signo de interrogación de cierre y dos puntos dentro de su sintaxis.

El semejante del Elvis Operator en C# es el Null-Coalescing Operator (??), pero este ya es otro tema.

Retomando, el operador ternario nos ayuda a definir de forma corta y/o reducida la ejecución de ciertas sentencias, asignación de valores y pequeños procesos basados en condiciones; puedes verlo como una alternativa reducida de la sentencia if-else.

## Sintaxis del operador ternario

Este operador siempre debe constar de 3 operandos o elementos (de ahí su nombre):

1. **Expresión condicional:** Es la evaluación lógica que esperamos realizar (resultado de true o false).
2. **La primera declaración:** La expresión, resultado o valor que esperamos obtener si la expresión condicional da como resultado verdadero (true)
3. **La segunda declaración:** La expresión, resultado o valor que esperamos obtener si la expresión condicional da como resultado falso (false)

Viéndose de la siguiente manera: `expresion_condicional ? primera_declaracion : segunda_declaracion` o `condicion ? consecuencia ? alternativa`.

De esta forma, si `expresion_condicional` resulta en verdadero (true) entonces la `primera_declaracion` es el valor de retorno, pero, si `expresion_condicional` es falso (false), el operador retorna la `segunda_declaracion`.

Debemos tener en cuenta que el uso del operador ternario en lugar de una declaración if-else puede ayudar a tener un código más limpio, conciso y reducido, pero debemos tener cuidado de no realizar múltiples condiciones anidadas u operaciones complejas con el operador, por ello, es típicamente usado para calcular un valor o realizar una selección simple inmediata en los casos en que necesitemos realizarlo condicionalmente. Algunas veces es mucho mejor utilizar las sentencias if-else si las evaluaciones lógicas que estamos realizando son muy complejas, el operador ternario puede complicar la lectura del código y complicar el seguimiento del flujo de ejecución del programa e incluso hacer complejas futuras refactorizaciones.

Por lo tanto, podemos decir que `expresion_condicional` siempre será una expresión booleana.

```csharp

int valor1 = 10;
int valor2 = 20;

if(valor1 > valor2)
{
    Console.WriteLine("El primer valor es mayor que el segundo.");
}
else
{
    Console.WriteLine("El segundo valor es mayor que el primero.");
}

string mensaje = valor1 > valor2 ? "El primer valor es mayor que el segundo." : "El segundo valor es mayor que el primero.";
Console.WriteLine(mensaje);

```

## Operador ternario anidado

El operador ternario anidado (nested ternary operator en inglés), podemos utilizarlo para declarar más de una condición.

```csharp

int valor1 = 10;
int valor2 = 10;

if (valor1 > valor2)
{
    Console.WriteLine("El primer valor es mayor que el segundo.");
}
else if (valor1 < valor2)
{
    Console.WriteLine("El segundo valor es mayor que el primero.");
}
else
{
    Console.WriteLine("El primer valor y el segundo son iguales.");
}

string mensaje = valor1 > valor2 ? "El primer valor es mayor que el segundo." :
    valor1 < valor2 ? "El segundo valor es mayor que el primero." : "El primer valor y el segundo son iguales.";
Console.WriteLine(mensaje);

```

De esta forma podemos evaluar múltiples condiciones anidando diversas expresiones que permitan obtener el valor correspondiente según el resultado de estas.

Debemos tener en cuenta que el operador ternario es asociativo por la derecha, lo que nos indica que la sentencia u ocurrencia del operador que vamos a aplicar primero es desde la derecha, es decir, la ultima expresión ternaria que se encuentre al extremo derecho. Por lo tanto, si tenemos una expresión de la forma `a ? b : c ? d : e` la evaluamos como `a ? b : (c ? d : e)` y no como `(a ? b : c) ? d : e`. Esto significa que el resultado de evaluar `(c ? d : e)` va a ser parte de la evaluación `a ? b`, por lo que, `a ? b : resultado_c_con_d_y_e`. Esto ocurre porque necesitamos conocer los resultados de cada expresión para poder determinar la siguiente evaluación que se realice en el operador ternario, si evaluamos la primera expresión no tenemos seguridad de que el valor devuelto va a ser un booleano, por lo tanto, las expresiones anidadas no podrían suceder de manera adecuada.

## Expresión condicional ref

A partir de la versión 7.2 de C# podemos utilizar la palabra reservada ref para asignar una variable de referencia local de forma condicional con una expresión de referencia condicional.

```csharp

var numeros = new int[] {1, 2, 3, 4, 5 };
var valor = 100;
var valor2 = valor >= 100 ? numeros[2] : numeros[4];
valor2 = 1000;
Console.WriteLine(string.Join(' ', numeros));

```

En el código anterior no estamos utilizando la palabra reservada ref, por lo tanto, cuando se efectúa la condición `valor ≥ 100`, se obtendrá el elemento en la posición 2 (tercer elemento del array, es decir, 3) o el de la posición 4 (último elemento, es decir, 5) del array, copiando así dicho valor hacia la variable `valor2`, por lo tanto, si cambiamos el valor de la variable `valor2` a 1000, el array de `numeros` enteros se mantiene intacto.

Ahora realicemos lo mismo pero utilizando ref:

```csharp

var numeros = new int[] { 1, 2, 3, 4, 5 };
var valor1 = 100;
ref var valor2 = ref ((valor1 >= 100) ? ref numeros[2] : ref numeros[4]);
valor2 = 10000;
Console.WriteLine(string.Join(" ", numeros));

```

En este caso estamos diciendo que la variable `valor2` almacenara un valor como referencia, y la expresión condicional está recibiendo como resultado una referencia de un valor, a su vez las posiciones 2 y 4 del array `numeros` están siendo devueltas como una referencia, por lo tanto, la variable `valor2` ahora no realiza una copia del valor obtenido del array sino que está apuntando mediante una referencia al tercer o último elemento del array de `numeros` (posición 2 y 4 respectivamente). De esta forma, si asignamos un nuevo valor a la variable `valor2`, lo que estamos haciendo es ir y reasignar el valor almacenado en la dirección de la referencia, como resultado, estaremos modificando el array.

Antes de C# 7.2 necesitábamos realizar algunas operaciones extra para asignar o enlazar las referencias de una variable a otra de forma condicional, de la siguiente manera:

```csharp

var numeros = new int[] { 1, 2, 3, 4, 5 };
var valor = 100;
ref var valor2 = ref ObtenerPorReferencia(valor >= 100, ref numeros[2], ref numeros[4]);
valor2 = 15;
Console.WriteLine(string.Join(' ', numeros));

ref int ObtenerPorReferencia(bool condicion, ref int valorSiVerdadero, ref int valorSiFalso)
{
    if (condicion)
        return ref valorSiVerdadero;
    else
        return ref valorSiFalso;
}

```

Podemos observar ciertas similitudes como que la variable `valor2` almacena una referencia, que el método en cuestión devuelve y que los valores obtenidos del array `numeros` se pasan por referencia, sin embargo, se alcanza a notar que conlleva un poco más de trabajo y además que en este caso si el array `numeros` es nulo o alguna de las posiciones del array es nulo, tendremos un error NRE (Null Reference Exception) porque estas expresiones se ejecutan incondicionalmente como parte del flujo del programa, situación que no ocurre con la forma ternaria debido a que las expresiones son ejecutadas según se cumpla la condición, no antes de evaluarlas.

En lo que al manejo de tipos por valor o referencia respecta, podemos tener una variable a la que se permita guardar valores por referencia a partir de una expresión condicional que retorne valores por referencia. Es decir, que en lugar de almacenar un valor (10 por ejemplo) almacenamos un “identificador, enlace, lugar, dirección” que contiene la referencia a la variable original, no el valor original, más bien, el espacio de memoria que contiene dicho valor.

Piénsalo como una caja, donde tú guardas las cosas, la caja es el espacio en memoria, o contenedor, si tú guardas un cuaderno, estás guardando el objeto, con espacio físico y tú sabes que está ahí, y luego ese cuaderno puedes llevarlo a otra caja, o colocar otro cuaderno en una caja distinta, ahora son dos cajas con cuadernos, si le quitas hojas a uno, el cuaderno de la otra caja no se ve afectado, tiene todas sus hojas.

Pero, si en lugar del cuaderno, en la primera caja guardas un papel que dice donde está el cuaderno, y luego colocas una copia de ese papel en la otra caja refiriendo al mismo cuaderno, cuando tú vayas y busques ese cuaderno en el lugar que has colocado en el papel y arranques unas cuantas hojas, si más adelante lo buscas a partir de cualquiera de los dos papeles, será el mismo cuaderno y tendrá hojas menos.

## Curiosidades

- El operador ternario se le conoce así porque trabaja con tres operandos. La palabra "ternario" deriva del latín "ternarius", que significa "compuesto de tres elementos".
- El Elvis Operator en Kotlin en realidad es el null coalesing en C#. En Kotlin el ternary operator se consigue utilizando sentencias if-else, porque estas también pueden ser evaluadas como expresiones, por ejemplo, `if (a) b else c`
- Python utiliza una sintaxis especial para el ternary operator: `resultado if condicion else alternativa`
- Otros lenguajes de programación también utilizan `?:` como ternario, por ejemplo JavaScript, PHP, JAVA, entre otros.

## Conclusión

El operador ternario es una forma muy útil de reducir la cantidad de líneas de código, pero más aún, de introducir una forma un tanto más declarativa de expresar resultados basados en condiciones, sin embargo, su uso debe ser limitado en cuanto a la cantidad de expresiones que pretendemos evaluar así como la complejidad de estas, no hay nada que reemplace unas buenas sentencias `if-else` cuando las evaluaciones lógicas tienden a complicarse, y por el bien de la salud de tu código y de tus compañeros intentando descifrar los enigmas que este esconde, algunas veces es mejor utilizar la forma sencilla y convencional de realizar estas evaluaciones, ya que todos conocen la sentencia if-else, pero no todos pueden conocer el operador ternario.

Si bien el operador ternario puede variar de lenguaje en lenguaje, como ya has visto anteriormente, lo importante es conocer su existencia, así como el patrón que este sigue, luego, la sintaxis se la dejas al lenguaje en cuestión, pero tú ya sabes como funciona.

## Código fuente

- [Repositorio](https://github.com/BrVenturaU/BlogPostTutorials)
- [Archivo fuente](https://github.com/BrVenturaU/BlogPostTutorials/blob/main/src/BlogPostTutorials.TernaryOperator/BlogPostTutorials.TernaryOperator.Console/Program.cs)
