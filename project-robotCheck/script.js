function checkRobot() {
  const answer = prompt(
    "Пожалуйста ответьте на вопрос: Сколько будет 7 + или - 15?"
  );
  if (answer === "-8" || answer === "28") {
    console.log("Success");
  } else if (answer === "Я не робот") {
    console.log("Success");
  } else {
    console.log("You are a robot!");
  }
}
