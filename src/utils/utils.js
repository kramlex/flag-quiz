

export const randomShuffle = (unshuffled) => {
    return unshuffled
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
}

export const randomNumbers = ({n, count} ) => {
    const mas = randomShuffle([...Array(n).keys()])
    return mas.slice(0, count)
}

export const randomElements = (array, n) => {
    const randomNum = randomNumbers({n : array.length, count : 3})
    const shuffled = randomShuffle(array)
    return randomNum.map(elem => (shuffled[elem]))
}

export const getSvg = (elem) => {
    const countryShortName = elem.toLowerCase()
    // console.log(countryShortName)

    return require(`svg-country-flags/svg/${countryShortName}.svg`)

}