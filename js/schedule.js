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

let number_of_events = 0;

let current_day_events = [];

function CreateEvents() {
    events_section = document.getElementById("events");
    card = document.createElement("div");
    card.classList.add("event-card");
    card.classList.add("dark-toggle");
    type_title = document.createElement("p");
    type_title.classList.add("card-title");
    type = document.createElement("h1");
    type.classList.add("event-text");
    day_title = document.createElement("p");
    day_title.classList.add("card-title");
    day = document.createElement("h1");
    day.classList.add("event-text");
    time_title = document.createElement("p")
    time_title.classList.add("card-title");
    time = document.createElement("p");
    time.classList.add("event-text");
    location_title = document.createElement("p");
    location_title.classList.add("card-title");
    place = document.createElement("h1");
    place.classList.add("event-text");
  }
  
  function DestroyEvents() {
    delete events_section;
    delete card;
    delete type_title;
    delete type;
    delete day_title;
    delete day;
    delete time_title;
    delete time;
    delete location_title;
    delete place;
  }  

function Reload() {
    numObjects = 0;
    current_day_events = [];
    fetch(api_url)
        .then(response => response.json())
        .then((json) => {
            for (let i in json.data) {
                if (days[json.data[i].Day] == current_day) {
                    if (json.data[i].Practice != false) {
                        current_day_events.push(json.data[i])
                    } else if (json.data[i].Match != false) {
                        current_day_events.push(json.data[i])
                    }
                }
            }
        });
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//   UPDATE   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Reload()
document.getElementById('day-left').addEventListener('click', () => {
    Change_Day(false, true, 0);
    Reload();
});

document.getElementById('day-right').addEventListener('click', () => {
    Change_Day(true, false, 0);
    Reload();
});

document.getElementById("1").addEventListener("click", () => {
    document.getElementById("1").setAttribute('data-selected', 'true')
    document.getElementById("2").setAttribute('data-selected', 'false')
    document.getElementById("3").setAttribute('data-selected', 'false')
    document.getElementById("4").setAttribute('data-selected', 'false')
    Toggle();
    Toggle();
});

document.getElementById("2").addEventListener("click", () => {
    document.getElementById("1").setAttribute('data-selected', 'false')
    document.getElementById("2").setAttribute('data-selected', 'true')
    document.getElementById("3").setAttribute('data-selected', 'false')
    document.getElementById("4").setAttribute('data-selected', 'false')
    Toggle();
    Toggle();
});

document.getElementById("3").addEventListener("click", () => {
    document.getElementById("1").setAttribute('data-selected', 'false')
    document.getElementById("2").setAttribute('data-selected', 'false')
    document.getElementById("3").setAttribute('data-selected', 'true')
    document.getElementById("4").setAttribute('data-selected', 'false')
    Toggle();
    Toggle();
});

document.getElementById("4").addEventListener("click", () => {
    document.getElementById("1").setAttribute('data-selected', 'false')
    document.getElementById("2").setAttribute('data-selected', 'false')
    document.getElementById("3").setAttribute('data-selected', 'false')
    document.getElementById("4").setAttribute('data-selected', 'true')
    Toggle();
    Toggle();
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
