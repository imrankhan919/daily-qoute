// Selects

let ctaBtn = document.querySelector(".cta-btn")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")

ctaBtn.addEventListener("click" , getData)


// Promise Handleing with Promise

// function getData(){
//     const res = fetch('https://api.quotable.io/random')
//     .then((res) => res.json())
//     .then( (data) => console.log(data) )
// }

// getData()


async function getData(){
    const res = await fetch('https://api.quotable.io/random')
    const data = await res.json()
    const {content , author} = data
    h1.innerText = content
    h2.innerText = author
    console.log(data)
}

// setTimeout(()=>{
//     getData()
// },2000)



