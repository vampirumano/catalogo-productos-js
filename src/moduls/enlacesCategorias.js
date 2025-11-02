import data from './datos/datos'

const menu = document.querySelector('.menu');


const crearEnlaceCategoria = ()=>{
      if (!menu) return;

  const enlaceInicio = document.createElement("a");
  enlaceInicio.href = "index.html";
  enlaceInicio.textContent = "Inicio";
  menu.append(enlaceInicio);
    const categoriaUnica = [...new Set (data.map(categoria =>categoria.categoria))];
    
    categoriaUnica.forEach(categoria =>{
        const enlace = document.createElement('a');
        enlace.dataset.categoria = `${categoria}`;
        enlace.href = `index.html?categoria=${categoria}`;
        enlace.textContent = `${categoria.replace(/-/g, " ")}`
        menu.append(enlace)
        
    })
}

// crearEnlaceCategoria();

export default crearEnlaceCategoria;

