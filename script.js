function calculateCycle() {
    const cycleLength = parseInt(document.getElementById("cycle-length").value);
    const periodLength = parseInt(document.getElementById("period-length").value);
    const lastPeriodDate = new Date(document.getElementById("last-period-date").value);
    
    if (isNaN(cycleLength) || isNaN(periodLength) || !lastPeriodDate) {
        alert("Please fill in all fields.");
        return;
    }
    
    // Calculate next expected period date
    let nextPeriod = new Date(lastPeriodDate);
    nextPeriod.setDate(lastPeriodDate.getDate() + cycleLength);

    // Calculate ovulation day (approximately 14 days before next period)
    let ovulationDate = new Date(nextPeriod);
    ovulationDate.setDate(nextPeriod.getDate() - 14);

    const cycleResult = `
        Your next period will start on: <strong>${nextPeriod.toDateString()}</strong><br>
        Your estimated ovulation date is: <strong>${ovulationDate.toDateString()}</strong><br>
        Remember, this is just an estimate and may vary!
    `;
    
    document.getElementById("cycle-result").innerHTML = cycleResult;
    document.getElementById("output-container").style.display = 'block';
}
