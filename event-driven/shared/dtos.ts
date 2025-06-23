export class ProductoDTO {
  id: string;
  nombre: string;
  descripcion?: string;
  precio: number;
  stock: number;
  categoriaId: string;
  proveedorId: string;
  empresaId: string;
  activo: boolean;
}

export class ServicioDTO {
  id: string;
  nombre: string;
  descripcion?: string;
  precio: number;
  duracionEstimadaMinutos: number;
  categoriaId: string;
  proveedorId: string;
  empresaId: string;
  activo: boolean;
}
export class CatalogoDTO {
  id: string;
  nombre: string;
  descripcion?: string;
  empresaId: string;
  productos: string[]; // ids de productos
  servicios: string[]; // ids de servicios
}
export class CategoriaDTO {
  id: string;
  nombre: string;
  descripcion?: string;
  empresaId: string;
  tipo: 'producto' | 'servicio';
}
export class ProveedorDTO {
  id: string;
  nombre: string;
  correo: string;
  telefono?: string;
  direccion?: string;
  empresaId: string;
  activo: boolean;
}
export class EmpresaDTO {
  id: string;
  nombre: string;
  nit: string;
  direccion?: string;
  telefono?: string;
  correo?: string;
  activa: boolean;
}
export class RolDTO {
  id: string;
  nombre: string;
  descripcion?: string;
  permisos: string[]; // ids de permisos
}
export class UsuarioDTO {
  id: string;
  nombre: string;
  correo: string;
  contrasena: string;
  rolId: string;
  empresaId: string;
  activo: boolean;
}
export class PermisoDTO {
  id: string;
  nombre: string;
  descripcion?: string;
  modulo: string;
}
export class ClienteDTO {
  id: string;
  nombre: string;
  correo: string;
  telefono?: string;
  direccion?: string;
  empresaId: string;
  activo: boolean;
}
