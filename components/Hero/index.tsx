import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "../BackgroundCircles"
import Image from "next/image"
import Link from "next/link"
type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, The Name's Radhika",
            'Guy-who-loves-Coffee.tsx',
            '<ButLovesToCodeMore />',
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <Image src={'/user.png'} className="relative object-cover rounded-full h-32 w-32 mx-auto" width={100} height={100} alt="" />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Developer</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className="pt-5">
                    <Link href='#about'>

                        <button className="heroButton">About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href='#skils'>
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className="heroButton">Projects</button>
                    </Link>

                </div>
            </div>

        </div>
    )
}

