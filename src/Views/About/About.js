import React from 'react';
import styles from './About.module.scss';

const About = () => (
  <section className={styles.section}>
    <h2 className={styles.header}>Słowem wstępu...</h2>
    <p className={styles.descr}>
      Witaj w aplikacji<br /> <span className={styles.span}>
        'Polskie Miasta'</span>
        <br/>
      Stworzyłem API które zawiera 160 miast.
      <br />Jeżeli chcesz proszę ściągnij plik i swobodnie możesz korzystać w swoich projektach.<br/>
      Mam nadzieję ,że dzieki temu pojektowi choć trochę odświeżysz wiedzę odnośnie Naszego kraju.
      <br/>Jeżeli niema w API miasta w którym mieszkasz, lub jest Ci bliskie , nie gniewaj się ;)
      <br/>Pamiętaj to tylko zabawa ;)
    </p>
  </section>
  
)

export default About;