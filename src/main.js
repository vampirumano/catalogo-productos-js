import './style.css'
import './miestilo.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

//import './moduls/eventos.js'
//import './moduls/logo.js'
import logo from './moduls/logo.js'
import enlacesCategorias from './moduls/enlacesCategorias.js'
import renderizarPorCategoria from './moduls/renderizarCategorias.js'



document.querySelector('#app').innerHTML = `

    
    <div>
    </div>
`

logo();
enlacesCategorias();
renderizarPorCategoria()