import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
        initial={{ opacity: 0,}}
        whileInView={{ opacity: 1 }}
        transition={{duration: 1.5}}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute  top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-[#F7AB0A]/80
            ">
                {projects.map((project, index) => (
                    <div
                        className="Ww-screen flex-shrink-0 snap-center flex p-20 md:p-44 h-screen
                    flex-col space-y-5 items-center justify-center"
                    >
                        <motion.img
                             initial={{ y: -300, opacity:0}}
                             whileInView={{ opacity: 1,y:0 }}
                             transition={{duration: 1.2}}
                            // className='h-10 w-10 rounded-full'
                            src="https://images.unsplash.com/photo-1625490939776-17cef70ec079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2aWNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold tetx-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {index + 1} of {projects.length}:
                                </span>
                                &nbsp; UPS CLONE
                            </h4>
                            <p className="text-lg text-center md:text-left">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute  top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
        </motion.div>
    );
}
