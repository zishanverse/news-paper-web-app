import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
`

export const ListContainer = styled.div`
  padding: 30px;
  background-color: #000;
`

export const Loading = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ArticleList = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`


// Article Details Components

export const ArticleDetailsCard = styled.div`
  min-height: 100vh;
  padding: 30px;
  background-color: #D8D8D8;
  border-radius: 3px;
`

export const ArticleSourcePublishCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SourcePublishText = styled.p`
    font-family: 'Roboto';
    color: ${props => props.time ? '#000' : '#484848'};
    font-weight: ${props => props.time ? 'bold' : null};
    font-size: ${props => props.description ? "18px" : null};
`

export const Line = styled.hr`
    height: 4px;
    background-color: #000;
    border-radius: 2px;
`

export const ArticleHeading = styled.h1`
  font-family: 'Newsreader';
  color: #000;
  font-weight: bold;
`

export const Img = styled.img`
  height: 50vh;
  border-radius: 10px;
  width: 50%;
  margin-bottom: 10px;
`

export const DescriptionImgCard = styled.div`
  display: flex;
`

export const Content = styled.p`
font-family: 'Roboto';
color: '#000';

font-weight: bold;
font-size: 18px;
`
