<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-5.col-lg-3.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src='@/assets/curso/sintesis/img_1.png', class="img-fluid").h-100  
      .col-12.col-lg-9
        p.mb-0 El componente formativo Monitoreo estratégico del transporte terrestre, explora en profundidad la movilidad inteligente, abordando su concepto, vital importancia y las tendencias que la definen. Se vincula estrechamente con la sostenibilidad en la movilidad, detallando igualmente su concepto, importancia y tendencias para un futuro eficiente y responsable.
        p.mb-0 Un pilar central es el monitoreo vial, desglosando su concepto, los diversos sistemas y tipos de monitoreo, la política que lo rige, los criterios de medición, los métodos empleados y las herramientas disponibles. La planificación se materializa en el plan de monitoreo vial, explicando su concepto, tipos, elementos clave y el procedimiento de elaboración. 
        p.mb-0 Para llevar a cabo este monitoreo, se estudian los dispositivos de seguimiento, sus tipos, modelos y la crucial automatización de sus funciones. Es por ello que se aborda el procedimiento operativo, diferenciando entre el proceso continuo - el proceso sistemático y presentando como resumen final la elaboración de un informe de seguimiento periódico que detalla los resultados de la ejecución.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="El componente formativo Monitoreo estratégico del transporte terrestre, explora en profundidad la movilidad inteligente, abordando su concepto, vital importancia y las tendencias que la definen. Se vincula estrechamente con la sostenibilidad en la movilidad, detallando igualmente su concepto, importancia y tendencias para un futuro eficiente y responsable. Un pilar central es el monitoreo vial, desglosando su concepto, los diversos sistemas y tipos de monitoreo, la política que lo rige, los criterios de medición, los métodos empleados y las herramientas disponibles. La planificación se materializa en el plan de monitoreo vial, explicando su concepto, tipos, elementos clave y el procedimiento de elaboración. Para llevar a cabo este monitoreo, se estudian los dispositivos de seguimiento, sus tipos, modelos y la crucial automatización de sus funciones. Es por ello que se aborda el procedimiento operativo, diferenciando entre el proceso continuo - el proceso sistemático y presentando como resumen final la elaboración de un informe de seguimiento periódico que detalla los resultados de la ejecución.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
