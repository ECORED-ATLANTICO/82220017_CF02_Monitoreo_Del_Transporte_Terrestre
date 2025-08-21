<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-right") Movilidad inteligente
    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_1/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 Se entiende como un modelo de transporte innovador que integra tecnologías digitales, sostenibilidad y planificación urbana eficiente para mejorar la forma en que las personas y bienes se desplazan. Su concepto se centra en el uso de herramientas como la conectividad, la automatización y el análisis de datos para optimizar recursos, reducir tiempos y minimizar impactos ambientales. La importancia radica en que promueve ciudades más seguras, sostenibles y accesibles, contribuyendo a la calidad de vida y a la competitividad económica.
      
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1	Concepto
    .mb-3
    .tarjeta.color-acento-contenido-5.rounded-0.p-0.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0
          figure.p-0
            img(src="@/assets/curso/temas/tema_1/img_2.png", class="img-fluid").p-0
        .col-12.col-lg-7.p-3
          p.mb-0 La movilidad inteligente busca transformar la forma en que las personas y las mercancías se desplazan, integrando de manera eficiente tecnologías avanzadas, datos en tiempo real e infraestructuras conectadas. Su esencia radica en el uso de sistemas inteligentes de transporte <i>(ITS)</i>, la digitalización y el análisis de grandes volúmenes de datos para optimizar la fluidez del tráfico, mejorar la seguridad vial, reducir la congestión y minimizar el impacto ambiental. No se trata solo de tecnología por la tecnología, sino de cómo la información y la conectividad pueden hacer que los sistemas de transporte sean más eficientes, seguros, sostenibles y centrados en el usuario.

    .bg_img_1.mb-3

      separador

      #t_1_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 1.2 Importancia
      .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_1/img_3.png', class="img-fluid") 
        .col-12.col-lg-11(data-aos="zoom-in-right")
          p.mb-0 Es vital para el sector logístico, ya que permite una planificación y ejecución del transporte más precisa, adaptable y proactiva. Para los aprendices, comprender la movilidad inteligente significa poder implementar y gestionar sistemas que se traducen en beneficios tangibles como: rutas optimizadas dinámicamente que reducen el consumo de combustible y los tiempos de viaje; estimaciones de tiempos de entrega más exacta, una gestión más eficiente de la flota vehicular y de los conductores, y una mayor capacidad para responder a incidentes en tiempo real. Para los usuarios finales, esto se traduce en una experiencia de viaje o de recepción de mercancías más segura, rápida y predecible.
      separador

      #t_1_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 1.3 Tendencia
      .mb-3
      p.mb-5(data-aos="zoom-in-right") La movilidad inteligente está en constante evolución y es una de las fuerzas motrices del futuro del transporte. Sus avances están impulsados por:

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/temas/tema_1/img_4.png', class="img-fluid")
      .col-12.col-lg-8
        .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
            .tarjeta.tarjeta--color-primario-10
              .tarjeta--1
              .tarjeta--slider__title.mb-3.bg-color-secundario.text-center.fw-bold Internet de las Cosas (IoT):
              .tarjeta--slider__content.text-center Sensores en vehículos, infraestructuras viales, semáforos y la propia carga, que capturan y transmiten datos vitales en tiempo real, permitiendo una visibilidad sin precedentes.
            .tarjeta.tarjeta--color-primario-10
              .tarjeta--2
              .tarjeta--slider__title.mb-3.bg-color-secundario.text-center.fw-bold.fst-italic Machine Learning in vehicules.
              .tarjeta--slider__content.text-center Análisis predictivo del tráfico (anticipando congestiones), la optimización autónoma de rutas, la gestión dinámica de la demanda de transporte y la identificación de patrones de riesgo en la conducción.
            .tarjeta.tarjeta--color-primario-10
              .tarjeta--3
              .tarjeta--slider__title.mb-3.bg-color-secundario.text-center.fw-bold Vehículos conectados y autónomos.
              .tarjeta--slider__content.text-center Prometen revolucionar la seguridad (reducción de errores humanos), la eficiencia (conducción optimizada) y la capacidad de la red vial, aunque plantean nuevos desafíos en términos de infraestructura y regulación.
            .tarjeta.tarjeta--color-primario-10
              .tarjeta--4
              .tarjeta--slider__title.mb-3.bg-color-secundario.text-center.fw-bold Movilidad como servicio.
              .tarjeta--slider__content.text-center La integración de diversos modos de transporte (público, compartido, privado) en una única plataforma digital, ofreciendo soluciones de viaje personalizadas y multimodales al usuario final.
            .tarjeta.tarjeta--color-primario-10
              .tarjeta--5
              .tarjeta--slider__title.mb-3.bg-color-secundario.text-center.fw-bold <I>Big Data</I> y analítica avanzada.
              .tarjeta--slider__content.text-center La capacidad de procesar y extraer valor de ingentes cantidades de datos generados por los sistemas de movilidad, permitiendo una toma de decisiones basada en evidencia.
            .tarjeta.tarjeta--color-primario-10
              .tarjeta--6
              .tarjeta--slider__title.mb-3.bg-color-secundario.text-center.fw-bold Ciudades inteligentes.
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
