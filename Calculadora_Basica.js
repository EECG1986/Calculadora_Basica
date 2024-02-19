function calculadora(operacion, num1, num2) { 
    switch(operacion) { 
        case 'suma': 
            return num1 + num2;
        case 'resta': 
            return num1 - num2; 
        case 'multiplicacion':
            return num1 * num2;           
        case 'division': 
            if (num2 === 0) { 
            return 'Error: División por cero'; 
            } 
            return num1 / num2; 
        default: 
            return 'Operación no válida'; 
    } 
}
console.log(calculadora('suma', 5, 3));  // Resultado: 8
console.log(calculadora('resta', 5, 3)); // Resultado: 2
console.log(calculadora('multiplicacion', 10, 10)); // Resultado: 100
console.log(calculadora('division', 12, 3)); // Resultado: 4
console.log(calculadora('division', 5, 0)); // error

