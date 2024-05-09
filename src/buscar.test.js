import buscarProyecto from "./buscador.js";

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

  it("Buscar y encontrar proyectos cuyo nombre empieza con el criterio de busqueda", () => {
    let proyectos = [];
    proyectos.push("ejercicio1");
    proyectos.push("ejercicio2");
    proyectos.push("proyecto3");
    proyectos.push("proyecto4");
    expect(buscarProyecto("ejerc", proyectos)).toEqual(["ejercicio1","ejercicio2"]);
  });

  it("Buscar y no encontrar proyecto en una lista de proyectos", () => {
    let proyectos = [];
    proyectos.push("proyecto1");
    proyectos.push("proyecto2");
    proyectos.push("proyecto3");
    proyectos.push("proyecto4");
    expect(buscarProyecto("ejercicio1", proyectos)).toEqual("");
  });


});

