/*
Servicio	    ; Emite               ;	Consume
cart-service	; CartUpdated
order-service	; OrderStatusChanged  ; CartUpdated
inventory-service;	StockUpdated    ;	-
notification-service;	NotifyCustomer;	OrderStatusChanged, StockUpdated
supplier-service;	-                 ;	StockUpdated
*/