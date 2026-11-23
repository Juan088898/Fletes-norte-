# Fletes del Norte · Plan fases 2 y 3 (decisiones de Juan, 21 nov 2026)

Base: rama `etapa2-mapa-nuevo` (v140). Packs subidos en el chat: Kenney Game Icons, Impact Sounds, Interface Sounds, Nature Kit, City Kit Suburban 2.0; Quaternius Farm Animals (vaca en OBJ). Ya embebidos: Kenney Commercial/Industrial/Roads; texturas ambientCG Road008A y RoadLines029C.

## Fase 2 · Celular
- Sustituye a la tablet. Va en un soporte junto al volante (a la derecha).
- En cabina: la mano derecha suelta la palanca, toma el celular y la cámara se acerca; al cerrar lo regresa.
- Con la cámara de afuera: aparece al centro pero no tan grande, sin animación.
- Diseño Android estilo Kenney (iconos de Kenney Game Icons).
- Apps: Camión (avisos de llanta, frenos, diésel, aceite; NO notifican), Fletes (bolsa de cargas), Mensajes/chat con clientes, Música/radio.
- Notificaciones: solo de clientes y de fletes nuevos. El celular del soporte se prende con sonido tipo WhatsApp (sin copiar el original) y vibración, y sale un aviso corto arriba en cualquier cámara.
- Chat con respuestas rápidas, clientes en norteño casual. Afecta propina y estrellas.
- Distracción realista: usarlo a más de 20 km/h desvía un poco el camión. Contestar parado no enoja al cliente.
- Guía de la primera vez solo para el celular (se puede saltar).
- GPS en el tablero. Afuera, mapa redondo chico (ya hecho en v140).

### Hecho en v141 (rama etapa2-mapa-nuevo)
- Celular en soporte a la derecha del volante; 📱 lo toma (mano + cámara en cabina; afuera al centro, más chico).
- Apps: JaleYa (bolsa + Tienda de celulares), Wasapen (chat con respuestas rápidas → propina y estrellas), Fierrotas (estado, no notifica), Rola (radio del juego), Config (sonido, vibración, guía, cambiar celular). YiYi apagada.
- Celulares: Alcanzel (inicio, pantalla estrellada, lento, pila corta, sin vista previa), Rojomi $8,000, Samsón $22,000, Chaifon $30,000.
- Avisos solo de clientes y fletes nuevos (sonido Kenney + vibración + aviso arriba). Distracción a más de 20 km/h. Guía de primera vez.
- Pendiente: compra en gasolinera, GPS con tráfico.

## Fase 3 · Remolques y mundo
- Todos los fletes llevan remolque. Se quita el encargo sin remolque de la Pedrera.
- Remolque según la carga:
  - Pedrera y Cantera: góndola de volteo. La carga un cargador frontal (Car Kit tractor-shovel) y al entregar se levanta la caja.
  - Rancho: jaula de ganado (vacas de Quaternius que se mueven y pesan; maltratarlas baja la paga), pacas o alimento, fertilizante, y leche en pipa.
- Destinos nuevos:
  - 2–3 obras en la ciudad (piedra): terreno con barda, grúa, montones, conos y vallas de Kenney Roads.
  - Rastro en las afueras, por el Libramiento Sur (ganado).
  - Planta láctea dentro de Parque Industrial Este (leche).
  - Alimento y fertilizante salen de los patios de la ciudad hacia el Rancho.
- Enganche: tú retrocedes hasta el perno y luego hay animación de patas y mangueras.
- Remolque esperando en el patio.
- Carga y descarga visibles, en tiempo real (1–2 min). Mientras esperas puedes usar el celular y chatear con el cliente.
- Paga: base por km, +25% por terracería, +20% por carga delicada (ganado, leche), bonos por llegar a tiempo y sin maltratar.
- Llanta de refacción: una incluida, con animación del conductor cambiándola (~1 min). Se repone en gasolinera o taller por ~$1,800. Sin refacción, auxilio por el celular.
- Guardado automático en cada patio y cada 2 min.
- Sonidos Kenney: patio (montacargas, cargador, piedra, pistón), ganado, celular, enganche.
- City Kit Suburban:
  - barrios de la ciudad (en lugar de los edificios bajos grises), Pueblo de Pesquería y casa del Rancho;
  - en las salidas a carretera, 1 o 2 casas abandonadas: grises, sin ventanas, con grafiti y maleza.
- Nature Kit: sierra (pinos, peñascos), brecha y rancho (mezquites, cercas, corrales), cantera y pedrera (montones de piedra).
- Canal: rehacer el agua con textura y que siga la curva (ahora es una tira recta sin textura).
- Gráficos: solo calidad manual en Ajustes (Baja/Media/Alta).
- Publicar primero en el enlace (artifact PDzLfKWpvtBwNGSsdCnwh7); pasar a `main` (APK) solo cuando Juan lo apruebe.

### Hecho en v143 · Fase 3, etapa 1 (remolques)
- El remolque espera vacío en el patio (frente a otro andén). Retrocedes hasta el perno → mangueras roja y azul se conectan → suben las patas → vas a tu andén a cargar (montacargas o manguera de pipa) → entregas.
- Se quitó el encargo sin remolque de la Pedrera (también se cancela si estaba guardado).
- Pendiente de etapas siguientes: góndola de volteo, rancho/ganado/leche, obras, refacción, guardado cada 2 min, mundo.

### Hecho en v146 · Fase 3, etapa 2 (góndola de volteo)
- Cargas nuevas Grava (18 t) y Piedra triturada (24 t, nivel 3+) en góndola de volteo; salen solo de Cantera La Silla.
- Carga en el andén con cargador frontal (Kenney Car Kit tractor-shovel): 3 cucharones. Al entregar se abre la compuerta y se levanta la caja con pistón.
- Pendiente: Pedrera El Norte como patio de origen (hoy no es patio con andenes; va con las obras de la etapa 4, que serán el destino de la piedra).

### Hecho en v147 · Fase 3, etapa 3 (rancho)
- Rancho = Ejido Santa Rosa. Nuevo patio Rastro Municipal sobre el Libramiento Sur (el mapa cambió: se cancela sin costo un flete guardado).
- Ganado (16 t, jaula ganadera con 10 vacas de Quaternius): Ejido → Rastro. Suben/bajan por la compuerta-rampa, se mecen y recargan su peso en curvas; frenazos, baches y curvas fuertes bajan la condición y la paga. Paga de carga delicada.
- Leche (pipa): Ejido → Parque Industrial Este (planta láctea). Pacas de alfalfa (plataforma), Alimento para ganado y Fertilizante (caja): de la ciudad al Ejido.
- Pendiente: letrero/edificio de planta láctea y casa del rancho (etapa 5).

### Hecho en v148 · Economía en peluchorales (P$), 1 P$ = 1 peso
- Fuentes (nov 2026): diésel NL ~P$26–27/L; tráiler 53' P$36–48/km y viaje local desde ~P$6,800; operador de tráiler ~P$5,000–10,000 semanales; llanta 11R22.5 ~P$4,100–7,600; multas Monterrey 5–15 UMA (UMA P$117.31); Galaxy S26 Ultra ~P$24–30k, iPhone 17 Pro Max P$30,999.
- Pago = P$6,800 + P$42 por km real (1 km del mapa ≈ 4 km reales) + P$90/t arriba de 10 t. +20% ganado y leche, +35% frágil, +25% brecha (terracería), +50% urgente; bono a tiempo 15% (20% si llega ≥95%).
- v150: llantas de "3V · Vueno, Vonito, Varato" (juego renovado P$35,000; una en el camino P$3,800) y bono de P$1,500 en los primeros 10 fletes. App de banco brebreuvaA (v149).
- Taller, mejoras, multas, llantas, grúa, celulares y choferes ajustados a precios reales. Reposición única de P$80,000 por el flete perdido en v147.
### Hecho en v151–v152 · Fase 3, etapa 4
- 3 obras en la ciudad (Obra Torre Centro, Obra Puente Huinalá, Obra Fracc. Las Lomas): sin nave, con barda, grúa torre, estructura, montones, conos y vallas de Kenney Roads. Reciben Grava y Piedra triturada; la piedra cae al piso detrás de la góndola.
- Pedrera El Norte ya es patio (sobre la Brecha del Ejido, +25% terracería). La piedra sale de la Cantera o la Pedrera.
- Los patios nuevos no cambian la versión del mapa: no se cancelan fletes guardados.
- v153: cambio de llanta animado (~58 s, se puede saltar): conos, refacción de abajo del chasis, gato que levanta la esquina, 10 birlos, ponchada fuera, refacción montada. Auxilio: llega una pickup de Llantas 3V con su mecánico (Kenney Car Kit truck-flat).
- Llanta de refacción incluida. Se repone en gasolinera o Taller (3V · P$3,800). Sin refacción: Auxilio Vial 3V por Wasapen (P$5,300, llega en ~30 s).

### Hecho en v154–v155 · bugs del mapa y Fase 3 etapa 5 (barrios)
- Revisión automática de todo el mapa al generarlo: se quitan edificios encimados (SAT entre rectángulos) y los que pisan calle, banqueta, patio, canal o lugar especial. Antes: 56 pares encimados; ahora 0. También se quitan de los choques y se borran árboles dentro de edificios.
- Piso de banqueta/patio a la altura del terreno (antes quedaba enterrado y las casas se veían en el pasto). Lluvia en vistas altas sin rayas largas.
- Barrios con City Kit Suburban: 12 tipos de casa en una sola fila con banqueta, jardín al frente, cochera, cercas a los lados y árbol. Pueblo de Pesquería con casas. Casa del rancho en el Ejido. Letrero de Planta Láctea del Norte en el Parque Industrial Este.
- Caja seca con cinta reflejante roja/blanca, defensa trasera y loderas.
- Pendiente de la etapa 5: casas abandonadas, Nature Kit, canal con textura, calidad de gráficos.

### Hecho en v156–v159 · Fase 4, camión nuevo
- **Chato Dormitorio** (cabover "Big Sleeper Cabover", CGTrader Royalty Free), P$520,000 en el Taller. Interior real del modelo, tablero clásico analógico (carátulas crema, aguja roja: tacómetro, velocímetro, aire doble aguja, agua, aceite, diésel, volts), sin marco, asentado en el panel del modelo (medidas calculadas: panel 58×24 cm, inclinado 23.5°). En este camión el GPS es el celular del soporte.
- Los camiones comprados ya se guardan (antes se reiniciaban).
- Pendiente: probarlo manejando con remolque; pintura sale blanca lisa (la textura con franjas no se exportó).

### Hecho en v160 · Fase 4, etapa 1 (retenes y básculas)
- 2 básculas (Libramiento Sur m 1285, Carretera a Pesquería m 1670) en tramos rectos y planos medidos (rumbo ±3.4°, desnivel <1.2 m en ±70 m, >140 m de cruces, >300 m de patios); plancha a la altura del terreno. Si pagas sobrepeso en báscula, el retén acepta la boleta.
- 3 retenes: Guardia Nacional (Libramiento Sur, más estricta), Policía Estatal (Pesquería), Tránsito Estatal (Sierra). Oficiales por sentido, patrullas, carpa, conos, vibradores a ±40 m y letreros a 400 y 150 m.
- Revisión: peso, carta porte (fletes nuevos "sin carta porte" pagan +25%), carga recorrida o ganado golpeado. Multa en UMA o mordida (~40%): la acepta / la rechaza (multa + 30 UMA cohecho + 20 s) / se la queda y multa igual. Pasarse el retén: 40 UMA. A veces piden "para el refresco".

### Hecho en v161 · Fase 4, etapa 4 (cargas) y economía (decisiones de Juan)
- Sin deslizamiento de carga en plataforma. Tirón de clutch: solo muy fuertes (>1600 rpm de diferencia) y mitad de daño. Frágiles: daño solo en frenadas en seco (>6 m/s²), mitad de daño; siguen pagando +35%.
- Daños: el primer 10% no descuenta. Llegar tarde: solo pierdes el bono (sin descuento, también urgentes). Tiempo límite: ETA×2.2+120 s (urgente ETA×1.5+60 s).
- Pago = P$14,000 + P$2,000 por km del mapa (P$500/km real) + P$300/t arriba de 10 t. Medido en las 210 rutas × 19 cargas: mín P$15,400, mediana P$25,450, máx P$44,800, promedio P$26,364 → Chato (P$520,000) en ~18 fletes a tiempo, ~20 sin bono.
- Ir por la carga: ya no se paga por km; se reembolsa el diésel gastado (litros × P$26.50).
- Pendiente: subir el pago de los choferes de la empresa (siguen con la fórmula vieja).

### Hecho en v162
- El remolque ya te espera cargado en el patio: retrocedes al perno, enganchas y te vas directo a entregar (sin andén de carga). La descarga al entregar sigue igual. El tiempo corre desde que enganchas.

## Fase 4 · Confirmado por Juan (21 nov 2026), falta hacer
1. **Clima y temporadas:** calor de verano, frío, lluvias.
2. ✔ (v160) **Retenes y básculas en carretera.** En el retén, si te encuentran algo (sobrepeso, papeles, carga irregular, etc.), hay opción de **sobornar** (“mordida”), como en México; también pagar la multa normal (en UMA, P$117.31). Definir riesgo de que el soborno salga mal.
3. **Más camiones para comprar** además del Chato.
4. **Reajustar cargas:** cargas frágiles (daño y castigo), deslizamiento/oleaje de la carga y otros detalles de cómo se comporta la carga (Juan dará detalles; preguntarle qué se siente mal antes de cambiar).

## Pendientes después de v162
- Fase 4: etapa 2 (clima y temporadas) y etapa 3 (más camiones).
- Subir el pago de los choferes de la empresa (fórmula vieja).
- Bug visto en el Redmi (21 nov): edificios que se ven encima del carril en una calle de 50 km/h. La revisión por medidas (2,460 edificios contra todas las calles) no encontró cruces; falta ubicar el lugar (código de partida o calle) para verlo. Juan lo dejó así por ahora.

## Regla de trabajo (Juan)
- Todo acomodo o ajuste (posiciones, tamaños, alineación, cámaras, tableros) se hace con **cálculos y medidas reales del modelo**, no a ojo; luego se comprueba con captura.

## Pendientes de la fase 1 (v139–v140)
- Esquinas redondeadas en las banquetas (por ahora solo se cortan antes del cruce).
- Confirmar en el Redmi que las llantas ya no se ven hundidas en la terracería y que el GPS funciona en la brecha.

## Fase 5 · Modo chofer de app (después de los remolques)
- En el menú de inicio se elige: **JaleYa** (camionero, modo actual sin cambios) o **YiYi**.
- YiYi: app de viajes inventada (no usar nombre ni logo de DiDi). Logos: `jaleya-logo.svg` (naranja, tráiler de lado en círculo crema) y `yiyi-logo.svg` (morado, pin crema con dos "y" que se juntan como camino).
- Auto: sedán compacto blanco genérico tipo "carro de app" (base: Kenney Car Kit `sedan`), sin logos ni nombre de marca real.
- Viajes cortos en la ciudad que llegan por el celular, pasajeros con prisa, calificación de estrellas.

### Decisiones de Juan (21 nov 2026, chat de la fase 5)
- Orden: primero YiYi (etapas 1–3) y al final quitar el panel de cargas de JaleYa.
- Carros (en lugar del `sedan` de Kenney): **Subaro Leal 1992** (Subaru Loyale de CBSpicer, sin logos ni marcas) es el inicial y gratis; **Lado Vasta** (Lada Vesta, aligerado a ~30–40 mil triángulos, <3 MB) es la mejora y cuesta P$300,000. Kia Forte Koup y Dodge Neon descartados.
- Los dos carros con cámara de cabina (al Loyale se le arma interior a medida porque el modelo trae una caja negra). Caja estándar de 5 en los dos.
- Dinero, celular y crédito compartidos entre JaleYa y YiYi.
- Crédito compartido (fase 5 solo para el Lada; el del camión después y con permiso de Juan): puntaje 300–850, empiezas en 550; +5 por pago a tiempo, +20 por liquidar antes, −25 por atraso. <600: enganche 30 %, interés 25 %, 10/20 pagos · 600–699: 20 %, 15 %, 10/20/30 · ≥700: 10 %, 8 %, 10/20/30. Un pago por día de juego, tope 40 % de lo que ganas al día, recargo 5 %, 3 atrasos seguidos = embargo (regresas al Loyale y pierdes lo pagado). Lada con puntaje 550: enganche P$90,000 + 20 pagos de P$13,125.
- Tarifa YiYi: P$1,500–3,000 por viaje (misma escala que los fletes).
- Solicitudes como en las apps reales: llegan una por una cada 20–60 s con tono propio de YiYi (no el de DiDi) y vibración; tarjeta con distancia al pasajero, distancia del viaje, pago, estrellas del pasajero y si va con prisa; 15 s para Aceptar/Rechazar. Rechazar mucho baja la tasa de aceptación y te llegan menos y peores.
- Pasajeros visibles: esperan en la banqueta, suben atrás y bajan en el destino.
- (22 nov) YiYi cobra 20 % de comisión por viaje (de P$1,500–3,000 te quedan P$1,200–2,400). Las estrellas solo bajan por choques y multas. Te conectas con un botón En línea / Desconectado en la app YiYi. Cancelar un viaje aceptado baja la tasa y las estrellas, sin multa en dinero.
- Al final (después de YiYi): quitar el panel "Elige tu viaje"; las cargas solo en la app JaleYa, el Taller pasa a una app **TallerYa** y "Entrega completada" se vuelve aviso + recibo en el celular (desglose en JaleYa › Historial, depósito en brebreuvaA). Los demás paneles (retén, báscula, guardar) se quedan.

### Hecho en v163 · Fase 5, etapas 1 y 2
- Pantalla de inicio: se elige **JaleYa** (camionero) o **YiYi** (chofer de app). Cambiar de modo guarda y recarga; el camión y el carro nunca corren juntos. En JaleYa nada cambia.
- YiYi: Subaro Leal 1992 (5,324 triángulos, 343 KB). Escala por distancia entre ejes real (2.465 m / 2.050 del modelo = 1.2024): largo 4.45 m, llanta Ø 0.571 m. Sin logos: emblemas borrados, "SUBARO" y "LEAL", placas de Nuevo León inventadas, pintado blanco.
- Manejo de carro propio (no toca la física del camión): motor 1.8 L (137 N·m a 2,800 rpm, ralentí 780, corte 6,000), caja 3.545/2.111/1.448/1.088/0.871, R 3.416, final 3.70; clutch de fricción, se apaga si sueltas mal; frenos sin ABS (se bloquean); tracción delantera; giro 34.6° (radio 3.6 m en el eje trasero); subviraje y derrape por agarre; gasolina 50 L aparte del diésel. Probado: 0→30 km/h en 1ª ~3 s, 85 km/h en 3ª.
- Cámaras: cabina a la altura de los ojos (y 1.12 m, 36 cm a la izquierda del centro), tablero con velocímetro/tacómetro/gasolina, volante Ø 38 cm, palanca, retrovisor con imagen; atrás, arriba y llantas ajustadas al tamaño del carro. Faros movidos al carro.
- Celular: YiYi encendida y JaleYa apagada en modo chofer; sin fletes ni bienvenida de JaleYa.
### Hecho en v173 · Fase 5, etapa 3 (viajes de YiYi)
- App YiYi en el celular: botón En línea / Desconectado, estrellas (promedio de las últimas 40), tasa de aceptación (últimas 20), ganado y viajes; viaje en curso con botón Cancelar; últimos viajes.
- Solicitudes una por una cada 20–60 s (×1.8 si la tasa baja de 60 %) solo en línea y con el motor prendido; tono propio de YiYi (mi–sol–do dos veces, no el de DiDi) y vibración; tarjeta arriba con cuenta de 15 s, pago que te queda, pasajero y estrellas, distancia a recoger y del viaje, ⚡ con prisa.
- Pago = P$1,500 + P$600 por km de ruta (+20 % con prisa, −15 % con tasa baja), entre P$1,500 y P$3,000; YiYi se queda con 20 %. Propina de 10 % si el de prisa llega en menos de 1.25× el tiempo estimado. Depósito en brebreuvaA.
- Recoger: punto en la banqueta de una avenida o calle a 150–800 m; GPS y faro morado. Te paras a menos de 13 m y el pasajero (muñeco de los mecánicos, camisa de color al azar) camina a la puerta trasera derecha y se sube. Destino a 0.7–2.6 km; al llegar baja y camina a la banqueta.
- Estrellas: 5 menos 1 por cada choque o multa con el pasajero arriba. Cancelar: dos rechazos en la tasa y una calificación de 3.
- Probado: viaje completo en simulación (solicitud → recoger → subir → destino → pago P$2,320, 5 estrellas) y capturas de la tarjeta y del pasajero.

- v178 (Juan): el selector P-R-N-D es una palanquita que se desliza por un riel (perilla redonda), más chica; al soltar cae en la posición más cercana; también se puede tocar la letra.
- v179 (Juan): sonido de gasolina 4 cil. (2 explosiones por vuelta, brillo con el acelerador, admisión y zumbido de la CVT); la palanca del túnel la lleva la mano (12 cm de P a D); botones de faros, limpiaparabrisas (apagado/lento 45/min/rápido 69/min, barrido 78°) e intermitentes; calaveras, luz de freno, tercera luz, reversa y direccionales con las piezas del modelo; testigos en el tablero.

### v177 · Versa corregido (bugs del video de Juan)
- Llantas que se salían/volaban: el pivote nuevo no tenía su posición al acomodar las piezas y las piezas compartidas entre llantas quedaban con la misma etiqueta. Ahora cada llanta lleva su copia y se actualiza todo el carro antes de moverlas. Probado manejando, girando a los dos lados y desde fuera.
- Volante quieto: el cargador renombraba las piezas (SW_1, SW_2) y solo giraba una. Arreglado; las manos giran pegadas al aro y cada 90° se vuelven a agarrar (mano sobre mano).
- Automático (decisión de Juan): selector P-R-N-D en lugar de la palanca H, sin clutch; CVT 4.006–0.55 con final 3.882, convertidor de par con amarre arriba de 22 km/h, se arrastra en D, en P se frena; para quitar P hay que pisar el freno; R y P solo parado; arranca en P o N. La mano derecha va a la palanca del túnel al cambiar.
- Calidad alta (Juan): ~120 mil triángulos, liso (normales del modelo), colores planos, interior gris carbón.

### v176 · PRUEBA: carro nuevo con el estilo del juego (pedido de Juan)
- Juan descartó el Subaro y el Lada (no van con la estética). Los modelos deben venir de Sketchfab (de ahí salieron el volante y las llantas del camión; la carrocería del camión es de itch.io, Craig Snedeker).
- Prueba: Nizzan Versito = "2015 Nissan Versa Sedan 1.6" (Ddiaz Design, Sketchfab, CC BY-NC-SA 4.0) estilizado: sin emblemas, sin texturas (colores planos, sombreado facetado), 840,742 → ~48 mil triángulos, 37 piezas; con su interior; volante, perilla y llantas sueltas para animar. Física: 1.6 L 109 hp, caja 3.727/2.048/1.393/1.097/.892, ABS.
- Otros modelos que mandó Juan: sedán y vagoneta low poly (tipo Corolla 90s, sin interior, ~3.9 mil triángulos c/u) y "Tozzo '98 Tuned" (Daniel Zhabotinsky, CC BY 4.0, 19 mil triángulos, interior sencillo). BMW con 3.6 M triángulos: descartado.
- El trabajo del Lada y del crédito está guardado en `git stash` ("v176 WIP lada+credito") hasta que Juan elija los carros.

### v175 (bug de Juan): la tapa del tablero llega a x −.115 (ya no hay hueco junto al celular) y el celular se acomoda con un rayo del ojo a la cara del tablero, 3.5 cm enfrente (antes se metía en el tablero).

### Hecho en v174 (Juan)
- La solicitud de YiYi ya no sale arriba: abre el celular en la app YiYi con la cuenta regresiva y botones Aceptar/Rechazar (arriba solo si el celular no tiene pila).
- Celular en soporte en el carro, en la ventila al centro (x .02, y .76, z .66), mirando al ojo; muestra el GPS como en el Chato y la solicitud cuando llega. Calculado para que no lo tape el aro ni la mano derecha.
- Búsqueda de puntos de recogida: primero las calles que quedan a la distancia pedida (antes fallaba seguido).

### Hecho en v164 · interior nuevo del Subaro (pedido de Juan)
- Interior sacado del "Low-Poly Retro City Car 03" (CGTrader, gratis, Royalty Free): tablero con 3 carátulas y agujas que se mueven (velocímetro 0–180, tacómetro 0–7000, gasolina), volante, asientos, banca trasera, consola y vestiduras de puertas. 3,418 triángulos + volante 396.
- Acomodado con medidas: ancho ×0.886 (vestidura .79→.70), alto ×0.906 (piso .38→.33 y base del parabrisas 1.02→.910), largo por tramos (base del medallón −1.815→−1.534, ojo −0.06→−0.02, base del parabrisas .729→1.021). Volante a Ø 38 cm con su inclinación de 26.6°. Pivotes de las agujas tomados del FBX.
- Se quitaron los postes y el marco del parabrisas del otro carro (el Subaro trae los suyos más inclinados) y todo lo que se asomaba arriba del cofre.
- Ojo del chofer: x .374, y 1.109, z −0.02 (justo atrás del poste B).

### Hecho en v165 · tablero y palanca del Subaro (pedido de Juan)
- Se quitó solo la cubierta de arriba de los tacómetros (lado del chofer y centro).
- Tablero propio del carro (no el del Chato): carátulas negras, números blancos, aguja naranja, aro plateado; velocímetro 0–180, tacómetro 0–7 con zona roja desde 6,000, gasolina, temperatura, testigos y odómetro. Medidas: llena la ventana que deja el volante (rayos del ojo por el cubo y el aro → 35.7 × 15.5 cm, centro y .821, inclinado 20.6° hacia el ojo).
- v166: se tapó el hueco que dejó la cubierta: tapa de y .845 a .895 de z .765 al parabrisas y rellenos a los lados del tablero.
- v167: la tapa ahora es redondeada (orillas con bisel de 1.2 cm), sigue la forma del tablero en arco alrededor de los tacómetros y lleva una ceja en media luna que sobresale 10 cm hacia el chofer (y .895–.945), calculada para no tapar las carátulas desde el ojo.
- v168 (Juan): mejor recta y hacia el parabrisas: tapa plana con orilla recta en z .775 (detrás de los tacómetros), y .85–.88, hasta el parabrisas; repisas planas a los lados (y .845–.851) para que no haya hueco. Sin ceja.
- v170 (Juan: vibraba mucho): cabeceo y ladeo del carro suavizados (filtro ~0.2 s) y a 45 % (la suspensión es la del tráiler y con 2.465 m entre ejes daba 2.3× más cabeceo); balanceo de cabeza, golpes y vibración del motor a ~25 %.
- v172 (Juan): se usan los mismos brazos y manos del camión (mano cerrada sobre el aro, mismo agarre y misma mano en la perilla), pasados al carro y ajustados a sus medidas.
- v171 (Juan): brazos y manos del chofer en el carro: hombros 25 cm abajo y 8 cm atrás del ojo, brazo 30 cm y antebrazo 28 cm con codo (IK de dos huesos); manos con dedos y pulgar en el aro a las 10 y 2 que giran con el volante (hasta ±72°); la derecha va a la perilla al cambiar y regresa.
- v169 (Juan): una sola capa: se quitaron las repisas y la tapa se recorrió 4 cm hacia la izquierda (x −.06 a .74).
- Palanca de carro: varilla cromada de 28 cm, perilla de bola con el patrón grabado, fuelle de hule y aro; se mueve con cada cambio. Al cambiar, la cámara voltea hacia la palanca y regresa.
- Pendiente: Lada Vesta con crédito (etapa 4), sonido de motor de gasolina (hoy usa el sintetizador del diésel con 4 cilindros).

## Apps del celular (iconos en `apps-celular.svg`)
- Logos individuales estilo YiYi: `jaleya-logo.svg`, `wasapen-logo.svg`, `tallerya-logo.svg` (TallerYa = estado del camión, turquesa), `rola-logo.svg` (Rola = música, rosa), `config-logo.svg` (Config = ajustes, verde, interruptores). `fierrotas-logo.svg` (Fierrotas = estado del camión, amarillo mostaza, frente de troca con llaves cruzadas) (reemplazan a `apps-celular.svg`).
- JaleYa (fletes, naranja) · Camión (avisos, verde, medidor) · Wasapen (chat con clientes, azul; logo propio `wasapen-logo.svg` con globo azul marino y respuesta naranja con palomita; no imitar WhatsApp) · Radio (música, rojo) · Ajustes (gris azulado, engrane). YiYi solo en el modo chofer.

## Elegir celular (boceto `celular-mockup.svg`)
- Al empezar se elige **Chaifon** (Chaifon 17 Pro Máx, parodia de iPhone) o **Android**. En Android se elige marca: **Rojomi** Nota 14 Pro 5G+ Máx (parodia del Redmi de Juan, el de por defecto), **Samsón** Galaxio S26 Ultra, **Motorolo** Moto G Chido. Nombres inventados, sin logos reales.
- En la pantalla de inicio van reloj, clima de Apodaca, notificaciones y las apps; YiYi aparece apagada en modo Camionero. En el juego los iconos son los logos reales de cada app.

## Progresión del celular (empiezas pobre)
- Inicio: **Alcanzel Pixal Pro Max Plus 5G Super** (nombre inventado, chiste: el más barato con el nombre más largo; no usar la marca real) (pantalla estrellada, lento, batería que dura poco, notificaciones sin vista previa).
- Se compran en la tienda (app JaleYa o en gasolinera): **Rojomi Nota 14 Pro 5G+ Máx** ~$8,000 · **Samsón Galaxio S26 Ultra** ~$22,000 · **Chaifon 17 Pro Máx** ~$30,000 (precios a balancear).
- Mejor celular = abre más rápido, más batería, vista previa de mensajes, GPS con tráfico y mejores propinas por contestar rápido. Puedes quedarte en Android o pasarte a Chaifon.
- v180: arreglado el aviso "Nueva versión… actualizando" que recargaba cada pocos minutos (el version.json publicado decía v162 y el juego otra versión → bucle). Ahora solo actualiza si la del servidor es más nueva, una vez por versión y solo en la pantalla de inicio, nunca a media partida.
- v181 (bugs del mapa, raíz encontrada midiendo lo que SE DIBUJA, no la línea del mapa):
  1. Cruces en ángulo agudo: la calle se corta hasta 70 m antes del cruce y la placa de asfalto unía esas puntas → triángulos de asfalto sobre el pasto con edificios encima (p. ej. Camino a Dulces Nombres). Ahora la placa solo llega a 0.9× el ancho mayor y de ahí sale un tramo liso del ancho de la calle. Ya no se unen cruces cercanos en una sola placa.
  2. Calles curvas: se dibujan suavizadas y en la curva se meten hasta varios metros hacia adentro; la revisión usaba la línea recta. Ahora también se revisa contra la calle dibujada: 38 edificios industriales que pisaban calle o banqueta en curvas se quitan (Blvd. Parque Industrial Monterrey, Camino Santo Domingo, etc.).
  3. Puentes del canal: los pretiles eran una barda recta de hasta 84 m sobre la línea del mapa y quedaban sobre el carril (13 puentes, 7 mal puestos). Ahora siguen la calle dibujada, miden lo que mide el canal ahí y no se ponen sobre otra calle o cruce.
  4. Pisos de concreto que quedaban encima de un cruce: se quitan.
  - La ciudad se genera igual que antes (mismo acomodo), solo salen los edificios que estaban sobre la calle.
  - Medido en todo el mapa con el asfalto dibujado: edificios sobre asfalto 14 → 0; pedazos de pretil sobre asfalto 7 de 26 → 0 de 792; triángulo de placa más grande 2,201 m² → 599 m².
  - El letrero de versión del inicio decía "v111" fijo; ahora muestra la versión real.
- v182 (Juan: ¿algo obstruye carretera o terracería?): revisión de choques en todas las calles, carreteras y terracerías (185 mil puntos a lo ancho de cada calle) → 0 obstáculos. Raíz más profunda encontrada: el suavizado dibujaba el asfalto hasta 6.6 m fuera de la línea real de la calle (la que usan choques, GPS, tráfico y acomodo de edificios). Ahora la curva en cada vértice se separa a lo más 0.6 m. Con eso regresan los 38 edificios que v181 quitaba en curvas (la ciudad queda completa, 2,460) y ninguno pisa el asfalto.
- v183: voz del GPS en YiYi (antes solo hablaba con flete de JaleYa): "Viaje aceptado. Ve por X, a N metros", vueltas a 320 y 80 m, "Ahí está X", "Iniciando viaje a…", "Llegaste…". Bug: 6 de cada 10 destinos de YiYi caían en calle sin nombre y decía "Llévalo a " vacío → ahora "cerca de <calle con nombre más cercana>". Barrido general (botones, cámaras, apps del cel, manejo en ambos modos): 0 errores, 0 valores NaN.
- v184 (Juan, carro): automático de 4 (RE4F03B 2.861/1.562/1.000/0.697, R 2.310, final 4.072; sube a 2,100–5,900 rpm según acelerador, baja a 1,100–2,700, kickdown, convertidor bloquea en 3a/4a >43 km/h): el sonido ya hace los cambios (prueba: 0→53 km/h en 1a a 5,820 rpm, cambia a 2a a 3,263). Palanca: perilla + tallo se deslizan por la ranura 8.6 cm de P a D (medido de las letras P-R-N-D del modelo). Tablero: se borran carátulas, agujas, aros y vidrio del modelo y el tablero animado va en su lugar (28.5×12.4 cm, inclinado 30°). Humo: ya no sale de los escapes del camión; vapor tenue por el escape de atrás solo en frío (90 s) o acelerando fuerte.
- Pendiente (después del martes): calles con piezas 3D tipo kit a medida real (3.5 m por carril), todo el mapa, en etapas; primero prueba de un cruce y una cuadra.

## Calles 3D con City Kit Roads · Zona de prueba 1 (Juan, 22 nov 2026)
Kits guardados en `assets/kenney/` (CC0). Se convierte el mapa por zonas; lo no convertido se queda como está.

### Etapa 1 · medidas (hecha)
- Pieza del kit = cuadro 1×1, alturas 0 / 0.01 / 0.02. Corte de `road-straight` (medido de la textura): banqueta 0.10 · franja oscura (orilla/estacionamiento) 0.10 · 2 carriles de 0.30 con raya central · franja 0.10 · banqueta 0.10.
- Escala real: carril 0.30 u = 3.5 m → **1 u = 11.67 m**. Queda: arroyo de asfalto 7.0 m + 2 orillas de 1.17 m = 9.33 m de calle; banquetas de 1.17 m; guarnición 0.23 m de alto (0.02 u). Hoy una calle `st` mide 11.5 m → baja a 9.33 m.
- Camión (2.5 m de ancho) y carro (1.70 m) ya están a tamaño real; con carril de 3.5 m quedan a escala.
- Zona 1 (la más transitada: 33 km de las 210 rutas de flete pasan por la cuadra de LG): caja x 740…1260, z 120…480. Todo plano (altura 0).
  - Avenida Séptima: 732 m en 2 tramos casi rectos (rumbo −5° y −10°).
  - Parque Industrial La Silla: 462 m en 4 tramos, dobleces de hasta 79°; cruza el canal (puente).
  - Boulevard Parque Industrial Monterrey: 305 m recto (rumbo −115°).
  - 1 tramo sin nombre de 26 m.
  - 1 cruce en T en (854, 282) con ángulos 106° / 71° / 183° (no es de 90°).
- Piezas a usar: `road-straight` (rectas, estiradas a lo largo hasta ±5 %), `road-bend`/`road-curve` en dobleces, `road-intersection` en la T, `road-crossing` (paso peatonal) antes del cruce, `road-bridge` en el canal, semáforos y señales del kit. Donde el ángulo no es de 90° se rellena la cuña con asfalto y guarnición del mismo kit.

### Etapa 2 · armar la zona (pendiente)
Poner las piezas sobre el trazo, ancho 9.33 m en esa zona (choques, GPS, tráfico y banqueta), reacomodar edificios y pretiles a la nueva orilla, quitar el asfalto viejo en la zona.
### Etapa 3 · probar y subir al APK (pendiente)
- v185 · Etapa 2 (zona 1 armada con el kit): Av. Séptima, La Silla y el tramo sin nombre (calles completas, ~1.5 km) con piezas City Kit Roads a 11.67 m (calle 9.33 m, banqueta 1.17 m, guarnición 23 cm, textura del kit). Rectas llenas de piezas; en dobleces la pieza se corta en inglete (bisectriz); el cruce en T (854,282) lleva la pieza de cruce del kit y las ramas se cortan en su orilla aunque lleguen chuecas (71°/106°). En la zona: asfalto viejo, banqueta y placa de cruce fuera; choques/GPS con ancho 9.33 m; pretiles del canal a la orilla de la banqueta nueva. Ciudad igual (2,460 edificios), 0 edificios sobre asfalto, 0 pretiles sobre la calle, 0 obstáculos. Sin tráfico (Juan). Pendiente: acercar edificios a la banqueta nueva (quedan 2–4 m de pasto), transición de ancho en las orillas de la zona (11.5 → 9.33 m), pasos peatonales y semáforos del kit.
- v186 (Juan): en la zona 3D los edificios a tamaño real: casa de un piso del juego medía 7 m de alto (real 4.5–5.5) → ×0.7, encogidos desde su frente y recorridos 2.9 m hacia la calle (orilla de banqueta de 8.75 → 5.83 m). 110 edificios ajustados, 0 encimados, 0 sobre asfalto. Cocheras/cercas de esas casas y pisos de concreto fuera; postes de luz a la orilla de la banqueta nueva. Regla para cada zona nueva: calle del kit + edificios ×0.7 pegados a la banqueta.
- v187 (Juan: pulir zona 1, hacer zonas 2 y 3): pasos peatonales del kit en cada calle que llega a un cruce; cruces en X con la pieza de cruce con pasos peatonales. Zona 2: Blvd Parque Industrial Monterrey (792 m). Zona 3: avenidas donde arranca el juego (Teléfono, Carretera a Apodaca, Margarito Garza, Colosio, Alemania, Internacional; ~2.4 km): avenida = 2 cuerpos del kit de 2 carriles con la banqueta de en medio como camellón (23.3 m), cruces de avenidas con placa de asfalto del kit. Edificios ×0.7 pegados a la banqueta en las 3 zonas (380 ajustados). Revisado: 0 encimados, 0 sobre asfalto, 0 pretiles en la calle, 0 obstáculos; ciudad igual (2,460).
  Pendiente: juntar edificios (quedan huecos al encogerlos), transición donde la zona se une a calles viejas.
- v188 (bugs de Juan): cruces donde una calle 3D se junta con calles viejas: las piezas llegaban al centro y se cruzaban encima (banquetas atravesando la calle); ahora terminan en la orilla del cruce y una placa de asfalto del kit une todas las puntas. Banqueta física de la zona 3D a la medida del kit (1.17 m). Ponchaduras: se ponchaban a cada rato al subirse a una banqueta rápido (golpe ≥2.2 m/s, 7 %); ahora solo con golpe ≥3 m/s y 3.5 % (los clavos/vidrios del camino siguen igual).
- v189 (Juan): tablero del carro medido con rayos desde el ojo: la ventana visible entre el cofre del tablero, el aro y el centro del volante es 28.3 × 8.3 cm (antes el tablero animado medía 12.4 cm de alto y se cortaba); se rehízo a esa medida: velocímetro y tacómetro de Ø 7.5 cm, gasolina y temperatura de Ø 3.8 cm, testigos y odómetro en medio. Manos: giran alrededor del punto donde agarran el aro para quedar 55 % alineadas con el antebrazo (antes muñecas muy dobladas). Lluvia en el parabrisas del Versa (cristal medido: 1.40 × 1.01 m, inclinado; gotas del mismo lienzo del camión) y las plumas del carro borran lo que barren.
- v190 (Juan): quitados los aros y viseras negras de las carátulas del modelo que sobresalían delante del tablero animado (piezas a 0.5–4 cm delante de la cara, dentro de la ventana del tablero).
- v190b: el tablero animado llena el hueco hasta la orilla del cofre del tablero (30 × 11 cm, medido con rayos: hueco de 28 × 10 cm en arco); fondo parejo sin marco claro.
- v191 (Juan: "haz todo eso"): choferes de la empresa cobran con la fórmula de flete de v161 y se quedan con el 25 % (te llega el 75 %). Temporadas de 7 días de juego (Primavera, Verano: motor se calienta 35 % más rápido y llueve poco; Lluvias: llueve seguido y fuerte; Invierno: neblina en las mañanas en toda la ciudad), icono junto al reloj, temperatura y temporada en el celular, aviso al cambiar. Edificios de las zonas 3D juntados por fila hacia el centro (×0.7, sin huecos; 0 encimados). Lluvia del carro: gotas solo donde el ojo ve el parabrisas (máscara con rayos), al 60 % de tamaño y la mitad de cantidad. Decidido: el Tozzo '98 primero se prueba; los camiones nuevos los pasa Juan.
- v192 (Juan): el pasajero de YiYi abre la puerta trasera derecha (60° en 0.6 s), se mete, queda sentado atrás a la derecha, cierra; al llegar abre, sale, cierra y se va caminando. La puerta se separa del modelo por piezas completas (islas de triángulos conectados que caen en la caja de la puerta), así no queda mordida; el tallo de la palanca igual.

## Carros de YiYi (Juan, 22 nov): Yaris 2007 inicial; Dzire y Jetta a la venta (crédito)
- Modelos recibidos: Maruti Suzuki Swift Dzire 2022 (BHP3D, CC BY 4.0; volante a la derecha, 1.47 M triángulos), Toyota Yaris sedán 2007 (volante a la derecha; licencia por confirmar), VW Jetta GLI 2025 (volante a la izquierda, puertas separadas; licencia por confirmar). Dzire y Yaris se reflejan de lado a lado (volante a la izquierda, gira normal); logos y marcas fuera, nombres de parodia.
- Jetta procesado (`assets/cars/jetta.glb`, con `jetta.mjs`): girado 180° (frente +Z, izquierda +X), sin texturas ni logos, 150 k triángulos, piezas sueltas: volante SW, 4 puertas DR** (con su bloqueador DB**), 4 llantas WH**, faros HEAD, calaveras TAIL, parabrisas WSH.
- Medidas del Jetta (marco del juego): largo 4.76 m, ancho 2.07 m (con espejos), alto 1.47 m; entre ejes 2.68 m (real 2.686), eje trasero z −1.34, llanta radio .33; volante centro (.352, .903, .375), Ø .38, eje (0, .418, −.908); puerta trasera derecha DRRB x −.897…−.567, z −1.202…−.205 (bisagra adelante z −.205); parabrisas WSH centro (0, 1.16, .707), 1.43 m de ancho.
- Pendiente (después del martes): meter el Jetta al juego con su propia ficha (ojo del chofer, manos, tablero, palanca, puertas que abren, luces, limpiadores), luego Yaris y Dzire reflejados, luego la tienda "Autos" con crédito.
- v193 (Juan: "mete eso"): Jetta de prueba en el juego como "Folks Yeta GLX" (parodia). En el menú de inicio, en modo YiYi, "Carro" cambia entre Versa y Jetta (recarga). Ficha: entre ejes 2.686, 1,430 kg, 2.0 turbo 350 N·m, automático de 7 (3.40/2.75/1.77/1.18/.90/.72/.60, final 3.65), llanta r .33. Colores del atlas pasados a color por vértice (sin texturas); logo del volante y letras rojas de los costados a negro. Volante con su eje medido, puerta trasera derecha (pieza suelta) para el pasajero, lluvia en su parabrisas medido, tablero animado frente al tablero digital, retrovisor y celular reacomodados.
  Pendiente Jetta: medir la palanca (DSG) y el tablero digital con rayos, retrovisor, relieve del logo del volante; luego Yaris (inicial) y Dzire reflejados; tienda Autos con crédito.
- v194: el botón "Carro" del inicio no hacía nada (ese menú vive fuera del juego y no veía la partida); ahora cambia el carro en la partida guardada y recarga.
- v195 (Juan, Jetta): palanca DSG medida (perilla suelta 4.6 × 6 × 4.7 cm en 0, .699, 1.740) que se desliza 7 cm de P a D con la mano; tablero animado justo sobre la pantalla digital (esquinas del modelo, 24.3 × 9.1 cm); mapa/solicitudes de YiYi en la pantalla central (23.3 × 10.9 cm, girada hacia el chofer) en lugar del celular en soporte.
