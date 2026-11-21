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

## Pendientes de la fase 1 (v139–v140)
- Esquinas redondeadas en las banquetas (por ahora solo se cortan antes del cruce).
- Confirmar en el Redmi que las llantas ya no se ven hundidas en la terracería y que el GPS funciona en la brecha.

## Fase 5 · Modo chofer de app (después de los remolques)
- En el menú de inicio se elige: **JaleYa** (camionero, modo actual sin cambios) o **YiYi**.
- YiYi: app de viajes inventada (no usar nombre ni logo de DiDi). Logos: `jaleya-logo.svg` (naranja, tráiler de lado en círculo crema) y `yiyi-logo.svg` (morado, pin crema con dos "y" que se juntan como camino).
- Auto: sedán compacto blanco genérico tipo "carro de app" (base: Kenney Car Kit `sedan`), sin logos ni nombre de marca real.
- Viajes cortos en la ciudad que llegan por el celular, pasajeros con prisa, calificación de estrellas.

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
