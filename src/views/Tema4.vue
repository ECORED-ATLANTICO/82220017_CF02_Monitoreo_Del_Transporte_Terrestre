<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1(data-aos="fade-right") Plan de monitoreo vial
    
    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_4/img_18.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 El plan de monitoreo vial orienta la gestión del tránsito mediante distintos tipos enfocados en seguridad, flujo, infraestructura o normatividad. Sus elementos abarcan objetivos, indicadores, recursos y estrategias, mientras su procedimiento de elaboración incluye diagnóstico, definición de metas, selección de métodos, implementación y evaluación continua.
    
    separador

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

      .tarjeta.tarjeta--gris.p-5
        LineaTiempoC.color-acento-contenido(text-center)
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

          .row.justify-content-center.align-items-center(titulo="Planes de monitoreo ambiental")
            .col-12.col-lg-6.order-2.order-lg-1
              h5 Planes de monitoreo ambiental
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

    .row.justify-content-center.align-items-center.mb-4
      .col-8.col-lg-4.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_4/img_7.png', class="img-fluid")
      .col-12.col-lg-8
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/temas/tema_4/img_8.png', class="img-fluid") 
          .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
            p.mb-3 <B>Objetivo:</B> definir específicamente qué se busca lograr con el monitoreo.
            p.mb-0 <B>Alcance:</B> establecer qué aspectos se monitorearán (ej. toda la flota, un tramo vial específico, solo vehículos de carga pesada).
        .tarjeta.color-acento-contenido-5.p-4.rounded-0.mb-3(data-aos='zoom-in-right')
          p.mb-3 <B>Indicadores clave de desempeño (<I>KPIs</I>):</B> las métricas específicas que se utilizarán para medir el progreso hacia los objetivos (ej. <I>OTD</I>, consumo de combustible por km, número de incidentes, velocidad promedio).
          p.mb-0 <B>Fuentes de datos:</B> identificar de dónde provendrá la información (ej. <I>GPS</I>, sensores <I>IoT</I>, tacógrafos digitales, cámaras de tráfico, reportes de conductores, datos de telemática vehicular).
        p.mb-0(data-aos='zoom-in-right') <B>Tecnologías y herramientas:</B> detallar los sistemas de software (<I>TMS, FMS, BI</I>) y hardware (dispositivos de seguimiento, sensores) que se emplearán para la recolección, procesamiento y análisis de datos.

    .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
      SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-4").p-2.rounded-3
        .tarjeta--color-primario-10.h-100
          .tarjeta--16
          .tarjeta--slider__title.mb-3.text-center.fw-bold Metodología de recolección y procesamiento de datos
          .tarjeta--slider__content.text-center Describir cómo se obtendrán, limpiarán, validarán, almacenarán y procesarán los datos para asegurar su calidad y utilidad.
        .tarjeta--color-primario-10.h-100
          .tarjeta--17
          .tarjeta--slider__title.mb-3.text-center.fw-bold Frecuencia del monitoreo y <I>reporting</I>
          .tarjeta--slider__content.text-center Establecer la periodicidad con la que se recopilarán los datos y se generarán los informes de seguimiento (ej. cada hora, diario, semanal, mensual).
        .tarjeta--color-primario-10.h-100
          .tarjeta--18
          .tarjeta--slider__title.mb-3.text-center.fw-bold Roles y responsabilidades
          .tarjeta--slider__content.text-center Asignar claramente quiénes son los encargados de cada tarea dentro del proceso de monitoreo, desde la recolección hasta el análisis y la difusión de informes.
        .tarjeta--color-primario-10.h-100 
          .tarjeta--19
          .tarjeta--slider__title.mb-3.text-center.fw-bold Presupuesto y recursos
          .tarjeta--slider__content.text-center Detallar los recursos financieros, tecnológicos y humanos necesarios para la implementación y el mantenimiento del plan.
        .tarjeta--color-primario-10.h-100 
          .tarjeta--20
          .tarjeta--slider__title.mb-3.text-center.fw-bold Mecanismos de retroalimentación y mejora continua
          .tarjeta--slider__content.text-center Cómo se utilizarán los resultados del monitoreo para la toma de decisiones, la implementación de acciones correctivas y la mejora continua del propio plan de monitoreo.

    .bg_img_4.mb-3

      separador

      #t_4_4.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 4.4 Procedimiento de elaboración de un plan de monitoreo vial
      .mb-3

      .row.justify-content-center.align-items-stard.mb-5
        .col-12.col-lg-6.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/temas/tema_4/img_14.png', class="img-fluid") 

        .col-12.col-lg-6(data-aos="zoom-in-right")
          .container.tarjeta.tarjeta--blanca.p-4.p-md-0
          .tarjeta.tarjeta--gris.p-4
            PasosB.color-primario
              .row(titulo="")
                .col-md-12.mb-4.mb-md-0
                  h5 Diagnostico
                  p Realizar un análisis exhaustivo de la situación actual, identificando los problemas, desafíos y oportunidades en la operación del transporte o en la gestión vial. Definir qué información es crucial para mejorar el desempeño.              
              .row(titulo="")
                .col-md-12.mb-4.mb-md-0
                  h5 Establecimiento de objetivos y <i>KPIs</i>
                  p con base en el diagnóstico, formular objetivos <i>SMART</i> (Específicos, Medibles, Alcanzables, Relevantes, con Plazo Definido) y seleccionar los KPIs más adecuados para medir el progreso hacia esos objetivos.          
              .row(titulo="")
                .col-md-12.mb-4.mb-md-0
                  h5 Diseño de la metodología de recolección de datos
                  p Determinar las fuentes de datos (ej. sensores, <i>GPS</i>, manuales), los métodos de captura (automática, manual) y los protocolos de muestreo si aplica. Se define cómo asegurar la calidad y consistencia de los datos.              
              .row(titulo="")
                .col-md-12.mb-4.mb-md-0
                  h5 Selección de tecnologías y herramientas
                  p Elegir los sistemas de software (plataformas de telemetría, <i>software</i> de gestión de flotas, herramientas de <i>BI</i>) y los dispositivos de <i>hardware</i> (<i>trackers GPS</i>, sensores, <i>dashcams</i>) que se ajusten a las necesidades y al presupuesto.             
              .row(titulo="")
                .col-md-12.mb-4.mb-md-0
                  h5 Definición de roles, responsabilidades y capacitación
                  p Asignar claramente las funciones dentro del equipo de monitoreo y asegurar que el personal esté debidamente capacitado en el uso de las herramientas y en los procedimientos establecidos.
              .row(titulo="")
                .col-md-12.mb-4.mb-md-0
                  h5 Desarrollo del protocolo de análisis
                  p diseñar cómo se analizarán los datos (análisis descriptivo, predictivo, prescriptivo) y qué formatos tendrán los informes (<i>dashboards</i> = reportes ejecutivos), incluyendo la frecuencia y los destinatarios.              
              .row(titulo="")
                .col-md-12.mb-4.mb-md-0
                  h5 Establecimiento de un cronograma detallado y presupuesto
                  p Planificar las fases de implementación, los hitos clave y la asignación de recursos financieros.
              .row(titulo="")
                .col-md-12.mb-4.mb-md-0
                  h5 Validación y aprobación
                  p Presentar el plan a las partes interesadas (gerencia, equipos operativos, áreas de <i>TI</i>) para su revisión, ajuste y aprobación formal.
              .row(titulo="")
                .col-md-12.mb-4.mb-md-0
                  h5 Implementación piloto y ajustes
                  p Antes de una implementación a gran escala, es recomendable realizar una fase piloto para probar el plan, identificar posibles fallas o mejoras y realizar los ajustes necesarios.
              .row(titulo="")
                .col-md-12.mb-4.mb-md-0
                  h5 Implementación completa y seguimiento continuo 
                  p Lanzar el plan en toda su extensión y mantener una revisión y actualización periódica para asegurar su relevancia y efectividad a lo largo del tiempo.
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
