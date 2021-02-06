import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import styles from '../sections/navbar.module.css'


import useDarkMode from 'use-dark-mode';

export default function NavBar() {
  let { t } = useTranslation() 
  let router = useRouter()
  const darkMode = useDarkMode(false);

  return (
    <section className={styles.nav}>
      
      <h1 className={styles.nav_item}>
        <Link href="/docs">
          <a>{t("landing:Docs")}</a> 
        </Link>
      </h1>
      <Link style={{placeSelf: "center"}} href="/">
        <Image
          src="/img/logo.gif"
          alt="urcode"
          width={64}
          height={64}
          style          
        />
      </Link> 
      <div className={styles.dropdown}>
        <h1 className={styles.dropbtn}>
          <i className={"fas fa-language"}></i> {router.locale}
        </h1>
        <div className={styles.dropdownContent}>
          {router.locales.map((l) => (
            <Link key={l} href={router.asPath} locale={l}>
              <a>{l}</a>
            </Link>
          ))}
        </div>
      </div>
      <div style={{position:'absolute', right:30}}>
      <a onClick={darkMode.enable}>
                <Image
                    src="/img/moon.png"
                    alt="light"
                    width={48}
                    height={48}                    
                />
            </a> 
      <a onClick={darkMode.disable}>
                <Image
                    src="/img/sun.png"
                    alt="light"
                    width={48}
                    height={48}                    
                />
            </a>                 
    </div>
    </section>
  )
}
  