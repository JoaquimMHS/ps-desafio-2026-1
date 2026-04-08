import Image from "next/image";
import Link from "next/link";
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image src="/assets/images/logo.png" alt="Logo" width={200} height={200} />
            <div className={styles.headerLinks}>
                <Link href="" className={styles.headerLink}>Produtos</Link>
                <Link href="" className={styles.headerLink} >Categorias</Link>
                <Link href="" className={styles.headerLink}>Sobre nós</Link>
                <Link href="" className={styles.headerLink}>Contato</Link>
            </div>
      </div>
    </header>
  )
}