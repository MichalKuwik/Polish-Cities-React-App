import React from 'react';
import {Section,Header,Description,Span} from './AboutStyled';

const About = () => (
  <Section>
    <Header>Słowem wstępu...</Header>
    <Description>
      Witaj w aplikacji<br /> <Span>
        'Polskie Miasta'</Span>
        <br/>
      Stworzyłem API które zawiera 160 miast.
      <br />Jeżeli chcesz proszę ściągnij plik i swobodnie możesz korzystać w swoich projektach.<br/>
      Mam nadzieję ,że dzieki temu pojektowi choć trochę odświeżysz wiedzę odnośnie Naszego kraju.
      <br/>Jeżeli niema w API miasta w którym mieszkasz, lub jest Ci bliskie , nie gniewaj się ;)
      <br/>Pamiętaj to tylko zabawa ;)
    </Description>
  </Section>
  
)

export default About;