(() => {


  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit( fruit: string ): boolean {
    const redFruitNames = ['manzana', 'cereza', 'ciruela'];
      
      return redFruitNames.includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores

  type FruitColor = 'red' | 'yellow' | 'purple';
  
  function getFruitsByColor( color: FruitColor ): string[] {
    
    const fruitsByColor = {
      red: ['manzana', 'fresa'],
      yellow: ['piña', 'banana'],
      purple: ['moras', 'uvas']
    }

    if (!Object.keys(fruitsByColor).includes(color)) {
      throw Error('the color must be: red, yellow, purple');
    }

    return fruitsByColor[color]

    // switch (color) {
    //   case 'red':
    //     return ['manzana', 'fresa']
    //     break;
      
    //   case 'yellow':
    //     return ['piña', 'banana']
    //     break;
      
    //   case 'purple':
    //     return ['moras', 'uvas']
    //     break;
    
    //   default:
    //     throw Error('the color must be: red, yellow, purple');
    //     break;
    // }
  }

  // Simplificar esta función
  let isFirstStepWorking  = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking  = true;
  let isFourthStepWorking = true;

  function workingSteps() {

    if(!isFirstStepWorking) return 'First Step Broken'

    if(!isSecondStepWorking) return 'Second Step Broken'

    if(!isThirdStepWorking) return 'Third Step Broken'

    if(!isFourthStepWorking) return 'Fourth Step Broken'

    return 'Workin properly'

  }


  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  //console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




