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


});

function buscarProyecto(nombreProyecto, proyectos){
  if(proyectos.length === 0){
    return "";
  }
  if(proyectos[0] === nombreProyecto){
    return nombreProyecto;
  }
}
