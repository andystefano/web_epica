 

import React  from 'react';

import AcordeonTab from './AcordeonTab.js'

export default function Faq() {

  return (
        <div
          id="accordion"   style={{
            color: '#93d3e1',
            borderTop:'2px solid #93d3e1'
          }}
        >
          <AcordeonTab titulo={'¿Qué son las artes vivas?'} contenido={'Las postulaciones se pueden enviar desde el día 26 de junio 2024 hasta el día 25 de septiembre, a las 23:59 hrs. Las postulaciones que lleguen después serán consideradas como fuera de base.'} />
          <AcordeonTab titulo={' ¿Qué significa ser parte de la comunidad LGBTIQ+?'} contenido={'No, solamente se puede postular una obra por cada artista o postulante.'} />
          <AcordeonTab titulo={'¿Sí soy simpatizante de la comunidad LGBTIQ+ puedo participar?'} contenido={'Si, las participantes de las convocatorias anteriores pueden postular, a excepción de las ganadoras de las versiones anteriores.'} />
          <AcordeonTab titulo={'¿Qué es Fundación Antenna?'} contenido={'No, el premio no es de adquisición.'} />
          <AcordeonTab titulo={'¿Qué es Fundación Mecenas?'} contenido={'Jurado ciego significa que, al momento de deliberar, los jurados no saben a qué artista pertenece cada obra, solo tienen acceso a la información visual enviada de la obra postulada, misma metodología aplica para el voto del público.<br/>Para lo anterior, es importante también que en la fotografía de la obra postulada no aparezca el rostro de la postulante, con el fin de no revelar su identidad. '} />
          <AcordeonTab titulo={'¿Qué es Balmaceda Arte Joven?'} contenido={'La convocatoria está abierta a todas las disciplinas de las artes plásticas, por ello la postulación es mediante el envío de fotografías que den cuenta de la obra postulada o un link para poder verla online.<br/><br/>Esto incluye, pero no está limitado a las siguientes técnicas: pintura, escultura, fotografía, arte textil, instalación, video arte, cerámica, dibujo.'} />
        </div>
  );
}

