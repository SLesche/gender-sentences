var instructions = {
    type: jsPsychInstructions,
    pages: [
            '<div class = "normal-text"><p>Du wirst gleich eine Reaktionszeitaufgabe bearbeiten. Manche Teilnehmende sind darin deutlich schlechter als andere.</p><p>Heute hast du die Möglichkeit zu beweisen, dass du nicht zu den Schlechtesten gehörst.</p><p>Mache so wenig Fehler wie möglich</p></div>',
            '<div class = "normal-text">Drücke "D", wenn ein "D" präsentiert wird. </br> Drücke "L", wenn ein "L" präsentiert wird. </br> "D" und "L" wechseln sich meistens ab. Wenn sie sich nicht abwechseln, also z.B. ein "D" nach einem "D" präsentiert wird, drücke die Leertaste. </br> Im Folgenden wird kurz die Präsentation von "D" und "L" geübt.</div>',
        ],
    show_clickable_nav: true, 
    data: {type: 'instructions'},
    button_label_next: "Weiter",
    button_label_previous: "Zurück",
}


const experiment_begins = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div class = "normal-text">Die Übungsdurchgänge sind jetzt beendet. </br> Drücke weiterhin "D", wenn ein "D" präsentiert wird. </br> Drücke "L", wenn ein "L" präsentiert wird. </br> Aber drücke die Leertaste, wenn sich "D" und "L" nicht abwechseln.</div>`,
    choices: ['Weiter'],
    data: {type: 'instructions'},
}