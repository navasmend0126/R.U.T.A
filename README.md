# R.U.T.A 🚌
## Problematica
La movilización de una persona es fundamental para cumplir con sus tareas y objetivos diarios, por lo que debe ser capaz de tomar decisiones basadas en situaciones cotidianas, como el tráfico, el tiempo y la distancia.

Sin embargo, la movilización de una persona que viaja en transporte público es más compleja, ya que se deben considerar factores adicionales. Esto incluye la necesidad de tomar dos o más autobuses para llegar a su destino, así como las esperas para abordar el transporte, la posibilidad de que el bus venga lleno y otros inconvenientes. Las aplicaciones como Google Maps o Moovit brindan cierta ayuda al usuario, proporcionando tiempos aproximados y calculando rutas. Sin embargo, estas no abordan el problema principal del usuario: el tiempo exacto de espera. El tiempo es un factor crucial al tomar el transporte público, y es fundamental saber cuánto tardará un autobús en llegar a una parada. Google Maps lo hace de manera aproximada, pero esta estimación suele ser imprecisa y en muchos casos resulta inservible. Como resultado, el usuario tiene una experiencia ineficiente, ya que se basa en datos aproximados en lugar de información precisa que le permita tomar decisiones fundamentadas.

Este desafío nos llevó al desarrollo de <ins>RUTA (Red Urbana de Transporte Actualizado).</ins>

## ¿Qué es?
Red Urbana de Transporte Actualizado (RUTA), es un proyecto que trata de un software que va a permitir a los usuarios visualizar en tiempo real el transporte publico especifico que necesitan, de modo que el usuario pueda trazar una ruta en transporte publico y visualizar la posicion de ese transporte en todo momento, de esta forma mejorando su experiencia.

## Objetivos
  - Permitir a los usuarios ver la ruta del transporte en tiempo real para mejorar la experiencia de usuario y el uso del transporte publico.
  - Proporcionar un programa util que realmente ayude a las personas que usan diariamente el transporte publico, mejorando la experiencia de espera, y navegación

## Requisitos
  - Mapa interactivo para mostrar las rutas del transporte
  - Acceso a las rutas de los transportes
  - Capacidad de rastrear en tiempo real los transportes
  - Acceso a la ubicacion de todas las paradas de bus

## ¿Como se pretende hacer?
Se tiene la intención de desarrollar una WebApp que utilice la API de Google Maps para permitir a los usuarios visualizar un mapa interactivo del territorio y trazar rutas entre dos puntos, A y B. Además, se desea incorporar un sistema de rastreo en tiempo real de los autobuses, específicamente los de MiBus. Para lograr esto, se desarrollará un modelo de inteligencia artificial basado en aprendizaje automático, capaz de detectar tanto los autobuses como el código de ruta visible en ellos.

El sistema utilizará un dispositivo Arduino junto con otros componentes relacionados, como una cámara que captará imágenes del entorno. Estas imágenes serán enviadas al modelo de IA, que se encargará de clasificar lo que está viendo. Con esta información, se podrá integrar el rastreo en el software de mapas, de manera que se muestre en tiempo real la ubicación de cada autobús identificado, junto con su código de ruta y un marcador en el mapa indicando la parada en la que se encuentra. 
### Casos posibles en el software
  - Si el usuario tiene una ruta ya trazada, unicamente se mostrara la ubicacion del autobus mas cercano que necesita para comenzar el viaje y aun no haya pasado por su parada.
  - Si el usuario esta viendo la ruta completa de un codigo de ruta en especifico, se le mostraran todos los autobuses que se hayan identificado y cuenten con ese codigo de ruta.
  - Si el usuario no tiene ninguna ruta activa, se le mostraran todos los autobuses identificados en un rango de 5 kilomentros desde el centro de la posicion en que esta visualizando el mapa.
