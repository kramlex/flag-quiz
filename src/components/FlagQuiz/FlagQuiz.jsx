import React, {useEffect, useState} from "react";
import {BaseCountry, FlagCell, FlagsZone, HeaderText, QuizWrapper, StartButton} from "./styles"
import FlagItem from "./FlagItem";
import DroppableZone from './DroppableZone';
import {getSvg, randomElements, randomNumbers, randomShuffle} from '../../utils/utils';
import countries from 'svg-country-flags/countries.json'

const shortNames = Object.entries(countries).map(([key,]) => {
    return key
})
const bgDefault = '#f6f6f6'
const textDefault = `PUT THE FLAG HERE`

const generateStage = () => {
    const fl = randomElements(shortNames,3)
    const baseIndex = randomNumbers({n:3,count:1})
    return  {
        baseShortName: fl[baseIndex],
        baseName: countries[fl[baseIndex]],
        flags: fl.map(element => {
            return {
                shortName: element,
                name: countries[element],
                svg: getSvg(element)
            }
        })
    }
}


const FlagQuiz = (props) => {
    // setting
    // stateQuiz
    const [gameStarted, setGameStarted] = useState(false)
    const [flags, setFlags] = useState([])
    const [base, setBase] = useState([])
    const [counter, setCounter] = useState(0)

    //timeout setting
    const [wait, setWait] = useState(false)
    const [dropZoneBG, setBG] = useState(bgDefault)
    const [dropZoneText, setText] = useState(textDefault)
    const [dropZoneSVG, setSVG] = useState(null)

    const updateFlags = () => {
        const gameStage = generateStage()
        setFlags(gameStage.flags)
        setBase([gameStage.baseName, gameStage.baseShortName])
    }

    // func comp will mount
    useEffect(() => {
        updateFlags()
    },[])

    // useEffect(() => {},[dropZoneBG,dropZoneText])


    const doneFlag = (svg) => {
        setBG('#30dc70')
        setText('')
        setSVG(svg)
        setTimeout( () => {
            setBG(bgDefault)
            setText(textDefault)
            setSVG(null)
            updateFlags()
        },1500)
    }
    const wrongFlag = () => {
        setBG('#d53636')
        setText('WRONG')
        setTimeout(()=> {
            setBG(bgDefault)
            setText(textDefault)
        }, 1500 )
    }

    const renderFlagZone = () => {
        return (
            <FlagsZone>
                {flags.map((flag, index) => {
                    console.log(flag.shortName)
                    return(
                        <FlagCell key={index}>
                            <FlagItem name={flag.name}
                                      shortName={flag.shortName}
                                      svg={flag.svg}
                                      doneFlag={doneFlag}
                                      wrongFlag={wrongFlag}
                            />
                        </FlagCell>
                    )
                })}
            </FlagsZone>
        )
    }
    return (
        <QuizWrapper>
            <HeaderText>Welcome to Flag Quiz</HeaderText>
            <BaseCountry>{base[0]}</BaseCountry>
            <DroppableZone
                background={dropZoneBG}
                text={dropZoneText}
                base={base[1]}
                svg={dropZoneSVG}
            />

            {renderFlagZone()}
            {/*<button onClick={updateFlags}>KEK</button>*/}
            {/*<StartButton>Start</StartButton>*/}
        </QuizWrapper>
    )

}

export default FlagQuiz