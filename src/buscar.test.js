//import sumar from "./sumador.js";

describe("Buscar Proyectos", () => {
  it("No encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    expect(buscarProyecto("ejercicio1", proyectos)).toEqual("");
  });

  it("Encuentra un proyecto cuando el mismo existe en una lista de 1 proyecto", () => {
    let proyectos = [];
    proyectos.push("miUnicoProyecto");
    expect(buscarProyecto("miUnicoProyecto", proyectos)).toEqual("miUnicoProyecto");
  });

  it("Encuentra un proyecto cuando el mismo existe en una lista de varios proyecto", () => {
    let proyectos = [];
    proyectos.push("proyecto1");
    proyectos.push("proyecto2");
    proyectos.push("proyecto3");
    expect(buscarProyecto("proyecto2", proyectos)).toEqual("proyecto2");
  });

  it("Buscar y encontrar mas de una coindencia de proyectos", () => {
    let proyectos = [];
    proyectos.push("proyecto1");
    proyectos.push("proyecto2");
    proyectos.push("proyecto3");
    proyectos.push("proyecto2");
    expect(buscarProyecto("proyecto2", proyectos)).toEqual(["proyecto2","proyecto2"]);
  });

});

function buscarProyecto(nombreProyecto, proyectos){
  let proyectosEncontrados = [];
  let cantidad = 0;
  if(proyectos.length === 0){
    return "";
  }
  for(const proyecto of proyectos){
    if(proyecto === nombreProyecto){
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
