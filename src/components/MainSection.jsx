import { ThreeDCircle, ThreeDWrapper, SectionFull } from "./"

export const MainSection = () => {
  return (
    <SectionFull>
        <div className="flex flex-row items-center h-full p-5">

          <div className="flex-grow-1 fadeIn">
            <h1 className="text-6xl font-bold">Manuel Ulate Sancho</h1>
            <h2 className="text-2xl">Front End Developer & UX/UI Designer</h2>
          </div>
          <div className="flex h-full items-center w-full">
            <Character />
          </div>
        </div>
      </SectionFull>
  )
}

import Spline from '@splinetool/react-spline';

const Character = () => {
  return (
    <Spline scene="https://prod.spline.design/gaJM8-5es03RO3v9/scene.splinecode" />
  );
}
