<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Procedimiento

    #t_6_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.1 Proceso continuo
    .mb-3

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-8.order-2.order-lg-1(data-aos='zoom-in-right')
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/temas/tema_6/img_1.png', class="img-fluid") 
          .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
            p.mb-0 Se refiere a la recopilación y el análisis ininterrumpido de datos en tiempo real. Imagina un flujo constante de información que nunca se detiene. No es una actividad que se activa o desactiva; está siempre funcionando, 24 horas al día, 7 días a la semana.
        .tarjeta.color-secundario-5.p-4.rounded-0.mb-0
          p.mb-3 Características clave de un proceso continuo:
          ul.list-unstyled
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #4C77AE; font-size: 15px; line-height: 1.5;").mb-0
              span <B>Tiempo real:</B> los datos se capturan y transmiten en el mismo instante en que ocurren los eventos (ubicación, velocidad, estado del motor, etc.).
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #4C77AE; font-size: 15px; line-height: 1.5;").mb-0
              span <B>Monitoreo constante:</B> esto es crucial para detectar anomalías o incidentes tan pronto como suceden.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #4C77AE; font-size: 15px; line-height: 1.5;").mb-0
              span <B>Alertas inmediatas:</B> permite la configuración de alarmas que se disparan al instante ante eventos críticos, como desvíos de ruta, exceso de velocidad, o activación de un botón de pánico.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #4C77AE; font-size: 15px; line-height: 1.5;").mb-0
              span <B>Visibilidad operativa:</B> ofrece una imagen siempre actualizada del estado de la flota y la logística.
      .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_6/img_2.png', class="img-fluid") 
    .bg_img_5.mb-3

      separador

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10
          #t_6_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 6.2 Proceso sistemático
          .mb-3
          
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-2.mb-3(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_6/img_3.png', class="img-fluid") 
        .col-12.col-lg-8.mb-3(data-aos="zoom-in-right")
          p.mb-3 Es la organización y la estandarización de cómo se gestiona y utiliza la información recopilada por el proceso continuo. Piensa en ello como el "cómo" y el "por qué" detrás del "qué" se monitorea.
          p.mb-0 Características clave de un proceso sistemático:

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/temas/tema_6/img_4.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta.bg-img-01
                .tarjeta--36
                .tarjeta--slider__title.mb-3.text-center.fw-bold  Estructurado y organizado:
                .tarjeta--slider__content.text-center.mb-5 implica definir qué datos se van a recoger, cómo se van a almacenar, quién es responsable de qué y cuándo se realizarán los análisis.
              .tarjeta.bg-img-01
                .tarjeta--37
                .tarjeta--slider__title.mb-3.text-center.fw-bold Metodología definida:
                .tarjeta--slider__content.text-center.mb-5 establece protocolos claros para la revisión de datos, la generación de informes, la identificación de tendencias y la implementación de acciones correctivas.
              .tarjeta.bg-img-01
                .tarjeta--38
                .tarjeta--slider__title.mb-3.text-center.fw-bold Análisis periódico:
                .tarjeta--slider__content.text-center.mb-5 involucra la revisión regular de datos históricos para identificar patrones, cuellos de botella, ineficiencias o riesgos a largo plazo.
              .tarjeta.bg-img-01
                .tarjeta--39
                .tarjeta--slider__title.mb-3.text-center.fw-bold Mejora continua:
                .tarjeta--slider__content.text-center.mb-5 los resultados del monitoreo sistemático (informes, tendencias) se utilizan para ajustar políticas, capacitar al personal, optimizar rutas y mejorar la eficiencia general de la operación.
              .tarjeta.bg-img-01
                .tarjeta--40
                .tarjeta--slider__title.mb-3.text-center.fw-bold Estandarización:
                .tarjeta--slider__content.text-center.mb-5 asegura que el monitoreo se realice de la misma manera en toda la operación, garantizando la comparabilidad de los datos y la fiabilidad de los resultados.
</template>

<script>
export default {
  name: 'Tema6',
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
