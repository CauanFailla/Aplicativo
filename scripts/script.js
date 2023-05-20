const btns_menu = [...document.querySelectorAll('.divs_menu')]
const titulo = document.querySelector('header > h1')
const secs = [...document.querySelectorAll('.secs_principal')]
const icon = [...document.querySelectorAll('.icon')]
const para = [...document.querySelectorAll('.divs_menu > p')]
const btn_teste = document.querySelector('.btn_começar')
const text_cro = document.querySelector('.depois > p')
const div_depois = document.querySelector('.depois')
const btn_concluir = document.querySelector('.fin')
let temp = 1000
let cont = Number(0)

function desativarSecs() {
    secs.map((s,p)=>{
        s.style.display = 'none'
        btns_menu[p].style.color = 'black'
        icon[p].style.color = 'black'
        para[p].style.color = 'black'
    })
}

btns_menu[1].addEventListener('click',(b)=>{
    b = b.target
    titulo.innerHTML = 'Teste'
    desativarSecs()
    secs[1].style.display = 'flex'
    icon[1].style.color = '#0D37C0'
    para[1].style.color = '#0D37C0'
})

btns_menu[0].addEventListener('click',(b)=>{
    b = b.target
    titulo.innerHTML = 'Inicio'
    desativarSecs()
    secs[0].style.display = 'block'
    icon[0].style.color = '#0D37C0'
    para[0].style.color = '#0D37C0'
})

btns_menu[2].addEventListener('click',(b)=>{
    b = b.target
    titulo.innerHTML = 'Suporte'
    desativarSecs()
    secs[2].style.display = 'block'
    icon[2].style.color = '#0D37C0'
    para[2].style.color = '#0D37C0'
})

btn_teste.addEventListener('click',()=>{
    div_depois.style.display = 'block'
    btn_teste.style.display = 'none'
    let cronometro = setInterval(function() {
        cont += 1
        if (cont < 10) {
            text_cro.innerHTML = `00:0${cont}`
        } else if (cont < 100) {
            text_cro.innerHTML = `00:${cont}`
        }
        
    },temp)
    btn_concluir.addEventListener('click',()=>{
        clearInterval(cronometro)
    })
})




