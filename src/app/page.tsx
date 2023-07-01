import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="hero-container">
        <div className="hero">
          <h1>
            Hello, I&apos;m Destiya
          </h1>

          <div className="sub-hero">
            <ul className="home-menu">
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/experiences">Experiences</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        
      </div>
  )
}
