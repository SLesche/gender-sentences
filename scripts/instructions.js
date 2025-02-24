var practice_instructions = {
    type: jsPsychInstructions,
    pages: [
            '<div class = "normal-text"><p>Es folgen 5 Übungsdurchgänge, die dir zeigen sollen wie die Aufgabe aufgebaut ist. Hier erhältst du nach jeder Antwort Feedback.</p></div>',
        ],
    show_clickable_nav: true, 
    data: {type: 'instructions'},
    button_label_next: "Weiter",
    button_label_previous: "Zurück",
}

var experiment_instructions = {
    type: jsPsychInstructions,
    pages: [
            '<div class = "normal-text"><p>Nun geht es richtig los. Du erhältst kein Feedback mehr. Antworte so schnell und genau wie möglich.</p></div>',
        ],
    show_clickable_nav: true, 
    data: {type: 'instructions'},
    button_label_next: "Weiter",
    button_label_previous: "Zurück",
}