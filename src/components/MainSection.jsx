import { ThreeDCircle, ThreeDWrapper, SectionFull } from "./"

export const MainSection = () => {
  return (
    <SectionFull>
        <div className="flex flex-row items-center h-full p-5">

          <div className="flex-grow-1">
            <h1 className="text-6xl font-bold">Manuel Ulate Sancho</h1>
            <h2 className="text-2xl">Front End Developer & UX/UI Designer</h2>
          </div>
          {/* <ThreeDWrapper
            className='three-main-section'
          >
            <ThreeDCircle position={[ 2, 0, 0 ]}  scale={ 0.5 } />
            <ThreeDCircle position={[ 8, 0, 0 ]}  scale={ 1.2 } />
            <ThreeDCircle position={[ -3, 3, 0 ]} scale={ 0.3 } />
            <ThreeDCircle position={[ 4, -3, 0 ]}  scale={ 0.5 } />
            <ThreeDCircle position={[ 5, 4, 0 ]} scale={ 1.2 } />
            <ThreeDCircle position={[ 2, 0, 0 ]}  scale={ 0.5 } />
            <ThreeDCircle position={[ -4, -4, 0 ]} scale={ 1.7 } />
            <ThreeDCircle position={[ -6, 4, 0 ]} scale={ 1.2 } />
          </ThreeDWrapper> */}
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
