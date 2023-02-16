import { MeshDistortMaterial, Sphere } from "@react-three/drei"
import { useRef, useState } from "react";


export const ThreeDCircle = ({ position, scale }) => {

  const ref = useRef();
  const [ isHovered, setIsHovered ] = useState( false );
  const [ initialScale, setInitalScale ] = useState( scale );
  const [ positionSphere, setPositionSphere ] = useState( position );

  const onHoverElement = () => {
    setIsHovered( true );
  }

  const onHoverOutElement = () => {
    setIsHovered( false );
  }

  return (
    <Sphere
      ref={ ref }
      args={[ 1, 100, 200 ]}
      scale={ initialScale }
      position={ positionSphere }
      onPointerOver={ onHoverElement }
      onPointerOut={ onHoverOutElement }
    >
        <MeshDistortMaterial 
            color={ isHovered ? '#e76f51' : '' }
            attach='material'
            distort={ 0.5 }
        />
    </Sphere>
  )
}
