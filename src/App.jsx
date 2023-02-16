import { SectionFull, ThreeDElement, ThreeDWrapper } from "./components"


function App() {
  return (
    <SectionFull>
      <ThreeDWrapper>
        <ThreeDElement position={[ 1, 0, 0 ]} />
        <ThreeDElement position={[ -2, 0, 0 ]} />
      </ThreeDWrapper>
    </SectionFull>
  )
}

export default App
