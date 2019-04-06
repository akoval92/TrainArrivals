$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyAdlc1OZkyRdGicCl2RoSvCQoBpsAHO5KA",
        authDomain: "trainschedule-33376.firebaseapp.com",
        databaseURL: "https://trainschedule-33376.firebaseio.com",
        projectId: "trainschedule-33376",
        storageBucket: "trainschedule-33376.appspot.com",
        messagingSenderId: "845895822825"
    };
    firebase.initializeApp(config);        //This is initializing the firebase database so info will be recorded in firebase

    var database = firebase.database()       //This is assigning initialized database to a variable

    $('#add-train-btn').on('click', function (event) {
        event.preventDefault();

        var trainName = $("#trainInput").val();
        var trainDest = $("#destInput").val();
        var trainTime = moment("#timeInput").format("H/HH");
        var trainFreq = moment("#timeInput").format(":mm");

        var newTrain = {
            name: trainName,                   //trainName
            destination: trainDest,                   //trainDest
            time: trainTime,              //trainTime
            frequency: trainFreq                    //trainFreq

        };
        database.ref().push(newTrain);

  
        });

        database.ref().on("child_added", function(snap) {


        var addName = snap.val().trainName;
        var addDest = snap.val().trainDest;
        var addTime = snap.val().trainTime;
        var addFreq = snap.val().trainFreq;


        // var timingStart = moment("13:00").(addTime).format("H, HH");    // timing format?????


        var newLine = $("<tr>").append(

            $("<td>").text(addName),
            $("<td>").text(addDest),
            $("<td>").text(addTime),
            $("<td>").text(addFreq)
        );

        
        $("#trainTable > tbody").append(newLine)
    });

});
