//   CHANGING THE DAYS   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let current_day = 0;

let monday = document.getElementById('monday');
let tuesday = document.getElementById('tuesday');
let wednesday = document.getElementById('wednesday');
let thursday = document.getElementById('thursday');
let friday = document.getElementById('friday');
let saturday = document.getElementById('saturday');
let sunday = document.getElementById('sunday');

function Set() {
    if (current_day == 0) {
        monday.style.display = "block"
        tuesday.style.display = "none"
        wednesday.style.display = "none"
        thursday.style.display = "none"
        friday.style.display = "none"
        saturday.style.display = "none"
        sunday.style.display = "none"
    } else if (current_day == 1) {
        monday.style.display = "none"
        tuesday.style.display = "block"
        wednesday.style.display = "none"
        thursday.style.display = "none"
        friday.style.display = "none"
        saturday.style.display = "none"
        sunday.style.display = "none"
    } else if (current_day == 2) {
        monday.style.display = "none"
        tuesday.style.display = "none"
        wednesday.style.display = "block"
        thursday.style.display = "none"
        friday.style.display = "none"
        saturday.style.display = "none"
        sunday.style.display = "none"
    } else if (current_day == 3) {
        monday.style.display = "none"
        tuesday.style.display = "none"
        wednesday.style.display = "none"
        thursday.style.display = "block"
        friday.style.display = "none"
        saturday.style.display = "none"
        sunday.style.display = "none"
    } else if (current_day == 4) {
        monday.style.display = "none"
        tuesday.style.display = "none"
        wednesday.style.display = "none"
        thursday.style.display = "none"
        friday.style.display = "block"
        saturday.style.display = "none"
        sunday.style.display = "none"
    } else if (current_day == 5) {
        monday.style.display = "none"
        tuesday.style.display = "none"
        wednesday.style.display = "none"
        thursday.style.display = "none"
        friday.style.display = "none"
        saturday.style.display = "block"
        sunday.style.display = "none"
    } else if (current_day == 6) {
        monday.style.display = "none"
        tuesday.style.display = "none"
        wednesday.style.display = "none"
        thursday.style.display = "none"
        friday.style.display = "none"
        saturday.style.display = "none"
        sunday.style.display = "block"
    }
}

Set()

function Change_Day(increment, decrement, index) {
    if (increment == true) {
        if (current_day < 6) {
            current_day++;
        } else {
            current_day = 0;
        }
        Set()
    } else if (decrement == true) {
        if (current_day > 0) {
            current_day--;
        } else {
            current_day = 6;
        }
        Set()
    } else {
        current_day = index;
        Set()
    }
}

document.getElementById('day-left').addEventListener('click', () => {
    Change_Day(false, true, 0);
});

document.getElementById('day-right').addEventListener('click', () => {
    Change_Day(true, false, 0);
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//   FINDING EVENTS FOR THE DAY   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let days = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6
};

let day_map = {
    0: 6,
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5
};

let api_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=JguR9GHXPsJ9DqTtnDlYjmFKdIl-QLs1OZSpPxgl1MrrebH4Ae7fJC5HMfrYgqXAwO3g-OiWsE9VOYmZn7ym0t3GY5Vu5_tVm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJHuS9z0YuhrT-3Vq260P0SEZjS-CAk89NyabIMq29l37BewtScA0vkHXISjUnmfNKT-onlEH2COoNZVO3cHtXkMxjqVWQYRkg&lib=MN6OZnxKwUW0oF-2LQ9t5J1IOmpMGpgTG';

fetch(api_url)
    .then(response => response.json())
    .then((json) => {
        console.log(json.data[0])
    });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

