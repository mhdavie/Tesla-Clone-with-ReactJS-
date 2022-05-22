import React from 'react';
import styled  from "styled-components"

function Section({ title, description, backgroundImg, leftBtn, rightBtn }) {
    return (
      <Wrap bgImg={backgroundImg}>
        
          <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
          </ItemText>
        
  
        <Buttons>
          
            <ButtonGroup>
              <LeftButton>
                  {leftBtn}
              </LeftButton>

              <RightButton>
                  {rightBtn}
            </RightButton> 
            
            </ButtonGroup>
          
  
          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </Wrap>
    );
  }
  
  export default Section;
  
  const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    object-fit: cover;
    background-position: 50% 50%;
    backgroun-repeat: no-repeat;
    background-image: url("/images/model-s.jpg");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${(props) => `url("/images/${props.bgImg}")`};
  `;
  
  const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
  `;
  
  const ButtonGroup = styled.div`
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;
  
  const LeftButton = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 13px;
    cursor: pointer;
    letter-spacing: 1.5px;
    margin: 4px 8px;
    margin-bottom: 32px;
    padding: 5px 40px;
  `;
  
  const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
  `;
  
  const DownArrow = styled.img`
    height: 40px;
    margin-top: 20px;
    oveflow-x: hidden;
    animation: animateDown infinite 1.5s;
  `;
  
  const Buttons = styled.div``;