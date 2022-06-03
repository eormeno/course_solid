(() => {

    function isRedFruit(fruit: string): boolean {
        return ['manzana', 'cereza', 'ciruela'].includes(fruit)
    }

    type FruitColor = 'red' | 'yellow' | 'purple'

    function getFruitsByColor(color: FruitColor): string[] {

        const colorFruits =
        {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        }

        if (!Object(colorFruits).keys.includes(color))
            throw Error('the color must be: red, yellow, purple')

        return colorFruits[color]
    }

    // Simplificar esta función
    let isFirstStepWorking = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking = true;
    let isFourthStepWorking = true;

    interface WorkingStep {
        name: string
        isWorking: boolean
    }

    let workingSteps: WorkingStep[] = [
        { name: 'First', isWorking: true },
        { name: 'Second', isWorking: true },
        { name: 'Third', isWorking: true },
        { name: 'Fourth', isWorking: true }]

    let workingSteps2 = {
        first: true,
        second: true,
        third: true,
        fourth: true
    }

    function checkWorkingSteps() {

        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: checkWorkingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
