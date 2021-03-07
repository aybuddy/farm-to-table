import React from 'react';
import { HeroContainer } from './HeroSection.styles';

const HeroSection = ({ title }) => {
  return (
    <HeroContainer>
      <h1>{title}</h1>
    </HeroContainer>
  );
};

export default HeroSection;
