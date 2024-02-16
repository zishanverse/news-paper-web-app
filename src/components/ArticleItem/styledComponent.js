import styled from 'styled-components'

export const ItemCard = styled.div`
    width: 30vw;
    border-radius: 10px;
    background-color: #fff;
    height: 360px;
    box-shadow: 0px 0px 5px 0px #fff;
    margin-bottom: 20px;
    @media (max-width: 767px) {
        width: 40vw;
    }
    @media (max-width: 575px) {
        width: 87vw;
    }
`

export const Img = styled.img`
  width: 100%;
  height: 50%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const ItemCardContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 45%;
  justify-content: space-between;
`

export const ItemHead = styled.h1`
  font-size: ${props => props.content ? '13px' :'17px'};
  font-family: 'Roboto';
  color: ${props => props.content ? '#4d4e4f' :'#000'};
`

export const ItemBtn = styled.button`
  border: 0px;
  border-radius: 10px;
  width: 100px;
  height: 30px;
  color: #fff;
  font-size: 13px;
  font-family: 'Roboto';
  background-color: #000;
`