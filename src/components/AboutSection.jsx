import { SectionFull } from './Section';

export const AboutSection = () => {
  return (
    <SectionFull>
        <div className="grid grid-cols-4 h-full p-5 py-10">
          <div className='inline-flex flex-col col-span-4'>
              <h2 className="text-4xl">Acerca de mí</h2>
              <p className='text-sm mt-3'>
                Mi nombre es Manuel Ulate Sancho, vivo en San Ramón de Alajuela, Costa Rica. <br />
                Nací en una gran familia, mi padre se llama Victor Ulate y mi madre Jinnette Sancho, <br />
                nací en San José pero he vivido toda mi vida en San Ramón, aquí crecí, hice mi vida y resido actualmente. <br />
              </p>
              <p className='text-sm  mt-2'>
                No suelo ser muy bueno con las palabaras, al momento de redactar esto no se me ocurre que puedo contar<br />
                acerca de mí, pero bueno, pronto se me van ocurriendo más ideas.
              </p>
              <p className='text-sm  mt-2'>
                Me encanta hacer ejercicio, desde pequeño he participado en diversos grupos deportivos, tanto baloncesto <br />
                como fútbol; además, me encanta el arte y son un apasionado por la fotografía, este hobbie empezó de manera <br />
                inesperada, y la verdad me ha hecho ver el mundo de una manera totalmente diferente.
              </p>
          </div>
          <div className="col-start-1 col-end-2 bg-orange-200">Hola</div>
          <div className="col-start-2 col-end-3 bg-orange-200">Hola</div>
          <div className="col-start-3 col-end-4 bg-orange-200">Hola</div>
          <div className="col-start-4 col-end-5 bg-orange-200">Hola</div>
        </div>
    </SectionFull>
  )
}
