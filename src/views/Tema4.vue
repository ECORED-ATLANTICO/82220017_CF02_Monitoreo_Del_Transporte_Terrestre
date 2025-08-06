<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Plan de monitoreo vial

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.1 Concepto
    .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema_4/img_1.png', class="img-fluid") 
      .col-12.col-lg-8(data-aos="zoom-in-right")
        p.mb-0 Es una herramienta estratégica y operativa indispensable en la gestión moderna del transporte terrestre. No es simplemente un listado de tareas, sino un documento estructurado que establece el marco metodológico para la recolección sistemática, el análisis y el uso de datos relacionados con la infraestructura vial, el flujo de tráfico, las condiciones ambientales y el desempeño de las flotas y los conductores. Su objetivo primordial es asegurar que la información clave sea capturada de manera consistente, fiable y oportuna, sirviendo como base para evaluar el desempeño, identificar problemas, anticipar riesgos y fundamentar la toma de decisiones que permitan optimizar la movilidad y la seguridad vial. En esencia, es la hoja de ruta que transforma la información dispersa en conocimiento accionable.

    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2 Tipos
    .mb-3

    .bg_img_3.mb-3

      .tarjeta.tarjeta--gris.p-4
        LineaTiempoC.color-acento-contenido(text-small)
          .row.justify-content-center.align-items-center(titulo="Planes de monitoreo operacional")
            .col-12.col-lg-6.order-2.order-lg-1
              h5 Planes de monitoreo operacional
              p.mb-0 Enfocados en la gestión diaria o a corto plazo. Incluyen el monitoreo en tiempo real de flotas (ubicación, velocidad, entregas), la gestión de incidentes de tráfico, y el seguimiento de la productividad de los vehículos y conductores. Son dinámicos y se ajustan rápidamente a las condiciones cambiantes
            .col-12.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema_4/img_2.png', class="img-fluid")

          .row.justify-content-center.align-items-center(titulo="Planes de monitoreo de seguridad vial")
            .col-12.col-lg-6.order-2.order-lg-1
              h5 Planes de monitoreo de seguridad vial
              p.mb-0 Diseñados específicamente para identificar y mitigar riesgos de accidentes. Se centran en la recopilación de datos sobre siniestralidad, puntos críticos, comportamiento del conductor (frenadas bruscas, excesos de velocidad) y el cumplimiento de las normativas de seguridad vial (ej. tiempos de descanso). Son cruciales para cumplir con la obligatoriedad del Plan Estratégico de Seguridad Vial (<I>PESV</I>).
            .col-12.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema_4/img_3.png', class="img-fluid")

          .row.justify-content-center.align-items-center(titulo="Planes de monitoreo Ambiental")
            .col-12.col-lg-6.order-2.order-lg-1
              h5 Planes de monitoreo Ambiental
              p.mb-0 Su objetivo es medir y reducir el impacto ecológico del transporte. Recopilan datos sobre emisiones de gases contaminantes, consumo de combustible, niveles de ruido y la eficiencia energética de la flota. Son esenciales para la implementación de estrategias de logística verde.
            .col-12.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema_4/img_4.png', class="img-fluid")

          .row.justify-content-center.align-items-center(titulo="Planes de monitoreo de infraestructura")
            .col-12.col-lg-6.order-2.order-lg-1
              h5 Planes de monitoreo de infraestructura
              p.mb-0 Dirigidos a evaluar el estado y el rendimiento de la propia red vial (pavimento, puentes, señalización, semáforos). Los datos permiten programar mantenimientos, identificar zonas de riesgo o planificar mejoras en la infraestructura.
            .col-12.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema_4/img_5.png', class="img-fluid")

          .row.justify-content-center.align-items-center(titulo="Planes de monitoreo para proyectos específicos")
            .col-12.col-lg-6.order-2.order-lg-1
              h5 Planes de monitoreo para proyectos específicos
              p.mb-0 Desarrollados para evaluar el impacto y el progreso de iniciativas particulares, como la implementación de nuevas rutas, la construcción de una variante vial o la introducción de un nuevo servicio de transporte. 
            .col-12.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema_4/img_6.png', class="img-fluid")

    separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3 Elementos
    .mb-3




</template>

<script>
export default {
  name: 'Tema4',
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
