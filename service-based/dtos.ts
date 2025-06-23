export class CarritoDTO {
  id: string;
  clienteId: string;
  empresaId: string;
  items: CarritoItemDTO[];
  creadoEn: Date;
  actualizadoEn: Date;
}

export class CarritoItemDTO {
  id: string;
  productoId?: string;
  servicioId?: string;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}
export class PedidoDTO {
  id: string;
  clienteId: string;
  empresaId: string;
  total: number;
  estado: 'pendiente' | 'pagado' | 'enviado' | 'entregado' | 'cancelado';
  metodoPagoId: string;
  direccionEnvio?: string;
  creadoEn: Date;
  actualizadoEn: Date;
  items: PedidoItemDTO[];
}

export class PedidoItemDTO {
  id: string;
  productoId?: string;
  servicioId?: string;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}
export class InventarioDTO {
  id: string;
  productoId: string;
  empresaId: string;
  cantidadDisponible: number;
  ultimaActualizacion: Date;
}
export class MetodoPagoDTO {
  id: string;
  nombre: string;
  tipo: 'tarjeta' | 'transferencia' | 'efectivo' | 'wallet' | 'otro';
  descripcion?: string;
  activo: boolean;
}
