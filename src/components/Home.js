import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        
            <Container>

            <Section 
              title="Model S"
              description="Order Online for Toucheless Delivery"
              backgroundImg= "model-s.jpg"
              leftBtnText="Custom order"
              rightBtntext="Existing inventory"
            />
            <Section 
              title="Model y"
              description="Order Online for Toucheless Delivery"
              backgroundImg= "model-y.jpg"
              leftBtnText="Custom order"
              rightBtntext="Existing inventory"
            
            />

            
            </Container>
           
        
    );
}

export default Home;

const Container = styled.div `
height: 100vh;
`