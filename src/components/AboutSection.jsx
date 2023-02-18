import { Scene } from './3D';
import { SectionFull } from './Section';

export const AboutSection = () => {
  return (
    <SectionFull>
        <div className="grid grid-cols-4 h-full p-5">
            <div className='flex justify-between items-center col-span-4'>
                <div>
                  <h2 className="text-4xl">Acerca de mí</h2>
                  <p className='text-sm'>
                    Mi nombre es Manuel Ulate Sancho, vivo en San Ramón de Alajuela, Costa Rica
                  </p>
                </div>
                <Scene/>
            </div>
        </div>
    </SectionFull>
  )
}
