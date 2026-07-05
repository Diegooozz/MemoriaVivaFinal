(function () {
    "use strict";

    const STORAGE = {
        usuarios: "mv2_usuarios",
        sesion: "mv2_sesion",
        resenas: "mv2_resenas",
        comentarios: "mv2_comentarios",
        favoritos: "mv2_favoritos",
        rutas: "mv2_rutas",
        reportes: "mv2_reportes",
        eventos: "mv2_eventos",
        modelos: "mv2_modelos",
        desafio: "mv2_desafio",
        notificaciones: "mv2_notificaciones"
    };

    function imagenLugarSVG(id) {
    const datos = {
        machupicchu: {
            titulo: "Machu Picchu",
            fondo1: "#234538",
            fondo2: "#7fbf5b",
            figura: `
                <path d="M70 330 L210 95 L330 245 L455 80 L665 330 Z" fill="#8b4f32"/>
                <path d="M115 330 C185 255 235 260 310 330 Z" fill="#d7c4a4"/>
                <g fill="#e5ddc7">
                    <rect x="245" y="245" width="75" height="25" rx="5"/>
                    <rect x="330" y="260" width="100" height="25" rx="5"/>
                    <rect x="450" y="242" width="90" height="25" rx="5"/>
                    <rect x="280" y="292" width="285" height="26" rx="5"/>
                </g>
                <path d="M65 340 H665 V405 H65 Z" fill="#5c9c45"/>
            `
        },

        huacapucllana: {
            titulo: "Huaca Pucllana",
            fondo1: "#c98852",
            fondo2: "#f1d0a5",
            figura: `
                <rect x="95" y="285" width="530" height="75" rx="8" fill="#a95f38"/>
                <rect x="130" y="235" width="450" height="55" rx="8" fill="#c3784c"/>
                <rect x="170" y="190" width="360" height="50" rx="8" fill="#d49363"/>
                <rect x="210" y="150" width="280" height="45" rx="8" fill="#e0a87a"/>
                <g stroke="#7f4329" stroke-width="8" opacity=".45">
                    <line x1="115" y1="315" x2="610" y2="315"/>
                    <line x1="150" y1="260" x2="560" y2="260"/>
                    <line x1="190" y1="215" x2="520" y2="215"/>
                </g>
            `
        },

        nazca: {
            titulo: "Líneas de Nazca",
            fondo1: "#c69255",
            fondo2: "#efd59b",
            figura: `
                <rect width="720" height="430" fill="#e1bc7a"/>
                <g stroke="#744522" stroke-width="9" fill="none" opacity=".88">
                    <line x1="70" y1="90" x2="650" y2="330"/>
                    <line x1="110" y1="350" x2="610" y2="80"/>
                    <line x1="80" y1="220" x2="650" y2="220"/>
                    <path d="M310 175 C380 115 480 150 475 230 C468 312 350 310 310 245 C285 205 292 188 310 175Z"/>
                </g>
                <circle cx="520" cy="125" r="38" fill="#f4d2a6" opacity=".45"/>
            `
        },

        caral: {
            titulo: "Caral",
            fondo1: "#b97945",
            fondo2: "#efcf9f",
            figura: `
                <rect width="720" height="430" fill="#edd2a4"/>
                <polygon points="125,335 245,110 365,335" fill="#a96338"/>
                <polygon points="380,335 485,160 590,335" fill="#c07845"/>
                <circle cx="260" cy="360" r="55" fill="none" stroke="#6b8f52" stroke-width="18"/>
                <circle cx="520" cy="358" r="45" fill="none" stroke="#6b8f52" stroke-width="15"/>
                <path d="M80 380 C230 345 420 380 640 345" fill="none" stroke="#8f5632" stroke-width="10" opacity=".45"/>
            `
        },

        chanchan: {
            titulo: "Chan Chan",
            fondo1: "#9e633d",
            fondo2: "#efcf9f",
            figura: `
                <rect width="720" height="430" fill="#ead0a7"/>
                <rect x="90" y="90" width="245" height="260" rx="8" fill="none" stroke="#8f5632" stroke-width="20"/>
                <rect x="390" y="120" width="240" height="220" rx="8" fill="none" stroke="#8f5632" stroke-width="20"/>
                <g stroke="#c77d4a" stroke-width="10">
                    <line x1="135" y1="155" x2="290" y2="155"/>
                    <line x1="135" y1="220" x2="290" y2="220"/>
                    <line x1="430" y1="180" x2="585" y2="180"/>
                    <line x1="430" y1="245" x2="585" y2="245"/>
                </g>
                <g fill="#6b8f52" opacity=".65">
                    <path d="M145 285 q22 -22 44 0 q-22 25 -44 0Z"/>
                    <path d="M455 285 q22 -22 44 0 q-22 25 -44 0Z"/>
                </g>
            `
        },

        kuelap: {
            titulo: "Kuélap",
            fondo1: "#284c3b",
            fondo2: "#9fc6a3",
            figura: `
                <rect width="720" height="430" fill="#b9cfb5"/>
                <path d="M55 340 C180 260 300 300 430 230 C520 185 590 210 675 160 V430 H55 Z" fill="#5d7d5d"/>
                <ellipse cx="365" cy="260" rx="250" ry="85" fill="none" stroke="#7c6a4a" stroke-width="24"/>
                <g fill="#6b8f52">
                    <circle cx="280" cy="245" r="38"/>
                    <circle cx="365" cy="265" r="42"/>
                    <circle cx="455" cy="245" r="36"/>
                    <circle cx="415" cy="315" r="32"/>
                </g>
                <path d="M130 250 C250 190 475 195 600 250" fill="none" stroke="#c77d4a" stroke-width="12"/>
            `
        }
    };

    const d = datos[id] || datos.machupicchu;

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 430">
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="${d.fondo1}"/>
                    <stop offset="100%" stop-color="${d.fondo2}"/>
                </linearGradient>
            </defs>
            <rect width="720" height="430" fill="url(#g)"/>
            <circle cx="590" cy="78" r="54" fill="#fff7df" opacity=".25"/>
            ${d.figura}
            <rect x="0" y="0" width="720" height="430" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="12"/>
            <text x="38" y="64" font-family="Montserrat, Arial" font-size="34" font-weight="900" fill="#fffaf3">${d.titulo}</text>
        </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

    const lugares = [
        {
            id: "machupicchu",
            nombre: "Machu Picchu",
            cultura: "Inca",
            ubicacion: "Cusco, Perú",
            distrito: "Cusco",
            epoca: "Siglo XV",
            periodo: "Horizonte Tardío",
            lat: -13.163141,
            lng: -72.544963,
            accesible: false,
            duracion: 180,
            dificultad: "Media",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuSmytO3h0Li5rfVMNiRmcA11iflyeCJRuO85Buqh3w&s=10",
            descripcion: "Machu Picchu es una ciudadela inca ubicada en la cordillera oriental del sur del Perú. Su diseño integra arquitectura de piedra, terrazas agrícolas, recintos ceremoniales y una relación directa con el paisaje andino.",
            funcion: "Centro político, ceremonial, administrativo y residencial de élite. También articulaba caminos, control territorial y espacios rituales.",
            arquitectura: "Mampostería de piedra, terrazas escalonadas, escalinatas, canales de agua, recintos ceremoniales y adaptación precisa a la topografía montañosa.",
            importancia: "Es una de las expresiones más completas de planificación urbana inca y muestra la integración entre arquitectura, paisaje, agua y astronomía.",
            conservacion: "El turismo intensivo, la humedad, la erosión de caminos y la presión sobre áreas internas exigen manejo permanente.",
            accesibilidadTexto: "Accesibilidad limitada por pendientes, escalinatas y restricciones del circuito turístico.",
            narrador: "Machu Picchu no debe entenderse solo como una ciudadela aislada, sino como un sistema territorial. Su arquitectura dialoga con las montañas, el agua, los caminos y la observación astronómica.",
            curioso: "Su ubicación permite una lectura simbólica del paisaje andino y de los apus o montañas sagradas.",
            recorrido: ["Ingreso principal", "Terrazas agrícolas", "Sector urbano", "Templo del Sol", "Roca sagrada"],
            preguntas: [
                ["¿Para qué servía Machu Picchu?", "Servía como centro ceremonial, administrativo y residencial de élite. También articulaba rutas y control visual del paisaje."],
                ["¿Por qué está en una montaña?", "La ubicación permitía control territorial, integración simbólica con los apus y aprovechamiento defensivo del relieve."],
                ["¿Qué elementos arquitectónicos destacan?", "Destacan terrazas, recintos de piedra, escalinatas, canales, templos y plazas."],
                ["¿Qué riesgos tiene?", "Los principales riesgos son presión turística, humedad, erosión y desgaste de caminos internos."]
            ],
            quiz: [
                {
                    pregunta: "¿Qué función cumplía principalmente Machu Picchu?",
                    opciones: ["Centro ceremonial, administrativo y residencial", "Puerto marítimo", "Fortaleza colonial", "Mercado republicano"],
                    correcta: 0,
                    explicacion: "Machu Picchu integraba funciones ceremoniales, administrativas y residenciales de élite."
                },
                {
                    pregunta: "¿Qué elemento arquitectónico es característico de Machu Picchu?",
                    opciones: ["Terrazas agrícolas", "Murallas de adobe marino", "Geoglifos en arena", "Recintos circulares amazónicos"],
                    correcta: 0,
                    explicacion: "Las terrazas agrícolas son fundamentales para entender su adaptación al paisaje andino."
                }
            ],
            fuente: "Cartografía abierta y documentación cultural general.",
            notasPlano: [
                "El plano real muestra ubicación actual, caminos y entorno.",
                "El esquema técnico es interpretativo y educativo.",
                "Para uso oficial deben emplearse planos arqueológicos validados."
            ]
        },
        {
            id: "huacapucllana",
            nombre: "Huaca Pucllana",
            cultura: "Lima",
            ubicacion: "Miraflores, Lima",
            distrito: "Miraflores",
            epoca: "400 - 700 d.C.",
            periodo: "Intermedio Temprano",
            lat: -12.111819,
            lng: -77.033718,
            accesible: true,
            duracion: 70,
            dificultad: "Baja",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07sXORurWO7ofPWYwIga5ZowKMOXzxz6n52CLuxv0Kg&s=10",
            descripcion: "La Huaca Pucllana es un centro ceremonial construido por la cultura Lima. Está formada principalmente por una gran plataforma de adobitos y espacios asociados a ceremonias, administración y ocupación ritual.",
            funcion: "Centro ceremonial y administrativo vinculado al poder religioso y social de la cultura Lima.",
            arquitectura: "Plataforma piramidal de adobitos colocados verticalmente, patios, rampas, recintos y espacios de circulación ritual.",
            importancia: "Permite comprender la ocupación prehispánica de Lima dentro de una zona urbana moderna.",
            conservacion: "La presión urbana, vibraciones, contaminación, humedad y flujo turístico obligan a mantener medidas de conservación.",
            accesibilidadTexto: "Tiene condiciones urbanas favorables, aunque algunas áreas internas pueden estar restringidas por conservación.",
            narrador: "Huaca Pucllana muestra que Lima no empezó con la ciudad moderna. Bajo sus calles existe una memoria antigua construida con barro, organización social y conocimiento sísmico.",
            curioso: "Los adobitos colocados verticalmente ayudaban a mejorar la resistencia ante movimientos sísmicos.",
            recorrido: ["Museo de sitio", "Plataforma ceremonial", "Patios", "Rampas", "Mirador principal"],
            preguntas: [
                ["¿Qué son los adobitos?", "Son pequeños bloques de barro colocados verticalmente. Ayudaban a estabilizar la estructura frente a sismos."],
                ["¿Qué cultura la construyó?", "Fue construida por la cultura Lima durante el Intermedio Temprano."],
                ["¿Por qué es importante?", "Porque conserva evidencia arqueológica dentro de la ciudad moderna y ayuda a comprender la historia prehispánica de Lima."],
                ["¿Qué función tenía?", "Funcionó como centro ceremonial y administrativo."]
            ],
            quiz: [
                {
                    pregunta: "¿Qué cultura construyó Huaca Pucllana?",
                    opciones: ["Lima", "Inca", "Chimú", "Nazca"],
                    correcta: 0,
                    explicacion: "Huaca Pucllana fue construida por la cultura Lima."
                },
                {
                    pregunta: "¿Cuál es un rasgo constructivo de Huaca Pucllana?",
                    opciones: ["Adobitos colocados verticalmente", "Bloques ciclópeos de granito", "Líneas sobre el desierto", "Recintos circulares de piedra"],
                    correcta: 0,
                    explicacion: "La técnica de adobitos verticales es característica del sitio."
                }
            ],
            fuente: "Museo de Sitio Pucllana y cartografía abierta.",
            notasPlano: [
                "El visor muestra la ubicación real del complejo en Miraflores.",
                "El esquema representa plataforma, patios y circulación.",
                "Puede reemplazarse por plano oficial si se cuenta con el archivo."
            ]
        },
        {
            id: "nazca",
            nombre: "Líneas de Nazca",
            cultura: "Nazca",
            ubicacion: "Ica, Perú",
            distrito: "Nazca",
            epoca: "100 a.C. - 700 d.C.",
            periodo: "Intermedio Temprano",
            lat: -14.739027,
            lng: -75.130005,
            accesible: true,
            duracion: 90,
            dificultad: "Baja",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO6LMooECmrBSwlWlIRz3EEPM7s87ip9bl1fzKTaznw&s=10",
            descripcion: "Las Líneas de Nazca son geoglifos trazados sobre el desierto. Incluyen líneas rectas, figuras geométricas, animales y formas simbólicas.",
            funcion: "Paisaje ritual asociado a prácticas ceremoniales, orientación simbólica y posiblemente vínculos con agua, territorio y calendario.",
            arquitectura: "No corresponde a arquitectura cerrada, sino a intervención territorial mediante retiro de piedras superficiales para exponer suelo claro.",
            importancia: "Demuestra manejo espacial, simbolismo ritual y conocimiento del paisaje desértico.",
            conservacion: "Es vulnerable a tránsito no autorizado, expansión vial, erosión, actividades informales y alteraciones humanas.",
            accesibilidadTexto: "El mirador ofrece una visita más accesible; el sobrevuelo depende de condiciones climáticas y disponibilidad.",
            narrador: "Nazca nos recuerda que un paisaje también puede ser un texto. Las líneas fueron trazadas para ser vistas, recorridas y entendidas dentro de un horizonte ritual.",
            curioso: "Muchas figuras se conservaron gracias al clima seco y la baja presencia de lluvias.",
            recorrido: ["Mirador", "Figura del árbol", "Figura de las manos", "Carretera Panamericana", "Centro de interpretación"],
            preguntas: [
                ["¿Cómo se hicieron las líneas?", "Se retiraron piedras oscuras de la superficie para exponer el suelo más claro del desierto."],
                ["¿Por qué se conservan?", "Por el clima seco, poca lluvia y estabilidad del desierto."],
                ["¿Qué figuras existen?", "Animales, plantas, formas humanas, líneas rectas, trapecios y figuras geométricas."],
                ["¿Cuál era su función?", "Probablemente ritual, simbólica y territorial."]
            ],
            quiz: [
                {
                    pregunta: "¿Cómo se elaboraron principalmente las Líneas de Nazca?",
                    opciones: ["Retirando piedras superficiales oscuras", "Tallando mármol", "Levantando muros de adobe", "Pintando sobre cerámica"],
                    correcta: 0,
                    explicacion: "Se retiraron piedras oscuras para dejar visible el suelo más claro."
                },
                {
                    pregunta: "¿Por qué se conservaron durante tanto tiempo?",
                    opciones: ["Por el clima seco del desierto", "Por la lluvia constante", "Por estar bajo el mar", "Por estar cubiertas de nieve"],
                    correcta: 0,
                    explicacion: "La aridez del desierto favoreció su conservación."
                }
            ],
            fuente: "Cartografía abierta y documentación cultural general.",
            notasPlano: [
                "El visor muestra el territorio de geoglifos.",
                "El esquema técnico representa ejes, figuras y paisaje ritual.",
                "Para mayor precisión se pueden cargar planos oficiales."
            ]
        },
        {
            id: "caral",
            nombre: "Ciudad Sagrada de Caral",
            cultura: "Caral",
            ubicacion: "Barranca, Lima",
            distrito: "Caral",
            epoca: "3000 - 1800 a.C.",
            periodo: "Precerámico Tardío",
            lat: -10.893479,
            lng: -77.520858,
            accesible: false,
            duracion: 150,
            dificultad: "Media",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJUNcRsNtTJo12nsgF7kk7V-O-B_QUD3kDoHc5tTXRQ&s=10",
            descripcion: "Caral es una de las civilizaciones más antiguas de América. Destaca por pirámides, plazas circulares, planificación urbana y organización social compleja.",
            funcion: "Centro urbano ceremonial con funciones religiosas, administrativas, sociales y de articulación territorial.",
            arquitectura: "Pirámides escalonadas, plazas circulares hundidas, plataformas, recintos y organización espacial planificada.",
            importancia: "Demuestra que en la costa peruana existió urbanismo temprano comparable en antigüedad a grandes civilizaciones del mundo antiguo.",
            conservacion: "Requiere control del entorno, protección territorial, manejo de visitantes y prevención de impactos ambientales.",
            accesibilidadTexto: "Accesibilidad media; depende del clima, movilidad y condiciones del circuito.",
            narrador: "Caral cambia la forma de mirar la historia americana. Antes de muchas ciudades famosas del mundo, aquí ya existía planificación, ritualidad y organización social.",
            curioso: "Caral se desarrolló casi al mismo tiempo que civilizaciones antiguas como Egipto y Mesopotamia.",
            recorrido: ["Centro de recepción", "Pirámide Mayor", "Plaza circular", "Conjunto residencial", "Anfiteatro"],
            preguntas: [
                ["¿Por qué Caral es tan antigua?", "Porque se desarrolló desde aproximadamente el 3000 a.C., en una etapa temprana de formación urbana."],
                ["¿Qué elementos destacan?", "Pirámides, plazas circulares, plataformas y espacios residenciales."],
                ["¿Qué demuestra Caral?", "Demuestra organización social, arquitectura monumental y planificación urbana temprana."],
                ["¿Cuál era su función?", "Fue un centro ceremonial, administrativo y social."]
            ],
            quiz: [
                {
                    pregunta: "¿Qué elemento arquitectónico destaca en Caral?",
                    opciones: ["Pirámides y plazas circulares", "Catedrales coloniales", "Geoglifos", "Murallas de barro chimú"],
                    correcta: 0,
                    explicacion: "Caral destaca por sus pirámides y plazas circulares hundidas."
                },
                {
                    pregunta: "¿Por qué Caral es importante?",
                    opciones: ["Por su urbanismo temprano", "Por ser una ciudad republicana", "Por sus castillos medievales", "Por sus pinturas renacentistas"],
                    correcta: 0,
                    explicacion: "Caral evidencia una de las formas más antiguas de urbanismo en América."
                }
            ],
            fuente: "Cartografía abierta y documentación cultural general.",
            notasPlano: [
                "El visor ubica el complejo en su territorio.",
                "El esquema representa pirámides y plazas circulares.",
                "Puede integrarse un plano oficial en formato PDF, imagen o SVG."
            ]
        },
        {
            id: "chanchan",
            nombre: "Chan Chan",
            cultura: "Chimú",
            ubicacion: "Trujillo, La Libertad",
            distrito: "Trujillo",
            epoca: "900 - 1470 d.C.",
            periodo: "Intermedio Tardío",
            lat: -8.111143,
            lng: -79.074958,
            accesible: true,
            duracion: 120,
            dificultad: "Baja",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07sXORurWO7ofPWYwIga5ZowKMOXzxz6n52CLuxv0Kg&s=10",
            descripcion: "Chan Chan fue la capital del reino Chimú y una de las ciudades de barro más extensas de América prehispánica.",
            funcion: "Capital política, administrativa y ceremonial del reino Chimú.",
            arquitectura: "Ciudad de barro con conjuntos amurallados, corredores, patios, depósitos, relieves marinos y espacios administrativos.",
            importancia: "Muestra un alto nivel de organización política, urbana y productiva en la costa norte del Perú.",
            conservacion: "El barro es vulnerable a lluvias, humedad, sales, erosión y eventos climáticos extremos.",
            accesibilidadTexto: "Accesibilidad media con recorridos guiados y zonas restringidas por conservación.",
            narrador: "Chan Chan es una ciudad donde el barro se convirtió en poder. Sus muros hablan del mar, de la administración y de una sociedad altamente organizada.",
            curioso: "Sus relieves representan peces, aves, redes y motivos marinos.",
            recorrido: ["Ingreso al conjunto Nik An", "Corredores ceremoniales", "Muros con relieves", "Plaza principal", "Depósitos"],
            preguntas: [
                ["¿Por qué se construyó con barro?", "Porque era un material disponible en la costa norte y permitió levantar muros, patios y relieves."],
                ["¿Qué representan sus relieves?", "Representan peces, aves, redes y motivos vinculados al mar."],
                ["¿Qué problema de conservación tiene?", "La lluvia, humedad y erosión afectan sus estructuras de barro."],
                ["¿Qué función tenía?", "Fue capital política, administrativa y ceremonial del reino Chimú."]
            ],
            quiz: [
                {
                    pregunta: "¿Qué cultura construyó Chan Chan?",
                    opciones: ["Chimú", "Caral", "Lima", "Inca"],
                    correcta: 0,
                    explicacion: "Chan Chan fue la capital del reino Chimú."
                },
                {
                    pregunta: "¿Cuál es uno de sus principales problemas de conservación?",
                    opciones: ["La vulnerabilidad del barro ante lluvias y humedad", "La nieve permanente", "La salinidad marina bajo el agua", "La falta total de murallas"],
                    correcta: 0,
                    explicacion: "Sus estructuras de barro son vulnerables a lluvias, humedad y erosión."
                }
            ],
            fuente: "Cartografía abierta y documentación cultural general.",
            notasPlano: [
                "El visor permite ubicar Chan Chan territorialmente.",
                "El esquema representa conjuntos amurallados.",
                "Para mayor precisión se puede usar material oficial del proyecto arqueológico."
            ]
        },
        {
            id: "kuelap",
            nombre: "Kuélap",
            cultura: "Chachapoyas",
            ubicacion: "Amazonas, Perú",
            distrito: "Amazonas",
            epoca: "Siglo XI - XVI",
            periodo: "Intermedio Tardío",
            lat: -6.423611,
            lng: -77.923056,
            accesible: false,
            duracion: 160,
            dificultad: "Media",
            imagen: "",
            descripcion: "Kuélap es un complejo monumental ubicado en la ceja de selva. Destaca por sus murallas, accesos estrechos y recintos circulares.",
            funcion: "Complejo monumental con funciones defensivas, ceremoniales y residenciales.",
            arquitectura: "Murallas altas, accesos estrechos, plataformas, recintos circulares y adaptación al relieve montañoso.",
            importancia: "Evidencia la complejidad arquitectónica y social de la cultura Chachapoyas.",
            conservacion: "La humedad, vegetación, pendientes y estabilidad estructural son factores críticos.",
            accesibilidadTexto: "Accesibilidad limitada por topografía y condiciones del recorrido.",
            narrador: "Kuélap no es solo una fortaleza: es una arquitectura de altura, niebla y piedra. Sus murallas muestran control, protección y memoria colectiva.",
            curioso: "Sus murallas pueden superar los veinte metros de altura en algunos sectores.",
            recorrido: ["Ingreso principal", "Murallas exteriores", "Recintos circulares", "El Tintero", "Mirador natural"],
            preguntas: [
                ["¿Kuélap era una fortaleza?", "Tiene rasgos defensivos, pero también funcionó como espacio ceremonial y residencial."],
                ["¿Qué arquitectura destaca?", "Murallas altas, accesos estrechos y recintos circulares."],
                ["¿Qué retos de conservación tiene?", "Humedad, vegetación, estabilidad del terreno y mantenimiento de muros."],
                ["¿Qué cultura la construyó?", "Fue construida por la cultura Chachapoyas."]
            ],
            quiz: [
                {
                    pregunta: "¿Qué cultura está asociada a Kuélap?",
                    opciones: ["Chachapoyas", "Nazca", "Lima", "Caral"],
                    correcta: 0,
                    explicacion: "Kuélap está asociada a la cultura Chachapoyas."
                },
                {
                    pregunta: "¿Qué rasgo arquitectónico destaca en Kuélap?",
                    opciones: ["Murallas altas y recintos circulares", "Geoglifos en el desierto", "Adobitos verticales", "Plazas circulares hundidas"],
                    correcta: 0,
                    explicacion: "Kuélap destaca por sus murallas y recintos circulares."
                }
            ],
            fuente: "Cartografía abierta y documentación cultural general.",
            notasPlano: [
                "El visor muestra la localización del complejo en zona de montaña.",
                "El esquema representa murallas y recintos circulares.",
                "Puede integrarse un levantamiento oficial si se carga como archivo."
            ]
        }
    ];

    const periodos = [
        {
            id: "preceramico",
            nombre: "Precerámico Tardío",
            rango: "3000 - 1800 a.C.",
            culturas: ["Caral"],
            descripcion: "Etapa de urbanismo temprano, arquitectura monumental y formación de centros ceremoniales complejos.",
            artefactos: ["Canastas", "Instrumentos musicales", "Textiles tempranos", "Figurillas"]
        },
        {
            id: "intermedio-temprano",
            nombre: "Intermedio Temprano",
            rango: "200 a.C. - 700 d.C.",
            culturas: ["Lima", "Nazca", "Moche"],
            descripcion: "Desarrollo regional con arquitectura ceremonial, cerámica, geoglifos y sistemas simbólicos.",
            artefactos: ["Adobitos", "Cerámica pictórica", "Textiles", "Geoglifos"]
        },
        {
            id: "intermedio-tardio",
            nombre: "Intermedio Tardío",
            rango: "900 - 1470 d.C.",
            culturas: ["Chimú", "Chachapoyas"],
            descripcion: "Periodo de señoríos regionales, ciudades fortificadas, arquitectura de barro y redes de intercambio.",
            artefactos: ["Relieves de barro", "Recintos circulares", "Metalurgia", "Textiles"]
        },
        {
            id: "horizonte-tardio",
            nombre: "Horizonte Tardío",
            rango: "1438 - 1532 d.C.",
            culturas: ["Inca"],
            descripcion: "Expansión imperial inca, administración territorial, caminos y arquitectura de piedra.",
            artefactos: ["Quipus", "Aríbalos", "Mampostería fina", "Caminos"]
        }
    ];

    const eventosIniciales = [
        {
            id: "evento-1",
            nombre: "Visita guiada nocturna en Huaca Pucllana",
            tipo: "Visita guiada",
            distrito: "Miraflores",
            fecha: "2026-07-15T18:30",
            lugar: "Huaca Pucllana",
            mapa: "https://www.google.com/maps?q=Huaca+Pucllana",
            descripcion: "Recorrido cultural con explicación histórica y visualización del sitio iluminado."
        }
    ];

    const modelosIniciales = [
        {
            id: "modelo-1",
            nombre: "Modelo interpretativo de Huaca Pucllana",
            sitio: "huacapucllana",
            precision: "Alta",
            observacion: "Modelo educativo basado en volumen general de plataforma y patios.",
            archivo: "referencial.glb",
            estado: "Aprobado",
            fecha: new Date().toISOString()
        }
    ];

    const serviciosReferenciales = {
        machupicchu: [
            ["Baños", "Servicios higiénicos de ingreso", "250 m", "🚻"],
            ["Boletería", "Control de ingreso turístico", "200 m", "🎫"],
            ["Hidratación", "Punto de descanso autorizado", "300 m", "💧"],
            ["Primeros auxilios", "Puesto de atención turística", "350 m", "🏥"]
        ],
        huacapucllana: [
            ["Baños", "Servicios higiénicos del museo", "80 m", "🚻"],
            ["Boletería", "Boletería principal", "40 m", "🎫"],
            ["Hidratación", "Punto de hidratación cercano", "120 m", "💧"],
            ["Primeros auxilios", "Atención básica del recinto", "90 m", "🏥"]
        ],
        nazca: [
            ["Baños", "Servicios cercanos al mirador", "180 m", "🚻"],
            ["Boletería", "Control de ingreso al mirador", "50 m", "🎫"],
            ["Hidratación", "Puesto de venta cercano", "210 m", "💧"],
            ["Primeros auxilios", "Apoyo turístico local", "300 m", "🏥"]
        ],
        caral: [
            ["Baños", "Servicios del centro de visitantes", "250 m", "🚻"],
            ["Boletería", "Ingreso al sitio arqueológico", "150 m", "🎫"],
            ["Hidratación", "Punto recomendado antes del recorrido", "300 m", "💧"],
            ["Primeros auxilios", "Apoyo de orientación", "280 m", "🏥"]
        ],
        chanchan: [
            ["Baños", "Servicios del circuito turístico", "170 m", "🚻"],
            ["Boletería", "Ingreso al conjunto amurallado", "120 m", "🎫"],
            ["Hidratación", "Punto de venta próximo", "210 m", "💧"],
            ["Primeros auxilios", "Orientación turística local", "250 m", "🏥"]
        ],
        kuelap: [
            ["Baños", "Servicios del acceso turístico", "220 m", "🚻"],
            ["Boletería", "Punto de control de ingreso", "180 m", "🎫"],
            ["Hidratación", "Punto recomendado de descanso", "260 m", "💧"],
            ["Primeros auxilios", "Orientación del circuito", "320 m", "🏥"]
        ]
    };

    const estado = {
        usuario: null,
        sitioActivo: "machupicchu",
        lugarModal: null,
        resenaActiva: null,
        estrellas: 0,
        servicioFiltro: "todos",
        origenServicios: null,
        serviciosActuales: [],
        serviciosReales: false,
        alertaFoto: "",
        alertaGeo: null,
        archivoTab: "real",
        reconActualImg: "",
        reconPlanoImg: "",
        reconArchivo3D: "",
        reconSVG: "",
        audio: null,
        quizIndex: 0,
        quizScore: 0,
        quizRespondido: false
    };

    function $(id) {
        return document.getElementById(id);
    }

    function $all(selector) {
        return Array.from(document.querySelectorAll(selector));
    }

    function leer(clave, defecto) {
        try {
            const data = localStorage.getItem(clave);
            return data ? JSON.parse(data) : defecto;
        } catch {
            return defecto;
        }
    }

    function guardar(clave, valor) {
        localStorage.setItem(clave, JSON.stringify(valor));
    }

    function valor(id) {
        const el = $(id);
        return el ? String(el.value || "").trim() : "";
    }

    function setTexto(id, texto) {
        const el = $(id);
        if (el) el.textContent = texto;
    }

    function normalizar(texto) {
        return String(texto || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    function correoNormal(correo) {
        return String(correo || "").trim().toLowerCase();
    }

    function validarCorreo(correo) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    }

    function escapeHTML(texto) {
        return String(texto || "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function obtenerLugar(id) {
        return lugares.find(l => l.id === id) || lugares[0];
    }

    function inicial(nombre) {
        return String(nombre || "Usuario").trim().charAt(0).toUpperCase();
    }

    function fechaBonita(fecha) {
        try {
            return new Date(fecha).toLocaleString("es-PE", {
                year: "numeric",
                month: "short",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
            });
        } catch {
            return fecha || "Fecha no disponible";
        }
    }

    function distanciaMetros(lat1, lng1, lat2, lng2) {
        const R = 6371000;
        const p1 = lat1 * Math.PI / 180;
        const p2 = lat2 * Math.PI / 180;
        const dp = (lat2 - lat1) * Math.PI / 180;
        const dl = (lng2 - lng1) * Math.PI / 180;

        const a =
            Math.sin(dp / 2) * Math.sin(dp / 2) +
            Math.cos(p1) * Math.cos(p2) *
            Math.sin(dl / 2) * Math.sin(dl / 2);

        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    function distanciaTexto(metros) {
        if (metros < 1000) return `${Math.round(metros)} m`;
        return `${(metros / 1000).toFixed(1)} km`;
    }

    function bbox(lat, lng, delta = 0.01) {
        return `${lng - delta},${lat - delta},${lng + delta},${lat + delta}`;
    }

    document.addEventListener("DOMContentLoaded", iniciar);

    function iniciar() {
    sembrarDatos();
    configurarAuth();
    configurarNavegacion();
    configurarSidebar();
    configurarModales();
    configurarExplorar();
    configurarResenas();
    configurarChatbot();
    configurarMapa();
    configurarServicios();
    configurarReconstruccion();
    configurarAlertas();
    configurarEventos();
    configurarArchivo();
    configurarCronologia();
    configurarDesafios();
    configurarAdmin();
    configurarPerfil();
    configurarAyuda();

    /*
       CORRECCIÓN:
       Cada vez que se abre la página, se elimina la sesión anterior
       para que NO entre directo a la plataforma.
    */
    localStorage.removeItem(STORAGE.sesion);
    estado.usuario = null;
    mostrarAuth("login");

    }

    function sembrarDatos() {
        const usuarios = leer(STORAGE.usuarios, []);

        if (!usuarios.some(u => correoNormal(u.email) === "demo@memoriaviva.com")) {
            usuarios.push({
                id: "demo-user",
                nombre: "Explorador Demo",
                email: "demo@memoriaviva.com",
                password: "123456",
                xp: 850,
                nivel: 3,
                creado: new Date().toISOString()
            });

            guardar(STORAGE.usuarios, usuarios);
        }

        if (!localStorage.getItem(STORAGE.resenas)) {
            guardar(STORAGE.resenas, [
                {
                    id: "resena-1",
                    usuarioId: "demo-user",
                    autor: "Explorador Demo",
                    lugarId: "huacapucllana",
                    estrellas: 5,
                    texto: "La visita fue clara y ordenada. La explicación sobre los adobitos ayuda a comprender mejor la arquitectura de la cultura Lima.",
                    fecha: new Date().toISOString()
                },
                {
                    id: "resena-2",
                    usuarioId: "demo-user",
                    autor: "Explorador Demo",
                    lugarId: "machupicchu",
                    estrellas: 5,
                    texto: "El recorrido permite entender la relación entre arquitectura, paisaje y espiritualidad andina.",
                    fecha: new Date().toISOString()
                }
            ]);
        }

        if (!localStorage.getItem(STORAGE.comentarios)) guardar(STORAGE.comentarios, []);
        if (!localStorage.getItem(STORAGE.favoritos)) guardar(STORAGE.favoritos, {});
        if (!localStorage.getItem(STORAGE.rutas)) guardar(STORAGE.rutas, []);
        if (!localStorage.getItem(STORAGE.reportes)) guardar(STORAGE.reportes, []);
        if (!localStorage.getItem(STORAGE.eventos)) guardar(STORAGE.eventos, eventosIniciales);
        if (!localStorage.getItem(STORAGE.modelos)) guardar(STORAGE.modelos, modelosIniciales);
        if (!localStorage.getItem(STORAGE.notificaciones)) {
            guardar(STORAGE.notificaciones, { activas: false, distrito: "Miraflores" });
        }
    }

    function usuarioExiste(id) {
        return leer(STORAGE.usuarios, []).some(u => u.id === id);
    }

    function configurarAuth() {
        $("formulario-login")?.addEventListener("submit", function (e) {
            e.preventDefault();
            iniciarSesion();
        });

        $("formulario-registro")?.addEventListener("submit", function (e) {
            e.preventDefault();
            registrarUsuario();
        });

        $("ir-a-registro")?.addEventListener("click", () => mostrarAuth("registro"));
        $("ir-a-login")?.addEventListener("click", () => mostrarAuth("login"));
    }

    function iniciarSesion() {
        const email = correoNormal(valor("login-email"));
        const password = valor("login-pass");

        if (!email || !password) {
            toast("Completa correo y contraseña.");
            return;
        }

        const usuarios = leer(STORAGE.usuarios, []);
        const usuario = usuarios.find(u => correoNormal(u.email) === email);

        if (!usuario) {
            toast("No existe una cuenta con ese correo.");
            return;
        }

        if (usuario.password !== password) {
            toast("Contraseña incorrecta.");
            return;
        }

        const sesion = {
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email,
            xp: usuario.xp || 0,
            nivel: usuario.nivel || 1
        };

        estado.usuario = sesion;
        guardar(STORAGE.sesion, sesion);

        mostrarApp();
        toast("Sesión iniciada correctamente.");
    }

    function registrarUsuario() {
        const nombre = valor("reg-nombre");
        const email = correoNormal(valor("reg-email"));
        const password = valor("reg-pass");

        if (!nombre || !email || !password) {
            toast("Completa todos los campos.");
            return;
        }

        if (!validarCorreo(email)) {
            toast("Ingresa un correo válido.");
            return;
        }

        if (password.length < 4) {
            toast("La contraseña debe tener al menos 4 caracteres.");
            return;
        }

        const usuarios = leer(STORAGE.usuarios, []);

        if (usuarios.some(u => correoNormal(u.email) === email)) {
            toast("Ya existe una cuenta con ese correo.");
            return;
        }

        const nuevo = {
            id: "user-" + Date.now(),
            nombre,
            email,
            password,
            xp: 120,
            nivel: 1,
            creado: new Date().toISOString()
        };

        usuarios.push(nuevo);
        guardar(STORAGE.usuarios, usuarios);

        const sesion = {
            id: nuevo.id,
            nombre: nuevo.nombre,
            email: nuevo.email,
            xp: nuevo.xp,
            nivel: nuevo.nivel
        };

        estado.usuario = sesion;
        guardar(STORAGE.sesion, sesion);

        mostrarApp();
        toast("Cuenta creada correctamente.");
    }

    function mostrarAuth(tipo) {
        $("vista-principal")?.classList.add("oculto");
        $("vista-login")?.classList.add("oculto");
        $("vista-registro")?.classList.add("oculto");

        if (tipo === "login") $("vista-login")?.classList.remove("oculto");
        if (tipo === "registro") $("vista-registro")?.classList.remove("oculto");
    }

    function mostrarApp() {
        $("vista-login")?.classList.add("oculto");
        $("vista-registro")?.classList.add("oculto");
        $("vista-principal")?.classList.remove("oculto");

        actualizarUsuarioUI();
        renderTodo();
        mostrarSeccion("sec-explorar");
    }

    function cerrarSesion() {
        localStorage.removeItem(STORAGE.sesion);
        estado.usuario = null;
        mostrarAuth("login");
        toast("Sesión cerrada.");
    }

    function renderTodo() {
        llenarSelects();
        renderLugares();
        renderResenas();
        renderRutas();
        renderMapaSitios();
        renderClima();
        renderServiciosReferenciales();
        renderReconstruccion();
        renderEventos();
        renderArchivo();
        renderCronologia();
        renderDesafio();
        renderRanking();
        renderAnaliticas();
        renderAdmin();
        renderPerfil();
    }

    function llenarSelects() {
        const ids = [
            "lugar-resena",
            "alerta-lugar",
            "recon-sitio",
            "archivo-sitio",
            "desafio-sitio",
            "modelo-sitio"
        ];

        ids.forEach(id => {
            const select = $(id);
            if (!select) return;

            select.innerHTML = lugares.map(l => `<option value="${l.id}">${escapeHTML(l.nombre)}</option>`).join("");
        });
    }

    function configurarNavegacion() {
        $all(".nav-link").forEach(btn => {
            btn.addEventListener("click", function () {
                const target = btn.dataset.target;
                if (!target) return;

                mostrarSeccion(target);

                $all(".nav-link").forEach(x => x.classList.remove("activo"));
                btn.classList.add("activo");

                cerrarSidebar();
            });
        });
    }

    function mostrarSeccion(id) {
        $all(".section-app").forEach(s => s.classList.add("oculto"));
        $(id)?.classList.remove("oculto");
    }

    function configurarSidebar() {
        $("btn-abrir-sidebar")?.addEventListener("click", abrirSidebar);
        $("btn-cerrar-sidebar")?.addEventListener("click", cerrarSidebar);
        $("sidebar-overlay")?.addEventListener("click", cerrarSidebar);
    }

    function abrirSidebar() {
        $("sidebar-panel")?.classList.add("activo");
        $("sidebar-overlay")?.classList.remove("oculto");
    }

    function cerrarSidebar() {
        $("sidebar-panel")?.classList.remove("activo");
        $("sidebar-overlay")?.classList.add("oculto");
    }

    function actualizarUsuarioUI() {
        if (!estado.usuario) return;

        $all(".nombre-usuario-dinamico").forEach(el => el.textContent = estado.usuario.nombre);
        $all(".inicial-usuario").forEach(el => el.textContent = inicial(estado.usuario.nombre));

        setTexto("perfil-correo-txt", estado.usuario.email);
    }

    function configurarPerfil() {
        $("btn-cerrar-sesion")?.addEventListener("click", cerrarSesion);
    }

    function renderPerfil() {
        if (!estado.usuario) return;

        actualizarUsuarioUI();

        const usuarios = leer(STORAGE.usuarios, []);
        const usuario = usuarios.find(u => u.id === estado.usuario.id);

        setTexto("contador-xp", usuario ? usuario.xp || 0 : 0);
        setTexto("contador-visitas", contarResenasUsuario(estado.usuario.id));
        setTexto("contador-rutas", leer(STORAGE.rutas, []).filter(r => r.usuarioId === estado.usuario.id).length);

        renderInsignias();
        renderFavoritos();
    }

    function renderInsignias() {
        const cont = $("contenedor-insignias");
        if (!cont || !estado.usuario) return;

        const xp = obtenerXP();
        const resenas = contarResenasUsuario(estado.usuario.id);
        const rutas = leer(STORAGE.rutas, []).filter(r => r.usuarioId === estado.usuario.id).length;
        const reportes = leer(STORAGE.reportes, []).filter(r => r.usuarioId === estado.usuario.id).length;

        const insignias = [
            ["🧭", "Explorador inicial", xp >= 100],
            ["✍️", "Narrador cultural", resenas >= 1],
            ["🗺️", "Planificador de rutas", rutas >= 1],
            ["🛡️", "Guardián patrimonial", reportes >= 1],
            ["🏆", "Súper explorador", xp >= 1000]
        ];

        cont.innerHTML = insignias.map(i => `
            <div class="badge-item" style="opacity:${i[2] ? "1" : "0.45"};">
                <h3>${i[0]}</h3>
                <p><strong>${escapeHTML(i[1])}</strong></p>
                <small>${i[2] ? "Desbloqueada" : "Pendiente"}</small>
            </div>
        `).join("");
    }

    function renderFavoritos() {
        const cont = $("contenedor-favoritos");
        if (!cont || !estado.usuario) return;

        const favs = obtenerFavoritos();

        if (!favs.length) {
            cont.innerHTML = `<div class="favorite-card"><p>No tienes favoritos guardados.</p></div>`;
            return;
        }

        cont.innerHTML = favs.map(id => {
            const l = obtenerLugar(id);

            return `
                <div class="favorite-card">
                    <h3>${escapeHTML(l.nombre)}</h3>
                    <p>${escapeHTML(l.ubicacion)}</p>
                    <button class="btn-secondary btn-ver-fav" data-id="${l.id}">Ver detalle</button>
                </div>
            `;
        }).join("");

        $all(".btn-ver-fav").forEach(btn => {
            btn.addEventListener("click", () => abrirModalLugar(btn.dataset.id));
        });
    }

    function configurarExplorar() {
        $("buscador-lugares")?.addEventListener("input", renderLugares);
    }

    function renderLugares() {
        const cont = $("contenedor-lugares");
        if (!cont) return;

        const q = normalizar(valor("buscador-lugares"));

        const filtrados = lugares.filter(l => {
            const base = normalizar(`${l.nombre} ${l.cultura} ${l.ubicacion} ${l.descripcion}`);
            return base.includes(q);
        });

        if (!filtrados.length) {
            cont.innerHTML = `<div class="card" style="grid-column:1/-1;"><h3>Sin resultados</h3><p>No se encontró un sitio con ese criterio.</p></div>`;
            return;
        }

        cont.innerHTML = filtrados.map(l => {
            const fav = obtenerFavoritos().includes(l.id);

            return `
                <article class="place-card">
                    <img src="${l.imagen}" alt="${escapeHTML(l.nombre)}">
                    <h3>${escapeHTML(l.nombre)}</h3>
                    <p><strong>Cultura:</strong> ${escapeHTML(l.cultura)}</p>
                    <p><strong>Ubicación:</strong> ${escapeHTML(l.ubicacion)}</p>
                    <p><strong>Periodo:</strong> ${escapeHTML(l.periodo)}</p>

                    <div class="action-row">
                        <button class="btn-primary btn-auto btn-ver-lugar" data-id="${l.id}">Ver detalle</button>
                        <button class="btn-secondary btn-fav" data-id="${l.id}">${fav ? "♥ Favorito" : "♡ Favorito"}</button>
                    </div>
                </article>
            `;
        }).join("");

        $all(".btn-ver-lugar").forEach(btn => {
            btn.addEventListener("click", () => abrirModalLugar(btn.dataset.id));
        });

        $all(".btn-fav").forEach(btn => {
            btn.addEventListener("click", () => {
                alternarFavorito(btn.dataset.id);
                renderLugares();
                renderPerfil();
            });
        });
    }

    function abrirModalLugar(id) {
        const l = obtenerLugar(id);
        estado.lugarModal = l.id;
        estado.sitioActivo = l.id;
        estado.quizIndex = 0;
        estado.quizScore = 0;
        estado.quizRespondido = false;

        $("modal-lugar-img").src = l.imagen;
        setTexto("modal-lugar-titulo", l.nombre);
        setTexto("modal-lugar-ubicacion", l.ubicacion);
        setTexto("modal-lugar-cultura", l.cultura);
        setTexto("modal-lugar-epoca", l.epoca);
        setTexto("modal-lugar-desc", l.descripcion);
        setTexto("modal-lugar-curioso", l.curioso);

        $("modal-verificacion").innerHTML = `✅ Información cultural referencial organizada para uso educativo.`;

        renderInfoAmpliadaModal(l);
        renderPreguntasModal(l);
        renderRetoConocimiento(l);

        $("modal-recorrido-box").innerHTML = `
            <h3>Recorrido sugerido</h3>
            <ol style="margin-left:20px; margin-top:8px;">
                ${l.recorrido.map(x => `<li>${escapeHTML(x)}</li>`).join("")}
            </ol>
        `;

        $("btn-favorito-modal").textContent = obtenerFavoritos().includes(l.id)
            ? "♥ Quitar favorito"
            : "♡ Añadir favorito";

        abrirModal("modal-lugar");
    }

    function renderInfoAmpliadaModal(l) {
        $("modal-info-ampliada").innerHTML = `
            <div class="extra-box">
                <h3>📚 Información ampliada</h3>

                <div class="extra-grid">
                    <div><strong>Función original</strong><p>${escapeHTML(l.funcion)}</p></div>
                    <div><strong>Arquitectura</strong><p>${escapeHTML(l.arquitectura)}</p></div>
                    <div><strong>Importancia</strong><p>${escapeHTML(l.importancia)}</p></div>
                    <div><strong>Conservación</strong><p>${escapeHTML(l.conservacion)}</p></div>
                    <div><strong>Accesibilidad</strong><p>${escapeHTML(l.accesibilidadTexto)}</p></div>
                    <div><strong>Narrador cultural</strong><p>${escapeHTML(l.narrador)}</p></div>
                </div>
            </div>
        `;
    }

    function renderPreguntasModal(l) {
        $("modal-preguntas-lugar").innerHTML = `
            <div class="extra-box">
                <h3>🎙️ Preguntas al narrador</h3>

                <div class="question-buttons">
                    ${l.preguntas.map((p, i) => `<button class="btn-pregunta-lugar" data-i="${i}">${escapeHTML(p[0])}</button>`).join("")}
                </div>

                <div class="question-input">
                    <input type="text" id="input-pregunta-lugar" class="input-form" placeholder="Pregunta sobre ${escapeHTML(l.nombre)}...">
                    <button id="btn-pregunta-lugar-libre" class="btn-primary btn-auto">Preguntar</button>
                </div>

                <div id="respuesta-pregunta-lugar" class="status-box">
                    Selecciona una pregunta o escribe una consulta.
                </div>
            </div>
        `;

        $all(".btn-pregunta-lugar").forEach(btn => {
            btn.addEventListener("click", () => {
                const item = l.preguntas[Number(btn.dataset.i)];
                $("respuesta-pregunta-lugar").innerHTML = `<strong>${escapeHTML(item[0])}</strong><br>${escapeHTML(item[1])}`;
            });
        });

        $("btn-pregunta-lugar-libre").addEventListener("click", () => {
            const p = valor("input-pregunta-lugar");
            const r = responderPorLugar(l, p);
            $("respuesta-pregunta-lugar").innerHTML = `<strong>${escapeHTML(p)}</strong><br>${escapeHTML(r)}`;
        });
    }

    function renderRetoConocimiento(l) {
        const pregunta = l.quiz[estado.quizIndex];

        $("modal-reto-conocimiento").innerHTML = `
            <div class="quiz-box">
                <div class="quiz-header">
                    <div>
                        <h3>🧩 Reto de conocimiento</h3>
                        <p>Responde para comprobar lo que aprendiste sobre ${escapeHTML(l.nombre)}.</p>
                    </div>
                    <div class="quiz-score">
                        Puntaje: ${estado.quizScore}/${l.quiz.length}
                    </div>
                </div>

                <h4>${escapeHTML(pregunta.pregunta)}</h4>

                <div class="quiz-options">
                    ${pregunta.opciones.map((opcion, index) => `
                        <button class="btn-quiz-opcion" data-index="${index}">
                            ${escapeHTML(opcion)}
                        </button>
                    `).join("")}
                </div>

                <div id="quiz-feedback" class="status-box">
                    Selecciona una respuesta.
                </div>

                <div class="action-row">
                    <button id="btn-quiz-siguiente" class="btn-secondary">Siguiente pregunta</button>
                    <button id="btn-quiz-reiniciar" class="btn-secondary">Reiniciar reto</button>
                </div>
            </div>
        `;

        $all(".btn-quiz-opcion").forEach(btn => {
            btn.addEventListener("click", () => responderQuiz(l, Number(btn.dataset.index)));
        });

        $("btn-quiz-siguiente").addEventListener("click", () => siguienteQuiz(l));
        $("btn-quiz-reiniciar").addEventListener("click", () => reiniciarQuiz(l));
    }

    function responderQuiz(l, index) {
        if (estado.quizRespondido) return;

        const pregunta = l.quiz[estado.quizIndex];
        const botones = $all(".btn-quiz-opcion");

        estado.quizRespondido = true;

        botones.forEach((btn, i) => {
            if (i === pregunta.correcta) btn.classList.add("correcta");
            if (i === index && i !== pregunta.correcta) btn.classList.add("incorrecta");
        });

        if (index === pregunta.correcta) {
            estado.quizScore++;
            sumarXP(20);
            $("quiz-feedback").innerHTML = `✅ Correcto. ${escapeHTML(pregunta.explicacion)} Ganaste 20 XP.`;
            renderPerfil();
            renderRanking();
        } else {
            $("quiz-feedback").innerHTML = `❌ Incorrecto. ${escapeHTML(pregunta.explicacion)}`;
        }
    }

    function siguienteQuiz(l) {
        if (!estado.quizRespondido) {
            toast("Primero responde la pregunta actual.");
            return;
        }

        if (estado.quizIndex < l.quiz.length - 1) {
            estado.quizIndex++;
            estado.quizRespondido = false;
            renderRetoConocimiento(l);
        } else {
            $("quiz-feedback").innerHTML = `🎉 Reto finalizado. Puntaje obtenido: ${estado.quizScore}/${l.quiz.length}.`;
            toast(`Reto completado: ${estado.quizScore}/${l.quiz.length}.`);
        }
    }

    function reiniciarQuiz(l) {
        estado.quizIndex = 0;
        estado.quizScore = 0;
        estado.quizRespondido = false;
        renderRetoConocimiento(l);
    }

    function responderPorLugar(l, pregunta) {
        const p = normalizar(pregunta);

        if (!p) return "Escribe una pregunta para poder responder.";

        if (p.includes("funcion") || p.includes("servia") || p.includes("uso")) return l.funcion;
        if (p.includes("arquitectura") || p.includes("constru") || p.includes("material")) return l.arquitectura;
        if (p.includes("importancia") || p.includes("valor") || p.includes("patrimonio")) return l.importancia;
        if (p.includes("conserv") || p.includes("riesgo") || p.includes("deterioro")) return l.conservacion;
        if (p.includes("acces")) return l.accesibilidadTexto;
        if (p.includes("periodo") || p.includes("epoca")) return `Periodo: ${l.periodo}. Época referencial: ${l.epoca}.`;

        return l.narrador;
    }

    function obtenerFavoritos() {
        if (!estado.usuario) return [];
        const data = leer(STORAGE.favoritos, {});
        return data[estado.usuario.id] || [];
    }

    function guardarFavoritos(lista) {
        if (!estado.usuario) return;
        const data = leer(STORAGE.favoritos, {});
        data[estado.usuario.id] = lista;
        guardar(STORAGE.favoritos, data);
    }

    function alternarFavorito(id) {
        const favs = obtenerFavoritos();
        const existe = favs.includes(id);

        guardarFavoritos(existe ? favs.filter(x => x !== id) : [...favs, id]);
        toast(existe ? "Eliminado de favoritos." : "Añadido a favoritos.");
    }

    function configurarModales() {
        const pares = [
            ["cerrar-modal-lugar", "modal-lugar"],
            ["cerrar-modal-ra", "modal-ra"],
            ["cerrar-modal-comentarios", "modal-comentarios"],
            ["cerrar-modal-compartir", "modal-compartir"],
            ["cerrar-modal-ayuda", "modal-ayuda"]
        ];

        pares.forEach(([btn, modal]) => {
            $(btn)?.addEventListener("click", () => cerrarModal(modal));
        });

        $all(".modal").forEach(m => {
            m.addEventListener("click", e => {
                if (e.target === m) m.classList.add("oculto");
            });
        });

        $("btn-favorito-modal")?.addEventListener("click", () => {
            if (!estado.lugarModal) return;
            alternarFavorito(estado.lugarModal);
            abrirModalLugar(estado.lugarModal);
            renderLugares();
            renderPerfil();
        });

        $("btn-iniciar-recorrido")?.addEventListener("click", () => iniciarRecorrido(estado.lugarModal));
        $("btn-audioguia-cultural")?.addEventListener("click", reproducirAudioguia);
        $("btn-abrir-ra")?.addEventListener("click", abrirRA);
        $("btn-abrir-alerta")?.addEventListener("click", abrirAlertaDesdeModal);

        $("btn-ra-play")?.addEventListener("click", reproducirRA);
        $("btn-ra-pause")?.addEventListener("click", pausarAudio);
        $("btn-ra-subtitulos")?.addEventListener("click", () => $("subtitulos-ra")?.classList.toggle("oculto"));

        $("btn-web-share")?.addEventListener("click", compartirWeb);
        $("btn-copiar-share")?.addEventListener("click", copiarShare);
    }

    function abrirModal(id) {
        $(id)?.classList.remove("oculto");
    }

    function cerrarModal(id) {
        $(id)?.classList.add("oculto");
        pausarAudio();
    }

    function abrirAlertaDesdeModal() {
        if ($("alerta-lugar") && estado.lugarModal) {
            $("alerta-lugar").value = estado.lugarModal;
        }

        cerrarModal("modal-lugar");
        mostrarSeccion("sec-reportar-alerta");
    }

    function configurarResenas() {
        $all("#selector-estrellas span").forEach(s => {
            s.addEventListener("click", () => {
                estado.estrellas = Number(s.dataset.valor);
                $("valor-estrellas").value = estado.estrellas;
                actualizarEstrellas();
            });
        });

        $("formulario-resena")?.addEventListener("submit", e => {
            e.preventDefault();
            guardarResena();
        });

        $("formulario-nuevo-comentario")?.addEventListener("submit", e => {
            e.preventDefault();
            guardarComentario();
        });
    }

    function actualizarEstrellas() {
        $all("#selector-estrellas span").forEach(s => {
            s.classList.toggle("activo", Number(s.dataset.valor) <= estado.estrellas);
        });
    }

    function guardarResena() {
        const lugarId = valor("lugar-resena");
        const texto = valor("texto-resena");
        const estrellas = Number(valor("valor-estrellas"));

        if (!lugarId || !texto || !estrellas) {
            toast("Completa lugar, estrellas y reseña.");
            return;
        }

        const resenas = leer(STORAGE.resenas, []);

        resenas.unshift({
            id: "resena-" + Date.now(),
            usuarioId: estado.usuario.id,
            autor: estado.usuario.nombre,
            lugarId,
            estrellas,
            texto,
            fecha: new Date().toISOString()
        });

        guardar(STORAGE.resenas, resenas);
        sumarXP(80);

        $("formulario-resena").reset();
        estado.estrellas = 0;
        actualizarEstrellas();

        renderResenas();
        renderPerfil();
        renderRanking();

        toast("Reseña publicada. Ganaste 80 XP.");
    }

    function renderResenas() {
        const cont = $("contenedor-resenas-publicas");
        if (!cont) return;

        const resenas = leer(STORAGE.resenas, []);
        const comentarios = leer(STORAGE.comentarios, []);

        if (!resenas.length) {
            cont.innerHTML = `<div class="card" style="grid-column:1/-1;"><p>Aún no hay reseñas.</p></div>`;
            return;
        }

        cont.innerHTML = resenas.map(r => {
            const l = obtenerLugar(r.lugarId);
            const count = comentarios.filter(c => c.resenaId === r.id).length;

            return `
                <article class="review-card btn-review" data-id="${r.id}">
                    <h3>${escapeHTML(l.nombre)}</h3>
                    <p><strong>${escapeHTML(r.autor)}</strong></p>
                    <p style="color:#f1b84b; font-size:1.35rem;">${"★".repeat(r.estrellas)}${"☆".repeat(5 - r.estrellas)}</p>
                    <p>${escapeHTML(r.texto)}</p>
                    <p><small>💬 ${count} comentarios · ${fechaBonita(r.fecha)}</small></p>
                </article>
            `;
        }).join("");

        $all(".btn-review").forEach(btn => {
            btn.addEventListener("click", () => abrirComentarios(btn.dataset.id));
        });
    }

    function abrirComentarios(id) {
        const resena = leer(STORAGE.resenas, []).find(r => r.id === id);
        if (!resena) return;

        estado.resenaActiva = id;
        setTexto("modal-resena-autor", resena.autor);
        setTexto("modal-resena-texto", resena.texto);

        renderComentarios();
        abrirModal("modal-comentarios");
    }

    function renderComentarios() {
        const cont = $("contenedor-lista-comentarios");
        if (!cont) return;

        const comentarios = leer(STORAGE.comentarios, []).filter(c => c.resenaId === estado.resenaActiva);
        setTexto("modal-resena-count", comentarios.length);

        if (!comentarios.length) {
            cont.innerHTML = `<div class="comment-item">Aún no hay comentarios.</div>`;
            return;
        }

        cont.innerHTML = comentarios.map(c => `
            <div class="comment-item">
                <strong>${escapeHTML(c.autor)}</strong>
                <p>${escapeHTML(c.texto)}</p>
            </div>
        `).join("");
    }

    function guardarComentario() {
        const texto = valor("input-nuevo-comentario");

        if (!texto || !estado.resenaActiva) {
            toast("Escribe un comentario.");
            return;
        }

        const comentarios = leer(STORAGE.comentarios, []);
        comentarios.push({
            id: "comentario-" + Date.now(),
            resenaId: estado.resenaActiva,
            usuarioId: estado.usuario.id,
            autor: estado.usuario.nombre,
            texto,
            fecha: new Date().toISOString()
        });

        guardar(STORAGE.comentarios, comentarios);
        $("input-nuevo-comentario").value = "";

        renderComentarios();
        renderResenas();
        toast("Comentario publicado.");
    }

    function contarResenasUsuario(id) {
        return leer(STORAGE.resenas, []).filter(r => r.usuarioId === id).length;
    }

    function configurarChatbot() {
        $("formulario-chat")?.addEventListener("submit", e => {
            e.preventDefault();

            const texto = valor("input-chat");
            if (!texto) return;

            agregarMensaje(texto, "usuario");
            $("input-chat").value = "";

            setTimeout(() => {
                agregarMensaje(responderMemoria(texto), "bot");
            }, 300);
        });

        $("btn-limpiar-chat")?.addEventListener("click", () => {
            $("chat-mensajes").innerHTML = `
                <div class="mensaje bot">
                    Chat limpio. Pregunta sobre historia, función, arquitectura, conservación, accesibilidad o rutas.
                </div>
            `;
        });

        $all(".chat-sugerencia").forEach(btn => {
            btn.addEventListener("click", () => {
                $("input-chat").value = btn.dataset.pregunta;
                $("formulario-chat").dispatchEvent(new Event("submit"));
            });
        });
    }

    function agregarMensaje(texto, tipo) {
        const cont = $("chat-mensajes");
        if (!cont) return;

        const div = document.createElement("div");
        div.className = `mensaje ${tipo}`;
        div.textContent = texto;

        cont.appendChild(div);
        cont.scrollTop = cont.scrollHeight;
    }

    function detectarLugar(pregunta) {
        const p = normalizar(pregunta);

        return lugares.find(l => {
            return p.includes(normalizar(l.nombre)) ||
                p.includes(normalizar(l.cultura)) ||
                normalizar(l.nombre).includes(p);
        }) || obtenerLugar(estado.sitioActivo);
    }

    function responderMemoria(pregunta) {
        const p = normalizar(pregunta);
        const l = detectarLugar(pregunta);

        let intencion = "general";
        let respuesta = "";

        if (p.includes("funcion") || p.includes("para que") || p.includes("servia") || p.includes("uso")) {
            intencion = "función";
            respuesta = l.funcion;
        } else if (p.includes("arquitectura") || p.includes("constru") || p.includes("material") || p.includes("plano")) {
            intencion = "arquitectura";
            respuesta = l.arquitectura;
        } else if (p.includes("importancia") || p.includes("valor") || p.includes("patrimonio")) {
            intencion = "importancia patrimonial";
            respuesta = l.importancia;
        } else if (p.includes("conserv") || p.includes("riesgo") || p.includes("deterioro") || p.includes("vandalismo")) {
            intencion = "conservación";
            respuesta = l.conservacion;
        } else if (p.includes("acces") || p.includes("silla") || p.includes("discapacidad") || p.includes("coche")) {
            intencion = "accesibilidad";
            respuesta = l.accesibilidadTexto;
        } else if (p.includes("ruta") || p.includes("visitar") || p.includes("recorrido")) {
            intencion = "recorrido";
            respuesta = `Para visitar ${l.nombre}, revisa primero la sección Rutas GPS. El recorrido sugerido es: ${l.recorrido.join(", ")}. Duración aproximada: ${l.duracion} minutos. Dificultad: ${l.dificultad}.`;
        } else if (p.includes("reconstruccion") || p.includes("ia") || p.includes("modelo")) {
            intencion = "reconstrucción IA";
            respuesta = `En ${l.nombre}, la reconstrucción puede enfocarse en: ${l.arquitectura} La plataforma permite cargar una foto actual, un plano o referencia histórica y un archivo 3D referencial.`;
        } else if (p.includes("hola") || p.includes("buenas")) {
            intencion = "saludo";
            respuesta = "Hola. Puedo ayudarte con historia, función, arquitectura, conservación, accesibilidad, rutas, archivo histórico o reconstrucción IA.";
        } else {
            respuesta = l.narrador;
        }

        return `Sobre ${l.nombre}:\n${respuesta}\n\nCriterio usado: detecté una consulta de tipo "${intencion}" y respondí con la ficha cultural interna del sitio.`;
    }

    function configurarMapa() {
        $("filtro-accesibilidad")?.addEventListener("change", () => {
            renderRutas();
            renderMapaSitios();
        });

        $("btn-guardar-ruta")?.addEventListener("click", guardarRuta);
        $("btn-ver-alrededor")?.addEventListener("click", verAlrededor);
        $("btn-cerrar-streetview")?.addEventListener("click", () => $("streetview-panel")?.classList.add("oculto"));
        $("btn-iniciar-recorrido-mapa")?.addEventListener("click", () => iniciarRecorrido(estado.sitioActivo));
    }

    function renderRutas() {
        const cont = $("lista-seleccion-rutas");
        if (!cont) return;

        const solo = $("filtro-accesibilidad")?.checked;
        const data = lugares.filter(l => !solo || l.accesible);

        cont.innerHTML = data.map(l => `
            <label class="list-item">
                <input type="checkbox" class="check-ruta" value="${l.id}">
                <strong>${escapeHTML(l.nombre)}</strong><br>
                <small>${escapeHTML(l.ubicacion)} · ${l.duracion} min · ${l.accesible ? "Accesible" : "Accesibilidad limitada"}</small>
            </label>
        `).join("");

        $all(".check-ruta").forEach(c => c.addEventListener("change", actualizarDuracion));
        actualizarDuracion();
    }

    function actualizarDuracion() {
        const ids = $all(".check-ruta:checked").map(c => c.value);
        const total = ids.reduce((sum, id) => sum + obtenerLugar(id).duracion, 0);

        setTexto("duracion-ruta-estimada", total ? `${total} minutos aprox. (${(total / 60).toFixed(1)} horas)` : "Selecciona sitios para calcular.");
    }

    function guardarRuta() {
        const ids = $all(".check-ruta:checked").map(c => c.value);
        const nombre = valor("nombre-ruta-input") || "Ruta cultural personalizada";

        if (!ids.length) {
            toast("Selecciona al menos un sitio.");
            return;
        }

        const rutas = leer(STORAGE.rutas, []);
        rutas.unshift({
            id: "ruta-" + Date.now(),
            usuarioId: estado.usuario.id,
            nombre,
            sitios: ids,
            fecha: new Date().toISOString()
        });

        guardar(STORAGE.rutas, rutas);
        sumarXP(60);

        $("nombre-ruta-input").value = "";
        $all(".check-ruta").forEach(c => c.checked = false);
        actualizarDuracion();

        renderMisRutas();
        renderPerfil();
        renderRanking();

        toast("Ruta guardada. Ganaste 60 XP.");
    }

    function renderMapaSitios() {
        const cont = $("contenedor-lugares-mapa");
        if (!cont) return;

        const solo = $("filtro-accesibilidad")?.checked;
        const data = lugares.filter(l => !solo || l.accesible);

        cont.innerHTML = data.map(l => `
            <div class="list-item sitio-mapa ${estado.sitioActivo === l.id ? "activo" : ""}" data-id="${l.id}">
                <strong>${escapeHTML(l.nombre)}</strong><br>
                <small>${escapeHTML(l.ubicacion)} · ${l.dificultad}</small>
            </div>
        `).join("");

        $all(".sitio-mapa").forEach(item => {
            item.addEventListener("click", () => seleccionarSitioMapa(item.dataset.id));
        });
    }

    function seleccionarSitioMapa(id) {
        const l = obtenerLugar(id);
        estado.sitioActivo = l.id;
        estado.origenServicios = { nombre: l.nombre, lat: l.lat, lng: l.lng, tipo: "sitio" };

        actualizarMapa(l.lat, l.lng, l.nombre);
        renderMapaSitios();
        renderClima();

        if ($("toggle-servicios-mapa")?.checked && !estado.serviciosReales) {
            renderServiciosReferenciales();
        }

        toast(`Sitio seleccionado: ${l.nombre}`);
    }

    function actualizarMapa(lat, lng, nombre) {
        const iframe = $("mapa-iframe");
        if (!iframe) return;
        iframe.src = `https://www.google.com/maps?q=${encodeURIComponent(nombre)}@${lat},${lng}&z=16&output=embed`;
    }

    function verAlrededor() {
        const l = obtenerLugar(estado.sitioActivo);
        const panel = $("streetview-panel");
        const street = $("streetview-iframe");
        const osm = $("osm-around-iframe");

        if (!panel || !street || !osm) return;

        street.src = `https://maps.google.com/maps?layer=c&cbll=${l.lat},${l.lng}&cbp=11,0,0,0,0&output=svembed`;
        osm.src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox(l.lat, l.lng, 0.006)}&layer=mapnik&marker=${l.lat},${l.lng}`;

        panel.classList.remove("oculto");
    }

    function renderClima() {
        const box = $("clima-visita-box");
        if (!box) return;

        const l = obtenerLugar(estado.sitioActivo);
        let texto = "Revisa clima actualizado antes de visitar.";

        if (["machupicchu", "kuelap"].includes(l.id)) texto = "Zona húmeda o de montaña. Lleva casaca ligera, calzado antideslizante e impermeable.";
        if (["nazca", "caral", "chanchan"].includes(l.id)) texto = "Zona cálida o seca. Lleva agua, gorra, bloqueador y ropa ligera.";
        if (l.id === "huacapucllana") texto = "Zona urbana. Considera tránsito, horarios del museo y disponibilidad de visitas guiadas.";

        box.innerHTML = `
            <h3>🌤️ Recomendación de visita</h3>
            <p><strong>${escapeHTML(l.nombre)}:</strong> ${escapeHTML(texto)}</p>
            <p style="color:var(--muted); font-size:.9rem;">Dato referencial para orientación académica.</p>
        `;
    }

    function iniciarRecorrido(id) {
        const l = obtenerLugar(id);
        toast(`Recorrido iniciado en ${l.nombre}: ${l.recorrido.join(", ")}.`);
        abrirCompartir("Recorrido cultural iniciado", l.nombre);
    }

    function renderMisRutas() {
        const cont = $("contenedor-mis-visitas");
        if (!cont) return;

        const rutas = leer(STORAGE.rutas, []).filter(r => r.usuarioId === estado.usuario.id);

        if (!rutas.length) {
            cont.innerHTML = `<div class="card"><p>Aún no tienes rutas guardadas.</p></div>`;
            return;
        }

        cont.innerHTML = rutas.map(r => `
            <div class="card">
                <h3>${escapeHTML(r.nombre)}</h3>
                <p>${r.sitios.map(id => obtenerLugar(id).nombre).join(", ")}</p>
                <small>${fechaBonita(r.fecha)}</small>
            </div>
        `).join("");
    }

    function configurarServicios() {
        $("toggle-servicios-mapa")?.addEventListener("change", () => {
            if ($("toggle-servicios-mapa").checked) {
                estado.serviciosReales = false;
                estado.origenServicios = origenSitio();
                renderServiciosReferenciales();
            } else {
                $("contenedor-servicios-mapa").innerHTML = "";
                setTexto("servicios-status", "Activa “Mostrar instalaciones” para consultar servicios cercanos.");
            }
        });

        $all(".btn-service").forEach(btn => {
            btn.addEventListener("click", () => {
                $all(".btn-service").forEach(b => b.classList.remove("activo"));
                btn.classList.add("activo");
                estado.servicioFiltro = btn.dataset.servicio;

                if (estado.serviciosReales) renderServiciosActuales();
                else renderServiciosReferenciales();
            });
        });

        $("btn-usar-sitio-servicios")?.addEventListener("click", () => {
            estado.serviciosReales = false;
            estado.origenServicios = origenSitio();
            $("toggle-servicios-mapa").checked = true;
            renderServiciosReferenciales();
        });

        $("btn-usar-ubicacion-servicios")?.addEventListener("click", usarUbicacionServicios);

        $("btn-buscar-osm-servicios")?.addEventListener("click", () => {
            $("toggle-servicios-mapa").checked = true;
            buscarServiciosReales();
        });
    }

    function origenSitio() {
        const l = obtenerLugar(estado.sitioActivo);
        return { tipo: "sitio", nombre: l.nombre, lat: l.lat, lng: l.lng };
    }

    function renderServiciosReferenciales() {
        const data = serviciosReferenciales[estado.sitioActivo] || [];
        let servicios = data.map((s, i) => ({
            id: "ref-" + i,
            tipo: s[0],
            nombre: s[1],
            distanciaTexto: s[2],
            icono: s[3],
            lat: obtenerLugar(estado.sitioActivo).lat,
            lng: obtenerLugar(estado.sitioActivo).lng,
            fuente: "referencial"
        }));

        if (estado.servicioFiltro !== "todos") {
            servicios = servicios.filter(s => s.tipo === estado.servicioFiltro);
        }

        estado.serviciosActuales = servicios;
        setTexto("servicios-status", "Mostrando servicios referenciales del sitio seleccionado.");
        renderServiciosActuales();
    }

    function usarUbicacionServicios() {
        if (!navigator.geolocation) {
            toast("Tu navegador no permite geolocalización.");
            return;
        }

        setTexto("servicios-status", "Obteniendo ubicación actual...");

        navigator.geolocation.getCurrentPosition(
            pos => {
                estado.origenServicios = {
                    tipo: "usuario",
                    nombre: "Tu ubicación actual",
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                };

                actualizarMapa(estado.origenServicios.lat, estado.origenServicios.lng, "Tu ubicación actual");
                $("toggle-servicios-mapa").checked = true;
                buscarServiciosReales();
            },
            () => {
                toast("No se pudo obtener la ubicación.");
                setTexto("servicios-status", "Ubicación no disponible.");
            },
            {
                enableHighAccuracy: true,
                timeout: 12000,
                maximumAge: 0
            }
        );
    }

    async function buscarServiciosReales() {
        if (!estado.origenServicios) estado.origenServicios = origenSitio();

        estado.serviciosReales = true;

        $("contenedor-servicios-mapa").innerHTML = `
            <div class="service-card" style="grid-column:1/-1;">
                <h3>🔎 Buscando servicios reales...</h3>
                <p>Consultando OpenStreetMap cerca de ${escapeHTML(estado.origenServicios.nombre)}.</p>
            </div>
        `;

        setTexto("servicios-status", "Buscando servicios reales...");

        try {
            const q = overpassQuery(estado.origenServicios.lat, estado.origenServicios.lng, 1500);
            const data = await fetch("https://overpass-api.de/api/interpreter", {
                method: "POST",
                body: q,
                headers: { "Content-Type": "text/plain;charset=UTF-8" }
            });

            if (!data.ok) throw new Error("Error OSM");

            const json = await data.json();
            estado.serviciosActuales = procesarOSM(json.elements || []);
            renderServiciosActuales();
            setTexto("servicios-status", `Se encontraron ${estado.serviciosActuales.length} servicios reales.`);
        } catch {
            toast("No se pudo consultar OSM. Se muestran datos referenciales.");
            estado.serviciosReales = false;
            renderServiciosReferenciales();
        }
    }

    function overpassQuery(lat, lng, r) {
        return `
            [out:json][timeout:25];
            (
                node["amenity"="toilets"](around:${r},${lat},${lng});
                way["amenity"="toilets"](around:${r},${lat},${lng});
                node["amenity"="drinking_water"](around:${r},${lat},${lng});
                way["amenity"="drinking_water"](around:${r},${lat},${lng});
                node["amenity"="pharmacy"](around:${r},${lat},${lng});
                way["amenity"="pharmacy"](around:${r},${lat},${lng});
                node["amenity"="hospital"](around:${r},${lat},${lng});
                way["amenity"="hospital"](around:${r},${lat},${lng});
                node["amenity"="clinic"](around:${r},${lat},${lng});
                way["amenity"="clinic"](around:${r},${lat},${lng});
                node["shop"="ticket"](around:${r},${lat},${lng});
                way["shop"="ticket"](around:${r},${lat},${lng});
            );
            out center tags;
        `;
    }

    function procesarOSM(elements) {
        const arr = [];

        elements.forEach(e => {
            const tags = e.tags || {};
            const lat = e.lat || e.center?.lat;
            const lng = e.lon || e.center?.lon;

            if (!lat || !lng) return;

            const tipo = tipoServicio(tags);

            if (estado.servicioFiltro !== "todos" && tipo !== estado.servicioFiltro) return;

            const dist = distanciaMetros(estado.origenServicios.lat, estado.origenServicios.lng, lat, lng);

            arr.push({
                id: `${e.type}-${e.id}`,
                tipo,
                nombre: tags.name || tags.brand || nombreServicio(tipo),
                distanciaTexto: distanciaTexto(dist),
                icono: iconoServicio(tipo),
                lat,
                lng,
                fuente: "OSM",
                distancia: dist
            });
        });

        return arr.sort((a, b) => a.distancia - b.distancia).slice(0, 24);
    }

    function tipoServicio(tags) {
        if (tags.amenity === "toilets") return "Baños";
        if (tags.shop === "ticket") return "Boletería";
        if (tags.amenity === "drinking_water") return "Hidratación";
        if (["pharmacy", "hospital", "clinic"].includes(tags.amenity)) return "Primeros auxilios";
        return "Servicio";
    }

    function nombreServicio(tipo) {
        const map = {
            "Baños": "Baño público cercano",
            "Boletería": "Punto de boletería",
            "Hidratación": "Punto de hidratación",
            "Primeros auxilios": "Servicio de salud cercano"
        };

        return map[tipo] || "Servicio cercano";
    }

    function iconoServicio(tipo) {
        const map = {
            "Baños": "🚻",
            "Boletería": "🎫",
            "Hidratación": "💧",
            "Primeros auxilios": "🏥"
        };

        return map[tipo] || "📍";
    }

    function renderServiciosActuales() {
        const cont = $("contenedor-servicios-mapa");
        if (!cont) return;

        const servicios = estado.serviciosActuales || [];

        if (!servicios.length) {
            cont.innerHTML = `<div class="service-card" style="grid-column:1/-1;"><h3>Sin resultados</h3><p>No hay servicios para ese filtro.</p></div>`;
            return;
        }

        cont.innerHTML = servicios.map(s => `
            <div class="service-card">
                <h3>${s.icono} ${escapeHTML(s.nombre)}</h3>
                <p><strong>Tipo:</strong> ${escapeHTML(s.tipo)}</p>
                <p><strong>Distancia:</strong> ${escapeHTML(s.distanciaTexto)}</p>
                <p><small>${s.fuente === "OSM" ? "Dato externo de OpenStreetMap" : "Dato referencial del sitio"}</small></p>

                <div class="action-row">
                    <a class="btn-primary btn-auto" target="_blank" rel="noopener" href="${rutaGoogle(s.lat, s.lng)}">Cómo llegar</a>
                    <button class="btn-secondary btn-ver-servicio" data-lat="${s.lat}" data-lng="${s.lng}" data-nombre="${escapeHTML(s.nombre)}">Ver en mapa</button>
                </div>
            </div>
        `).join("");

        $all(".btn-ver-servicio").forEach(btn => {
            btn.addEventListener("click", () => actualizarMapa(Number(btn.dataset.lat), Number(btn.dataset.lng), btn.dataset.nombre));
        });
    }

    function rutaGoogle(lat, lng) {
        const o = estado.origenServicios || origenSitio();
        return `https://www.google.com/maps/dir/?api=1&origin=${o.lat},${o.lng}&destination=${lat},${lng}&travelmode=walking`;
    }

    function configurarReconstruccion() {
        ["recon-sitio", "recon-enfoque", "recon-nivel"].forEach(id => {
            $(id)?.addEventListener("input", renderReconstruccion);
            $(id)?.addEventListener("change", renderReconstruccion);
        });

        $("btn-generar-recon")?.addEventListener("click", renderReconstruccion);
        $("btn-descargar-recon")?.addEventListener("click", descargarReconSVG);

        $("recon-file-actual")?.addEventListener("change", e => cargarArchivoRecon(e, "actual"));
        $("recon-file-plano")?.addEventListener("change", e => cargarArchivoRecon(e, "plano"));
        $("recon-file-3d")?.addEventListener("change", e => cargarArchivoRecon(e, "3d"));
    }

    function cargarArchivoRecon(e, tipo) {
        const file = e.target.files[0];
        if (!file) return;

        if (tipo === "3d") {
            estado.reconArchivo3D = file.name;
            actualizarListaReconArchivos();
            renderReconstruccion();
            return;
        }

        const reader = new FileReader();

        reader.onload = function (ev) {
            if (tipo === "actual") estado.reconActualImg = ev.target.result;
            if (tipo === "plano") estado.reconPlanoImg = ev.target.result;
            actualizarListaReconArchivos();
            renderReconstruccion();
        };

        reader.readAsDataURL(file);
    }

    function actualizarListaReconArchivos() {
        const box = $("recon-archivos-lista");
        if (!box) return;

        const items = [];

        if (estado.reconActualImg) items.push("Foto actual cargada");
        if (estado.reconPlanoImg) items.push("Plano o referencia histórica cargada");
        if (estado.reconArchivo3D) items.push(`Archivo 3D: ${estado.reconArchivo3D}`);

        box.textContent = items.length ? items.join(" · ") : "No se han cargado archivos de reconstrucción.";
    }

    function renderReconstruccion() {
        const id = valor("recon-sitio") || "machupicchu";
        const enfoque = valor("recon-enfoque") || "arquitectura";
        const nivel = Number(valor("recon-nivel") || 60);
        const l = obtenerLugar(id);

        setTexto("recon-nivel-texto", `${nivel}% interpretado`);

        const actual = $("recon-actual");
        const ia = $("recon-ia");
        const explicacion = $("recon-explicacion");

        if (actual) {
            if (estado.reconActualImg) {
                actual.innerHTML = `<img src="${estado.reconActualImg}" alt="Foto actual">`;
            } else if (estado.reconPlanoImg) {
                actual.innerHTML = `<img src="${estado.reconPlanoImg}" alt="Plano cargado">`;
            } else {
                actual.innerHTML = crearSVGRecon(l, 15, "actual");
            }
        }

        estado.reconSVG = crearSVGRecon(l, nivel, "ia");

        if (ia) ia.innerHTML = estado.reconSVG;

        if (explicacion) {
            explicacion.innerHTML = `
                <h3>Lectura interpretativa</h3>
                <p><strong>${escapeHTML(l.nombre)}:</strong> ${escapeHTML(l.arquitectura)}</p>
                <p><strong>Enfoque seleccionado:</strong> ${escapeHTML(enfoque)}.</p>
                <p><strong>Archivo 3D:</strong> ${estado.reconArchivo3D ? escapeHTML(estado.reconArchivo3D) : "No cargado todavía."}</p>
                <p>
                    Esta reconstrucción es educativa. Para una reconstrucción científica real se requiere validación arqueológica,
                    fotogrametría, escaneo 3D, planos oficiales o levantamiento técnico.
                </p>
            `;
        }
    }

    function crearSVGRecon(l, nivel, modo) {
        const opacity = Math.max(0.15, nivel / 100);
        const h = 60 + nivel * 1.3;
        const c1 = modo === "actual" ? "#9e4f33" : "#c86f4a";
        const c2 = modo === "actual" ? "#d8b8a5" : "#3f7d58";

        return `
            <svg class="recon-svg" viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg">
                <rect width="720" height="360" rx="24" fill="#f8efe2"/>

                <path d="M40 300 C140 250, 250 280, 360 240 C470 200, 560 230, 680 180"
                      fill="none" stroke="#bfa68f" stroke-width="18" opacity=".55"/>

                <g opacity="${opacity}">
                    <rect x="90" y="${270 - h * 0.55}" width="130" height="${h * 0.55}" rx="8" fill="${c1}"/>
                    <rect x="250" y="${270 - h * 0.75}" width="150" height="${h * 0.75}" rx="8" fill="${c1}"/>
                    <rect x="430" y="${270 - h}" width="170" height="${h}" rx="8" fill="${c1}"/>
                </g>

                <g opacity="${modo === "actual" ? ".25" : ".85"}">
                    <rect x="110" y="285" width="470" height="14" rx="7" fill="${c2}"/>
                    <rect x="140" y="315" width="420" height="12" rx="6" fill="${c2}"/>
                </g>

                <circle cx="610" cy="70" r="35" fill="#f1b84b" opacity="${modo === "actual" ? ".25" : ".75"}"/>

                <text x="70" y="48" font-size="24" font-weight="700" fill="#242424">${escapeHTML(l.nombre)}</text>
                <text x="70" y="78" font-size="16" fill="#6b6b6b">${modo === "actual" ? "Base actual conservada" : "Interpretación reconstructiva"}</text>
            </svg>
        `;
    }

    function descargarReconSVG() {
        if (!estado.reconSVG) renderReconstruccion();

        const blob = new Blob([estado.reconSVG], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.href = url;
        a.download = "reconstruccion-memoria-viva.svg";
        a.click();

        URL.revokeObjectURL(url);
    }

    function configurarAlertas() {
        $("btn-obtener-ubicacion-alerta")?.addEventListener("click", obtenerGeoAlerta);
        $("alerta-foto")?.addEventListener("change", previsualizarAlerta);

        $("formulario-alerta")?.addEventListener("submit", e => {
            e.preventDefault();
            guardarAlerta();
        });
    }

    function obtenerGeoAlerta() {
        if (!navigator.geolocation) {
            toast("Tu navegador no permite ubicación.");
            return;
        }

        setTexto("alerta-geo-status", "Obteniendo ubicación...");

        navigator.geolocation.getCurrentPosition(
            pos => {
                estado.alertaGeo = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                    precision: pos.coords.accuracy
                };

                setTexto("alerta-geo-status", `Ubicación capturada: ${estado.alertaGeo.lat.toFixed(6)}, ${estado.alertaGeo.lng.toFixed(6)}`);
            },
            () => {
                setTexto("alerta-geo-status", "No se pudo obtener ubicación.");
                toast("No se pudo obtener ubicación.");
            }
        );
    }

    function previsualizarAlerta(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = ev => {
            estado.alertaFoto = ev.target.result;
            $("alerta-preview").src = estado.alertaFoto;
            $("alerta-preview").classList.remove("oculto");
        };

        reader.readAsDataURL(file);
    }

    function guardarAlerta() {
        const lugarId = valor("alerta-lugar");
        const tipo = valor("alerta-tipo");
        const descripcion = valor("alerta-descripcion");

        if (!lugarId || !tipo || !descripcion || !estado.alertaFoto || !estado.alertaGeo) {
            toast("Completa lugar, tipo, foto, descripción y ubicación.");
            return;
        }

        const reportes = leer(STORAGE.reportes, []);

        reportes.unshift({
            id: "reporte-" + Date.now(),
            usuarioId: estado.usuario.id,
            autor: estado.usuario.nombre,
            lugarId,
            tipo,
            descripcion,
            foto: estado.alertaFoto,
            geo: estado.alertaGeo,
            estado: "Pendiente",
            fecha: new Date().toISOString()
        });

        guardar(STORAGE.reportes, reportes);
        sumarXP(100);

        $("formulario-alerta").reset();
        $("alerta-preview").classList.add("oculto");
        estado.alertaFoto = "";
        estado.alertaGeo = null;
        setTexto("alerta-geo-status", "Ubicación pendiente.");

        renderAdmin();
        renderPerfil();
        renderRanking();
        toast("Reporte enviado. Ganaste 100 XP.");
    }

    function configurarEventos() {
        $("btn-activar-notificaciones-eventos")?.addEventListener("click", activarNotificaciones);
        $("btn-desactivar-notificaciones-eventos")?.addEventListener("click", desactivarNotificaciones);

        $("formulario-evento-cultural")?.addEventListener("submit", e => {
            e.preventDefault();
            guardarEvento();
        });
    }

    function activarNotificaciones() {
        const distrito = valor("eventos-distrito-usuario") || "Miraflores";
        guardar(STORAGE.notificaciones, { activas: true, distrito });
        renderEventos();
        toast(`Notificaciones activadas para ${distrito}.`);
    }

    function desactivarNotificaciones() {
        guardar(STORAGE.notificaciones, { activas: false, distrito: valor("eventos-distrito-usuario") || "Miraflores" });
        renderEventos();
        toast("Notificaciones desactivadas.");
    }

    function guardarEvento() {
        const ev = {
            id: "evento-" + Date.now(),
            nombre: valor("evento-nombre"),
            tipo: valor("evento-tipo"),
            distrito: valor("evento-distrito"),
            fecha: valor("evento-fecha"),
            lugar: valor("evento-lugar"),
            mapa: valor("evento-mapa"),
            descripcion: valor("evento-descripcion")
        };

        if (!ev.nombre || !ev.tipo || !ev.distrito || !ev.fecha || !ev.lugar || !ev.mapa || !ev.descripcion) {
            toast("Completa todos los campos del evento.");
            return;
        }

        const eventos = leer(STORAGE.eventos, []);
        eventos.unshift(ev);
        guardar(STORAGE.eventos, eventos);

        $("formulario-evento-cultural").reset();
        renderEventos();

        const cfg = leer(STORAGE.notificaciones, { activas: false });

        if (cfg.activas && cfg.distrito === ev.distrito) {
            toastEvento(ev);
        } else {
            toast("Evento registrado.");
        }
    }

    function renderEventos() {
        const cfg = leer(STORAGE.notificaciones, { activas: false, distrito: "Miraflores" });

        setTexto("estado-notificaciones-eventos", cfg.activas ? `Notificaciones activas para ${cfg.distrito}.` : "Notificaciones no activadas.");

        if ($("eventos-distrito-usuario")) $("eventos-distrito-usuario").value = cfg.distrito;

        const cont = $("contenedor-eventos-culturales");
        if (!cont) return;

        const eventos = leer(STORAGE.eventos, []);

        cont.innerHTML = eventos.map(ev => `
            <div class="event-card">
                <h3>${escapeHTML(ev.nombre)}</h3>
                <p><strong>Tipo:</strong> ${escapeHTML(ev.tipo)}</p>
                <p><strong>Distrito:</strong> ${escapeHTML(ev.distrito)}</p>
                <p><strong>Fecha:</strong> ${fechaBonita(ev.fecha)}</p>
                <p>${escapeHTML(ev.descripcion)}</p>
                <a href="${escapeHTML(ev.mapa)}" target="_blank" class="btn-primary btn-auto">Ver ubicación</a>
            </div>
        `).join("");
    }

    function toastEvento(ev) {
        const toastBox = $("toast-notificacion");
        setTexto("toast-titulo", "Nuevo evento cultural");
        setTexto("toast-texto", `${ev.nombre} en ${ev.distrito}.`);
        $("toast-link").href = ev.mapa;
        $("toast-link").target = "_blank";
        $("toast-link").textContent = "Ver ubicación";
        toastBox.classList.remove("oculto");

        setTimeout(() => toastBox.classList.add("oculto"), 5000);
    }

    function configurarArchivo() {
        $("archivo-sitio")?.addEventListener("change", renderArchivo);

        $all(".tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                $all(".tab-btn").forEach(b => b.classList.remove("activo"));
                btn.classList.add("activo");
                estado.archivoTab = btn.dataset.archivoTab;
                renderArchivo();
            });
        });
    }

    function renderArchivo() {
        const select = $("archivo-sitio");
        const cont = $("archivo-contenido");
        const info = $("archivo-info");

        if (!select || !cont || !info) return;

        const l = obtenerLugar(select.value || estado.sitioActivo);

        info.innerHTML = `
            <h3>${escapeHTML(l.nombre)}</h3>
            <p><strong>Cultura:</strong> ${escapeHTML(l.cultura)}</p>
            <p><strong>Periodo:</strong> ${escapeHTML(l.periodo)}</p>
            <p><strong>Fuente:</strong> ${escapeHTML(l.fuente)}</p>
        `;

        if (estado.archivoTab === "real") {
            cont.innerHTML = `
                <h3>🗺️ Plano real actual</h3>
                <iframe class="archive-map" src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox(l.lat, l.lng, 0.01)}&layer=mapnik&marker=${l.lat},${l.lng}" loading="lazy"></iframe>
                <p class="status-box">Este plano muestra cartografía real actual. Sirve para ubicar el sitio y su entorno.</p>
            `;
        } else if (estado.archivoTab === "tecnico") {
            cont.innerHTML = `
                <h3>📐 Esquema técnico interpretativo</h3>
                <div class="archive-svg">${svgPlano(l)}</div>
                <p class="status-box">Esquema educativo. No reemplaza un plano arqueológico oficial.</p>
            `;
        } else {
            cont.innerHTML = `
                <div class="source-box">
                    <h3>🗂️ Fuente y notas</h3>
                    <p><strong>${escapeHTML(l.fuente)}</strong></p>
                    <ul>
                        ${l.notasPlano.map(n => `<li>${escapeHTML(n)}</li>`).join("")}
                    </ul>
                    <p class="status-box">Puedes cargar planos oficiales como imagen, PDF o SVG dentro de la sección Reconstrucción IA.</p>
                </div>
            `;
        }
    }

    function svgPlano(l) {
        const id = l.id;

        if (id === "machupicchu") {
            return `
                <svg viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg">
                    <rect width="900" height="520" rx="26" fill="#f8efe2"/>
                    <path d="M80 420 C200 320,260 360,350 230 C460 80,620 120,800 70" fill="none" stroke="#9e4f33" stroke-width="22" opacity=".25"/>
                    <g fill="#c86f4a"><rect x="130" y="310" width="170" height="28" rx="8"/><rect x="150" y="350" width="190" height="28" rx="8"/><rect x="180" y="390" width="210" height="28" rx="8"/></g>
                    <g fill="#3f7d58"><rect x="470" y="180" width="90" height="70" rx="8"/><rect x="575" y="175" width="75" height="65" rx="8"/><rect x="515" y="270" width="100" height="75" rx="8"/><rect x="640" y="270" width="95" height="70" rx="8"/></g>
                    <circle cx="705" cy="145" r="32" fill="#f1b84b"/>
                    <text x="130" y="292" font-size="24" font-weight="700" fill="#242424">Terrazas agrícolas</text>
                    <text x="470" y="160" font-size="24" font-weight="700" fill="#242424">Zona urbana</text>
                    <text x="650" y="105" font-size="24" font-weight="700" fill="#242424">Sector ceremonial</text>
                </svg>
            `;
        }

        if (id === "huacapucllana") {
            return `
                <svg viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg">
                    <rect width="900" height="520" rx="26" fill="#f8efe2"/>
                    <g fill="#c86f4a"><rect x="150" y="110" width="520" height="280" rx="18"/><rect x="205" y="155" width="430" height="210" rx="14" fill="#d98b66"/><rect x="265" y="205" width="310" height="120" rx="10" fill="#e6aa8e"/></g>
                    <path d="M690 130 L790 130 L790 390 L690 390 Z" fill="#3f7d58" opacity=".85"/>
                    <text x="230" y="92" font-size="25" font-weight="700" fill="#242424">Plataforma piramidal</text>
                    <text x="692" y="112" font-size="23" font-weight="700" fill="#242424">Patios</text>
                </svg>
            `;
        }

        if (id === "nazca") {
            return `
                <svg viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg">
                    <rect width="900" height="520" rx="26" fill="#f5e0bf"/>
                    <g stroke="#9e4f33" stroke-width="8" opacity=".8">
                        <line x1="90" y1="120" x2="820" y2="410"/>
                        <line x1="160" y1="440" x2="760" y2="80"/>
                        <line x1="80" y1="260" x2="840" y2="260"/>
                        <path d="M390 190 C480 120,600 160,590 255 C580 360,430 365,380 285 C345 230,360 210,390 190Z" fill="none"/>
                    </g>
                    <text x="110" y="95" font-size="24" font-weight="700" fill="#242424">Ejes lineales</text>
                    <text x="395" y="178" font-size="24" font-weight="700" fill="#242424">Figura simbólica</text>
                </svg>
            `;
        }

        if (id === "caral") {
            return `
                <svg viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg">
                    <rect width="900" height="520" rx="26" fill="#f8efe2"/>
                    <g fill="#c86f4a"><polygon points="170,390 290,130 410,390"/><polygon points="470,370 560,180 650,370"/><polygon points="670,390 750,235 830,390"/></g>
                    <circle cx="300" cy="420" r="58" fill="none" stroke="#3f7d58" stroke-width="18"/>
                    <circle cx="590" cy="410" r="48" fill="none" stroke="#3f7d58" stroke-width="15"/>
                    <text x="180" y="112" font-size="24" font-weight="700" fill="#242424">Pirámide Mayor</text>
                    <text x="230" y="500" font-size="24" font-weight="700" fill="#242424">Plazas circulares</text>
                </svg>
            `;
        }

        if (id === "chanchan") {
            return `
                <svg viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg">
                    <rect width="900" height="520" rx="26" fill="#f8efe2"/>
                    <g fill="none" stroke="#9e4f33" stroke-width="18"><rect x="110" y="90" width="280" height="330" rx="10"/><rect x="450" y="120" width="310" height="270" rx="10"/></g>
                    <g stroke="#c86f4a" stroke-width="10"><line x1="160" y1="150" x2="350" y2="150"/><line x1="160" y1="210" x2="350" y2="210"/><line x1="500" y1="185" x2="710" y2="185"/><line x1="500" y1="250" x2="710" y2="250"/></g>
                    <text x="130" y="65" font-size="24" font-weight="700" fill="#242424">Conjuntos amurallados</text>
                    <text x="500" y="435" font-size="24" font-weight="700" fill="#242424">Corredores y plazas</text>
                </svg>
            `;
        }

        return `
            <svg viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg">
                <rect width="900" height="520" rx="26" fill="#f8efe2"/>
                <ellipse cx="450" cy="260" rx="330" ry="180" fill="none" stroke="#9e4f33" stroke-width="22"/>
                <g fill="#3f7d58"><circle cx="320" cy="230" r="46"/><circle cx="455" cy="250" r="50"/><circle cx="585" cy="220" r="45"/><circle cx="520" cy="330" r="42"/></g>
                <path d="M160 260 C260 180,600 160,760 250" fill="none" stroke="#c86f4a" stroke-width="12"/>
                <text x="235" y="125" font-size="24" font-weight="700" fill="#242424">Muralla perimetral</text>
                <text x="350" y="405" font-size="24" font-weight="700" fill="#242424">Recintos circulares</text>
            </svg>
        `;
    }

    function configurarCronologia() {}

    function renderCronologia() {
        const cont = $("contenedor-timeline-cultural");
        if (!cont) return;

        cont.innerHTML = periodos.map(p => `
            <div class="timeline-item" data-id="${p.id}">
                <h3>${escapeHTML(p.nombre)}</h3>
                <p>${escapeHTML(p.rango)}</p>
                <small>${escapeHTML(p.culturas.join(", "))}</small>
            </div>
        `).join("");

        $all(".timeline-item").forEach(item => {
            item.addEventListener("click", () => mostrarPeriodo(item.dataset.id));
        });

        mostrarPeriodo(periodos[0].id);
    }

    function mostrarPeriodo(id) {
        const p = periodos.find(x => x.id === id);
        if (!p) return;

        $all(".timeline-item").forEach(i => i.classList.toggle("activo", i.dataset.id === id));

        $("detalle-timeline-cultural").innerHTML = `
            <h3>${escapeHTML(p.nombre)}</h3>
            <p><strong>Rango:</strong> ${escapeHTML(p.rango)}</p>
            <p>${escapeHTML(p.descripcion)}</p>
            <h4>Artefactos representativos</h4>
            <ul style="margin-left:20px; margin-top:8px;">
                ${p.artefactos.map(a => `<li>${escapeHTML(a)}</li>`).join("")}
            </ul>
        `;
    }

    function configurarDesafios() {
        $("formulario-desafio")?.addEventListener("submit", e => {
            e.preventDefault();
            crearDesafio();
        });
    }

    function crearDesafio() {
        const equipo = valor("desafio-equipo");
        const sitio = valor("desafio-sitio");

        if (!equipo || !sitio) {
            toast("Completa equipo y sitio.");
            return;
        }

        guardar(STORAGE.desafio, {
            id: "desafio-" + Date.now(),
            equipo,
            sitio,
            progreso: 0,
            artefactos: [],
            fecha: new Date().toISOString()
        });

        $("formulario-desafio").reset();
        renderDesafio();
        toast("Desafío iniciado.");
    }

    function renderDesafio() {
        const cont = $("contenedor-desafio-activo");
        if (!cont) return;

        const d = leer(STORAGE.desafio, null);

        if (!d) {
            cont.innerHTML = `<div class="card"><p>No hay desafío activo.</p></div>`;
            return;
        }

        const l = obtenerLugar(d.sitio);

        cont.innerHTML = `
            <div class="card">
                <h3>${escapeHTML(d.equipo)}</h3>
                <p><strong>Sitio:</strong> ${escapeHTML(l.nombre)}</p>
                <div class="progress"><span style="width:${d.progreso}%;"></span></div>
                <p>Progreso: ${d.progreso}%</p>
                <p>Artefactos: ${d.artefactos.length}</p>
                <button id="btn-artefacto-desafio" class="btn-primary">Registrar artefacto</button>
                <button id="btn-finalizar-desafio" class="btn-secondary full mt-24">Finalizar</button>
            </div>
        `;

        $("btn-artefacto-desafio").addEventListener("click", artefactoDesafio);
        $("btn-finalizar-desafio").addEventListener("click", () => {
            localStorage.removeItem(STORAGE.desafio);
            renderDesafio();
        });
    }

    function artefactoDesafio() {
        const d = leer(STORAGE.desafio, null);
        if (!d) return;

        d.artefactos.push({ nombre: "Artefacto " + (d.artefactos.length + 1), fecha: new Date().toISOString() });
        d.progreso = Math.min(100, d.progreso + 20);

        guardar(STORAGE.desafio, d);
        sumarXP(40);
        renderDesafio();
        renderPerfil();
        renderRanking();

        if (d.progreso >= 100) abrirCompartir("Desafío grupal completado", obtenerLugar(d.sitio).nombre);
    }

    function renderRanking() {
        const resumen = $("ranking-resumen-usuario");
        const cont = $("contenedor-ranking-exploradores");
        if (!cont) return;

        const usuarios = leer(STORAGE.usuarios, []);
        const ranking = usuarios.map(u => ({
            nombre: u.nombre,
            email: u.email,
            xp: u.xp || 0,
            resenas: contarResenasUsuario(u.id)
        })).sort((a, b) => b.xp - a.xp);

        const pos = ranking.findIndex(r => correoNormal(r.email) === correoNormal(estado.usuario.email)) + 1;

        if (resumen) {
            resumen.innerHTML = `
                <h3>Tu posición</h3>
                <p>${escapeHTML(estado.usuario.nombre)}, estás en el puesto <strong>#${pos}</strong>.</p>
            `;
        }

        cont.innerHTML = ranking.map((r, i) => `
            <div class="ranking-item">
                <strong>#${i + 1}</strong>
                <div><strong>${escapeHTML(r.nombre)}</strong><br><small>${r.resenas} reseñas</small></div>
                <strong>${r.xp} XP</strong>
            </div>
        `).join("");
    }

    function renderAnaliticas() {
        if ($("analitica-fecha-desde") && !$("analitica-fecha-desde").value) $("analitica-fecha-desde").value = "2026-07-01";
        if ($("analitica-fecha-hasta") && !$("analitica-fecha-hasta").value) $("analitica-fecha-hasta").value = "2026-07-31";

        $("btn-generar-analiticas")?.addEventListener("click", generarAnaliticas);
        generarAnaliticas();
    }

    function generarAnaliticas() {
        const cont = $("contenedor-analiticas-municipales");
        if (!cont) return;

        const resenas = leer(STORAGE.resenas, []);
        const rutas = leer(STORAGE.rutas, []);
        const reportes = leer(STORAGE.reportes, []);

        const actividad = lugares.map(l => {
            const total =
                resenas.filter(r => r.lugarId === l.id).length +
                rutas.filter(r => r.sitios.includes(l.id)).length +
                reportes.filter(r => r.lugarId === l.id).length;

            return { lugar: l, total };
        }).sort((a, b) => b.total - a.total);

        cont.innerHTML = `
            <div class="grid-cards">
                <div class="card"><h3>Reseñas</h3><p style="font-size:2rem;font-weight:900;color:var(--terracotta-dark);">${resenas.length}</p></div>
                <div class="card"><h3>Rutas</h3><p style="font-size:2rem;font-weight:900;color:var(--terracotta-dark);">${rutas.length}</p></div>
                <div class="card"><h3>Reportes</h3><p style="font-size:2rem;font-weight:900;color:var(--terracotta-dark);">${reportes.length}</p></div>
            </div>

            <div class="info-panel mt-24">
                <h3>Actividad por sitio</h3>
                ${actividad.map(a => `
                    <div style="margin:14px 0;">
                        <strong>${escapeHTML(a.lugar.nombre)}</strong>
                        <div class="progress"><span style="width:${Math.min(100, a.total * 18)}%;"></span></div>
                        <small>${a.total} interacciones</small>
                    </div>
                `).join("")}
            </div>
        `;
    }

    function configurarAdmin() {
        $all(".admin-tab").forEach(tab => {
            tab.addEventListener("click", () => {
                $all(".admin-tab").forEach(t => t.classList.remove("activo"));
                tab.classList.add("activo");

                $("admin-tab-reportes").classList.toggle("oculto", tab.dataset.adminTab !== "reportes");
                $("admin-tab-modelos").classList.toggle("oculto", tab.dataset.adminTab !== "modelos");
            });
        });

        $("formulario-modelo3d")?.addEventListener("submit", e => {
            e.preventDefault();
            guardarModelo();
        });
    }

    function renderAdmin() {
        renderReportesAdmin();
        renderModelosAdmin();
    }

    function renderReportesAdmin() {
        const cont = $("contenedor-reportes-admin");
        if (!cont) return;

        const reportes = leer(STORAGE.reportes, []);

        if (!reportes.length) {
            cont.innerHTML = `<div class="card" style="grid-column:1/-1;"><p>No hay reportes registrados.</p></div>`;
            return;
        }

        cont.innerHTML = reportes.map(r => {
            const l = obtenerLugar(r.lugarId);

            return `
                <div class="report-card">
                    <img src="${r.foto}" alt="Reporte">
                    <h3>${escapeHTML(r.tipo)}</h3>
                    <p><strong>Lugar:</strong> ${escapeHTML(l.nombre)}</p>
                    <p>${escapeHTML(r.descripcion)}</p>
                    <p><strong>Estado:</strong> ${escapeHTML(r.estado)}</p>

                    <div class="action-row">
                        <button class="btn-secondary btn-estado-reporte" data-id="${r.id}" data-estado="Aprobado">Aprobar</button>
                        <button class="btn-danger btn-estado-reporte" data-id="${r.id}" data-estado="Rechazado">Rechazar</button>
                    </div>
                </div>
            `;
        }).join("");

        $all(".btn-estado-reporte").forEach(btn => {
            btn.addEventListener("click", () => cambiarReporte(btn.dataset.id, btn.dataset.estado));
        });
    }

    function cambiarReporte(id, estadoNuevo) {
        const reportes = leer(STORAGE.reportes, []).map(r => r.id === id ? { ...r, estado: estadoNuevo } : r);
        guardar(STORAGE.reportes, reportes);
        renderReportesAdmin();
        generarAnaliticas();
    }

    function guardarModelo() {
        const modelo = {
            id: "modelo-" + Date.now(),
            nombre: valor("modelo-nombre"),
            sitio: valor("modelo-sitio"),
            precision: valor("modelo-precision"),
            observacion: valor("modelo-observacion"),
            archivo: $("modelo-archivo")?.files[0]?.name || "Sin archivo",
            estado: "Pendiente",
            fecha: new Date().toISOString()
        };

        if (!modelo.nombre || !modelo.sitio || !modelo.precision || !modelo.observacion) {
            toast("Completa los datos del modelo.");
            return;
        }

        const modelos = leer(STORAGE.modelos, []);
        modelos.unshift(modelo);
        guardar(STORAGE.modelos, modelos);

        $("formulario-modelo3d").reset();
        renderModelosAdmin();
        toast("Modelo registrado.");
    }

    function renderModelosAdmin() {
        const cont = $("contenedor-modelos-admin");
        if (!cont) return;

        const modelos = leer(STORAGE.modelos, []);

        if (!modelos.length) {
            cont.innerHTML = `<div class="card"><p>No hay modelos registrados.</p></div>`;
            return;
        }

        cont.innerHTML = modelos.map(m => `
            <div class="model-card">
                <h3>${escapeHTML(m.nombre)}</h3>
                <p><strong>Sitio:</strong> ${escapeHTML(obtenerLugar(m.sitio).nombre)}</p>
                <p><strong>Precisión:</strong> ${escapeHTML(m.precision)}</p>
                <p><strong>Archivo:</strong> ${escapeHTML(m.archivo || "Sin archivo")}</p>
                <p>${escapeHTML(m.observacion)}</p>
                <p><strong>Estado:</strong> ${escapeHTML(m.estado)}</p>

                <div class="action-row">
                    <button class="btn-secondary btn-estado-modelo" data-id="${m.id}" data-estado="Aprobado">Aprobar</button>
                    <button class="btn-danger btn-estado-modelo" data-id="${m.id}" data-estado="Rechazado">Rechazar</button>
                </div>
            </div>
        `).join("");

        $all(".btn-estado-modelo").forEach(btn => {
            btn.addEventListener("click", () => cambiarModelo(btn.dataset.id, btn.dataset.estado));
        });
    }

    function cambiarModelo(id, estadoNuevo) {
        const modelos = leer(STORAGE.modelos, []).map(m => m.id === id ? { ...m, estado: estadoNuevo } : m);
        guardar(STORAGE.modelos, modelos);
        renderModelosAdmin();
    }

    function reproducirAudioguia() {
        const l = obtenerLugar(estado.lugarModal);
        hablar(l.narrador);
    }

    function abrirRA() {
        const l = obtenerLugar(estado.lugarModal);
        setTexto("ra-titulo", `Guía RA - ${l.nombre}`);
        setTexto("ra-texto", l.narrador);
        setTexto("subtitulos-ra", l.narrador);
        cerrarModal("modal-lugar");
        abrirModal("modal-ra");
    }

    function reproducirRA() {
        const l = obtenerLugar(estado.lugarModal);
        hablar(l.narrador);
    }

    function hablar(texto) {
        if (!("speechSynthesis" in window)) {
            toast("Tu navegador no permite audioguía.");
            return;
        }

        window.speechSynthesis.cancel();

        const u = new SpeechSynthesisUtterance(texto);
        u.lang = "es-PE";
        u.rate = 0.95;
        window.speechSynthesis.speak(u);
    }

    function pausarAudio() {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    }

    function abrirCompartir(logro, sitio) {
        setTexto("share-logro", logro);
        setTexto("share-sitio", sitio);
        $("texto-compartir").value = `Logré: ${logro} en ${sitio} usando Memoria Viva.`;
        abrirModal("modal-compartir");
    }

    async function compartirWeb() {
        const texto = valor("texto-compartir");

        if (navigator.share) {
            try {
                await navigator.share({ title: "Memoria Viva", text: texto });
            } catch {}
        } else {
            copiarShare();
        }
    }

    function copiarShare() {
        navigator.clipboard.writeText(valor("texto-compartir"))
            .then(() => toast("Texto copiado."))
            .catch(() => toast("No se pudo copiar."));
    }

    function sumarXP(cantidad) {
        const usuarios = leer(STORAGE.usuarios, []);

        const actualizados = usuarios.map(u => {
            if (u.id === estado.usuario.id) {
                const xp = (u.xp || 0) + cantidad;
                const nivel = Math.floor(xp / 400) + 1;

                estado.usuario.xp = xp;
                estado.usuario.nivel = nivel;
                guardar(STORAGE.sesion, estado.usuario);

                return { ...u, xp, nivel };
            }

            return u;
        });

        guardar(STORAGE.usuarios, actualizados);
    }

    function obtenerXP() {
        const u = leer(STORAGE.usuarios, []).find(x => x.id === estado.usuario.id);
        return u ? u.xp || 0 : 0;
    }

    function configurarAyuda() {
        $("btn-ayuda-flotante")?.addEventListener("click", () => abrirModal("modal-ayuda"));

        $("selector-idioma-global")?.addEventListener("change", () => {
            toast("Idioma de interfaz cambiado en modo demostrativo.");
        });

        $("selector-audio-cultural")?.addEventListener("change", () => {
            toast("Idioma de audioguía cambiado en modo demostrativo.");
        });
    }

    function toast(mensaje) {
        const box = $("toast-notificacion");

        if (!box) {
            alert(mensaje);
            return;
        }

        setTexto("toast-titulo", "Memoria Viva");
        setTexto("toast-texto", mensaje);

        const link = $("toast-link");
        link.href = "#";
        link.removeAttribute("target");
        link.textContent = "Aceptar";

        box.classList.remove("oculto");

        clearTimeout(box._timer);
        box._timer = setTimeout(() => box.classList.add("oculto"), 3300);
    }

    window.memoriaVivaDebug = {
        cerrarSesion,
        limpiarSesion: function () {
            localStorage.removeItem(STORAGE.sesion);
            location.reload();
        },
        limpiarTodo: function () {
            Object.values(STORAGE).forEach(k => localStorage.removeItem(k));
            location.reload();
        }
    };

})();