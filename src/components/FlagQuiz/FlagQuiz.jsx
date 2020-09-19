import React, {useEffect, useState} from "react";
import {BaseCountry, CounterText, FlagCell, FlagsZone, HeaderText, QuizWrapper} from "./styles"
import FlagItem from "./FlagItem";
import DroppableZone from './DroppableZone';
import {getSvg, randomElements, randomNumbers} from '../../utils/utils';
import countries from 'svg-country-flags/countries.json'
import {constants} from './constants';

const generateStage = () => {
    const shortNames = Object.entries(countries).map(([key,]) => {
        return key
    })
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


const FlagQuiz = () => {
    // setting
    // stateQuiz
    const [flags, setFlags] = useState([])
    const [base, setBase] = useState([])
    const [counter, setCounter] = useState(0)

    //timeout setting
    const [dropZoneBG, setBG] = useState(constants.dropZone.color.default)
    const [dropZoneText, setText] = useState(constants.dropZone.text.default)
    const [dropZoneSVG, setSVG] = useState(null)


    // set state func
    const setDropZoneData = (background, text, svg) => {
        setBG(background)
        setText(text)
        setSVG(svg)
    }
    const updateFlags = () => {
        const gameStage = generateStage()
        setFlags(gameStage.flags)
        setBase([gameStage.baseName, gameStage.baseShortName])
    }

    // func comp will mount
    useEffect(() => {
        updateFlags()
    },[])

    const doneFlag = (svg) => {
        setDropZoneData(constants.dropZone.color.correct, constants.dropZone.text.correct, svg)
        setTimeout( () => {
            setDropZoneData(constants.dropZone.color.default, constants.dropZone.text.default , null)
            setCounter(value=>value+1)
            updateFlags()
        },constants.quiz.sleep)
    }

    const wrongFlag = () => {
        setDropZoneData(constants.dropZone.color.wrong, constants.dropZone.text.wrong, null)
        setTimeout(()=> {
            setDropZoneData(constants.dropZone.color.default, constants.dropZone.text.default, null)
        }, constants.quiz.sleep)
    }

    // RENDER METHODS
    const renderFlagZone = () => {
        return (
            <FlagsZone>
                {flags.map((flag, index) => (
                    <FlagCell key={index}>
                        <FlagItem name={flag.name}
                                  shortName={flag.shortName}
                                  svg={flag.svg}
                                  doneFlag={doneFlag}
                                  wrongFlag={wrongFlag}
                        />
                    </FlagCell>
                ))}
            </FlagsZone>
        )
    }

    return (
        <QuizWrapper>
            <HeaderText>Welcome to Flag Quiz</HeaderText>
            <CounterText>{counter}</CounterText>
            <BaseCountry>{base[0]}</BaseCountry>
            <DroppableZone
                background={dropZoneBG}
                text={dropZoneText}
                base={base[1]}
                svg={dropZoneSVG}
            />

            {renderFlagZone()}
        </QuizWrapper>
    )

}

export default FlagQuiz