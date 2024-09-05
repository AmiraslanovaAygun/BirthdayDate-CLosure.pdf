
let birthDate = new Date("December 10, 2024 08:00");

setInterval(() => {

    console.clear();

    let date = new Date();

    let lastSeconds = Math.floor((birthDate - date) / 1000) % 60;

    let lastMinutes = Math.floor((birthDate - date) / 1000 / 60) % 60;

    let lastHours = Math.floor((birthDate - date) / 1000 / 60 / 60) % 24;

    let days = Math.floor((birthDate - date) / 1000 / 60 / 60 / 24);

    console.log("MY BIRTHDAY LOADINGGG....");
    console.log(`Gün: ${days} Saat: ${lastHours}  Dəqiqə: ${lastMinutes}  Saniyə: ${lastSeconds}`);
}, 1000);









