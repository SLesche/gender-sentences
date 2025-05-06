var practice_instructions = {
    type: jsPsychInstructions,
    pages: [
            '<div class = "normal-text"><p>Es folgen 5 Übungsdurchgänge, die Ihnen zeigen sollen wie die Aufgabe aufgebaut ist. Hier erhalten Sie nach jeder Antwort Feedback.</p></div>',
        ],
    show_clickable_nav: true, 
    data: {type: 'instructions'},
    button_label_next: "Weiter",
    button_label_previous: "Zurück",
}

var experiment_instructions = {
    type: jsPsychInstructions,
    pages: [
            `<div class = "normal-text"><p>Nun geht es richtig los. Sie erhalten kein Feedback mehr. Außerdem werden die Bilder nach ${picture_duration / 1000} Sekunden nicht mehr angezeigt. Antworten Sie so schnell und genau wie möglich.</p></div>`,
        ],
    show_clickable_nav: true, 
    data: {type: 'instructions'},
    button_label_next: "Weiter",
    button_label_previous: "Zurück",
}