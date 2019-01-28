$(document).ready(function () {

    $('#calendar').fullCalendar({
        header: {
            // left: 'prev,next today',
            left: 'title',
            // center: 'title',
            right: 'month,listYear,prev,next today'
        },
        googleCalendarApiKey: 'AIzaSyBj1TiofAvw2KmBTzzJMRT5R5ZcVnAeqyw',
        events: {
            googleCalendarId: 'g.ucla.edu_4l34ogt0tbh7isftkqb1t7itns@group.calendar.google.com',
            className: 'gcal-event', // an option!
        }
    });

});