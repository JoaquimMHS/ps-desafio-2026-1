import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                

                <div id="about" className={styles.section}>
                    <h2 className={styles.title}>Sobre nós</h2>
                    <p className={styles.text}>
                        Somos uma loja dedicada a oferecer os melhores produtos esportivos do mercado. 
                        Nosso objetivo é entregar qualidade e performance para os seus treinos.
                    </p>
                </div>
                <div id="contact" className={styles.section}>
                    <h2 className={styles.title}>Contato</h2>
                    <p className={styles.text}>Email: atendimento@sportsnut.com.br</p>
                    <p className={styles.text}>Telefone: (27) 99999-9999</p>
                    <p className={styles.text}>Endereço: Av. Jones dos Santos Neves, 123 - Centro</p>
                </div>

            </div>
        </footer>
    );
}