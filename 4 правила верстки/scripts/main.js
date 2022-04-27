const colols = ['red', 'blue', 'green']
let index = 0


setInterval(()=>{
    const coloredElement = document.querySelector('#coloredH3')
    console.log('I am from javascript')
    console.log(coloredElement)
    coloredElement.style.color = colols[index % colols.length]
    index++
}, 1000)

