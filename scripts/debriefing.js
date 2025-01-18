// here debriefing
var sendMessage = function(msg) {
  // Make sure you are sending a string, and to stringify JSON
  window.parent.postMessage(msg, "*");
};

const debriefing = {
    type: jsPsychHtmlKeyboardResponse,
    trial_duration: 100,
    stimulus: '',
    data: {type: 'instructions'},
    on_finish: function() {
      //jsPsych.data.get().filter([{type: 'trial'}, {type: 'survey'}]).localSave('csv', experiment_file);

      // Filter data by type 'trial'
      const trialData = jsPsych.data.get().filter([{ type: 'trial' }]);

      // Extract only the desired values
      const filteredData = trialData.trials.map(row => ({
        trial_num: row.trial_num,
        block_num: row.block_num,
        sentence: row.sentence,
        picture: row.picture,
        picture_condition: row.picture_condition,
        sentence_condition: row.sentence_condition,
        rt: row.rt,
        acc: row.acc,
        response: row.response,
        is_target: row.is_target,
      }));

      // Send the data, but only with type "trial" or type "survey" 
      sendMessage(JSON.stringify(filteredData));

      console.log("Message sent", filteredData);
    }
  }