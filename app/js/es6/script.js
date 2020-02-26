fetch ('https://api.github.com/search/repositories?q=All&sort=stars&order=desc')
.then (function (returnedData) {
    return returnedData.json()
})
.then (function (returnedData) {
    console.log (returnedData)
})