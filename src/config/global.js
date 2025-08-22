export default {
  global: {
    Name: 'Monitoreo estratégico del transporte terrestre',
    Description:
      'El programa de monitoreo estratégico del transporte terrestre es fundamental para fortalecer las capacidades técnicas y de gestión en un sector clave para el desarrollo económico y la sostenibilidad. Este tipo de formación permite preparar profesionales capaces de implementar sistemas avanzados de seguimiento y análisis de operaciones, facilitando la toma de decisiones basadas en datos, tanto en el ámbito público como privado. Además, promueve una cultura de eficiencia, seguridad y modernización en la gestión del transporte, contribuyendo a resolver desafíos críticos como la congestión, el impacto ambiental y la planificación de infraestructura.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Movilidad inteligente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tendencia',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sostenibilidad en la movilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Importancia',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tendencia',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Monitoreo vial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Sistemas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Política',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Criterio de medición',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Método',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Herramientas',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Plan de monitoreo vial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Elementos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Procedimiento de elaboración',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Dispositivos de seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Modelos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Automatización',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Procedimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Proceso continuo',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Proceso sistemático',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Informe de seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Seguimiento periódico',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Resultados de la ejecución',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Movilidad inteligente',
      referencia:
        'Descubrimiento Latinoamérica. (2013, 4 de abril). <em>¿Cómo funciona el GPS? | ¿Cómo lo hacen?</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kQE9FpUcp4c',
    },
    {
      tema: 'Sostenibilidad en la movilidad',
      referencia:
        'DW Español. (2021, 15 de julio). <em>La movilidad del futuro</em> [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-xdJ_2mSig8',
    },
    {
      tema: 'Plan de monitoreo vial',
      referencia:
        'Departamento Nacional de Planeación. (2017). <em>Manual de innovación en movilidad y transporte.</em> DNP. ',
      tipo: 'Manual PDF',
      link:
        'https://portalterritorial.dnp.gov.co/KitOT/Content/uploads/Manual%20innovacion%20Movilidad%20y%20Transporte%20PDF.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad universal',
      significado:
        'Diseño de transporte e infraestructura para que pueda ser utilizada por todas las personas, incluidas con discapacidad.',
    },
    {
      termino: 'Análisis predictivo',
      significado:
        'Es una técnica que utiliza datos históricos, estadísticas y modelos matemáticos o algoritmos de inteligencia artificial para anticipar posibles eventos o comportamientos futuros.',
    },
    {
      termino: 'Autonomía vehicular',
      significado:
        'Capacidad de un vehículo para operar sin intervención humana, usando sensores, inteligencia artificial y sistemas de navegación.',
    },
    {
      termino: 'Auditoría vial',
      significado:
        'Evaluación técnica de una vía para identificar riesgos y proponer mejoras.',
    },
    {
      termino: '<em>Big data</em>',
      significado:
        'o también se puede llamar gestión de datos masivos, consiste en recolectar, almacenar, procesar y analizar grandes volúmenes de datos, estructurados o no, para obtener información útil que apoye la toma de decisiones, predicciones o mejoras operativas.',
    },
    {
      termino: 'Combustibles fósiles',
      significado:
        'Son fuentes de energía no renovable formadas por la descomposición de materia orgánica durante millones de años. Incluyen el petróleo, el carbón y el gas natural, y su uso genera contaminación ambiental.',
    },
    {
      termino: 'Congestión vial',
      significado:
        'Acumulación excesiva de vehículos en las vías que provoca lentitud, demoras y mayor consumo de combustible.',
    },
    {
      termino: 'Conectividad',
      significado:
        'Nivel más alto de automatización, donde el vehículo opera sin intervención humana en ningún entorno.',
    },
    {
      termino: 'Conducción autónoma nivel 5',
      significado:
        'Nivel más alto de automatización, donde el vehículo opera sin intervención humana en ningún entorno.',
    },
    {
      termino: 'Demanda de transporte',
      significado:
        'Cantidad de personas o carga que requieren desplazarse en un período y zona específica.',
    },
    {
      termino: '<em>Ecodriving</em>',
      significado:
        'Conducción eficiente que reduce el consumo de combustible y la emisión de gases contaminantes.',
    },
    {
      termino: 'Emergencia vial',
      significado:
        'Situación imprevista que afecta la circulación y requiere intervención urgente.',
    },
    {
      termino: 'Internet de las cosas <em>(IoT)</em>',
      significado:
        'Es un sistema en el que objetos físicos como vehículos, sensores, electrodomésticos o maquinaria están conectados a internet para recopilar, enviar y recibir datos automáticamente.',
    },
    {
      termino: 'Logística urbana',
      significado:
        'Planificación y gestión eficiente del transporte de mercancías dentro de zonas urbanas, minimizando impactos negativos.',
    },
    {
      termino: 'Micro movilidad',
      significado:
        'Transporte individual de corta distancia como patinetas o bicicletas eléctricas.',
    },
    {
      termino: 'Plan de movilidad',
      significado:
        'Estrategia diseñada por autoridades o empresas para mejorar el transporte y reducir los impactos ambientales y sociales.',
    },
    {
      termino: 'Plan estratégico de seguridad vial <em>(PESV)</em>',
      significado:
        'Es una herramienta obligatoria en muchos países (como Colombia) que busca prevenir accidentes de tránsito y reducir riesgos viales en organizaciones que operan vehículos o gestionan personal en vías públicas.',
    },
    {
      termino: 'Simulación de tráfico',
      significado:
        'Uso de modelos computacionales para prever el comportamiento del tránsito en diferentes escenarios.',
    },
    {
      termino: 'Triple Bottom Line <em>(TBL)</em>',
      significado:
        'Es un enfoque de sostenibilidad que evalúa el desempeño de una organización en tres dimensiones clave: económica, ambiental y social.',
    },
    {
      termino: 'Vehículo conectado',
      significado:
        'Auto que se comunica con otros vehículos, infraestructura o redes para mejorar la seguridad y eficiencia.',
    },
    {
      termino: 'Zona de bajas emisiones <em>(ZBE)</em>',
      significado:
        'Área urbana delimitada en la que se restringe el acceso a vehículos altamente contaminantes para reducir la polución y mejorar la calidad del aire',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Seguridad Vial (ANSV) de Colombia. (2022). <em>Plan Nacional de Seguridad Vial 2022-2031.</em> Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/documentos/anexo-tecnico-decreto-1430-2022.pdf',
    },
    {
      referencia:
        'Cervero, R., Guerra, E., & Al, S. (2019). <em>Beyond Mobility: Planning Cities for People and Places.</em> Island Press.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2002). <em>Ley 769 de 2002: Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones.</em> Diario Oficial de Colombia.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2022). <em>Ley 2251 de 2022: Por la cual se dictan disposiciones para la formulación, implementación y evaluación de la política pública de seguridad vial con el enfoque de sistema seguro y se dictan otras disposiciones.</em> Diario Oficial de Colombia.',
      link: '',
    },
    {
      referencia:
        'Federación Iberoamericana de Asociaciones de Ingeniería de Carreteras (FIARC). (2017). <em>Manual de Diseño Geométrico de Carreteras.</em> FIARC.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas (ONU). (2016). <em>Decenio de Acción para la Seguridad Vial 2011-2020: Columna vertebral de la seguridad vial.</em> ONU.',
      link: '',
    },
    {
      referencia:
        'Pons, L. (Coord.). (2017). <em>Tráfico y seguridad vial: Una visión multidisciplinar.</em> Editorial Dykinson.',
      link: '',
    },
    {
      referencia:
        'Sánchez, R. (2019). <em>Movilidad urbana sostenible: Conceptos, planificación y gestión.</em> Editorial Reverté.',
      link: '',
    },
    {
      referencia:
        'World Health Organization (WHO). (2018). <em>Global status report on road safety 2018.</em> WHO.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos ',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yasmín Maldonado Escobar',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
