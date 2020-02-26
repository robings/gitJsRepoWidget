fetch('./templates.hbs')
    .then((templateData)=> {
        return templateData.text()
    })
    .then((templateData)=>{
        let hbsTemplate = Handlebars.compile(templateData)

        fetch ('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
            .then (function (returnedData) {
                return returnedData.json()
            })
            .then (function (returnedData) {
                let html=''
                for (let i=0; i<3; i++) {
                    html+=hbsTemplate(returnedData.items[i])
                }
                document.querySelector('main').innerHTML=html
            })
    })