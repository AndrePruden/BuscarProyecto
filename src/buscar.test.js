//import sumar from "./sumador.js";

describe("Buscar Proyectos", () => {
  it("No encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    expect(buscarProyecto("ejercicio1", proyectos)).toEqual("");
  });
});

function buscarProyecto(){
  return "";
}
