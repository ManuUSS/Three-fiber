import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const ThreeDWrapper = ({ children, className  }) => {
  return (
    <Canvas
        className={ className }
    >
        <ambientLight intensity={ 0.5 } />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        { children }
        <OrbitControls enableZoom={ false }/>
    </Canvas>   
  )
}
