function updateTimeAndDay() {
    const now = new Date();
    const timeUTC = now.toUTCString().split(' ')[4];
    const day = now.toLocaleString('en-US', { weekday: 'long' });

    document.getElementById('currentTimeUTC').textContent = timeUTC;
    document.getElementById('currentDay').textContent = day;
}

setInterval(updateTimeAndDay, 1000);

window.onload = updateTimeAndDay;