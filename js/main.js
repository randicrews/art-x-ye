let yeLength = 0

function getYe(){
    const url = (`https://api.kanye.rest`)
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.querySelector('h1').innerText = data.quote
      yeLength += data.quote.length
      console.log(data.quote, 'quote')
      console.log(yeLength, 'yeLength')
        function getMet(){
            const url = (`https://collectionapi.metmuseum.org/public/collection/v1/objects/${yeLength*18}`)
            fetch(url)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
              document.querySelector('img').src = data.primaryImage
            //   console.log(data.primaryImage, 'img')
              if (data.primaryImage === '' || data.primaryImage === null){
                    // const randomYe = function(){ 
                    //     let yeAss = ['img/ye.webp', 'img/ye1.png', 'img/ye2.jpeg', 'img/ye3.jpg']
                    // console.log(Math.floor(Math.random()), 'math')
                    // document.querySelector('img').src = yeAss[Math.random() * (1 - 4) + 1]}
                    document.querySelector('img').src = 'img/ye2.jpeg'
                //    randomYe
                    return
                
              }
            })
            .catch(err => {
                console.log(`error ${err}`)
            });
    }
    getMet()
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
getYe()
