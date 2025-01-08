function get_random_trial_display_order(available_stimuli){
    const n_trials = available_stimuli.length;

    // create array from 0 to n
    let display_order = Array.from({length: n_trials}, (_, i) => i);
    display_order = jsPsych.randomization.shuffle(display_order);

    return display_order;
}

function get_picture_stim(available_stimuli, display_order, trial_num){
    const stim = available_stimuli[display_order[trial_num]];
    return stim;
}

function get_sentence_stim(available_stimuli, display_order, trial_num){
    const stim = available_stimuli[display_order[trial_num]];
    return stim;
}

function csvFileToObject(filePath) {
    return new Promise((resolve, reject) => {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();  // Read the response as text
            })
            .then(csvData => {
                // Parse the CSV data with PapaParse
                Papa.parse(csvData, {
                    header: true,           // Use headers from the first row
                    dynamicTyping: true,    // Automatically convert types (e.g., strings to numbers)
                    skipEmptyLines: true,   // Skip empty lines
                    complete: function(results) {
                        resolve(results.data);  // Resolve the parsed data as an array of objects
                    },
                    error: function(error) {
                        reject(new Error('Error parsing CSV: ' + error.message));  // Reject on error
                    }
                });
            })
            .catch(error => {
                reject(new Error('Error fetching file: ' + error.message));  // Reject if there was an error fetching the file
            });
    });
}
