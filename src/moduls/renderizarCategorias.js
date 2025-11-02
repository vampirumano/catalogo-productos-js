import data from './datos/datos';
const contenedorProductos = document.querySelector('.contenedor-productos');



const renderizarPorCategoria = ()=>{
    const params = new URLSearchParams(window.location.search);
    const categoriaSeleccionada = params.get('categoria')
    const productosFiltrados = categoriaSeleccionada
    ? data.filter(p=>p.categoria===categoriaSeleccionada)
    :data;
    
    productosFiltrados.forEach((producto)=>{
        const enlaceProducto = document.createElement('a');
        enlaceProducto.href = `index.html`;
        enlaceProducto.classList.add('producto');
        enlaceProducto.innerHTML = `
            <img src="${producto.imagen[0]}" alt="">
            <h3>${producto.nombre}</h3>
            <p class="precio">${producto.precio} USD</p>            
        `;
        contenedorProductos.append(enlaceProducto);
        console.log(enlaceProducto)
    })

    

  
}

export default renderizarPorCategoria;

//renderizarPorCategoria()