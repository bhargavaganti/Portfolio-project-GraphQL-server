module.exports = {
    query: (c, s, p = null) => c.query(s, p).then(([res]) => res),
    stringToNumberArray: (str) => str.split(',').map(Number).filter(item => !Number.isNaN(item)),
}