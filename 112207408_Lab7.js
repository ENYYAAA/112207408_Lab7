
document.getElementById("submitButton").addEventListener("click", function() {
    const mathInput = document.getElementById("mathInput");
    const englishInput = document.getElementById("englishInput");
    const mathScore = parseFloat(mathInput.value);
    const englishScore = parseFloat(englishInput.value);

    if (isNaN(mathScore) || isNaN(englishScore)) {
        alert("Please enter valid numbers for Math and English.");
        return;
    }

    const tableBody = document.querySelector("#gradesTable tbody");
    const newRow = document.createElement("tr");
    const rowIndex = tableBody.rows.length + 1;
    const averageScore = ((mathScore + englishScore) / 2).toFixed(2);

    newRow.innerHTML = `
        <td>${rowIndex}</td>
        <td>${mathScore}</td>
        <td>${englishScore}</td>
        <td>${averageScore}</td>
    `;
    tableBody.appendChild(newRow);

    updateAverages();

    mathInput.value = "";
    englishInput.value = "";
});

function updateAverages() {
    const tableBody = document.querySelector("#gradesTable tbody");
    const rows = tableBody.querySelectorAll("tr");

    let mathTotal = 0, englishTotal = 0, overallTotal = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        mathTotal += parseFloat(cells[1].textContent);
        englishTotal += parseFloat(cells[2].textContent);
        overallTotal += parseFloat(cells[3].textContent);
    });

    const rowCount = rows.length;
    const mathAverage = (mathTotal / rowCount).toFixed(2);
    const englishAverage = (englishTotal / rowCount).toFixed(2);
    const overallAverage = (overallTotal / rowCount).toFixed(2);

    document.getElementById("mathAverage").textContent = mathAverage;
    document.getElementById("englishAverage").textContent = englishAverage;
    document.getElementById("overallAverage").textContent = overallAverage;
}
