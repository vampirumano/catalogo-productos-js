import data from './datos/datos';

const contenedorProductos = document.querySelector('.contenedor-productos');
const primerosSeis = data.slice(0,6);

const productos = primerosSeis.forEach((producto)=> {
    const productoElement = document.createElement('article');
    productoElement.classList.add('producto');
    productoElement.href = '#';
    
    const plantilla = `
          
        <a href="#" class="producto">
            <img src="${producto.imagen[0]}" alt="">
            <h3>${producto.nombre}</h3>
            <p class="precio">${producto.precio} USD</p>
        </a>           
             
        
    `
    productoElement.innerHTML=plantilla;
    contenedorProductos.append(productoElement)
    
});



