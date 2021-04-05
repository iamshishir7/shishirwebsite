import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {FiArrowRight, FiArrowDown, FiDownload} from 'react-icons/fi'
import {motion} from 'framer-motion'
import TextLoop from 'react-text-loop'
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Shishir Timalsina - Personal Website
        </title>
      </Head>
      <div className={styles.landing}>
        <div className={styles.landingleft}>
          <div className={styles.wrapper}>
          
         
          <motion.h1 initial={{ x : -250, opacity:0}} animate={{ x : 0, opacity:1 }} className={styles.title}>SHISHIR TIMALSINA</motion.h1>
          <motion.h3 initial={{ x : -250, opacity:0}} animate={{ x : 0, opacity:1 }} className={styles.subtext}>
          <TextLoop springConfig={{ stiffness: 180}}>

            <div><span className={styles.subtextitalic}>Full-Stack</span> Web Developer</div>
            <div><span className={styles.subtextitalic}>A Young</span> Tech Enthusiast</div>
            <div><span className={styles.subtextitalic}>Part-Time</span> Blogger</div>
            <div><span className={styles.subtextitalic}>Based in</span> Sydney</div>
            </TextLoop>
          </motion.h3>
          <div className={styles.buttongroup}>
            <motion.button initial={{y:150, opacity:0}} animate={{y:0, transition:{delay:0.5, duration:0.1, stiffness:100, type:'spring'}, opacity:1}} className={styles.homebutton}><span className={styles.buttonicons}><FiArrowDown size={20} style={{margin:'0px 5px' }} /></span>Portfolio</motion.button>
            <motion.button initial={{y:150, opacity:0}} animate={{y:0, transition:{delay:0.8, duration:0.05, stiffness:100, type:'spring'}, opacity:1}} className={styles.homebutton}><span className={styles.buttonicons}><FiDownload size={20} style={{margin:'0px 5px'}}/></span>Resume</motion.button>
            
          </div>
          </div>
        </div>
        <div className={styles.landingright}>
          <div className={styles.wrapper}>
            <motion.h1>
              Recent Posts
            </motion.h1>
            <motion.h3>
              This Section is Under-Construction
            </motion.h3>
            <motion.button initial={{y:150, opacity:0}} animate={{y:0, transition:{delay:0.5, duration:0.1, stiffness:100, type:'spring'}, opacity:1}}><span className={styles.buttonicons}><FiArrowRight size={20} style={{margin:'0px 5px' }} /></span>View All</motion.button>
          </div>
        </div>

      </div>
    </div>
  )
}
