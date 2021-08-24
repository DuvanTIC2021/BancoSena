var app = new Vue({
    el: "#app",
    data: {
        cantBod1: 100000,
        cantBod2: 230000,
        isBoton: 1,
        isVenta: 0,
        cant: 0,
        con: 0,
        opBod: 0,
        opMed: 0,
        ventaBod1: 0,
        ventaBod2: 0,
    },
    methods: {
        verVentas() {
            this.isBoton = 0;
            this.isVenta = 1;
        },
        ocultarVentas() {
            this.isBoton = 1;
            this.isVenta = 0;
        },
        descBodega() {
            if (this.opMed == 1) {
                if (this.opBod == 1) {
                    this.cantBod1 -= this.cant / 2;
                    this.ventaBod1 += this.cant / 2;
                } else {
                    this.cantBod2 -= this.cant / 2;
                    this.ventaBod2 += this.cant / 2;
                }
            } else {
                if (this.opBod == 1) {
                    this.cantBod1 -= this.cant;
                    this.ventaBod1 += this.cant;
                } else {
                    this.cantBod2 -= this.cant;
                    this.ventaBod2 += this.cant;
                }
            }
        },
        getVentaBod1() {
            return `Bodega 1: ${this.ventaBod1}`;
        },
        getVentaBod2() {
            return `Bodega 2: ${this.ventaBod2}`;
        }
    },
});