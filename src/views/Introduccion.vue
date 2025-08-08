<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-5.col-lg-3.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src='@/assets/curso/introduccion/img_1.png', class="img-fluid").height-100  
      .col-12.col-lg-9
        p.mb-0 El monitoreo estratégico del transporte terrestre se ha convertido en una herramienta esencial para el desarrollo eficiente, seguro y sostenible de las operaciones logísticas modernas. Mediante el uso de tecnologías como <I>GPS</I>, sensores telemáticos y sistemas de análisis de datos, este proceso permite la supervisión en tiempo real de rutas, vehículos y tiempos de entrega, optimizando la gestión de riesgos, los costos operativos y la atención al cliente. 
        p.mb-0 Más allá de su impacto en la eficiencia empresarial, el monitoreo estratégico también contribuye de manera significativa a la seguridad vial y la protección del medio ambiente, promoviendo prácticas de movilidad más responsables y sostenibles. 
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/PMzSKCTYZIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
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
