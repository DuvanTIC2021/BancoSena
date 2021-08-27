app = new Vue({
    el: "#app",
    data: {
        //definimos las variables que vamos a utilizar
        saldo: 500000,
        opcValor: 0,
        valor: 0,
        arrayValores: []
    },
    methods: {
        getValor() {
            if (this.opcValor == "1") {
                this.valor = 10000;
            } else if (this.opcValor == "2") {
                this.valor = 20000;
            } else if (this.opcValor == "3") {
                this.valor = 50000;
            }
        },
        validarSaldo() {
            if (this.valor > this.saldo) {
                Swal.fire("Error en saldo!", "Fondos insuficientes!", "error");
                return false;
            } else {
                return true;
            }
        },
        procesar() {

            var rta = this.validarSaldo();
            if (rta) {
                //   ok
                this.retirarDinero();
                this.agregarDetalle();
            } else {
                //   no hay plata
            }
        },
        retirarDinero() {
            this.saldo -= this.valor;
            Swal.fire(
                "Operación Exitosa!",
                "Su dinero fue debitado correctamente su nuevo saldo es " + this.saldo,
                "success"
            );
        },
        agregarDetalle() {
            this.arrayValores.push(this.valor);
        }
    },
    computed: {

    },
});