import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

export const ThreeDElement = ({ position }) => {

    const ref = useRef();
    const [ isHovered, setIsHovered ] = useState( false );
    const [ isClicked, setIsClicked ] = useState( false );

    useFrame( ( state, delta  ) => (ref.current.rotation.x += delta ));

    const onClickElement = () => {
        setIsClicked( !isClicked );
    }
    
    const onHoverElement = () => {
        setIsHovered( true );
    }
    
    const onHoverOutElement = () => {
        setIsHovered( false );
    }

    return (
        <mesh
            ref={ ref }
            scale={ isClicked ? 1.5 : 1 }
            onClick={ onClickElement }
            onPointerOver={ onHoverElement }
            onPointerOut={ onHoverOutElement }
            position={ position }
        >
            <boxGeometry args={[ 2, 2, 2 ]} />
            <meshStandardMaterial 
                color={ isHovered ? 'hotpink' : 'orange' }
            />
        </mesh>
    )
}
