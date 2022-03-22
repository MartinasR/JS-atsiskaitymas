/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    sum = (pirmasSkaicius, antrasSkaicius) => {
      let atsakymas1 = pirmasSkaicius + antrasSkaicius;
      return atsakymas1;
    };
    subtraction = (pirmasSkaicius, antrasSkaicius) => {
      let atsakymas2 = pirmasSkaicius - antrasSkaicius;
      return atsakymas2;
    };
    multiplication = (pirmasSkaicius, antrasSkaicius) => {
      let atsakymas3 = pirmasSkaicius * antrasSkaicius;
      return atsakymas3;
    };
    division = (pirmasSkaicius, antrasSkaicius) => {
      let atsakymas4 = pirmasSkaicius / antrasSkaicius;
      return atsakymas4;
    };
  }
  
  let testCalculator = new Calculator();
  console.log(
      "Sudėtis: " + testCalculator.sum(20, 10));
  console.log(
    "Atimtis: " + testCalculator.subtraction(30, 15)
  );
  console.log(
    "Daugyba: " + testCalculator.multiplication(20, 4)
  );
  console.log(
      "Dalyba: " + testCalculator.division(100, 2));