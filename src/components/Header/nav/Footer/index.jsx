import styles from './style.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
        <a href="https://pauline-devs.github.io/skills-checking/" target='_blank' style={{textDecoration:'none', color:'white'}}>CV online</a>
        <a href="https://www.behance.net/paulinestudio" target='_blank' style={{textDecoration:'none', color:'white'}}>Behance</a>
        <a href="https://github.com/pauline-devs?tab=repositories" target='_blank' style={{textDecoration:'none', color:'white'}}>Github</a>
        <a href="https://www.malt.fr/profile/paulinerondeau1" target='_blank' style={{textDecoration:'none', color:'white'}}>Malt</a>
    </div>
  )
}
