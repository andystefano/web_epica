 

import React  from 'react';

import AcordeonTab from './AcordeonTab.js'

export default function Faq() {

  return (
        <div
          id="accordion"   style={{
            color: '#93d3e1',
            borderTop:'2px solid #93d3e1',
            marginTop:'10px'
          }}
        >
          <AcordeonTab titulo={'¿Qué son las artes vivas?'} contenido={'Entendemos por artes vivas las prácticas artísticas que investigan desde el cuerpo y exploran cruces e hibridaciones con diversas disciplinas, como la música, las artes plásticas, la arquitectura y la escritura, entre muchas otras, ofreciendo un espacio abierto para la experimentación y la interacción con otros en tiempo real.'} />
          <AcordeonTab titulo={'¿Qué es el cuirismo o arte cuir?'} contenido={'El “cuirismo” o “arte cuir”, según la Fundación Mecenas, es una corriente artística interdisciplinaria que explora la fluidez de género, sexualidad y corporalidad. A través de diversas prácticas artísticas—visuales, performativas, literarias y sonoras—cuestiona las normas establecidas y visibiliza identidades marginadas.'} />
          <AcordeonTab titulo={'¿Sí soy simpatizante de la comunidad LGBTIQA+ puedo participar?'} contenido={'No. Residencia Épica está pensada para personas y colectivos que forman parte de la comunidad LGBTIQA+ y cuir.'} />
          <AcordeonTab titulo={'¿Qué es Fundación Antenna?'} contenido={'Antenna es una fundación que se dedica a acercar el arte y la cultura a las personas, contribuyendo al desarrollo cultural del país. Buscamos generar  proyectos con impacto social, que beneficien a diversos grupos y territorios, vinculando a diversos agentes tales como artistas, instituciones, mundo público y privado, para enriquecer y aportar al ecosistema cultural.'} />
          <AcordeonTab titulo={'¿Qué es Fundación Mecenas? '} contenido={'Fundación Mecenas es una organización sin fines de lucro dedicada a impulsar artivismo cuir como una herramienta de empoderamiento colectivo y transformación cultural, promoviendo la resiliencia y el bienestar biopsicosocial de la comunidad LGBTIQA+. En respuesta a la discriminación estructural y la precarización del arte en Chile, la fundación articula redes solidarias y diálogos intersectoriales para fortalecer la autonomía de artistas cuir y garantizar espacios seguros e inclusivos. A través de su enfoque transdisciplinario e intersectorial, promueve la convergencia creativa, la resistencia y la excelencia técnica, reivindicando estéticas, corporalidades y narrativas marginadas. Su modelo de colaboración integra múltiples formas de vinculación con artistas, investigadores, activistas e inversores, fomentando una comunidad vibrante y sostenible.'} />
          <AcordeonTab titulo={'¿Qué es Balmaceda Arte Joven?'} contenido={'Balmaceda Arte Joven (BAJ) es una corporación cultural sin fines de lucro que promueve la libertad creativa, el pensamiento crítico, la autorreflexión y el sentido de comunidad a través de una educación artística innovadora y de calidad para los y las jóvenes del país.'} />
        </div>
  );
}

