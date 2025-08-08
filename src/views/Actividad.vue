<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Gestión inteligente del monitoreo vial, sistemas integrados de monitoreo.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> proporcionar a los participantes los conocimientos, competencias técnicas necesarias para analizar, implementar y optimizar sistemas de monitoreo vial que contribuyan a una gestión eficiente, segura y sostenible del transporte. Permitiendo generar criterios de medición y planificación estratégica, se busca que los profesionales sean capaces de tomar decisiones informadas, mejorar la trazabilidad operativa y fortalecer la prevención de riesgos en las redes viales, en alineación con las demandas actuales de monitoreo estratégico y control logístico.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            'El monitoreo del transporte terrestre permite únicamente registrar la ubicación de los vehículos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 2,
          texto:
            'El uso compartido de vehículos ayuda a reducir la congestión y la contaminación en las ciudades.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 3,
          texto:
            'El monitoreo terrestre se implementa exclusivamente en zonas urbanas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 4,
          texto:
            'Las tecnologías de geolocalización son fundamentales en el monitoreo del transporte terrestre.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 5,
          texto:
            ' La velocidad promedio, el tiempo de recorrido y la frecuencia de paso son ejemplos de criterios de medición vial.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 6,
          texto:
            ' Los criterios de medición vehicular se definen únicamente por las autoridades de tránsito locales.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 7,
          texto:
            'La precisión y confiabilidad de los datos son aspectos clave en la selección de criterios de medición.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 8,
          texto:
            'No es necesario establecer criterios de medición para evaluar el desempeño de un sistema de monitoreo.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 9,
          texto:
            'El transporte público eficiente es un pilar clave de la movilidad sostenible.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 10,
          texto:
            'Las cámaras de videovigilancia, sensores de peso y radares son herramientas utilizadas en el monitoreo vial.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 11,
          texto:
            'Los métodos de monitoreo ya no se utilizan en ninguna parte del mundo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 12,
          texto:
            'Los sensores inductivos permiten detectar el paso de vehículos mediante campos magnéticos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 13,
          texto:
            'La medición de emisiones contaminantes no es relevante para el monitoreo vial.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 14,
          texto:
            'Solo se consideran datos cuantitativos en los criterios de medición.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 15,
          texto:
            'La selección de criterios de medición depende del objetivo del monitoreo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 16,
          texto:
            'Los datos recopilados por herramientas de monitoreo pueden integrarse a plataformas de análisis predictivo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 17,
          texto:
            'Los sistemas de monitoreo no necesitan conectividad en tiempo real para ser efectivos.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 18,
          texto:
            'Los drones se están incorporando como herramienta emergente de monitoreo vial.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 19,
          texto:
            'Las cámaras LPR (reconocimiento de placas) permiten identificar vehículos en circulación.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
        {
          id: 20,
          texto:
            'Las herramientas de monitoreo no requieren calibración una vez instaladas.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente respuesta, vamos ánimo que faltan pocas preguntas por responder.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido formativo, para mejorar tu respuesta',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Te felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Pero podemos mejorar nuestras respuestas, te invitamos a revisar el componente formativo.',
    },
  }),
}
</script>
