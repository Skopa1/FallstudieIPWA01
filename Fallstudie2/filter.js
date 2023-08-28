// Diese Funktion wird aufgerufen, wenn der Benutzer Text in das Eingabefeld eingibt
function filterTable(event) {
    //  Text wird in Großbuchstaben umgewandelt
    var filter = event.target.value.toUpperCase();
    //  Zeilen im <tbody> der Tabelle mit der ID "myTable" werden ausgewählt
    var rows = document.querySelector("#myTable tbody").rows;
    
    // Schleife durchläuft jede Zeile der Tabelle
    for (var i = 0; i < rows.length; i++) {
        // Text des ersten Zelleninhalts der aktuellen Zeile in Großbuchstaben umgewandelt
        var firstCol = rows[i].cells[0].textContent.toUpperCase();
        // Text des zweiten Zelleninhalts der aktuellen Zeile in Großbuchstaben umgewandelt
        var secondCol = rows[i].cells[1].textContent.toUpperCase();
        
        // Überprüfung, ob der eingegebene Text in einer der beiden Zellen enthalten ist
        if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1) {
            // Zeile wird angezeigt
            rows[i].style.display = "";
        } else {
            // Zeile wird ausgeblendet
            rows[i].style.display = "none";
        }      
    }
}

// Ein Ereignislistener wird dem Eingabefeld mit der ID "myInput" hinzugefügt
document.querySelector('#myInput').addEventListener('keyup', filterTable, false);