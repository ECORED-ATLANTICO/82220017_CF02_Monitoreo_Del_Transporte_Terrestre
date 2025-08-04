<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Movilidad inteligente

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1	Concepto
    .mb-3
    .tarjeta.color-primario-10.rounded-0.p-0.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0
          figure.p-0
            img(src="@/assets/curso/temas/tema_1/img_1.png", class="img-fluid").p-0
        .col-12.col-lg-7.p-3
          p.mb-0 La movilidad inteligente busca transformar la forma en que las personas y las mercancías se desplazan, integrando de manera eficiente tecnologías avanzadas, datos en tiempo real e infraestructuras conectadas. Su esencia radica en el uso de sistemas inteligentes de transporte (ITS), la digitalización y el análisis de grandes volúmenes de datos para optimizar la fluidez del tráfico, mejorar la seguridad vial, reducir la congestión y minimizar el impacto ambiental. No se trata solo de tecnología por la tecnología, sino de cómo la información y la conectividad pueden hacer que los sistemas de transporte sean más eficientes, seguros, sostenibles y centrados en el usuario.

    .bg_img_1.mb-3

      separador

      #t_1_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 1.2 Importancia
      .mb-3
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.d-lg-block.d-none.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_1/img_2.png', class="img-fluid") 
        .col-12.col-lg-11(data-aos="zoom-in-right")
          p.mb-0 La movilidad inteligente busca transformar la forma en que las personas y las mercancías se desplazan, integrando de manera eficiente tecnologías avanzadas, datos en tiempo real e infraestructuras conectadas. Su esencia radica en el uso de sistemas inteligentes de transporte (ITS), la digitalización y el análisis de grandes volúmenes de datos para optimizar la fluidez del tráfico, mejorar la seguridad vial, reducir la congestión y minimizar el impacto ambiental. No se trata solo de tecnología por la tecnología, sino de cómo la información y la conectividad pueden hacer que los sistemas de transporte sean más eficientes, seguros, sostenibles y centrados en el usuario.

      separador

      #t_1_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 1.3 Tendencia
      .mb-3
      p.mb-5(data-aos="zoom-in-right") La movilidad inteligente está en constante evolución y es una de las fuerzas motrices del futuro del transporte. Sus avances están impulsados por:

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/temas/tema_1/img_3.png', class="img-fluid")
      .col-12.col-lg-8
        .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
            .tarjeta.bg-img-01
              .tarjeta--1
              .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Internet de las Cosas (IoT):
              .tarjeta--slider__content.text-center Sensores en vehículos, infraestructuras viales, semáforos y la propia carga, que capturan y transmiten datos vitales en tiempo real, permitiendo una visibilidad sin precedentes.
            .tarjeta.bg-img-01
              .tarjeta--2
              .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold.fst-italic Machine Learning in vehicules.
              .tarjeta--slider__content.text-center Análisis predictivo del tráfico (anticipando congestiones), la optimización autónoma de rutas, la gestión dinámica de la demanda de transporte y la identificación de patrones de riesgo en la conducción.
            .tarjeta.bg-img-01
              .tarjeta--3
              .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Vehículos conectados y autónomos.
              .tarjeta--slider__content.text-center Prometen revolucionar la seguridad (reducción de errores humanos), la eficiencia (conducción optimizada) y la capacidad de la red vial, aunque plantean nuevos desafíos en términos de infraestructura y regulación.
            .tarjeta.bg-img-01
              .tarjeta--4
              .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Movilidad como servicio.
              .tarjeta--slider__content.text-center La integración de diversos modos de transporte (público, compartido, privado) en una única plataforma digital, ofreciendo soluciones de viaje personalizadas y multimodales al usuario final.
            .tarjeta.bg-img-01
              .tarjeta--5
              .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold <I>Big Data</I> y analítica avanzada.
              .tarjeta--slider__content.text-center La capacidad de procesar y extraer valor de ingentes cantidades de datos generados por los sistemas de movilidad, permitiendo una toma de decisiones basada en evidencia.
            .tarjeta.bg-img-01
              .tarjeta--6
              .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Ciudades inteligentes.
              .tarjeta--slider__content.text-center La integración de los sistemas de transporte con otras infraestructuras urbanas (energía, comunicaciones, seguridad) para una gestión holística del entorno urbano.
              
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
