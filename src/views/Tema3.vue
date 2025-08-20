<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Monitoreo vial

    .col-12.col-lg-12.p-0
      p.mb-5 Gestiona la movilidad mediante sistemas tecnológicos como cámaras y sensores, aplicados en distintos tipos de control de tráfico, infracciones e infraestructura. Sus políticas regulan las prácticas, mientras los criterios de medición valoran velocidad, flujo, accidentalidad y estado de vías. Por otro lado, los métodos incluyen observación directa y análisis automatizado, apoyados en herramientas como software, drones y plataformas inteligentes.

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

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_3/img_2.png', class="img-fluid")
      .col-12.col-lg-9
        p.mb-3 Es un conjunto integrado de tecnologías, procesos operativos y herramientas analíticas diseñado para observar, registrar, analizar y gestionar en tiempo real el comportamiento del tránsito, las condiciones de la infraestructura vial y la operación vehicular, con el fin de mejorar la seguridad, eficiencia y sostenibilidad del transporte terrestre. Este sistema combina dispositivos como cámaras, sensores, <I>GPS</I>, drones y semáforos inteligentes con plataformas de software que permiten la toma de decisiones automatizadas o asistidas desde centros de control, apoyándose en técnicas de análisis predictivo, inteligencia artificial y gestión de datos masivos.
        h3(data-aos='zoom-in-right').mb-4
          span.label-title Objetivos:
        .row.justify-content-center.align-items-center
          .col-12.col-lg-8.mb-lg-0.order-2.order-lg-1.mb-3(data-aos='zoom-in-right')
            .tarjeta.color-secundario-5.p-4.rounded-0.mb-0
              ul.list-unstyled
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #4C77AE; font-size: 15px; line-height: 1.5;")
                  |   Supervisar el flujo vehicular y peatonal.
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #4C77AE; font-size: 15px; line-height: 1.5;")
                  |   Detectar incidentes, congestiones y condiciones anómalas.
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #4C77AE; font-size: 15px; line-height: 1.5;")
                  |   Apoyar la planificación vial y logística.
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #4C77AE; font-size: 15px; line-height: 1.5;")
                  |   Coordinar respuestas rápidas ante emergencias.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #4C77AE; font-size: 15px; line-height: 1.5;")
                  |   Promover la movilidad segura y sustentable.
          .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos='zoom-in-right')
            figure
              img(src='@/assets/curso/temas/tema_3/img_3.png', class="img-fluid")

    .row.justify-content-center.align-items-center
      .col-12.col-lg-8.mb-5
        .div.tarjeta.color-secundario-20.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema_3/img_29.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Para ampliar información de tecnología usadas en sector, te invitamos a ver el siguiente video:
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://www.youtube.com/watch?v=PMzSKCTYZIw" target="_blank")
                    span Ver video
                    i.fab.fa-youtube.me-2

      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          |    Tipos de monitoreo vial
        figure
          img(src='@/assets/curso/temas/tema_3/img_4.svg', class="img-fluid d-none d-lg-block")
          img(src='@/assets/curso/temas/tema_3/img_5.svg', class="img-fluid d-block d-lg-none")
          figcaption <b>Fuente:</b> SENA, 2025.

    separador

    #t_3_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.3 Tipos de monitoreo vial
    .mb-3

    p.mb-5 Los sistemas de monitoreo vial pueden clasificarse según su finalidad operativa, la tecnología aplicada o el nivel de intervención en la gestión del tránsito. Esta categorización permite una mejor planificación de la infraestructura tecnológica y la aplicación de políticas públicas eficientes. Se identifican principalmente los siguientes tipos:
    
    .bg_img_2.mb-3
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h5 Monitoreo preventivo
            p.mb-0 Es el conjunto de mecanismos orientados a predecir y evitar incidentes o fallas en la vía, anticipándose a condiciones de riesgo. Ejemplos: radares para control de velocidad, alertas meteorológicas automáticas, sensores estructurales en puentes y carreteras.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_6.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h5 Monitoreo reactivo
            p.mb-0 Se centra en la detección y gestión inmediata de eventos ya ocurridos, como accidentes, obstrucciones o situaciones climáticas adversas. Ejemplos: cámaras de videovigilancia, sensores de impacto, sistemas de reporte automático a centros de control.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_7.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h5 Monitoreo en tiempo Real
            p.mb-0 Incorpora tecnologías que permiten el seguimiento continuo y actualizado del estado del tránsito, condiciones viales y desempeño de los vehículos. Ejemplos: rastreo <I>GPS</I> en flotas, uso de drones para supervisión aérea, semáforos adaptativos inteligentes.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_8.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h5 Monitoreo histórico o analítico
            p.mb-0 involucra el análisis de datos recolectados a lo largo del tiempo, lo que facilita la toma de decisiones estratégicas, planificación vial y mejora continua. Ejemplos: modelos de flujo vehicular, estudios de comportamiento del conductor, auditorías técnicas de seguridad vial.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_9.png', class="img-fluid")

    separador

    #t_3_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.4 Políticas de monitoreo vial
    .mb-3

    p.mb-5 Las políticas de monitoreo vial constituyen un marco normativo y estratégico que regula, orienta y facilita la implementación efectiva de los sistemas de monitoreo dentro de las redes de transporte. Estas políticas buscan garantizar la sostenibilidad, eficiencia y seguridad del sistema vial:
    
    TabsA.mb-0.tarjeta-tabs-a.color-primario-10
      .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Política de seguridad vial")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-7.order-2.order-lg-1.mb-0
            p.mb-0 Establecen directrices orientadas a minimizar los riesgos en la vía y proteger a todos los actores del tránsito, especialmente a los usuarios vulnerables. Incluyen normas sobre límites de velocidad, obligatoriedad de dispositivos de monitoreo y mecanismos de sanción automatizados.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.justify-content-center.align-items-center
            figure.text-center.m-0
              img(src='@/assets/curso/temas/tema_3/img_10.png', class="img-fluid")
      .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Políticas de gestión inteligente del tráfico")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-7.order-2.order-lg-1.mb-0
            p.mb-0 Fomentan el uso de tecnologías ITS (Sistemas Inteligentes de Transporte) para lograr una gestión dinámica y eficiente del tránsito urbano e interurbano. Ejemplos: Sincronización semafórica, carriles reversibles, control de accesos en zonas de alta congestión.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.justify-content-center.align-items-center
            figure.text-center.m-0
              img(src='@/assets/curso/temas/tema_3/img_11.png', class="img-fluid")
      .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Políticas de protección de datos y privacidad")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-7.order-2.order-lg-1.mb-0
            p.mb-0 Aseguran un uso ético y legal de los datos recolectados por sensores, cámaras y sistemas digitales de monitoreo. Se enfocan en la confidencialidad, el consentimiento del usuario y la prevención de abusos en el manejo de información personal
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.justify-content-center.align-items-center
            figure.text-center.m-0
              img(src='@/assets/curso/temas/tema_3/img_12.png', class="img-fluid")
      .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Políticas de mantenimiento y actualización tecnológica")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-7.order-2.order-lg-1.mb-0
            p.mb-0 Establecen lineamientos para la actualización constante de los sistemas de monitoreo, garantizando su operatividad, interoperabilidad y sostenibilidad. Incluyen normas sobre mantenimiento, vida útil de dispositivos y estándares de compatibilidad tecnológica.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.justify-content-center.align-items-center
            figure.text-center.m-0
              img(src='@/assets/curso/temas/tema_3/img_13.png', class="img-fluid")
      .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Políticas ambientales")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-7.order-2.order-lg-1.mb-0
            p.mb-0 Integran el monitoreo vial con los objetivos de sostenibilidad y mitigación del impacto ambiental del transporte terrestre. Promueva la gestión de zonas de bajas emisiones, monitoreo de ruido y calidad del aire, y la optimización de rutas ecológicas.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.justify-content-center.align-items-center
            figure.text-center.m-0
              img(src='@/assets/curso/temas/tema_3/img_14.png', class="img-fluid")

    separador

    #t_3_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.5 Criterios de medición de monitoreo vial
    .mb-3

    .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_15.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los criterios de medición son parámetros técnicos y género que agrupa los parámetros técnicos y cuantificables que permiten evaluar el desempeño del sistema de monitoreo vial, su impacto sobre la movilidad y la seguridad. Estos criterios se agrupan generalmente en clave de cinco dimensiones:

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-9.order-2.order-lg-1.mb-3
        AcordionA(tipo="b"  clase-tarjeta="tarjeta tarjeta--color-secundario-10")
          div(titulo="Flujo vehicular")
            p.mb-0 Evalúa la cantidad y tipo de vehículos que circulan en un tramo vial durante un período específico.
            p.mb-0 <B>Indicadores:</B> volumen de tráfico (vehículos/hora), densidad vehicular, velocidad promedio.
            p.mb-0 <B>Herramientas:</B> sensores inductivos, aforos automáticos, cámaras de conteo.
          div(titulo="Tiempo de viaje y retraso")
            p.mb-0Mide la eficiencia del tránsito en función del tiempo invertido por los usuarios.
            p.mb-0 <B>Indicadores:</B> tiempo medio de desplazamiento, tiempo de detención en intersecciones, nivel de congestión.
            p.mb-0 <B>Herramientas:</B> <I>GPS, software</I> de gestión de flotas, aplicaciones móviles.
          div(titulo="Índices de seguridad vial")
            p.mb-0 Evalúa la frecuencia, gravedad y localización de incidentes accidentes de tránsito.
            p.mb-0 <B>Indicadores:</B> tasa de siniestralidad, puntos críticos (puntos negros), número de víctimas o lesiones.
            p.mb-0 <B>Herramientas:</B> cámaras de vigilancia, sensores de impacto, bases de datos policiales.
          div(titulo="Estado de la infraestructura")
            p.mb-0 Mide las condiciones físicas de la vía y su capacidad para soportar el flujo de tránsito.
            p.mb-0 <B>Indicadores:</B> índice de condición del pavimento (<I>PCI</I>), presencia de baches, señalización deficiente.
            p.mb-0 <B>Herramientas:</B> inspección por drones, escáner láser, sensores en el pavimento.
          div(titulo="Cumplimiento normativo")
            p.mb-0 verifique la adherencia de los usuarios a las normas de tránsito y los sistemas automatizados de control.
            p.mb-0 <B>Indicadores:</B> excesos de velocidad detectados, evasión de semáforos, cumplimiento de rutas.
            p.mb-0 <B>Herramientas:</B> foto multas, radares, cámaras de cruce, sistemas <I>OCR</I> (reconocimiento de matrículas).
      .col-9.col-lg-3.order-1.order-lg-2.mb-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema_3/img_16.png', class="img-fluid")

    .row.justify-content-center.align-items-center
      .col-12.col-lg-7.mb-lg-0.order-2.order-lg-1.mb-3(data-aos='zoom-in-right')
        .tarjeta.color-primario-10.p-4.rounded-0.mb-0
          p.mb-3 Importancia de la medición la aplicar estos criterios permite:
          ul.list-unstyled
            li.d-flex.align-items-start.mb-2
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #4C77AE; font-size: 15px; line-height: 1.5;")
              |   Optimizar la toma de decisiones en políticas públicas.
            li.d-flex.align-items-start.mb-2
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #4C77AE; font-size: 15px; line-height: 1.5;")
              |   Justificar inversiones en infraestructura tecnológica.
            li.d-flex.align-items-start.mb-2
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #4C77AE; font-size: 15px; line-height: 1.5;")
              |   Reducir los riesgos operacionales y mejorar la seguridad.
            li.d-flex.align-items-start.mb-1
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #4C77AE; font-size: 15px; line-height: 1.5;")
              |   Garantizar un transporte más eficiente, predecible y sostenible.
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos='zoom-in-right')
        figure
          img(src='@/assets/curso/temas/tema_3/img_17.png', class="img-fluid")


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
            .tarjeta--color-primario-10.h-100
              .tarjeta--7
              .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Monitoreo directo (<I>In Situ</I>).
              .tarjeta--slider__content.text-center Consiste en la observación presencial y visual del comportamiento vehicular, realizada por personal técnico o mediante dispositivos instalados en el terreno. Aplicación: Inspecciones de tránsito, manual de vigilancia, operativos de control vial.
            .tarjeta--color-primario-10.h-100
              .tarjeta--8
              .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Monitoreo automatizado.
              .tarjeta--slider__content.text-center Utilice sensores y sistemas electrónicos para la captura continua de datos sin necesidad de intervención humana directa. Aplicación: Conteo vehicular, medición de velocidad, monitoreo de condiciones ambientales.
            .tarjeta--color-primario-10.h-100
              .tarjeta--9
              .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Monitoreo remoto.
              .tarjeta--slider__content.text-center Emplea tecnologías inalámbricas o satelitales para monitorear el estado del tránsito y la infraestructura a distancia, en tiempo real. Aplicación: Sistemas <I>GPS</I>, cámaras <I>IP</I>, estaciones meteorológicas remotas.
            .tarjeta--color-primario-10.h-100
              .tarjeta--10
              .tarjeta--slider__title.mb-3.bg-color-acento-contenido.text-center.fw-bold Monitoreo predictivo.
              .tarjeta--slider__content.text-center Se basa en el análisis de datos históricos y el uso de modelos estadísticos o algoritmos para anticipar patrones de comportamiento vial. Aplicación: Sistemas de alerta temprana, planificación proactiva de rutas, análisis de riesgo vial. 

    separador

    #t_3_7.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.7 Herramientas de monitoreo vial
    .mb-3

    p.mb-3 La implementación efectiva de los métodos de monitoreo vial requiere del uso de herramientas tecnológicas específicas que permiten capturar, procesar y analizar datos de forma confiable; entre esas tenemos:
    
    .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
      SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-4").p-3.rounded-3
        .tarjeta--color-primario-10.h-100
          .tarjeta--11
          .tarjeta--slider__title.mb-3.text-center.fw-bold Sensores en la vía
          .tarjeta--slider__content.text-center Tipos: sensores inductivos, piezoeléctricos, magnetómetros.<br> Uso: recuento vehicular, medición de velocidad, detección de peso por eje.
        .tarjeta--color-primario-10.h-100
          .tarjeta--12
          .tarjeta--slider__title.mb-3.text-center.fw-bold Cámaras de videovigilancia
          .tarjeta--slider__content.text-center Tipos: <I>CCTV</I>, cámaras térmicas, de reconocimiento facial o de placas (<I>LPR</I>).<br>Uso: supervisión del comportamiento vial, control de infracciones, evidencia ante incidentes.
        .tarjeta--color-primario-10.h-100
          .tarjeta--13
          .tarjeta--slider__title.mb-3.text-center.fw-bold Sistemas de geoposicionamiento (<I>GPS y GNSS</I>)
          .tarjeta--slider__content.text-center Uso: Seguimiento y control de flotas, optimización de rutas, monitoreo logístico en tiempo real.
        .tarjeta--color-primario-10.h-100 
          .tarjeta--14
          .tarjeta--slider__title.mb-3.text-center.fw-bold Drones y vehículos autónomos de inspección
          .tarjeta--slider__content.text-center Uso: evaluación técnica de infraestructura, detección de deterioros, supervisión aérea en zonas de difícil acceso.<br><I>Software</I> de gestión del tráfico<br>Incluye: sistemas <I>ITS</I>, plataformas <I>SCADA</I> de tránsito, paneles de datos y tableros analíticos.
        .tarjeta--color-primario-10.h-100 
          .tarjeta--15
          .tarjeta--slider__title.mb-3.text-center.fw-bold Aplicaciones móviles y plataformas colaborativas
          .tarjeta--slider__content.text-center La eficiencia del monitoreo vial depende de integrar herramientas en un ecosistema inteligente, permitiendo decisiones basadas en datos, optimización de recursos, prevención de accidentes y congestión, y promoviendo una movilidad urbana más segura, eficiente y sostenible.
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
