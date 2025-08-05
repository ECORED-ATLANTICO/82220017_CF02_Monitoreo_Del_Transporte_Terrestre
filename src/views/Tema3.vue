<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Monitoreo vial

    #t_3_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.1 Concepto
    .mb-3

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El monitoreo vial, es el proceso sistemático y continuo que permite la recolección, análisis y gestión de la información relacionada con e le estado, uso y comportamiento del tránsito en las vías terrestre, con el objetivo de optimizar la seguridad, eficiencia y sostenibilidad en la operación del sistema del transporte. 
          p.mb-0 El monitoreo incluye el seguimiento en tiempo real de vehículos, condiciones de infraestructura vial, flujo de tráfico, incidentes, alteración climática, comportamiento de los conductores y desempeño de la red vial, mediante el uso de tecnologías como sensores, cámaras, <I>GPS</I>, sistemas de gestión de tráfico <I>loT</I> e inteligencia artificial.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2 Sistemas de monitoreo vial
    .mb-3

    .row.justify-content-center.align-items-center.mb-3
      .col-8.col-lg-3.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_3/img_2.png', class="img-fluid")
      .col-8.col-lg-9
        p.mb-3 Es un conjunto integrado de tecnologías, procesos operativos y herramientas analíticas diseñado para observar, registrar, analizar y gestionar en tiempo real el comportamiento del tránsito, las condiciones de la infraestructura vial y la operación vehicular, con el fin de mejorar la seguridad, eficiencia y sostenibilidad del transporte terrestre. Este sistema combina dispositivos como cámaras, sensores, <I>GPS</I>, drones y semáforos inteligentes con plataformas de software que permiten la toma de decisiones automatizadas o asistidas desde centros de control, apoyándose en técnicas de análisis predictivo, inteligencia artificial y gestión de datos masivos.
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.mb-lg-0.mb-3
          .col-12.col-lg-3.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_3.png', class="img-fluid")

    .row.justify-content-center.align-items-center
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          |    Tipos de monitoreo vial
        figure
          img(src='@/assets/curso/temas/tema_3/img_4.svg', class="img-fluid d-none d-lg-block")
          img(src='@/assets/curso/temas/tema_3/img_5.svg', class="img-fluid d-block d-lg-none")
          figcaption <b>Fuente.</b> SENA, 2025

    separador

    #t_3_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.3 Tipos de monitoreo vial
    .mb-3

    separador

    #t_3_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.4 Políticas de monitoreo vial
    .mb-3

    separador

    #t_3_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.5 Criterios de medición de monitoreo vial
    .mb-3

    separador

    #t_3_6.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.6. Métodos de monitoreo vial
    .mb-3
    p.mb-3 Los métodos de monitoreo vial se clasifican en función del tipo de información recolectada, el grado de intervención requerida y el nivel de automatización tecnológica. Se identifican cuatro categorías principales:
    
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/temas/tema_3/img_18.png', class="img-fluid")
      .col-12.col-lg-8
        .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
            .tarjeta--color-primario-10
              .tarjeta--7
              .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Monitoreo directo (<I>In Situ</I>).
              .tarjeta--slider__content.text-center Consiste en la observación presencial y visual del comportamiento vehicular, realizada por personal técnico o mediante dispositivos instalados en el terreno. Aplicación: Inspecciones de tránsito, manual de vigilancia, operativos de control vial.
            .tarjeta--color-primario-10
              .tarjeta--8
              .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Monitoreo automatizado.
              .tarjeta--slider__content.text-center Utilice sensores y sistemas electrónicos para la captura continua de datos sin necesidad de intervención humana directa. Aplicación: Conteo vehicular, medición de velocidad, monitoreo de condiciones ambientales.
            .tarjeta--color-primario-10
              .tarjeta--9
              .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Monitoreo remoto.
              .tarjeta--slider__content.text-center Emplea tecnologías inalámbricas o satelitales para monitorear el estado del tránsito y la infraestructura a distancia, en tiempo real. Aplicación: Sistemas GPS, cámaras IP, estaciones meteorológicas remotas.
            .tarjeta--color-primario-10
              .tarjeta--10
              .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Monitoreo predictivo.
              .tarjeta--slider__content.text-center Se basa en el análisis de datos históricos y el uso de modelos estadísticos o algoritmos para anticipar patrones de comportamiento vial. Aplicación: Sistemas de alerta temprana, planificación proactiva de rutas, análisis de riesgo vial. 

    separador

    #t_3_7.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.7 Herramientas de monitoreo vial
    .mb-3

    p.mb-3 La implementación efectiva de los métodos de monitoreo vial requiere del uso de herramientas tecnológicas específicas que permiten capturar, procesar y analizar datos de forma confiable; entre esas tenemos:



</template>

<script>
export default {
  name: 'Tema3',
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
