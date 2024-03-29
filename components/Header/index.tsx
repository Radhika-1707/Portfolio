import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
type Props = {}


export default function Header({ }: Props) {
    return (
        <header className=' p-5 sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div className='flex flex-row items-center'
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
            >
                <SocialIcon url="https://twitter.com/jaketrent"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon url="https://twitter.com/jaketrent"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon url="https://twitter.com/jaketrent"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon url="https://twitter.com/jaketrent"
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>
            <Link href='#contact'>

                <motion.div className='flex flex-row items-center cursor-pointer text-gray-300'
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5

                    }}
                >
                    <SocialIcon
                        className='curor-pointer'
                        network='email'
                        fgColor='gray'
                        bgColor='transparent'
                    />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
                </motion.div>
            </Link>

        </header>
    )
}
