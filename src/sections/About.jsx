import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../component/Button'

const About = () => {

    const [hasCopy, setHasCopy] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("adv.mks7171@gmail.com")
        setHasCopy(true);

        setTimeout( () => {
            setHasCopy(false);
        }, 2000)
    }

    return (
        <section className='c-space my-20'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 
            grid-cols-1 gap-5 h-full'>

                {/* ------------------------- ABOUT YOURSELF ------------------ */}
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img 
                            src="/assets/grid1.png" 
                            alt="grid-1"
                            className='w-full sm:h-[276px] h-fit object-contain'
                        />

                        <div>
                            <p className='grid-headtext'>Hi, I'm Suyash</p>
                            <p className='grid-subtext'>
                                With 1 Year of experience, I have honed my skills in frontend
                                and backend development, with a focus on animated 3D websides.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ------------------------- ABOUT TECH STACK ------------------ */}
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img 
                            src="/assets/grid2.png" 
                            alt="grid-2"
                            className='w-full sm:h-[276px] h-fit object-contain'
                        />

                        <div>
                             <p className='grid-headtext'>Tach Stack</p>
                             <p className='grid-subtext'>
                                I specialize in a variety of languages, 
                                frameworks, and tools that allow me to build robust and scalable
                                applications.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ------------------------- TIME ZONES AND LOCATION ------------------ */}
                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe 
                                height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>

                        <div>
                            <p className='grid-headtext'>I work remotely across most</p>
                            <p className='grid-subtext'>
                                I&apos;m based in Nagpur, India and open to remote work worldwide.
                            </p>
                            <Button 
                                name="Contact Me"
                                isBeam
                                containerClass="w-full mt-10"
                            />
                        </div>
                    </div>
                </div>

                {/* ------------------------- PASSION ------------------ */}
                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img 
                            src="/assets/grid3.png" 
                            alt="grid-3"
                            className='w-full sm:h-[266px] h-fit object-contain'
                        />

                        <div>
                             <p className='grid-headtext'>My Passion for Coding</p>
                             <p className='grid-subtext'>
                                I love solving problems and building things through code. 
                                Programming isn&apos;t just my profession—it&apos;s my passion.
                                I enjoy exploring new technologies, and enhancing my skills.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ------------------------- CONTACT ------------------ */}
                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img 
                            src="/assets/grid4.png" 
                            alt="grid-4"
                            className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
                        />

                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>
                                Contact Me
                            </p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img 
                                    src={hasCopy ? "/assets/tick.svg" : "/assets/copy.svg"} 
                                    alt="copy"
                                />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    adv.mks7171@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
