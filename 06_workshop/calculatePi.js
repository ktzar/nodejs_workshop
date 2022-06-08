function calculatePi(pts){
    let pointsThatSatisfyTheFormula = 0;

    for( let i = 0; i < pts;i++ ){
        let x = Math.random()
        let y = Math.random()

        if( Math.pow(x, 2) + Math.pow(y, 2) <= 1 ){
            pointsThatSatisfyTheFormula++
        }
    }

    const approximateValueOfPi = 4 * (pointsThatSatisfyTheFormula / pts);

    return approximateValueOfPi;
}

module.exports.calculatePi = calculatePi
