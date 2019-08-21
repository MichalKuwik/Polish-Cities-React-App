import React from 'react';
import styles from './About.module.scss';

const About = () => (
  <section className={styles.section}>
    <h2 className={styles.header}>Słowem wstępu...</h2>
    <p className={styles.descr}>
      Witam w aplikacji 'Największe Polskie Miasta'
      Stworzyłem API które zawiera 160 miast.
      Jeżeli chcesz proszę ściągnij plik i swobodnie możesz korzystać w swoich projektach.
      Mam nadzieję ,że dzieki temu pojektowi choć trochę odświeżysz wiedzę odnośnie Naszego kraju.
      Jeżeli niema w API miasta w którym mieszkasz, lub jest Ci bliskie , nie gniewaj się ;)
      Miłej zabawy ;)
    </p>
  </section>
  
)

export default About;