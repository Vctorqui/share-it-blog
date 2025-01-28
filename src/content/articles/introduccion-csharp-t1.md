---
title: 'Introducción a C# Tema 1: Sintaxis básica y estructura de un programa'
description: 'Sintaxis básica y estructura de un programa en C#.'
date: '2025-01-22'
draft: false
category: 'CSharp'
author: 04-angel-m
---

## Tabla de Contenidos

- [Tabla de Contenidos](#tabla-de-contenidos)
- [¿Qué es C#?](#qué-es-c)
- [Hola mundo](#hola-mundo)
  - [Top-level statements](#top-level-statements)
- [Variables y tipos de datos básicos.](#variables-y-tipos-de-datos-básicos)
- [Características distintivas de "C#"](#características-distintivas-de-c)
  - [1. LINQ: Consulta Integrada en el Lenguaje](#1-linq-consulta-integrada-en-el-lenguaje)
  - [2. Programación Asíncrona Basada en Tareas](#2-programación-asíncrona-basada-en-tareas)
  - [3. Iteración Asíncrona con await foreach](#3-iteración-asíncrona-con-await-foreach)
  - [4. Coincidencia de Patrones (Pattern Matching)](#4-coincidencia-de-patrones-pattern-matching)
- [Despedida](#despedida)

## ¿Qué es C#?

- Lenguaje de programación desarrollado por Microsoft.
- Orientado a objetos y usado con el framework .NET para crear aplicaciones de consola, web, móviles, videojuegos, etc.

## Hola mundo

Un clasico para comenzar, un hola mundo , en su version evil, ahora mismo podemos tener dos formas de realizarla.
Esta sera la forma en que muchas veces se hara:

```csharp
//En las nuevas versiones de .net usando Top-level statements
Console.WriteLine("Goobye, World");
```

En versiones anteriores a .Net 6 y C#9 se realiza asi, un clasico y en un momento explicare la razon.

```csharp
// Sin usar Top-level statements
using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("¡Goobye, world!");
    }
}
```

- using System: Importa librerías para funcionalidades básicas.
- class Program: Declara una clase.
- static void Main(string[] args): Punto de entrada del programa.
- Console.WriteLine: Muestra texto en la consola.

### Top-level statements

Las "Top-level statements" (declaraciones de nivel superior) en C# son una característica que simplifica la sintaxis para escribir programas introducidas en C# 9 y .Net 6.
Permiten omitir la necesidad de un método Main explícito dentro de una clase, lo que resulta en un código más conciso.

## Variables y tipos de datos básicos.

En C# contamos con Tipos primitivos: int, float, double, bool, char, string.
y se puede declarar de la siguiente forma

```csharp
int numero = 10;
string mensaje = "¡Hola!";
bool esActivo = true;
```

Tambien se cuentan con los operadores basicos como son:

- Aritméticos: +, -, \*, /, %.
- Relacionales: ==, !=, >, <, >=, <=.
- Lógicos: &&, ||, !.

## Características distintivas de "C#"

C# es un lenguaje moderno y versátil, diseñado para simplificar tareas complejas en el desarrollo de software. A continuación, exploraremos algunas de sus características distintivas, que lo convierten en una herramienta poderosa para desarrolladores de todos los niveles.

### 1. LINQ: Consulta Integrada en el Lenguaje

Una de las características más destacadas de C# es LINQ (Language Integrated Query), que proporciona una sintaxis común para consultar y transformar colecciones de datos. LINQ unifica la forma en que se interactúa con datos almacenados en diferentes fuentes como:

- Colecciones en memoria.
- Tablas de bases de datos.
- Estructuras como XML o JSON.
- APIs de almacenamiento en la nube.

Con LINQ, puedes aprender un solo conjunto de sintaxis y aplicarlo en cualquier contexto de datos.

Por ejemplo, para encontrar los productos con un precio mayor a $50:

```csharp
var expensiveProducts = from product in Products
                        where product.Price > 50
                        select product;
```

Con este puedes obtener los empleados con más de 5 años de antigüedad en una empresa:

```csharp
var experiencedEmployees = from employee in Employees
                           where employee.YearsOfExperience > 5
                           select employee;
```

Estas consultas puede aplicarse a una lista de objetos, una tabla SQL, un archivo XML o incluso una API de datos en la nube, manteniendo la misma sintaxis.

### 2. Programación Asíncrona Basada en Tareas

C# simplifica el manejo de operaciones asíncronas mediante las palabras clave async y await. Esto permite escribir código asíncrono que es fácil de leer y mantener, ya que parece ejecutarse de forma sincrónica.
Por ejemplo, este método realiza una solicitud a una API para obtener datos climáticos:

```csharp
public static async Task<string> GetWeatherAsync(string city)
{
    var client = new HttpClient();
    var url = $"https://api.weather.com/v3/weather/{city}";
    string response = await client.GetStringAsync(url);
    return response;
}
```

Este método realiza la solicitud sin bloquear el hilo principal y devuelve el resultado cuando esté listo.

### 3. Iteración Asíncrona con await foreach

C# permite iterar colecciones respaldadas por operaciones asíncronas, como APIs de paginación. Esto se logra mediante la instrucción await foreach.
Por ejemplo, si queremos obtener un listado de nombres de usuarios desde un servicio remoto por partes:

```csharp
public static async IAsyncEnumerable<string> FetchUserNamesAsync()
{
    int page = 1;
    while (true)
    {
        var users = await GetUsersFromPageAsync(page);
        if (users.Count == 0)
        {
            yield break; // Termina si no hay más datos
        }
        foreach (var user in users)
        {
            yield return user.Name;
        }
        page++;
    }
}
```

y esto se puede usar de la siguiente manera:

```csharp
await foreach (var userName in FetchUserNamesAsync())
{
    Console.WriteLine(userName);
}
```

### 4. Coincidencia de Patrones (Pattern Matching)

La coincidencia de patrones en C# permite inspeccionar datos y tomar decisiones basadas en sus características de manera clara y concisa. Esto resulta especialmente útil en el flujo de control basado en datos.

Por ejemplo, supongamos que queremos determinar el tipo de descuento aplicado según una categoría de cliente:

```csharp
public static decimal GetDiscount(string customerType) =>
    customerType switch
    {
        "Regular" => 0.1m,  // 10% de descuento
        "VIP" => 0.2m,      // 20% de descuento
        "New" => 0.05m,     // 5% de descuento
        _ => 0.0m           // Sin descuento para otros casos
    };
```

Además, las expresiones de coincidencia de patrones también permiten procesar múltiples condiciones al mismo tiempo. Por ejemplo, determinar el estado de un pedido con base en la cantidad de artículos y el monto total:

```csharp
public static string GetOrderStatus(int items, decimal total) =>
    (items, total) switch
    {
        ( > 10, > 1000) => "Pedido Grande",
        ( <= 10, > 500) => "Pedido Mediano",
        ( <= 10, <= 500) => "Pedido Pequeño",
        _ => "Pedido Desconocido"
    };
```

Otros ejemplos utiles serian:

supongamos que necesitamos determinar el nivel educativo de una persona basándonos en su edad

```csharp
public static string GetEducationLevel(int age) =>
    age switch
    {
        <= 5 => "Preescolar",
        <= 12 => "Primaria",
        <= 18 => "Secundaria",
        <= 22 => "Universidad",
        _ => "Graduado o en otro nivel educativo"
    };
```

También podemos usarlo para manejar estructuras de datos más complejas, como en este ejemplo donde verificamos el tipo de cuenta bancaria:

```csharp
public static string GetAccountType(BankAccount account) =>
    account switch
    {
        { Balance: > 100000 } => "Cuenta Premium",
        { Balance: <= 0 } => "Cuenta en números rojos",
        _ => "Cuenta estándar"
    };
```

C# combina herramientas avanzadas como LINQ, programación asíncrona y coincidencia de patrones para simplificar tareas complejas y escribir código más eficiente. Al dominar estas características, los desarrolladores pueden abordar cualquier proyecto con confianza y crear soluciones escalables y fáciles de mantener.

Tambien podemos recibir datos desde consola.

```csharp
Console.WriteLine("Introduce tu nombre:");
string nombre = Console.ReadLine();
Console.WriteLine("Hola, " + nombre);

// Hola Amigo
```

## Despedida

Con esto termina una breve introduccion de conocimiento Basico y no tan basico en C# , en siguientes temas se profundizara mas sobre lo que se puede hacer en C#, igual si se quiere un tema en especifico, con gusto indicarmelo y me pondre manos a la obra.
