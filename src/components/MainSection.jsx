import { ThreeDCircle, ThreeDWrapper, SectionFull } from "./"

export const MainSection = () => {
  return (
    <SectionFull>
        <div className="flex flex-row items-center relative p-5 h-full w-full">
          <div className="fadeIn absolute z-10 ">
            <h1 className="text-6xl font-bold">Manuel Ulate Sancho</h1>
            <h2 className="text-2xl">Front End Developer & UX/UI Designer</h2>
          </div>
          <div className="h-full w-full left-0 absolute">
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
