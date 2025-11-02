import logo from '../assets/logots.svg'

const crearEncabezado = (sloganText = 'Productos y accesorios de belleza')=>{
    const header = document.getElementById('logo');
    if (!header) return;

    const img = document.createElement('img');
    img.src = logo;
    img.alt = 'Logo de Tapia Store';
    img.classList.add('logo');

    const slogan = document.createElement('p');
    slogan.textContent = sloganText;
    slogan.classList.add('slogan');
    

    
    header.append(img, slogan);
    
    
}

export default crearEncabezado;