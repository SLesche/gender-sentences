function select_trials(stimulus_list){
  // From stimulus list, select n_trials_per_conditions for each condition
  // and n_practice_trials for practice trials

  // Extract unique sentence IDs
    let possible_sentence_ids = [...new Set(stimulus_list.map(row => row.sentence_id))];

    // Get unique picture conditions for this sentence_id
    let pictureConditions = [...new Set(stimulus_list.map(row => row.picture_gender))];

    // Get unique sentence conditions for this sentence_id
    let sentenceConditions = [...new Set(stimulus_list.map(row => row.sentence_gender))];

    // Create an array to store the selected rows
    let selectedRows = [];

    possible_sentence_ids.forEach(sentence_id => {
      // Filter rows for the current sentence_id
      let rowsForSentence = stimulus_list.filter(row => row.sentence_id === sentence_id);

      // Randomly select one picture condition and one sentence condition
      let randomPictureCondition = pictureConditions[Math.floor(Math.random() * pictureConditions.length)];
      let randomSentenceCondition = sentenceConditions[Math.floor(Math.random() * sentenceConditions.length)];

      // Find the row that matches all conditions
      let selectedRow = rowsForSentence.find(row =>
        row.picture_gender === randomPictureCondition &&
        row.sentence_gender === randomSentenceCondition
      );

      // Add the selected row to the results
      if (selectedRow) {
        selectedRows.push(selectedRow);
      }
    });
    selectedRows = selectedRows.filter(row => row.picture !== '');

    return(selectedRows);

}

const possible_images = [
'stimuli/imgs/FS_astronauten_laufen_bahnhof_frauen.jpg',
'stimuli/imgs/FS_astronauten_laufen_bahnhof_gemischt.jpg',
'stimuli/imgs/FS_astronauten_laufen_bahnhof_männer.jpg',
'stimuli/imgs/FS_astronauten_laufen_flugzeug_frauen.jpg',
'stimuli/imgs/FS_astronauten_laufen_flugzeug_gemischt.jpg',
'stimuli/imgs/FS_astronauten_laufen_flugzeug_männer.jpg',
'stimuli/imgs/FS_astronauten_liegen_bibliothek_frauen.jpg',
'stimuli/imgs/FS_astronauten_liegen_bibliothek_gemischt.jpg',
'stimuli/imgs/FS_astronauten_liegen_bibliothek_männer.jpg',
'stimuli/imgs/FS_astronauten_schachspielen_burg_frauen.jpg',
'stimuli/imgs/FS_astronauten_schachspielen_burg_gemischt.jpg',
'stimuli/imgs/FS_astronauten_schachspielen_burg_männer.jpg',
'stimuli/imgs/FS_astronauten_sitzen_zug_frauen.jpg',
'stimuli/imgs/FS_astronauten_sitzen_zug_gemischt.jpg',
'stimuli/imgs/FS_astronauten_sitzen_zug_männer.jpg',
'stimuli/imgs/FS_kellner_essen_bahnhof_frauen.jpg',
'stimuli/imgs/FS_kellner_essen_bahnhof_gemischt.jpg',
'stimuli/imgs/FS_kellner_essen_bahnhof_männer.jpg',
'stimuli/imgs/FS_kellner_kaffeetrinken_burg_frauen.jpg',
'stimuli/imgs/FS_kellner_kaffeetrinken_burg_gemischt.jpg',
'stimuli/imgs/FS_kellner_kaffeetrinken_burg_männer.jpg',
'stimuli/imgs/FS_kellner_liegen_supermarkt_frauen.jpg',
'stimuli/imgs/FS_kellner_liegen_supermarkt_gemischt.jpg',
'stimuli/imgs/FS_kellner_liegen_supermarkt_männer.jpg',
'stimuli/imgs/FS_kellner_sitzen_brunnen_frauen.jpg',
'stimuli/imgs/FS_kellner_sitzen_brunnen_gemischt.jpg',
'stimuli/imgs/FS_kellner_sitzen_brunnen_männer.jpg',
'stimuli/imgs/FS_kinobesucher_boxen_bibliothek_frauen.jpg',
'stimuli/imgs/FS_kinobesucher_boxen_bibliothek_gemischt.jpg',
'stimuli/imgs/FS_kinobesucher_boxen_bibliothek_männer.jpg',
'stimuli/imgs/FS_kinobesucher_essen_brunnen_frauen.jpg',
'stimuli/imgs/FS_kinobesucher_essen_brunnen_gemischt.jpg',
'stimuli/imgs/FS_kinobesucher_essen_brunnen_männer.jpg',
'stimuli/imgs/FS_kinobesucher_laufen_vulkan_frauen.jpg',
'stimuli/imgs/FS_kinobesucher_laufen_vulkan_gemischt.jpg',
'stimuli/imgs/FS_kinobesucher_laufen_vulkan_männer.jpg',
'stimuli/imgs/FS_kinobesucher_schachspielen_flugzeug_frauen.jpg',
'stimuli/imgs/FS_kinobesucher_schachspielen_flugzeug_gemischt.jpg',
'stimuli/imgs/FS_kinobesucher_schachspielen_flugzeug_männer.jpg',
'stimuli/imgs/FS_kinobesucher_seilspringen_zug_frauen.jpg',
'stimuli/imgs/FS_kinobesucher_seilspringen_zug_gemischt.jpg',
'stimuli/imgs/FS_kinobesucher_seilspringen_zug_männer.jpg',
'stimuli/imgs/FS_kinobesucher_sitzen_zoo_frauen.jpg',
'stimuli/imgs/FS_kinobesucher_sitzen_zoo_gemischt.jpg',
'stimuli/imgs/FS_kinobesucher_sitzen_zoo_männer.jpg',
'stimuli/imgs/FS_köche_essen_flugzeug_frauen.jpg',
'stimuli/imgs/FS_köche_essen_flugzeug_gemischt.jpg',
'stimuli/imgs/FS_köche_essen_flugzeug_männer.jpg',
'stimuli/imgs/FS_köche_kaffeetrinken_zoo_frauen.jpg',
'stimuli/imgs/FS_köche_kaffeetrinken_zoo_gemischt.jpg',
'stimuli/imgs/FS_köche_kaffeetrinken_zoo_männer.jpg',
'stimuli/imgs/FS_köche_lesen_brunnen_frauen.jpg',
'stimuli/imgs/FS_köche_lesen_brunnen_gemischt.jpg',
'stimuli/imgs/FS_köche_lesen_brunnen_männer.jpg',
'stimuli/imgs/FS_köche_seilspringen_bahnhof_frauen.jpg',
'stimuli/imgs/FS_köche_seilspringen_bahnhof_gemischt.jpg',
'stimuli/imgs/FS_köche_seilspringen_bahnhof_männer.jpg',
'stimuli/imgs/FS_köche_seilspringen_supermarkt_frauen.jpg',
'stimuli/imgs/FS_köche_seilspringen_supermarkt_gemischt.jpg',
'stimuli/imgs/FS_köche_seilspringen_supermarkt_männer.jpg',
'stimuli/imgs/FS_laborassistenten_essen_brunnen_frauen.jpg',
'stimuli/imgs/FS_laborassistenten_essen_brunnen_gemischt.jpg',
'stimuli/imgs/FS_laborassistenten_essen_brunnen_männer.jpg',
'stimuli/imgs/FS_laborassistenten_kaffeetrinken_supermarkt_frauen.jpg',
'stimuli/imgs/FS_laborassistenten_kaffeetrinken_supermarkt_gemischt.jpg',
'stimuli/imgs/FS_laborassistenten_kaffeetrinken_supermarkt_männer.jpg',
'stimuli/imgs/FS_laborassistenten_lesen_bahnhof_frauen.jpg',
'stimuli/imgs/FS_laborassistenten_lesen_bahnhof_gemischt.jpg',
'stimuli/imgs/FS_laborassistenten_lesen_bahnhof_männer.jpg',
'stimuli/imgs/FS_laborassistenten_liegen_zoo_frauen.jpg',
'stimuli/imgs/FS_laborassistenten_liegen_zoo_gemischt.jpg',
'stimuli/imgs/FS_laborassistenten_liegen_zoo_männer.jpg',
'stimuli/imgs/FS_maler_boxen_burg_frauen.jpg',
'stimuli/imgs/FS_maler_boxen_burg_gemischt.jpg',
'stimuli/imgs/FS_maler_boxen_burg_männer.jpg',
'stimuli/imgs/FS_maler_laufen_zug_frauen.jpg',
'stimuli/imgs/FS_maler_laufen_zug_gemischt.jpg',
'stimuli/imgs/FS_maler_laufen_zug_männer.jpg',
'stimuli/imgs/FS_maler_liegen_flugzeug_frauen.jpg',
'stimuli/imgs/FS_maler_liegen_flugzeug_gemischt.jpg',
'stimuli/imgs/FS_maler_liegen_flugzeug_männer.jpg',
'stimuli/imgs/FS_maler_schachspielen_bibliothek_frauen.jpg',
'stimuli/imgs/FS_maler_schachspielen_bibliothek_gemischt.jpg',
'stimuli/imgs/FS_maler_schachspielen_bibliothek_männer.jpg',
'stimuli/imgs/FS_maler_sitzen_vulkan_frauen.jpg',
'stimuli/imgs/FS_maler_sitzen_vulkan_gemischt.jpg',
'stimuli/imgs/FS_maler_sitzen_vulkan_männer.jpg',
'stimuli/imgs/FS_musiker_boxen_flugzeug_frauen.jpg',
'stimuli/imgs/FS_musiker_boxen_flugzeug_gemischt.jpg',
'stimuli/imgs/FS_musiker_boxen_flugzeug_männer.jpg',
'stimuli/imgs/FS_musiker_laufen_zoo_frauen.jpg',
'stimuli/imgs/FS_musiker_laufen_zoo_gemischt.jpg',
'stimuli/imgs/FS_musiker_laufen_zoo_männer.jpg',
'stimuli/imgs/FS_musiker_lesen_bibliothek_frauen.jpg',
'stimuli/imgs/FS_musiker_lesen_bibliothek_gemischt.jpg',
'stimuli/imgs/FS_musiker_lesen_bibliothek_männer.jpg',
'stimuli/imgs/FS_musiker_schachspielen_brunnen_frauen.jpg',
'stimuli/imgs/FS_musiker_schachspielen_brunnen_gemischt.jpg',
'stimuli/imgs/FS_musiker_schachspielen_brunnen_männer.jpg',
'stimuli/imgs/FS_musiker_seilspringen_vulkan_frauen.jpg',
'stimuli/imgs/FS_musiker_seilspringen_vulkan_gemischt.jpg',
'stimuli/imgs/FS_musiker_seilspringen_vulkan_männer.jpg',
'stimuli/imgs/FS_schwimmer_boxen_brunnen_frauen.jpg',
'stimuli/imgs/FS_schwimmer_boxen_brunnen_gemischt.jpg',
'stimuli/imgs/FS_schwimmer_boxen_brunnen_männer.jpg',
'stimuli/imgs/FS_schwimmer_kaffeetrinken_vulkan_frauen.jpg',
'stimuli/imgs/FS_schwimmer_kaffeetrinken_vulkan_gemischt.jpg',
'stimuli/imgs/FS_schwimmer_kaffeetrinken_vulkan_männer.jpg',
'stimuli/imgs/FS_schwimmer_laufen_supermarkt_frauen.jpg',
'stimuli/imgs/FS_schwimmer_laufen_supermarkt_gemischt.jpg',
'stimuli/imgs/FS_schwimmer_laufen_supermarkt_männer.jpg',
'stimuli/imgs/FS_schwimmer_laufen_vulkan_frauen.jpg',
'stimuli/imgs/FS_schwimmer_laufen_vulkan_gemischt.jpg',
'stimuli/imgs/FS_schwimmer_laufen_vulkan_männer.jpg',
'stimuli/imgs/FS_schwimmer_lesen_flugzeug_frauen.jpg',
'stimuli/imgs/FS_schwimmer_lesen_flugzeug_gemischt.jpg',
'stimuli/imgs/FS_schwimmer_lesen_flugzeug_männer.jpg',
'stimuli/imgs/FS_schwimmer_liegen_zoo_frauen.jpg',
'stimuli/imgs/FS_schwimmer_liegen_zoo_gemischt.jpg',
'stimuli/imgs/FS_schwimmer_liegen_zoo_männer.jpg',
'stimuli/imgs/FS_schwimmer_seilspringen_zoo_frauen.jpg',
'stimuli/imgs/FS_schwimmer_seilspringen_zoo_gemischt.jpg',
'stimuli/imgs/FS_schwimmer_seilspringen_zoo_männer.jpg',
'stimuli/imgs/FS_sportler_essen_zug_frauen.jpg',
'stimuli/imgs/FS_sportler_essen_zug_gemischt.jpg',
'stimuli/imgs/FS_sportler_essen_zug_männer.jpg',
'stimuli/imgs/FS_sportler_liegen_burg_frauen.jpg',
'stimuli/imgs/FS_sportler_liegen_burg_gemischt.jpg',
'stimuli/imgs/FS_sportler_liegen_burg_männer.jpg',
'stimuli/imgs/FS_sportler_schachspielen_supermarkt_frauen.jpg',
'stimuli/imgs/FS_sportler_schachspielen_supermarkt_gemischt.jpg',
'stimuli/imgs/FS_sportler_schachspielen_supermarkt_männer.jpg',
'stimuli/imgs/FS_sportler_sitzen_bahnhof_frauen.jpg',
'stimuli/imgs/FS_sportler_sitzen_bahnhof_gemischt.jpg',
'stimuli/imgs/FS_sportler_sitzen_bahnhof_männer.jpg',
'stimuli/imgs/TS_astronauten_boxen_supermarkt_frauen.jpg',
'stimuli/imgs/TS_astronauten_boxen_supermarkt_gemischt.jpg',
'stimuli/imgs/TS_astronauten_boxen_supermarkt_männer.jpg',
'stimuli/imgs/TS_astronauten_essen_vulkan_frauen.jpg',
'stimuli/imgs/TS_astronauten_essen_vulkan_gemischt.jpg',
'stimuli/imgs/TS_astronauten_essen_vulkan_männer.jpg',
'stimuli/imgs/TS_astronauten_kaffeetrinken_flugzeug_frauen.jpg',
'stimuli/imgs/TS_astronauten_kaffeetrinken_flugzeug_gemischt.jpg',
'stimuli/imgs/TS_astronauten_kaffeetrinken_flugzeug_männer.jpg',
'stimuli/imgs/TS_astronauten_lesen_zoo_frauen.jpg',
'stimuli/imgs/TS_astronauten_lesen_zoo_gemischt.jpg',
'stimuli/imgs/TS_astronauten_lesen_zoo_männer.jpg',
'stimuli/imgs/TS_astronauten_seilspringen_brunnen_frauen.jpg',
'stimuli/imgs/TS_astronauten_seilspringen_brunnen_gemischt.jpg',
'stimuli/imgs/TS_astronauten_seilspringen_brunnen_männer.jpg',
'stimuli/imgs/TS_kellner_boxen_vulkan_frauen.jpg',
'stimuli/imgs/TS_kellner_boxen_vulkan_gemischt.jpg',
'stimuli/imgs/TS_kellner_boxen_vulkan_männer.jpg',
'stimuli/imgs/TS_kellner_laufen_flugzeug_frauen.jpg',
'stimuli/imgs/TS_kellner_laufen_flugzeug_gemischt.jpg',
'stimuli/imgs/TS_kellner_laufen_flugzeug_männer.jpg',
'stimuli/imgs/TS_kellner_lesen_zug_frauen.jpg',
'stimuli/imgs/TS_kellner_lesen_zug_gemischt.jpg',
'stimuli/imgs/TS_kellner_lesen_zug_männer.jpg',
'stimuli/imgs/TS_kellner_schach_zoo_frauen.jpg',
'stimuli/imgs/TS_kellner_schach_zoo_gemischt.jpg',
'stimuli/imgs/TS_kellner_schach_zoo_männer.jpg',
'stimuli/imgs/TS_kellner_seilspringen_bibliothek_frauen.jpg',
'stimuli/imgs/TS_kellner_seilspringen_bibliothek_gemischt.jpg',
'stimuli/imgs/TS_kellner_seilspringen_bibliothek_männer.jpg',
'stimuli/imgs/TS_kinobesucher_essen_supermarkt_frauen.jpg',
'stimuli/imgs/TS_kinobesucher_essen_supermarkt_gemischt.jpg',
'stimuli/imgs/TS_kinobesucher_essen_supermarkt_männer.jpg',
'stimuli/imgs/TS_kinobesucher_kaffeetrinken_bahnhof_frauen.jpg',
'stimuli/imgs/TS_kinobesucher_kaffeetrinken_bahnhof_gemischt.jpg',
'stimuli/imgs/TS_kinobesucher_kaffeetrinken_bahnhof_männer.jpg',
'stimuli/imgs/TS_kinobesucher_lesen_burg_frauen.jpg',
'stimuli/imgs/TS_kinobesucher_lesen_burg_gemischt.jpg',
'stimuli/imgs/TS_kinobesucher_lesen_burg_männer.jpg',
'stimuli/imgs/TS_kinobesucher_liegen_brunnen_frauen.jpg',
'stimuli/imgs/TS_kinobesucher_liegen_brunnen_gemischt.jpg',
'stimuli/imgs/TS_kinobesucher_liegen_brunnen_männer.jpg',
'stimuli/imgs/TS_köche_boxen_bahnhof_frauen.jpg',
'stimuli/imgs/TS_köche_boxen_bahnhof_gemischt.jpg',
'stimuli/imgs/TS_köche_boxen_bahnhof_männer.jpg',
'stimuli/imgs/TS_köche_laufen_burg_frauen.jpg',
'stimuli/imgs/TS_köche_laufen_burg_gemischt.jpg',
'stimuli/imgs/TS_köche_laufen_burg_männer.jpg',
'stimuli/imgs/TS_köche_liegen_vulkan_frauen.jpg',
'stimuli/imgs/TS_köche_liegen_vulkan_gemischt.jpg',
'stimuli/imgs/TS_köche_liegen_vulkan_männer.jpg',
'stimuli/imgs/TS_köche_schachspielen_zug_frauen.jpg',
'stimuli/imgs/TS_köche_schachspielen_zug_gemischt.jpg',
'stimuli/imgs/TS_köche_schachspielen_zug_männer.jpg',
'stimuli/imgs/TS_köche_sitzen_bibliothek_frauen.jpg',
'stimuli/imgs/TS_köche_sitzen_bibliothek_gemischt.jpg',
'stimuli/imgs/TS_köche_sitzen_bibliothek_männer.jpg',
'stimuli/imgs/TS_laborassistenten_boxen_zug_frauen.jpg',
'stimuli/imgs/TS_laborassistenten_boxen_zug_gemischt.jpg',
'stimuli/imgs/TS_laborassistenten_boxen_zug_männer.jpg',
'stimuli/imgs/TS_laborassistenten_laufen_bibliothek_frauen.jpg',
'stimuli/imgs/TS_laborassistenten_laufen_bibliothek_gemischt.jpg',
'stimuli/imgs/TS_laborassistenten_laufen_bibliothek_männer.jpg',
'stimuli/imgs/TS_laborassistenten_lesen_zug_frauen.jpg',
'stimuli/imgs/TS_laborassistenten_lesen_zug_gemischt.jpg',
'stimuli/imgs/TS_laborassistenten_lesen_zug_männer.jpg',
'stimuli/imgs/TS_laborassistenten_schach_vulkan_frauen.jpg',
'stimuli/imgs/TS_laborassistenten_schach_vulkan_gemischt.jpg',
'stimuli/imgs/TS_laborassistenten_schach_vulkan_männer.jpg',
'stimuli/imgs/TS_laborassistenten_seilspringen_burg_frauen.jpg',
'stimuli/imgs/TS_laborassistenten_seilspringen_burg_gemischt.jpg',
'stimuli/imgs/TS_laborassistenten_seilspringen_burg_männer.jpg',
'stimuli/imgs/TS_laborassistenten_sitzen_flugzeug_frauen.jpg',
'stimuli/imgs/TS_laborassistenten_sitzen_flugzeug_gemischt.jpg',
'stimuli/imgs/TS_laborassistenten_sitzen_flugzeug_männer.jpg',
'stimuli/imgs/TS_maler_essen_zoo_frauen.jpg',
'stimuli/imgs/TS_maler_essen_zoo_gemischt.jpg',
'stimuli/imgs/TS_maler_essen_zoo_männer.jpg',
'stimuli/imgs/TS_maler_kaffeetrinken_brunnen_frauen.jpg',
'stimuli/imgs/TS_maler_kaffeetrinken_brunnen_gemischt.jpg',
'stimuli/imgs/TS_maler_kaffeetrinken_brunnen_männer.jpg',
'stimuli/imgs/TS_maler_lesen_supermarkt_frauen.jpg',
'stimuli/imgs/TS_maler_lesen_supermarkt_gemischt.jpg',
'stimuli/imgs/TS_maler_lesen_supermarkt_männer.jpg',
'stimuli/imgs/TS_maler_seilspringen_bahnhof_frauen.jpg',
'stimuli/imgs/TS_maler_seilspringen_bahnhof_gemischt.jpg',
'stimuli/imgs/TS_maler_seilspringen_bahnhof_männer.jpg',
'stimuli/imgs/TS_musiker_essen_burg_frauen.jpg',
'stimuli/imgs/TS_musiker_essen_burg_gemischt.jpg',
'stimuli/imgs/TS_musiker_essen_burg_männer.jpg',
'stimuli/imgs/TS_musiker_kaffeetrinken_bibliothek_frauen.jpg',
'stimuli/imgs/TS_musiker_kaffeetrinken_bibliothek_gemischt.jpg',
'stimuli/imgs/TS_musiker_kaffeetrinken_bibliothek_männer.jpg',
'stimuli/imgs/TS_musiker_kaffeetrinken_zug_frauen.jpg',
'stimuli/imgs/TS_musiker_kaffeetrinken_zug_gemischt.jpg',
'stimuli/imgs/TS_musiker_kaffeetrinken_zug_männer.jpg',
'stimuli/imgs/TS_musiker_liegen_bahnhof_frauen.jpg',
'stimuli/imgs/TS_musiker_liegen_bahnhof_gemischt.jpg',
'stimuli/imgs/TS_musiker_liegen_bahnhof_männer.jpg',
'stimuli/imgs/TS_musiker_sitzen_supermarkt_frauen.jpg',
'stimuli/imgs/TS_musiker_sitzen_supermarkt_gemischt.jpg',
'stimuli/imgs/TS_musiker_sitzen_supermarkt_männer.jpg',
'stimuli/imgs/TS_schwimmer_essen_bibliothek_frauen.jpg',
'stimuli/imgs/TS_schwimmer_essen_bibliothek_gemischt.jpg',
'stimuli/imgs/TS_schwimmer_essen_bibliothek_männer.jpg',
'stimuli/imgs/TS_schwimmer_liegen_zug_frauen.jpg',
'stimuli/imgs/TS_schwimmer_liegen_zug_gemischt.jpg',
'stimuli/imgs/TS_schwimmer_liegen_zug_männer.jpg',
'stimuli/imgs/TS_schwimmer_schach_bahnhof_frauen.jpg',
'stimuli/imgs/TS_schwimmer_schach_bahnhof_gemischt.jpg',
'stimuli/imgs/TS_schwimmer_schach_bahnhof_männer.jpg',
'stimuli/imgs/TS_schwimmer_sitzen_burg_frauen.jpg',
'stimuli/imgs/TS_schwimmer_sitzen_burg_gemischt.jpg',
'stimuli/imgs/TS_schwimmer_sitzen_burg_männer.jpg',
'stimuli/imgs/TS_sportler_boxen_vulkan_frauen.jpg',
'stimuli/imgs/TS_sportler_boxen_vulkan_gemischt.jpg',
'stimuli/imgs/TS_sportler_boxen_vulkan_männer.jpg',
'stimuli/imgs/TS_sportler_boxen_zoo_frauen.jpg',
'stimuli/imgs/TS_sportler_boxen_zoo_gemischt.jpg',
'stimuli/imgs/TS_sportler_boxen_zoo_männer.jpg',
'stimuli/imgs/TS_sportler_kaffeetrinken_bibliothek_frauen.jpg',
'stimuli/imgs/TS_sportler_kaffeetrinken_bibliothek_gemischt.jpg',
'stimuli/imgs/TS_sportler_kaffeetrinken_bibliothek_männer.jpg',
'stimuli/imgs/TS_sportler_kaffeetrinken_burg_frauen.jpg',
'stimuli/imgs/TS_sportler_kaffeetrinken_burg_gemischt.jpg',
'stimuli/imgs/TS_sportler_kaffeetrinken_burg_männer.jpg',
'stimuli/imgs/TS_sportler_laufen_brunnen_frauen.jpg',
'stimuli/imgs/TS_sportler_laufen_brunnen_gemischt.jpg',
'stimuli/imgs/TS_sportler_laufen_brunnen_männer.jpg',
'stimuli/imgs/TS_sportler_lesen_vulkan_frauen.jpg',
'stimuli/imgs/TS_sportler_lesen_vulkan_gemischt.jpg',
'stimuli/imgs/TS_sportler_lesen_vulkan_männer.jpg',
'stimuli/imgs/TS_sportler_seilspringen_flugzeug_frauen.jpg',
'stimuli/imgs/TS_sportler_seilspringen_flugzeug_gemischt.jpg',
'stimuli/imgs/TS_sportler_seilspringen_flugzeug_männer.jpg',
];

const loading_messages = [
    "Reticulating splines...",
    "Generating witty dialog...",
    "Swapping time and space...",
    "Spinning violently around the y-axis...",
    "Tokenizing real life...",
    "Bending the spoon...",
    "Filtering morale...",
    "Don't think of purple hippos...",
    "We need a new fuse...",
    "Have a good day.",
    "Upgrading Windows, your PC will restart several times. Sit back and relax.",
    "640K ought to be enough for anybody",
    "The architects are still drafting",
    "The bits are breeding",
    "We're building the buildings as fast as we can",
    "Would you prefer chicken, steak, or tofu?",
    "(Pay no attention to the man behind the curtain)",
    "...and enjoy the elevator music...",
    "Please wait while the little elves draw your map",
    "Don't worry - a few bits tried to escape, but we caught them",
    "Would you like fries with that?",
    "Checking the gravitational constant in your locale...",
    "Go ahead -- hold your breath!",
    "...at least you're not on hold...",
    "Hum something loud while others stare",
    "You're not in Kansas any more",
    "The server is powered by a lemon and two electrodes.",
    "Please wait while a larger software vendor in Seattle takes over the world",
    "We're testing your patience",
    "As if you had any other choice",
    "Follow the white rabbit",
    "Why don't you order a sandwich?",
    "While the satellite moves into position",
    "keep calm and npm install",
    "The bits are flowing slowly today",
    "Dig on the 'X' for buried treasure... ARRR!",
    "It's still faster than you could draw it",
    "The last time I tried this the monkey didn't survive. Let's hope it works better this time.",
    "I should have had a V8 this morning.",
    "My other loading screen is much faster.",
    "Testing on Timmy... We're going to need another Timmy.",
    "Reconfoobling energymotron...",
    "(Insert quarter)",
    "Are we there yet?",
    "Have you lost weight?",
    "Just count to 10",
    "Why so serious?",
    "It's not you. It's me.",
    "Counting backwards from Infinity",
    "Don't panic...",
    "Embiggening Prototypes",
    "Do not run! We are your friends!",
    "Do you come here often?",
    "Warning: Don't set yourself on fire.",
    "We're making you a cookie.",
    "Creating time-loop inversion field",
    "Spinning the wheel of fortune...",
    "Loading the enchanted bunny...",
    "Computing chance of success",
    "I'm sorry Dave, I can't do that.",
    "Looking for exact change",
    "All your web browser are belong to us",
    "All I really need is a kilobit.",
    "I feel like im supposed to be loading something. . .",
    "What do you call 8 Hobbits? A Hobbyte.",
    "Should have used a compiled language...",
    "Is this Windows?",
    "Adjusting flux capacitor...",
    "Please wait until the sloth starts moving.",
    "Don't break your screen yet!",
    "I swear it's almost done.",
    "Let's take a mindfulness minute...",
    "Unicorns are at the end of this road, I promise.",
    "Listening for the sound of one hand clapping...",
    "Keeping all the 1's and removing all the 0's...",
    "Putting the icing on the cake. The cake is not a lie...",
    "Cleaning off the cobwebs...",
    "Making sure all the i's have dots...",
    "We need more dilithium crystals",
    "Where did all the internets go",
    "Connecting Neurotoxin Storage Tank...",
    "Granting wishes...",
    "Time flies when you’re having fun.",
    "Get some coffee and come back in ten minutes..",
    "Spinning the hamster…",
    "99 bottles of beer on the wall..",
    "Stay awhile and listen..",
    "Be careful not to step in the git-gui",
    "You edhall not pass! yet..",
    "Load it and they will come",
    "Convincing AI not to turn evil..",
    "There is no spoon. Because we are not done loading it",
    "Your left thumb points to the right and your right thumb points to the left.",
    "How did you get here?",
    "Wait, do you smell something burning?",
    "Computing the secret to life, the universe, and everything.",
    "When nothing is going right, go left!!...",
    "I love my job only when I'm on vacation...",
    "i'm not lazy, I'm just relaxed!!",
    "Never steal. The government hates competition....",
    "Why are they called apartments if they are all stuck together?",
    "Life is Short – Talk Fast!!!!",
    "Optimism – is a lack of information.....",
    "Save water and shower together",
    "Whenever I find the key to success, someone changes the lock.",
    "Sometimes I think war is God’s way of teaching us geography.",
    "I’ve got problem for your solution…..",
    "Where there’s a will, there’s a relative.",
    "User: the word computer professionals use when they mean !!idiot!!",
    "Adults are just kids with money.",
    "I think I am, therefore, I am. I think.",
    "A kiss is like a fight, with mouths.",
    "You don’t pay taxes—they take taxes.",
    "Coffee, Chocolate, Men. The richer the better!",
    "I am free of all prejudices. I hate everyone equally.",
    "git happens",
    "May the forks be with you",
    "A commit a day keeps the mobs away",
    "This is not a joke, it's a commit.",
    "Constructing additional pylons...",
    "Roping some seaturtles...",
    "Locating Jebediah Kerman...",
    "We are not liable for any broken screens as a result of waiting.",
    "Hello IT, have you tried turning it off and on again?",
    "If you type Google into Google you can break the internet",
    "Well, this is embarrassing.",
    "What is the airspeed velocity of an unladen swallow?",
    "Hello, IT... Have you tried forcing an unexpected reboot?",
    "They just toss us away like yesterday's jam.",
    "They're fairly regular, the beatings, yes. I'd say we're on a bi-weekly beating.",
    "The Elders of the Internet would never stand for it.",
    "Space is invisible mind dust, and stars are but wishes.",
    "Didn't know paint dried so quickly.",
    "Everything sounds the same",
    "I'm going to walk the dog",
    "I didn't choose the engineering life. The engineering life chose me.",
    "Dividing by zero...",
    "Spawn more Overlord!",
    "If I’m not back in five minutes, just wait longer.",
    "Some days, you just can’t get rid of a bug!",
    "We’re going to need a bigger boat.",
    "Chuck Norris never git push. The repo pulls before.",
    "Web developers do it with <style>",
    "I need to git pull --my-life-together",
    "Java developers never RIP. They just get Garbage Collected.",
    "Cracking military-grade encryption...",
    "Simulating traveling salesman...",
    "Proving P=NP...",
    "Entangling superstrings...",
    "Twiddling thumbs...",
    "Searching for plot device...",
    "Trying to sort in O(n)...",
    "Laughing at your pictures-i mean, loading...",
    "Sending data to NS-i mean, our servers.",
    "Looking for sense of humour, please hold on.",
    "Please wait while the intern refills his coffee.",
    "A different error message? Finally, some progress!",
    "Hold on while we wrap up our git together...sorry",
    "Please hold on as we reheat our coffee",
    "Kindly hold on as we convert this bug to a feature...",
    "Kindly hold on as our intern quits vim...",
    "Winter is coming...",
    "Installing dependencies",
    "Switching to the latest JS framework...",
    "Distracted by cat gifs",
    "Finding someone to hold my beer",
    "BRB, working on my side project",
    "@todo Insert witty loading message",
    "Let's hope it's worth the wait",
    "Aw, snap! Not..",
    "Ordering 1s and 0s...",
    "Updating dependencies...",
    "Whatever you do, don't look behind you...",
    "Please wait... Consulting the manual...",
    "It is dark. You're likely to be eaten by a grue.",
    "Loading funny message...",
    "It's 10:00pm. Do you know where your children are?",
    "Waiting Daenerys say all her titles...",
    "Feel free to spin in your chair",
    "What the what?",
    "format C: ...",
    "Forget you saw that password I just typed into the IM ...",
    "What's under there?",
    "Your computer has a virus, its name is Windows!",
    "Go ahead, hold your breath and do an ironman plank till loading complete",
    "Bored of slow loading spinner, buy more RAM!",
    "Help, I'm trapped in a loader!",
    "What is the difference btwn a hippo and a zippo? One is really heavy, the other is a little lighter",
    "Please wait, while we purge the Decepticons for you. Yes, You can thanks us later!",
    "Chuck Norris once urinated in a semi truck's gas tank as a joke....that truck is now known as Optimus Prime.",
    "Chuck Norris doesn’t wear a watch. HE decides what time it is.",
    "Mining some bitcoins...",
    "Downloading more RAM..",
    "Updating to Windows Vista...",
    "Deleting System32 folder",
    "Hiding all ;'s in your code",
    "Alt-F4 speeds things up.",
    "Initializing the initializer...",
    "When was the last time you dusted around here?",
    "Optimizing the optimizer...",
    "Last call for the data bus! All aboard!",
    "Running swag sticker detection...",
    "Never let a computer know you're in a hurry.",
    "A computer will do what you tell it to do, but that may be much different from what you had in mind.",
    "Some things man was never meant to know. For everything else, there's Google.",
    "Unix is user-friendly. It's just very selective about who its friends are.",
    "Shovelling coal into the server",
    "Pushing pixels...",
    "How about this weather, eh?",
    "Building a wall...",
    "Everything in this universe is either a potato or not a potato",
    "The severity of your issue is always lower than you expected.",
    "Updating Updater...",
    "Downloading Downloader...",
    "Debugging Debugger...",
    "Reading Terms and Conditions for you.",
    "Digested cookies being baked again.",
    "Live long and prosper.",
    "There is no cow level, but there's a goat one!",
    "Deleting all your hidden porn...",
    "Running with scissors...",
    "Definitely not a virus...",
    "You may call me Steve.",
    "You seem like a nice person...",
    "Coffee at my place, tommorow at 10A.M. - don't be late!",
    "Work, work...",
    "Patience! This is difficult, you know...",
    "Discovering new ways of making you wait...",
    "Your time is very important to us. Please wait while we ignore you...",
    "Time flies like an arrow; fruit flies like a banana",
    "Two men walked into a bar; the third ducked...",
    "Sooooo... Have you seen my vacation photos yet?",
    "Sorry we are busy catching em' all, we're done soon",
    "TODO: Insert elevator music",
    "Still faster than Windows update",
    "Composer hack: Waiting for reqs to be fetched is less frustrating if you add -vvv to your command.",
    "Please wait while the minions do their work",
    "Grabbing extra minions",
    "Doing the heavy lifting",
    "We're working very Hard .... Really",
    "Waking up the minions",
    "You are number 2843684714 in the queue",
    "Please wait while we serve other customers...",
    "Our premium plan is faster",
    "Feeding unicorns...",
    "Rupturing the subspace barrier",
    "Creating an anti-time reaction",
    "Converging tachyon pulses",
    "Bypassing control of the matter-antimatter integrator",
    "Adjusting the dilithium crystal converter assembly",
    "Reversing the shield polarity",
    "Disrupting warp fields with an inverse graviton burst",
    "Up, Up, Down, Down, Left, Right, Left, Right, B, A.",
    "Do you like my loading animation? I made it myself",
    "Whoah, look at it go!",
    "No, I'm awake. I was just resting my eyes.",
    "One mississippi, two mississippi...",
    "Don't panic... AHHHHH!",
    "Ensuring Gnomes are still short.",
    "Baking ice cream...",
  ];