import React from 'react';
import '../App.css';
import Footer from './Footer';
import { Canvas } from '@react-three/fiber';
import { Earth } from './Earth';
import Text from './Text';
import styled from "styled-components";
// import ThreeScene from './Earth';

const CanvasContainer = styled.div`
  width: 1800px;
  height: 800px;
`;

const Home = () => {

  return (
    <CanvasContainer> 
      <Text />
    <Canvas>
    <Earth />
    </Canvas>
    <Footer />
    </CanvasContainer>
  );
};

export default Home;
