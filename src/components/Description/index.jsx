import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';

export default function Index() {

    const phrase = "I use creative coding and design tools to help your project stand out in the digital era.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description} id='about'>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>I combine my passion for mixed media, technology, and storytelling to create interactive experiences at the intersection of art, music, and cyberspace.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button} link="https://pauline-devs.github.io/skills-checking/">
                        <p>Skills online here</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
