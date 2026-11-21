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
- Inicio: **Alcancel Pixi** (nombre inventado que suena a "alcancía"; no usar la marca real) (pantalla estrellada, lento, batería que dura poco, notificaciones sin vista previa).
- Se compran en la tienda (app JaleYa o en gasolinera): **Rojomi Nota 14 Pro 5G+ Máx** ~$8,000 · **Samsón Galaxio S26 Ultra** ~$22,000 · **Chaifon 17 Pro Máx** ~$30,000 (precios a balancear).
- Mejor celular = abre más rápido, más batería, vista previa de mensajes, GPS con tráfico y mejores propinas por contestar rápido. Puedes quedarte en Android o pasarte a Chaifon.
