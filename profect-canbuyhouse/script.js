function canBuyHouse(
  depositAmount,
  interestRate,
  housePrice,
  withdrawalDurationInYears
) {
  // Calculate total number of months for the withdrawal duration
  const monthsInWithdrawalDuration = withdrawalDurationInYears * 12;

  // Calculate the monthly interest rate
  const monthlyInterestRate = interestRate / 12 / 100;

  // Calculate the final deposit balance after the withdrawal duration
  const finalDepositBalance =
    depositAmount * (1 + monthlyInterestRate) ** monthsInWithdrawalDuration;

  // Check if the final deposit balance is enough to buy the house
  const canBuyHouse = finalDepositBalance >= housePrice;

  // Calculate the remaining balance after buying the house
  const remainingBalance = finalDepositBalance - housePrice;

  // Output the results to the console
  console.log(`Will Vasya be able to buy the house? ${canBuyHouse}`);
  console.log(`Remaining balance after buying the house: ${remainingBalance}`);

  // Return a boolean value indicating whether Vasya can buy the house
  return canBuyHouse;
}
