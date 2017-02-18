function Fibo(n, lista = []) {

	if(n === 0) return;

	if(lista.length == 0){
		console.log(0);
		lista.push(0);
    }
    
	if(lista[lista.length - 1] == 0){
		console.log(1);
		lista.push(1);
    }

	if(lista.length <= n) {
        let conta = lista[lista.length - 1] + lista[lista.length - 2]

        console.log(conta);

        lista.push(conta)

        Fibo(n-1,lista);
	}
} 