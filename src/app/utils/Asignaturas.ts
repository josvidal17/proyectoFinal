export interface AsignaturaInterfaz{
    nombre:string,
    profesor:string,
    conocimientos:{
        nombre:string,
        imagen:string
    }[],
    ciclo:string,
    curso:number,
}