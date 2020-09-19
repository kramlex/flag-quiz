import styled from 'styled-components'

export const QuizWrapper = styled.div`
  width: 800px;
  //height: 600px;
  border: 1px solid #767676;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  
`

export const HeaderText = styled.h1`
  padding: 20px;
  font-family: "Courier New",sans-serif;
  margin: 0;
`

export const StartButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: 1.5rem;
  color: rgb(106, 163, 137);
  font-weight: 700;
  text-transform: uppercase;
  font-family: inherit;
  padding: 1em 2em;
  border: 2px solid rgb(106, 163, 137);;
  border-radius: 1em;
  background: rgb(205, 255, 232);
  transform-style: preserve-3d;
  transition: all 175ms cubic-bezier(0, 0, 1, 1);
  
  ::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(150, 232, 195);
    border-radius: inherit;
    box-shadow: 0 0 0 2px rgb(121, 186, 156), 0 0.75em 0 0 rgb(106, 163, 137);;
    transform: translate3d(0, 0.75em, -1em);
    transition: all 175ms cubic-bezier(0, 0, 1, 1);
  }
  :hover {
    background: rgb(187, 232, 211);
    transform: translate(0, 0.375em);
  }
  :hover::before {
    transform: translate3d(0, 0.75em, -1em);
  }
  :active {
    transform: translate(0em, 0.75em);
  }
  :active::before {
    transform: translate3d(0, 0, -1em);
    box-shadow: 0 0 0 2px rgb(121, 186, 156), 0 0.25em 0 0 rgb(121, 186, 156);
  }
`

export const DroppableDiv = styled.div`
  width: 300px;
  height: 200px;
  background: ${props => props.backgroundColor};
  border: 1px solid rgba(168,168,168,0.25);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const FlagsZone = styled.div`
  margin: 25px 0 0 0 ;
  display: inline-flex;
`

export const FlagDiv = styled.div`
  //width: 180px;
  //height: 120px;
  opacity: ${props => props.opacity};
  visibility: ${props => props.visibility};
  //background: rgba(0,31,224,1);
  cursor: grab;
`

export const FlagImage = styled.img`
  width: 180px;
  min-width: 20px;
  border: 1px solid rgba(0,0,0,0.33);
`


export const FlagCell = styled.div`
  padding: 20px;
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(62,62,62,0.2);
  border-radius: 15px;
  background: #f6f6f6;
`

export const BaseCountry = styled.h2`
  font-family: 'Courier New',sans-serif;
`

export const DroppableText = styled.span`
  text-align: center;
  margin: 0;
  max-width: 100px;
  font-family: "Courier New",sans-serif;
  color: rgba(5,1,1,0.55);
 
`

export const CounterText = styled.h2`
  font-family: "Courier New",sans-serif;
  text-align: center;
`