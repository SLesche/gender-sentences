let jsPsych = initJsPsych(
    /**
    {
        on_finish: function() {
            jsPsych.data.get().localSave('csv', experiment_file);
        },
    } 
    */  
   {
    on_finish: function() {
        jsPsych.data.displayData();
      }
   }
);

const experiment_name = "Picture Matching Task";
const experiment_short_name = "gender_task";
let init_date = new Date();
    jsPsych.data.addProperties({
        date: ("0" + init_date.getDate()).slice(-2) + '_' + ("0" + (init_date.getMonth() + 1)).slice(-2) + '_' + init_date.getFullYear(),
        time: init_date.getHours() + "_" + init_date.getMinutes() + "_" + init_date.getSeconds(),
    });

let init_time = init_date.getFullYear() + "_" + (init_date.getMonth() + 1) + "_" + init_date.getDate() + "_" + init_date.getHours() + "_" + init_date.getMinutes() + "_" + init_date.getSeconds()
let timeline = [];

const possible_response_keys = ["d", "l", " "];

const picture_duration = 5000;
const sentence_duration = 3000;
const feedback_dur = 500;
const fixation_dur = 200;
const rsi_duration = 1000;

// Remove later
const subject_id = jsPsych.randomization.randomID(6);

// record the condition assignment in the jsPsych data
// this adds a property called 'subject' and a property called 'condition' to every trial
const experiment_file = "./data/" + experiment_short_name + "_" + subject_id + "_" + init_time + ".csv"
