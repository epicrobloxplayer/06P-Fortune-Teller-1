$("button").click(function(){
    // 1. Extract the text from the inputs
    var name = $(".name").val();
    
    var numberInAWeek = parseInt($('.times').val());
    var numberInAYear = numberInAWeek * 52 * 31;
    
    // 2. Use the input text to build the fortune to display.
    var myAnswer = name + " " + numberInAYear + "times by the yaer 2051";
    $(".answer").text(myAnswer);
    
    // 3. Clear the old text from the inputs.
    $(".name").val("");
});