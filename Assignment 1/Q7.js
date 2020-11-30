var strftime = require('strftime') 
    var local = {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        shortDays: ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        shortMonths: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'agu', 'sep', 'oct', 'nov', 'dec'],
        AM: 'AM',
        PM: 'PM',
        am: 'am',
        pm: 'pm',
    }
    var hour = strftime.localize(local)
    console.log(hour('%A , %d %B  %Y, %H:%M:%S%p'))