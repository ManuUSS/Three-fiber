import { MeshDistortMaterial, Sphere } from "@react-three/drei"


export const ThreeDCircle = ({ position, scale }) => {
  return (
    <Sphere
        args={[ 1, 100, 200 ]}
        scale={ scale }
        position={ position }
    >
        <MeshDistortMaterial 
            color='#e76f51'
            attach='material'
            distort={ 0.5 }
        />
    </Sphere>
  )
}
