---
title: 'Data Engineering 1 - Introducción'
description: '¿Qué es Data Engineering? ¿Qué hace un/a Data Engineer? ¿Qué conocimientos técnicos se necesitan? ¿Dónde capacitarse?'
date: '2025-01-19'
draft: false
tags: 
    - data-engineering
author: 02-elias-v
---

---
## ¿Qué es Data Engineering?
Para comprender de qué se trata este campo dentro del ecosistema de Data, primero tenemos que hablar del ciclo de vida de los datos. Existen cuatro pasos generales por los cuales los datos fluyen en una organización.

1. **Primero, se recolectan e ingieren datos de distintas fuentes**, como lo puede ser una encuesta, tráfico web, etc. Todos estos datos se almacenan en estado “crudo”, sin ninguna clase de procesamiento o modificación.
2. **El próximo paso es preparar estos datos**, lo que incluye la “limpieza de datos”, es decir, encontrar valores perdidos o duplicados y convertir toda esta información a un formato más organizado, entre otras cosas.
3. **Una vez que los datos están limpios y organizados**, pueden ser explotados. Por ejemplo, pueden ser explorados, visualizados mediante dashboards para seguir cambios, o también para realizar comparaciones entre distintos conjuntos de datos (datasets).
4. **Finalmente, una vez se tiene un buen entendimiento de los datos**, estamos listos para realizar experimentos, como por ejemplo evaluar qué artículo tuvo la mayor cantidad de clicks, o cuál fue la canción más escuchada. También podemos construir modelos predictivos para, por ejemplo, predecir los valores de ciertas acciones en la bolsa.

*Data Engineering, y quien la ejerce, el/la Data Engineer, se encargan del primer paso de este ciclo.*

---

## El perfil de Ingeniería de Datos
Como dijimos, los Ingenieros de Datos son responsables del primer paso del proceso descrito anteriormente: ingerir y almacenar datos. Estos profesionales tienen una gran responsabilidad ya que establecen los fundamentos sobre los cuales los Analistas de Datos, Científicos de Datos e Ingenieros de Machine Learning realizan su trabajo. Si los datos se hallan dispersos o desorganizados, corrompidos o no es fácil acceder a ellos, no hay mucho que preparar, explorar y por lo tanto, no hay mucho (o nada) con lo que experimentar adecuadamente.

**Un Ingeniero de Datos se encarga de entregar:**
- los datos correctos
- en la forma correcta
- a la gente correcta
- de la manera más eficiente posible


**Entre sus distintas responsabilidades se encuentran:**
- Ingerir datos desde distintas fuentes
- Optimizar bases de datos para análisis
- Eliminar datos corrompidos
- Desarrollar, construir, testear y mantener arquitecturas tales como bases de datos y sistemas de procesamiento de gran escala encargados de gestionar enormes cantidades de datos
- Construir pipelines de datos automatizados que aseguran que los datos fluyan de manera continua, desde la fuente hasta el destino (como un warehouse o un dashboard) en tiempo real o casi en tiempo real
- Procesar grandes cantidades de datos mediantes enfoques como ETL (Extract Transform Load) y ELT (Extract Load Transform)

---

## Las herramientas del Data Engineer
Ahora que sabemos básicamente qué es lo que hace un/a Data Engineer, hablemos sobre los conocimientos técnicos y habilidades blandas que es importante adquirir para desempeñarse con éxito en este campo. 

**Dentro de los conocimientos técnicos indispensables, podemos destacar los siguientes:**

- **SQL:** indispensable para crear y gestionar bases de datos y data lakes.
- **Python:** definido como el lenguaje “puente” entre Data Engineering y Data Science. Un número creciente de herramientas para Ingenieria de Datos están escritos en Python o disponen de una API que sirve de interfaz con este lenguaje, tales como pandas, NumPy, Airflow, sci-kit learn, TensorFlow, PyTorch y PySpark.
- **Java / Scala:** estos lenguajes que se ejecutan en la máquina virtual de Java (JVM) son beneficiosos al momento de utilizar frameworks de data que sea open source, tales como Apache Spark, Hive, Druid y Beam.
- **Bash:** la interfaz de línea de comandos para sistemas operativos basados en Linux. Conocer comandos bash y estar cómodos al usar CLIs puede mejorar la productividad cuando es necesario crear scripts o realizar operaciones a nivel del sistema operativo. También es útil para utilizar herramientas como awk o sed.
- **Cloud Computing:** Con el crecimiento exponencial de los datos, la computación en la nube se ha vuelto esencial para la Ingeniería de Datos. Con plataformas como AWS, Azure y Snowflake, los Ingenieros de Datos pueden gestionar grandes volúmenes de datos de forma escalable y rentable. Los servicios en la nube permiten configurar infraestructuras complejas con servicios como AWS Lambda para ejecutar código en respuesta a eventos, RDS para bases de datos relacionales, y Snowflake para almacenamiento y procesamiento de datos optimizados. Estas herramientas ayudan a simplificar la administración de datos y la implementación de soluciones de Big Data.

---
## No todo es tecnología
Ahora bien, existen ciertas habilidades que, junto a las técnicas, son importantes que desarrollemos para ser un Data Engineer competente, entre las que se pueden destacar:
- **Comunicarse con personas técnicas y no técnicas:** es importante ganarse la confianza de las personas que componen la organización donde nos desempeñemos, aprendiendo las jerarquías de dicha organización, quién responde a quién, cómo interactúan las personas, etc. La comunicación es clave. El éxito o el fracaso rara vez es un problema relacionado con la tecnología.
- **Recolectar requerimientos del negocio/producto:** es vital saber qué construir y asegurarnos de que las partes interesadas en el proyecto están de acuerdo con nuestro análisis o evaluación. Adicionalmente, debemos desarrollar un sentido de cómo los datos y las decisiones con respecto a la tecnología pueden impactar el negocio.
- **Calcular costos:** un buen Data Engineer sabe cómo optimizar costos, ya sea optimizando el tiempo para generar valor, el costo de oportunidad e incluso sabe monitorear costos para evitar sorpresas (sobre todo al manejarnos con servicios en la nube).
- **Aprendizaje continuo:** Data es un campo que cambia velozmente. La gente que tiene éxito en este rubro es buena en integrar conceptos nuevos mientras refinan su conocimiento fundamental. También son buenos filtrando, determinando qué nuevas tecnologías o desarrollos son relevantes, cuáles aún son inmaduros y cuáles son en realidad modas pasajeras.

---
## Conclusión
La Ingeniería de Datos es la columna vertebral en el ecosistema de datos, responsable de transformar datos en bruto en información accesible y confiable para los equipos de Análisis, Ciencia de Datos y Machine Learning. Desde la ingesta y almacenamiento de datos hasta la creación de arquitecturas robustas y pipelines eficientes, los Ingenieros de Datos establecen la base para extraer valor de grandes volúmenes de información.

*Este artículo es un resumen de un artículo más grande y detallado. Si te interesa saber más y encontrar recursos para capacitarte, te invito a leer el [post completo](https://esvdev.me/posts/data-engineering-1-introduccion) en mi blog.*