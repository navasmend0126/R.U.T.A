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
Se tiene pensado crear una WebApp la cual va a utilizar la API de Google Maps para permitir al usuario visualizar un mapa de todo el territorio y trazar rutas desde un punto A hasta un punto B. Para el rastreo de los autobuses en tiempo real se quiere desarrollar un modelo IA en este caso de aprendizaje automatizado que sea capaz de detectar un autobus (Especificamente de MiBus) y el codigo de ruta que estos muestran, se pretende utilizar arduino en conjunto con otras herramientas de esta categoria para tener una camara la cual envie las imagenes captadas hacia el modelo y el modelo haga la clasificación de lo que esta viendo. Una vez se tiene esto se puede implementar dentro de el software que muestra el mapa para poner un marcador que indique en que parada esta el autobus identificado y cual es su codigo de ruta. 
### Casos posibles en el software
  - Si el usuario tiene una ruta ya trazada, unicamente se mostrara la ubicacion del autobus mas cercano que necesita para comenzar el viaje y aun no haya pasado por su parada.
  - Si el usuario esta viendo la ruta completa de un codigo de ruta en especifico, se le mostraran todos los autobuses que se hayan identificado y cuenten con ese codigo de ruta.
  - Si el usuario no tiene ninguna ruta activa, se le mostraran todos los autobuses identificados en un rango de 5 kilomentros desde el centro de la posicion en que esta visualizando el mapa.
