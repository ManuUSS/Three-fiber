import { Scene } from './3D';
import { SectionFull } from './Section';

export const AboutSection = () => {
  return (
    <SectionFull>
        <div className="grid grid-cols-4 h-full p-5">
            <div className='flex justify-center col-span-4'>
                <h2 className="text-4xl">Acerca de mí</h2>
            </div>
            <div className='col-span-2 bg-blue'>
                <Scene />
            </div>
        </div>
    </SectionFull>
  )
}
