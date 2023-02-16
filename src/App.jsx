import { SectionFull, ThreeDCircle, ThreeDElement, ThreeDWrapper } from "./components"


function App() {
  return (
    <>
      <SectionFull>
        <div className="d-flex">
          <div>
            
          </div>
          <ThreeDWrapper>
            <ThreeDElement position={[ 1, 0, 0 ]} />
            <ThreeDElement position={[ -2, 0, 0 ]} />
          </ThreeDWrapper>
        </div>
      </SectionFull>
      <SectionFull>
        <ThreeDWrapper
          className="canvas-circle"
        >
          <ThreeDCircle position={[ 2, 0, 0 ]} />
          <ThreeDCircle position={[ -4, 0, 0 ]} />
        </ThreeDWrapper>
      </SectionFull>
    </>
  )
}

export default App
