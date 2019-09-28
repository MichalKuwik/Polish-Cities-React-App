import React from 'react';
import PropTypes from 'prop-types';
import surfaceImg from '../../assets/img/soil.png';
import populImg from '../../assets/img/family.png';
import voivodeshipImg from '../../assets/img/map.png';
import {ItemWrapper,HeaderItem,Info,ImageIcon,Image} from './ItemStyled';

function Item({city}){
  return(
    <ItemWrapper>
      <HeaderItem>{city.name}</HeaderItem>
      <Info>
        <ImageIcon
          src={voivodeshipImg} 
          alt=''
          />Wojewódźtwo: {city.voivodeship}
        </Info>
      <Info>
        <ImageIcon 
          src={populImg} 
          alt=''
          />Populacja: {city.population} mieszkańców
      </Info>
      <Info>
        <ImageIcon 
          src={surfaceImg} 
          alt=''
          />Obszar: {city.surface} km²
      </Info>
      <Image 
        src={city.img} 
        alt="img"
        />
    </ItemWrapper>
  )
}

Item.propTypes = {
  city: PropTypes.object.isRequired,
}

export default Item;