
function generateTable() {
    var number = parseInt(document.getElementById('numberInput').value);
    if (!isNaN(number)) {
        var table = "<table border='1'><tr><th>Number</th><th>Multiplication Result</th></tr>";
        for (var i = 1; i <= 10; i++) {
            var result = number * i;
            table += "<tr><td>" + number + " x " + i + "</td><td>" + result + "</td></tr>";
        }
        table += "</table>";
        document.getElementById('tableContainer').innerHTML = table;
    } else {
        document.getElementById('tableContainer').innerHTML = "Invalid input. Please enter a valid number.";
    }
}