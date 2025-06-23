
 abstract class catalog {
  id: string;
  nombre: string;
  descripcion?: string;
  empresaId: string;
  productos: string[]; // ids de productos
  servicios: string[];

constructor(id,nombre,descripicion,empresaId,proudctos,servicios){}

getcatalog():catalog{
    return this
}



}
