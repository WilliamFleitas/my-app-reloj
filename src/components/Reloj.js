
setInterval(displayTime, 1000); 


export default function displayTime() {
   
    const timeNow = new Date();
    
    
    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleString("default", {
        month: "long"
    });
    let year = timeNow.getFullYear();
    let session = "AM";

    if (hoursOfDay > 12) {
        session = "PM";
    }

    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hoursOfDay + ":" + minutes + ":" + seconds + " ";
    
    // return "The time is: " + time + session + " " + today + " " + months + " " + year;
    document.getElementById('Clock').innerHTML = "The time is: " + time + session + " " + today + " " + months + " " + year;
    
}   