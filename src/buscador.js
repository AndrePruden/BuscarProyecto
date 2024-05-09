function buscarProyecto(nombreProyecto, proyectos){
  let proyectosEncontrados = [];
  let cantidad = 0;
  if(proyectos.length === 0){
    return "";
  }
  for(const proyecto of proyectos){
    if(proyecto.startsWith(nombreProyecto)){
      proyectosEncontrados.push(proyecto);
      cantidad += 1;
    }
  }

  if(cantidad > 1){
    return proyectosEncontrados;
  }
  if(cantidad === 1){
    return proyectosEncontrados[0];
  }
  else{
    return "";
  }

}

export default buscarProyecto;