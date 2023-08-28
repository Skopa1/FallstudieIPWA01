// Alle Eingabefelder vom Typ "text" werden ausgewählt
var inputFields = document.querySelectorAll("input[type='text']");

// Für jedes ausgewählte Eingabefeld wird folgende Funktion ausgeführt
inputFields.forEach(function(inputField) {
    // Ein Ereignislistener wird für das "input"-Ereignis hinzugefügt
    // Dieses Ereignis wird ausgelöst, wenn der Benutzer Text in das Eingabefeld eingibt oder löscht
    inputField.addEventListener("input", function(event) {
        // Der eingegebene Text wird aus dem Ereignisobjekt geholt
        var userInput = event.target.value;
        
        // Alle Zeichen außer Buchstaben und Zahlen werden durch einen leeren String ersetzt
        var cleanInput = userInput.replace(/[^a-zA-Z0-9]/g, '');
        
        // Das Eingabefeld wird mit dem bereinigten Text aktualisiert
        event.target.value = cleanInput;
        
    });
});