<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Dispositivos de seguimiento

    .tarjeta.color-primario-10.rounded-0.p-0.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0
          figure.p-0
            img(src="@/assets/curso/temas/tema_5/img_1.png", class="img-fluid").p-0
        .col-12.col-lg-7.p-5
          p.mb-0 Es una herramienta base para la tecnología, que permite la gestión y supervisión en tiempo real de cualquier vehículo ya sea de uso privado o público. A través de este sistema integrado de localización satelital y telecomunicaciones, estos dispositivos capturan y transmiten datos clave para la ubicación, velocidad, dirección, estado mecánico y condiciones operativas del vehículo. Su implementación es esencial para optimizar la logística, garantizar la seguridad y mejorar la eficiencia operativa en el sector del transporte terrestre. 

    separador

    #t_5_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.1	Tipos de dispositivos de seguimiento
    .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/temas/tema_5/img_2.png', class="img-fluid")
      .col-12.col-lg-8
        .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
            .tarjeta.bg-img-01
              .tarjeta--21
              .tarjeta--slider__title.mb-3.text-center.fw-bold Dispositivo <I>GPS</I> (sistema de posicionamiento global). 
              .tarjeta--slider__content.text-center Ventajas: precisión, cobertura amplia, integración con otros sistemas.
            .tarjeta.bg-img-01
              .tarjeta--22
              .tarjeta--slider__title.mb-3.text-center.fw-bold.fst-italic Cámaras de video vigilancia (<I>CCTV</I>).
              .tarjeta--slider__content.text-center Tipos: cámaras fijas, <I>PTZ</I> (giran y hacen <I>zoom</I>), térmicas (para condiciones de baja visibilidad).
            .tarjeta.bg-img-01
              .tarjeta--23
              .tarjeta--slider__title.mb-3.text-center.fw-bold Sensores de velocidad y flujo vehicular.
              .tarjeta--slider__content.text-center Tipos: Sensores inductivos, piezoeléctricos, radar y láser.
            .tarjeta.bg-img-01
              .tarjeta--24
              .tarjeta--slider__title.mb-3.text-center.fw-bold Estaciones meteorológicas móviles o fijas.
              .tarjeta--slider__content.text-center Ventajas: integración con sistemas de gestión de riesgos viales.
            .tarjeta.bg-img-01
              .tarjeta--25
              .tarjeta--slider__title.mb-3.text-center.fw-bold Dispositivos <I>RFID</I> (Identificación por radiofrecuencia)
              .tarjeta--slider__content.text-center Ventajas: lectura sin contacto, rápida y automatizada.
            .tarjeta.bg-img-01
              .tarjeta--26
              .tarjeta--slider__title.mb-3.text-center.fw-bold Aplicaciones móviles y dispositivos embarcados
              .tarjeta--slider__content.text-center Ejemplos: <I>apps</I> de movilidad, tabletas con <I>software</I> logístico, asistentes de conducción
            .tarjeta.bg-img-01
              .tarjeta--27
              .tarjeta--slider__title.mb-3.text-center.fw-bold Drones (vehículos aéreos no tripulados).
              .tarjeta--slider__content.text-center Ventajas: vista panorámica, despliegue ágil, acceso a zonas difíciles.
            .tarjeta.bg-img-01
              .tarjeta--28
              .tarjeta--slider__title.mb-3.text-center.fw-bold Balanzas dinámicas y sensores de peso
              .tarjeta--slider__content.text-center.mb-5 Aplicaciones: Control de carga, detección de sobrepeso, preservación de la infraestructura vial.

    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-lg-8.order-2.order-lg-1.mb-3(data-aos="zoom-in-right")
        AcordionA(tipo="b"  clase-tarjeta="tarjeta tarjeta--color-secundario-10")
          div(titulo="Título del grafico")
            p.ps-5.mb-0 Tipos de dispositivos de seguimiento
          div(titulo="Dispositivo <I>GPS</I> (Sistema de Posicionamiento Global)")
            p.ps-5.mb-3 Localizan en tiempo real la posición de vehículos en movimiento.
            p.ps-5.mb-0 Aplicaciones: rastreo de rutas, control de tiempos de viaje, georreferenciación de incidentes, planificación logística.
          div(titulo="Cámaras de video vigilancia (<I>CCTV</I>)")
            p.ps-5.mb-3 Capturan imágenes y videos del tránsito vehicular y peatonal.
            p.ps-5.mb-0 Aplicaciones: monitoreo en tiempo real, control de infracciones, análisis de flujo, evidencias en caso de accidentes
          div(titulo="Sensores de velocidad y flujo vehicular")
            p.ps-5.mb-3 Detectan la velocidad, volumen y tipo de vehículos que circulan por un punto determinado.
            p.ps-5.mb-0 Aplicaciones: control de velocidad, análisis de congestión, activación de alertas.
      .col-9.col-lg-4.order-1.order-lg-2.mb-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema_5/img_11.png', class="img-fluid")
      
    .row.justify-content-center.align-items-strat.mb-5
      .col-9.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema_5/img_12.png', class="img-fluid")
      .col-12.col-lg-8.order-2.order-lg-1.mb-3
        AcordionA(tipo="b"  clase-tarjeta="tarjeta tarjeta--color-secundario-10")
          div(titulo="Dispositivos <I>RFID</I> (Identificación por radiofrecuencia)")
            p.ps-5.mb-3 Identifican vehículos mediante etiquetas electrónicas instaladas en ellos.
            p.ps-5.mb-0 Aplicaciones: control de acceso en peajes, zonas restringidas, estaciones de pesaje y seguimiento logístico.
          div(titulo="Drones (vehículos aéreos no tripulados)")
            p.ps-5.mb-3 Realizan monitoreos aéreos sobre corredores viales o zonas específicas.
            p.ps-5.mb-0 Aplicaciones: supervisión de grandes áreas, inspección de infraestructura, respuesta rápida a emergencias.
          div(titulo="Estaciones meteorológicas móviles o fijas")
            p.ps-5.mb-3 Miden condiciones climáticas que afectan la seguridad vial (lluvia, niebla, visibilidad, viento).
            p.ps-5.mb-0 Aplicaciones: prevención de accidentes, activación de alertas, apoyo a planes de contingencia.

          div(titulo="Aplicaciones móviles y dispositivos embarcados")
            p.ps-5.mb-3 Permiten al conductor o al operador monitorear y reportar condiciones del viaje.
            p.ps-5.mb-0 Aplicaciones: navegación, reporte de incidentes, comunicación con centros de control.
    
    .row.justify-content-center.align-items-center
      .col-12.col-lg-8.mb-5(data-aos="zoom-in-right")
        .div.tarjeta.color-secundario-20.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema_3/img_29.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Para ampliar información de tecnología usadas en sector, te invitamos a ver el siguiente video:
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://www.youtube.com/watch?v=K_KgBscfdDE" target="_blank")
                    span Ver video
                    i.fab.fa-youtube.me-2

    separador

    #t_5_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.2 Modelo de dispositivos de seguimiento
    .mb-3

    .titulo-sexto.color-acento-contenido
      h5 Figura 3.
      |    Modelo dispositivo de seguimiento
    figure(data-aos="zoom-in-right")
      img(src='@/assets/curso/temas/tema_5/img_13.png', class="img-fluid d-none d-lg-block")
      img(src='@/assets/curso/temas/tema_5/img_14.png', class="img-fluid d-block d-lg-none mb-3")
      img(src='@/assets/curso/temas/tema_5/img_15.png', class="img-fluid d-block d-lg-none mb-3")
      img(src='@/assets/curso/temas/tema_5/img_16.png', class="img-fluid d-block d-lg-none mb-3")
      figcaption <b>Fuente.</b> SENA, 2025.
    
    .bg_img_4.mb-3

      separador

      #t_5_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 5.3 Automatización de dispositivo de seguimiento
      .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-3.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_5/img_17.png', class="img-fluid")
        .col-12.col-lg-9
          .cajon.color-acento-contenido.p-4.mb-3
            p.mb-0.text-center La automatización en el seguimiento implica que los dispositivos no solo recopilan y transmiten datos (como ubicación, velocidad o estado del motor), sino que también ejecutan acciones o generan alertas automáticamente basándose en reglas predefinidas o eventos específicos. Esto reduce drásticamente la necesidad de intervención humana constante y permite una toma de decisiones más rápida y eficiente.
          .row.justify-content-center.align-items-center
            .col-12.col-lg-9.order-2.order-lg-1(data-aos='zoom-in-right').mb-0
              p.mb-0 Los sistemas se configuran para disparar alertas instantáneas y automáticas a personal (gerentes de flota, conductores, equipos de seguridad) a través de SMS, correo electrónico o notificaciones en aplicaciones móviles cuando se cumplen ciertas condiciones. Ejemplos: 
            .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos='zoom-in-right')
              figure
                img(src='@/assets/curso/temas/tema_5/img_18.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
            .tarjeta.bg-img-01
              .tarjeta--29 
              .tarjeta--slider__content.text-center.mb-5 <B>Geocercas:</B> entrada o salida de zonas predefinidas (patios, zonas de entrega, áreas restringidas). Ideal para control de rutas o seguridad de carga.
            .tarjeta.bg-img-01
              .tarjeta--30
              .tarjeta--slider__content.text-center <B>Exceso de velocidad:</B> cuando un vehículo supera un límite de velocidad establecido.
            .tarjeta.bg-img-01
              .tarjeta--31 
              .tarjeta--slider__content.text-center <B>Horarios fuera de ruta:</B> uso del vehículo fuera de horarios laborales o en rutas no autorizadas.
            .tarjeta.bg-img-01
              .tarjeta--32 
              .tarjeta--slider__content.text-center <B>Mantenimiento preventivo:</B> alertas basadas en el kilometraje o las horas de motor para programar revisiones.
            .tarjeta.bg-img-01
              .tarjeta--33 
              .tarjeta--slider__content.text-center <B>Comportamiento de conducción agresivo:</B> notificaciones sobre frenadas o aceleraciones bruscas, fomentando la conducción segura.
            .tarjeta.bg-img-01
              .tarjeta--34 
              .tarjeta--slider__content.text-center <B>Activación de sensores:</B> alerta si una puerta de carga se abre inesperadamente o si la temperatura de un contenedor refrigerado se sale del rango.
            .tarjeta.bg-img-01
              .tarjeta--35 
              .tarjeta--slider__content.text-center <B>Detección de colisiones o vuelcos:</B> notificaciones críticas para respuesta de emergencia.
      .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/temas/tema_5/img_26.png', class="img-fluid")
     
    .row.justify-content-center.align-items-center
      .col-12.col-lg-10.mb-3
        h3(data-aos='zoom-in-right').mb-4
          span.label-title Acciones automatizadas y control remoto.
      .col-12.col-lg-10(data-aos='zoom-in-right')
        .tarjeta.color-secundario-5.p-4.rounded-0.mb-0
          ul
            li
              i.fa-solid.fa-circle-check(style="color: #4C77AE; font-size: 15px").mb-3
              |   <B>Corte remoto de motor:</B> en caso de robo, el sistema puede apagar el motor del vehículo de forma segura.
            li
              i.fa-solid.fa-circle-check(style="color: #4C77AE; font-size: 15px").mb-3
              |   <B>Activación de alarmas:</B> disparar alarmas sonoras o visuales en el vehículo.
            li
              i.fa-solid.fa-circle-check(style="color: #4C77AE; font-size: 15px").mb-0
              |   <B>Control de acceso:</B> gestionar el encendido del vehículo solo para conductores autorizados (ej. mediante <I>RFID o PIN</I>).
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
