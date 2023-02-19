import { SectionFull } from './Section';

export const AboutSection = () => {
  return (
    <SectionFull>
        <div className="grid grid-cols-4 h-full p-5">
            <div className='flex justify-between col-span-4'>
                <div>
                  <h2 className="text-4xl">Acerca de mí</h2>
                  <p className='text-sm'>
                    Mi nombre es Manuel Ulate Sancho, vivo en San Ramón de Alajuela, Costa Rica. <br />
                    Nací en una gran familia, mi padre se llama Victor Ulate y mi madre Jinnette Sancho <br />
                    ellos 
                  </p>
                </div>
            </div>
        </div>
    </SectionFull>
  )
}
