export function randomShuffle (unshuffled) {
    return unshuffled
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
}

export function randomNumbers ({n, count} ) {
    const mas = randomShuffle([...Array(n).keys()])
    return mas.slice(0, count)
}

export function randomElements (array, n) {
    const randomNum = randomNumbers({n : array.length, count : n})
    const shuffled = randomShuffle(array)
    return randomNum.map(elem => (shuffled[elem]))
}

export function getSvg (elem) {
    const countryShortName = elem.toLowerCase()
    return require(`svg-country-flags/svg/${countryShortName}.svg`)
}