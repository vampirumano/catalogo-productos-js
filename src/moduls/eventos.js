import data from './datos/datos';

const contenedorProductos = document.querySelector('.contenedor-productos');
const filtrosCategorias = document.querySelector('.filtros-categorias');

filtrosCategorias.addEventListener('click', (e)=>{
    e.preventDefault();
    const categoria = e.target.dataset.categoria;

    contenedorProductos.innerHTML = '';
        const productosFiltrados = data.filter(producto => producto.categoria === categoria);

        
        productosFiltrados.forEach((producto)=> {
        const productoLink = document.createElement('a');
        productoLink.classList.add('producto');
        productoLink.href = '#';
        productoLink.innerHTML = `
            <img src="${producto.imagen[0]}" alt="">
            <h3>${producto.nombre}</h3>
            <p class="precio">${producto.precio} USD</p>  
        `
        
            contenedorProductos.append(productoLink)


    })
    })


// import data from './datos/datos';

// const contenedorProductos = document.querySelector('.contenedor-productos');
// const filtrosCategorias = document.querySelector('.filtros-categorias');

// filtrosCategorias.addEventListener('click', (e) => {
//   e.preventDefault();
//   const categoria = e.target.dataset.categoria;
//   if (!categoria) return;

//   contenedorProductos.innerHTML = '';
//   const productosFiltrados = data.filter(producto => producto.categoria === categoria);

//   productosFiltrados.forEach(producto => {
//     const productoLink = document.createElement('a');
//     productoLink.classList.add('producto');
//     productoLink.href = '#';

//     productoLink.innerHTML = `
//       <img src="${producto.imagen[0]}" alt="">
//       <h3>${producto.nombre}</h3>
//       <p class="precio">${producto.precio} USD</p>
//     `;

//     contenedorProductos.appendChild(productoLink);
//   });
// });




// contenedorProductos.addEventListener('click', (e)=>{
//     e.preventDefault();
//     const categoria = e.target;
//     console.log(categoria);
//     contenedorProductos.innerHTML = '';
//     const categoriaTres = data.filter(producto => producto.categoria === 'Categoría 3');
//     console.log(categoriaTres)



//     const productos = categoriaTres.forEach((producto)=> {
//     const productoElement = document.createElement('article');
//     productoElement.classList.add('producto');
//     productoElement.href = '#';
    
//     const plantilla = `
          
//         <a href="#" class="producto">
//             <img src="${producto.imagen[0]}" alt="">
//             <h3>${producto.nombre}</h3>
//             <p class="precio">${producto.precio} USD</p>
//         </a>           
             
        
//     `
//     productoElement.innerHTML=plantilla;
//     contenedorProductos.append(productoElement)
    
// });
// })