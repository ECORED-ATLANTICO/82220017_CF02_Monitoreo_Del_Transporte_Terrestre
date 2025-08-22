<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sostenibilidad en la movilidad

    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 garantizar sistemas de transporte eficientes, accesibles y respetuosos con el medio ambiente, reduciendo emisiones y optimizando recursos. Su importancia radica en que contribuye a la calidad de vida, promueve ciudades más seguras y saludables, y apoya el desarrollo económico responsable. Entre las principales tendencias destacan la electrificación del transporte, el impulso de la movilidad activa (bicicletas y caminatas), la intermodalidad y el uso de tecnologías inteligentes para mejorar la eficiencia y disminuir el impacto ambiental

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.1 Concepto
    .mb-3
    
    p.mb-5 Se define como la capacidad de los sistemas de transporte para satisfacer las necesidades actuales de movimiento de personas y bienes, sin comprometer la capacidad de las generaciones futuras para satisfacer las suyas propias. Este concepto se cimienta en el equilibrio de tres dimensiones interconectadas, conocidas como la triple cuenta de resultados o <I>Triple Bottom Line:</I>
    
    .bg_img_2.mb-3
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-5
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h5 Dimensión ambiental
            p.mb-0 Se busca reducir el impacto ambiental del transporte mediante la disminución de emisiones contaminantes, gestión adecuada de residuos operativos y un menor uso de combustibles fósiles y recursos no renovables, promoviendo sostenibilidad.
          .col-12.col-lg-8.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_2.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h5 Dimensión social
            p.mb-0 Busca asegurar acceso equitativo al transporte, fomentar la seguridad vial, disminuir la congestión urbana que afecta la calidad de vida y optimizar las condiciones laborales del personal del sector transporte.
          .col-12.col-lg-8.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_3.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-4.order-2.order-lg-1.mb-0
            h5 Dimensión económica
            p.mb-0 Garantiza soluciones de movilidad sostenibles mediante costos operativos optimizados, eficiencia económica, inversión en tecnologías limpias con retorno y apoyo al desarrollo económico local y regional, asegurando viabilidad financiera a largo plazo.
          .col-12.col-lg-8.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_4.png', class="img-fluid")

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2 Importancia
    .mb-3

    .bg_img_6.mb-3
      p.mb-5 La importancia de la sostenibilidad en la movilidad radica en varios pilares clave:
      
      .row.justify-content-center.align-items-start.mb-0
        .col-12.col-lg-9.order-2.order-lg-1.mb-3
          AcordionA(tipo="b"  clase-tarjeta="tarjeta tarjeta--color-secundario-10")
            div(titulo="Impacto ambiental")
              p.mb-0 El transporte es uno de los mayores contribuyentes a las emisiones de gases de efecto invernadero y a la contaminación del aire en las ciudades. Una movilidad sostenible busca reducir drásticamente estas emisiones a través de la adopción de vehículos eléctricos, híbridos y de hidrógeno, el fomento del transporte público y la planificación urbana que prioriza la cercanía.
            div(titulo="Eficiencia de recursos")
              p.mb-0 La dependencia de los combustibles fósiles es insostenible a largo plazo. La movilidad sostenible promueve el uso eficiente de la energía y la diversificación hacia fuentes renovables, lo que no solo reduce la huella de carbono, sino que también genera ahorros operativos significativos y disminuye la dependencia de recursos finitos.
            div(titulo="Calidad de vida y salud pública")
              p.mb-0 Menos contaminación y ruido se traducen en una mejor calidad del aire, una reducción de enfermedades respiratorias y una mejora general en la salud de la población. Además, la promoción de modos de transporte activos como caminar y andar en bicicleta contribuye a una sociedad más saludable.
            div(titulo="Viabilidad económica y social")
              p.mb-0 La inversión inicial en infraestructura y tecnologías sostenibles puede ser alta, a largo plazo se traduce en menores costos de operación y mantenimiento. Además, una movilidad accesible y equitativa mejora la inclusión social y fomenta el desarrollo económico al facilitar el acceso a oportunidades laborales y servicios.
        .col-9.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
          figure
            img(src='@/assets/curso/temas/tema_2/img_5.png', class="img-fluid")
    

    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.3 Tendencia
    .mb-3

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/temas/tema_2/img_6.png', class="img-fluid")
      .col-12.col-lg-8.mb-0
        TabsA.mb-0.tarjeta-tabs-a.color-primario-10
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="")
            .row.justify-content-center.align-items-center.mb-0
              .col-12
                p.mb-0 
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="")
            .row.justify-content-center.align-items-center.mb-0
              .col-12
                p.mb-0 
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="")
            .row.justify-content-center.align-items-center.mb-0
              .col-12
                p.mb-0 
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="")
            .row.justify-content-center.align-items-center.mb-0
              .col-12
                p.mb-0 
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="")
            .row.justify-content-center.align-items-center.mb-0
              .col-12
                p.mb-0  
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="")
            .row.justify-content-center.align-items-center.mb-0
              .col-12
                p.mb-0 
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/temas/tema_2/img_6.png', class="img-fluid")
      .col-12.col-lg-8.mb-0(data-aos="zoom-in-right")
        TabsA.mb-0.tarjeta-tabs-a.color-primario-10
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Electrificación masiva de flotas")
            .row.justify-content-center.align-items-center.mb-0
              .col-12
                p.mb-0 La transición hacia vehículos eléctricos, desde automóviles particulares hasta autobuses y camiones de carga, es la tendencia más visible. Esto implica un desafío y una oportunidad para ustedes en la instalación y mantenimiento de infraestructura de carga, diagnóstico de sistemas eléctricos y gestión de baterías.
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Movilidad como Servicio (<I>Mobility as a Service: “MaaS”</I>)")
            .row.justify-content-center.align-items-center.mb-0
              .col-12
                p.mb-0 Integra diversas opciones de transporte en una sola plataforma digital, permitiendo a los usuarios planificar, reservar y pagar sus viajes de manera fluida. El conocimiento en sistemas de información, conectividad y análisis de datos será fundamental para optimizar rutas y servicios.
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Vehículos autónomos y conectados")
            .row.justify-content-center.align-items-center.mb-0
              .col-12
                p.mb-0 Los vehículos autónomos prometen optimizar el flujo del tráfico, reducir accidentes y mejorar la eficiencia energética. La conectividad vehicular (<I>V2V, V2I</I>) permitirá una comunicación fluida entre vehículos e infraestructura, lo que exigirá expertos en redes, sensores y ciberseguridad.
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Micro movilidad y transporte activo")
            .row.justify-content-center.align-items-center.mb-0
              .col-12
                p.mb-0 El auge de las bicicletas eléctricas, patinetes y otros vehículos ligeros para trayectos cortos está redefiniendo los paisajes urbanos. La participación en el diseño de ciclovías, mantenimiento de estos vehículos y sistemas de alquiler será crucial.
              .col-12.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.justify-content-center.align-items-center
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Optimización y logística verde")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-5.order-2.order-lg-1.mb-0
                p.mb-0 La aplicación de tecnologías como la inteligencia artificial, el <I>Big Data</I> y el Internet de las Cosas (<I>IoT</I>) permite optimizar rutas, gestionar flotas de manera más eficiente y reducir el consumo de combustible y las emisiones en el transporte de mercancías.
              .col-12.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.justify-content-center.align-items-center
          .tarjeta.bg-color-acento-contenido-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Desarrollo de infraestructura inteligente")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-5.order-2.order-lg-1.mb-0
                p.mb-0 Ciudades y vías inteligentes que integran sensores, sistemas de gestión de tráfico adaptativos y puntos de carga para vehículos eléctricos, son el futuro.
              .col-12.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-3.d-flex.justify-content-center.align-items-center
</template>

<script>
export default {
  name: 'Tema2',
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
