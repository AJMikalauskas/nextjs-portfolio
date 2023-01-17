import Particles from "react-particles"
import particlesconfig from "./config/particle-config"

const ParticlesBackground = () => {
    return(
        <div className="">
        Test
        <Particles params={particlesconfig}></Particles>
        </div>
    )
}

export default ParticlesBackground;