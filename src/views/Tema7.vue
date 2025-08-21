<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1(data-aos="fade-right") Informe de seguimiento
    
    .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_7/img_30.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es una herramienta de gestión estratégica e indispensable dentro de cualquier sistema de control y monitoreo del transporte. Su función principal es transformar el vasto volumen de datos brutos, recolectados a través de diversas técnicas de monitoreo (GPS, sensores, telemetría, etc.), en información estructurada, analítica y accionable. Este documento sintetiza y presenta de manera concisa el desempeño de la operación del transporte durante un periodo determinado, sirviendo como un pilar fundamental para la evaluación, la toma de decisiones y la mejora continua. No es un mero compendio de datos, sino un análisis interpretativo que guía la acción.
        p.mb-0 Dentro del informe se incorpora la generación de intervalos regulares y predefinidos (por ejemplo, diaria, semanal, mensual, trimestral o anualmente), lo cual permite:

    separador

    #t_7_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.1 Seguimiento periódico
    .mb-3
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema_7/img_1.png', class="img-fluid") 
      .col-12.col-lg-9.mb-3(data-aos="zoom-in-right")
        p.mb-3 Es una herramienta de gestión estratégica e indispensable dentro de cualquier sistema de control y monitoreo del transporte. Su función principal es transformar el vasto volumen de datos brutos, recolectados a través de diversas técnicas de monitoreo (<I>GPS</I>, sensores, telemetría, etc.), en información estructurada, analítica y accionable. Este documento sintetiza y presenta de manera concisa el desempeño de la operación del transporte durante un periodo determinado, sirviendo como un pilar fundamental para la evaluación, la toma de decisiones y la mejora continua. No es un mero compendio de datos, sino un análisis interpretativo que guía la acción.
        p.mb-0 Dentro del informe se incorpora la generación de intervalos regulares y predefinidos (por ejemplo, diaria, semanal, mensual, trimestral o anualmente), lo cual permite:
    
    .bg_img_2.mb-5
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h5 Detección temprana de desviaciones: 
            p.mb-0 un monitoreo constante y la generación frecuente de informes permiten identificar rápidamente cualquier anomalía o desviación respecto a los objetivos planificados, antes de que se conviertan en problemas graves que afecten la eficiencia, la seguridad o la rentabilidad.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_7/img_2.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h5 Evaluación de la efectividad de acciones correctivas:
            p.mb-0 permite verificar si las medidas implementadas para corregir problemas anteriores están generando el impacto deseado y si los resultados esperados se están alcanzando.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_7/img_3.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h5 Ajuste proactivo de planes operativos:
            p.mb-0 facilita la adaptación de las rutas, frecuencias, asignaciones de recursos o estrategias de mantenimiento en respuesta a cambios en las condiciones del mercado, el tráfico, el clima o las demandas del cliente.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_7/img_4.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h5 Mantenimiento informado de las partes interesadas:
            p.mb-0 proporciona transparencia y rendición de cuentas a los distintos actores (gerencia, equipos operativos, clientes, proveedores), manteniendo a todos alineados con el desempeño actual y los objetivos.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_7/img_5.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h5 Identificación de tendencias y patrones:
            p.mb-0 a lo largo del tiempo, los informes periódicos permiten observar el comportamiento histórico de los <I>KPIs</I>, detectar tendencias emergentes, identificar causas raíz de problemas recurrentes y predecir posibles escenarios futuros. Esto es vital para la planificación estratégica a largo plazo.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_7/img_6.png', class="img-fluid")

    separador

    #t_7_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.2 Resultados de la ejecución
    .mb-3

    h3(data-aos='zoom-in-right').mb-5
      span.label-title Desempeño operacional y de flota

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/temas/tema_7/img_7.png', class="img-fluid")
      .col-12.col-lg-9.mb-0(data-aos="zoom-in-right")
        TabsA.mb-0.tarjeta-tabs-a.color-primario-10
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Porcentaje de viajes completados a tiempo")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-5.order-2.order-lg-1.mb-0
                p.mb-0 se detalla el porcentaje de rutas que se ejecutaron dentro de los plazos establecidos, identificando desviaciones significativas.
              .col-12.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.justify-content-center.align-items-center
                figure.text-center.m-0
                  img(src='@/assets/curso/temas/tema_7/img_8.png', class="img-fluid")
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Análisis de desvíos de ruta")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-5.order-2.order-lg-1.mb-0
                p.mb-0 cuantificación y causa principal de los desvíos no planificados, si los hubo.
              .col-12.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.justify-content-center.align-items-center
                figure.text-center.m-0
                  img(src='@/assets/curso/temas/tema_7/img_9.png', class="img-fluid")
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Eficiencia de rutas")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-5.order-2.order-lg-1.mb-0
                p.mb-0 comparación entre las rutas planificadas y las rutas reales ejecutadas, destacando optimizaciones o ineficiencias.
              .col-12.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.justify-content-center.align-items-center
                figure.text-center.m-0
                  img(src='@/assets/curso/temas/tema_7/img_10.png', class="img-fluid")
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Horas de operación vs. horas de inactividad")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-5.order-2.order-lg-1.mb-0
                p.mb-0 medición del tiempo efectivo en que los vehículos estuvieron en movimiento versus detenidos con el motor encendido o apagado.
              .col-12.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.justify-content-center.align-items-center
                figure.text-center.m-0
                  img(src='@/assets/curso/temas/tema_7/img_11.png', class="img-fluid")
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Kilometraje promedio")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-5.order-2.order-lg-1.mb-0
                p.mb-0  kilómetros recorridos por vehículo o por tipo de vehículo, comparado con metas o periodos anteriores.
              .col-12.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.justify-content-center.align-items-center
                figure.text-center.m-0
                  img(src='@/assets/curso/temas/tema_7/img_12.png', class="img-fluid")
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Índice de ocupación/carga")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-5.order-2.order-lg-1.mb-0
                p.mb-0  si aplica, el promedio de utilización de la capacidad de carga del vehículo.
              .col-12.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.justify-content-center.align-items-center
                figure.text-center.m-0
                  img(src='@/assets/curso/temas/tema_7/img_13.png', class="img-fluid")

    h3(data-aos='zoom-in-right').mb-5
      span.label-title Comportamiento del conductor

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
            .tarjeta--color-acento-contenido-5.h-100
              .tarjeta--41
              .tarjeta--slider__title.mb-3.text-center.fw-bold  Eventos de conducción agresiva
              .tarjeta--slider__content.text-center.mb-5 cuantificación de frenadas bruscas, aceleraciones repentinas y giros bruscos. Se puede presentar por conductor o por vehículo.
            .tarjeta--color-acento-contenido-5.h-100
              .tarjeta--42
              .tarjeta--slider__title.mb-3.text-center.fw-bold Excesos de velocidad
              .tarjeta--slider__content.text-center.mb-5 número y duración de los eventos de exceso de velocidad, identificando puntos críticos o conductores reincidentes.
            .tarjeta--color-acento-contenido-5.h-100
              .tarjeta--43
              .tarjeta--slider__title.mb-3.text-center.fw-bold Uso del cinturón de seguridad
              .tarjeta--slider__content.text-center.mb-5 detección de uso inadecuado si el dispositivo lo permite.
            .tarjeta--color-acento-contenido-5.h-100
              .tarjeta--44
              .tarjeta--slider__title.mb-3.text-center.fw-bold Consumo de combustible por conductor
              .tarjeta--slider__content.text-center.mb-5 medición del promedio de consumo para identificar hábitos de conducción eficientes o ineficientes.
            .tarjeta--color-acento-contenido-5.h-100
              .tarjeta--45
              .tarjeta--slider__title.mb-3.text-center.fw-bold Tiempos de descanso y cumplimiento de normativas
              .tarjeta--slider__content.text-center.mb-5 verificación de que los conductores cumplan con los tiempos de descanso obligatorios.
      .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/temas/tema_7/img_19.png', class="img-fluid")

    h3(data-aos='zoom-in-right').mb-5
      span.label-title Seguridad y prevención de riesgos

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-5.col-md-8.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema_7/img_20.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Activaciones de botón <I>SOS</I> 
            p.mb-3.text-small número y tipo de incidentes donde se utilizó el botón de pánico.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

      .col-xl-4.col-lg-5.col-md-8.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema_7/img_21.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Alertas de <I>Geocerca</I> 
            p.mb-0.text-small incidencias de vehículos entrando o saliendo de zonas no autorizadas o sensibles.

      .col-xl-4.col-lg-5.col-md-8.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema_7/img_22.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Detección de colisiones o accidentes
            p.mb-1.text-small registro de eventos severos de impacto o vuelco (si el dispositivo cuenta con estas capacidades).
    
    .bg_img_4.mb-3
      h3(data-aos='zoom-in-right').mb-5
        span.label-title Ahorro de combustible

      .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
        SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-4").p-2.rounded-3
          .tarjeta--color-primario-10.h-100
            .tarjeta--46
            .tarjeta--slider__title.mb-3.text-center.fw-bold Reducción en el consumo por mejoras en la conducción o rutas
            .tarjeta--slider__content.text-center cuantificación del impacto de las acciones correctivas.
          .tarjeta--color-primario-10.h-100
            .tarjeta--47
            .tarjeta--slider__title.mb-3.text-center.fw-bold Disminución del ralentí excesivo
            .tarjeta--slider__content.text-center ahorros generados por la reducción de tiempo con el motor encendido y el vehículo detenido.
          .tarjeta--color-primario-10.h-100
            .tarjeta--48
            .tarjeta--slider__title.mb-3.text-center.fw-bold Optimización de mantenimiento
            .tarjeta--slider__content.text-center.mb-5 detección temprana de fallas vehiculares que evitan reparaciones mayores y tiempos de inactividad prolongados.
          .tarjeta--color-primario-10.h-100 
            .tarjeta--49
            .tarjeta--slider__title.mb-3.text-center.fw-bold Disminución de primas de seguro
            .tarjeta--slider__content.text-center potencial reducción de costos de seguro gracias a una mejor puntuación de seguridad en la conducción.
          .tarjeta--color-primario-10.h-100 
            .tarjeta--50
            .tarjeta--slider__title.mb-3.text-center.fw-bold Prevención de robos o uso no autorizado
            .tarjeta--slider__content.text-center ahorros significativos por la recuperación de vehículos o la disuasión de actividades ilegales.
    
    .titulo-sexto.color-acento-contenido
      h5 Figura 4.
      |    Modelo dispositivo de seguimiento
    figure(data-aos="zoom-in-right")
      img(src='@/assets/curso/temas/tema_7/img_28.svg', class="img-fluid d-none d-lg-block")
      img(src='@/assets/curso/temas/tema_7/img_29.svg', class="img-fluid d-block d-lg-none mb-3")
      figcaption <b>Fuente:</b> SENA, 2025.

</template>

<script>
export default {
  name: 'Tema7',
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
