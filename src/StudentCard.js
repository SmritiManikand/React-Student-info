import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import myImage from './output.jpg'; 


const animateBackground = keyframes`
  0% { background-color: #b3e5fc; }
  50% { background-color: #e1f5fe; }
  100% { background-color: #b3e5fc; }
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #a8edea, #fed6e3);
  animation: ${animateBackground} 10s infinite alternate;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #0288d1;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0277bd;
  }
`;


const StudentCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container>
      <Card>
        <Image src={myImage} alt="Eye icon" />
        <h2>Name: Smriti M</h2>
        <p>Registration No: 212221040157</p>
        {isVisible && <p>Department: CSE</p>}
        <Button onClick={toggleVisibility}>
          {isVisible ? 'Hide Details' : 'Show Details'}
        </Button>
      </Card>
    </Container>
  );
};

export default StudentCard;
