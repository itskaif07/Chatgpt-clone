let sidebar = document.querySelector('#sidebar')
let sidebar2 = document.querySelector('#sidebar2')
let left = document.querySelector('#left')
let right = document.querySelector('#right')
let gpthead = document.querySelector('#gpthead')
let name = document.querySelector('#name')
let open = document.querySelector('#open')
let close = document.querySelector('#close')
let gpt3 = document.querySelector('#gpt3')
let gptm3 = document.querySelector('#gptm3')
let gpt4 = document.querySelector('#gpt4')
let gptm4 = document.querySelector('#gptm4')
let suggi1 = document.querySelector('#suggi1')
let suggi2 = document.querySelector('#suggi2')
let suggi3 = document.querySelector('#suggi3')
let suggi4 = document.querySelector('#suggi4')


sidebar.addEventListener('click', ()=>{
    sidebar2.style.display = 'block'
    left.style.transform = 'translateX(-100%)'
    right.style.transform = 'translateX(-30%)'
})

sidebar2.addEventListener('click', ()=>{
    sidebar2.style.display = 'none'
    left.classList.toggle('hidden')
    left.style.transform = 'translateX(0%)'
    right.style.transform = 'translateX(0%)'
})



let openSidebar = ()=>{
    open.style.display = 'block'
}

let hideOpenSidebar = ()=>{
    open.style.display = 'none'
}

let closeSidebar =()=>{
    close.style.display = 'block'
}

let hideCloseSidebar =()=>{
    close.style.display = 'none'
}




let gpt3Message = ()=>{
    gptm3.style.display = 'block'
}

let hideGpt3Message = ()=>{
    gptm3.style.display = 'none'
}


let gpt4Message = ()=>{
    gptm4.style.display = 'block'
    gpt3.style.opacity = '0.6'
}

let hideGpt4Message = ()=>{
    gptm4.style.display = 'none'
    gpt3.style.opacity = '1'
}


let suggImage1 = () =>{
    suggi1.style.display = 'block'
}

let hideSuggImage1 = ()=>{
    suggi1.style.display = 'none'
}


let suggImage2 = () =>{
    suggi2.style.display = 'block'
}

let hideSuggImage2 = ()=>{
    suggi2.style.display = 'none'
}


let suggImage3 = () =>{
    suggi3.style.display = 'block'
}

let hideSuggImage3 = ()=>{
    suggi3.style.display = 'none'
}


let suggImage4 = () =>{
    suggi4.style.display = 'block'
}

let hideSuggImage4 = ()=>{
    suggi4.style.display = 'none'
}