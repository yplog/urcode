import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'


import styles from '../sections/navbar.module.css'

export default function NavBar() {
  let { t } = useTranslation() 
  let router = useRouter()

  return (
    <section className={styles.nav}>
      <h1 className={styles.nav_item}>
        <Link href="/docs">
          <a>{t("landing:Docs")}</a> 
        </Link>
      </h1>
      <Link href="/">
        <Image
          className={{placeSelf: "flex-end"}}
          src="/img/monochrome-black.svg"
          alt="Picture of the author"
          width={128}
          height={128}
        />
      </Link>
      <div className={styles.dropdown}>
        <h1 className={styles.dropbtn}>
          <i class="fas fa-language"></i> {router.locale}
        </h1>
        <div className={styles.dropdownContent}>
          {router.locales.map((l) => (
            <Link key={l} href={router.asPath} locale={l}>
              <a>{l}</a>
            </Link>
          ))}
        </div>
      </div>
      
    </section>
  )
}
  