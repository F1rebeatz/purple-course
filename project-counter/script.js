function calculateProjectCost(projectHours, daysLeft) {
  const hourlyRate = 80;
  const dailyWorkHours = 5;
  const workDaysPerWeek = 5;
  const totalWorkHours = dailyWorkHours * workDaysPerWeek;

  const availableWorkDays = workDaysPerWeek * Math.floor(daysLeft / 7);
  const remainingDays = daysLeft % 7;
  const availableWorkHours =
    availableWorkDays * dailyWorkHours + remainingDays * dailyWorkHours;

  // Check if available work hours are sufficient for the project
  const hasTimeForProject = availableWorkHours >= projectHours;

  // Calculate project cost
  const projectCost = projectHours * hourlyRate;

  // Output results to console
  console.log(`Will I have time for the project? ${hasTimeForProject}`);
  console.log(`How much should I ask for the project? $${projectCost}`);

  // Return the project cost
  return projectCost;
}

console.log(calculateProjectCost(40, 11));
