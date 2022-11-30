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
    card.classList.add("event-info");
    card.classList.add("dark-toggle");
    type_title = document.createElement("h3");
    type_title.classList.add("title");
    type = document.createElement("p");
    type.classList.add("para");
    time_title = document.createElement("h3")
    time_title.classList.add("title");
    time = document.createElement("p");
    time.classList.add("para");
    location_title = document.createElement("h3");
    location_title.classList.add("title");
    place = document.createElement("p");
    place.classList.add("para");
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
    while (document.getElementById("event-info-container").lastChild) {
        document.getElementById("event-info-container").lastChild.remove();
    }
    document.getElementById("1").setAttribute('data-selected', 'true')
    document.getElementById("2").setAttribute('data-selected', 'false')
    document.getElementById("3").setAttribute('data-selected', 'false')
    document.getElementById("4").setAttribute('data-selected', 'false')
    Toggle();
    Toggle();
    document.getElementById("1").style.display = "none"
    document.getElementById("2").style.display = "none"
    document.getElementById("3").style.display = "none"
    document.getElementById("4").style.display = "none"
    document.getElementById("loading-container").style.display = "block"
    fetch(api_url)
        .then(response => response.json())
        .then((json) => {
            current_day_events = [];
            for (let i in json.data) {
                if (days[json.data[i].Day] == current_day) {
                    if (json.data[i].Practice != false) {
                        current_day_events.push(json.data[i])
                        CreateEvents();

                        node = document.createTextNode("Type");
                        type_title.appendChild(node);
                        card.appendChild(type_title);

                        node = document.createTextNode("Practice (" + json.data[i].Practice + ")");
                        type.appendChild(node);
                        card.appendChild(type);

                        node = document.createTextNode("Time")
                        time_title.appendChild(node)
                        card.appendChild(time_title)

                        node = document.createTextNode(json.data[i].PTime)
                        time.appendChild(node)
                        card.appendChild(time)

                        node = document.createTextNode("Location")
                        location_title.appendChild(node)
                        card.appendChild(location_title)

                        node = document.createTextNode(json.data[i].PLocation)
                        place.appendChild(node)
                        card.appendChild(place)

                        document.getElementById("event-info-container").appendChild(card);
                        DestroyEvents();
                    }
                    if (json.data[i].Match != false) {
                        current_day_events.push(json.data[i])
                        CreateEvents();

                        node = document.createTextNode("Type");
                        type_title.appendChild(node);
                        card.appendChild(type_title);

                        node = document.createTextNode("Match (" + json.data[i].Match + ")");
                        type.appendChild(node);
                        card.appendChild(type);

                        node = document.createTextNode("Time")
                        time_title.appendChild(node)
                        card.appendChild(time_title)

                        node = document.createTextNode(json.data[i].MTime)
                        time.appendChild(node)
                        card.appendChild(time)

                        node = document.createTextNode("Location")
                        location_title.appendChild(node)
                        card.appendChild(location_title)

                        node = document.createTextNode(json.data[i].MLocation)
                        place.appendChild(node)
                        card.appendChild(place)

                        document.getElementById("event-info-container").appendChild(card);
                        DestroyEvents();
                    }
                }
            }

            if (document.getElementById("event-info-container").children.length == 0) {
                CreateEvents();


                noEvents = document.createElement("h1");
                noEvents.classList.add("no-events")
                node = document.createTextNode("No events today.");
                noEvents.appendChild(node);
                card.appendChild(noEvents);
                document.getElementById("event-info-container").appendChild(card);

                DestroyEvents();
            }

            try {
                document.getElementById("event-info-container").children[0].style.display = "block"
                document.getElementById("event-info-container").children[1].style.display = "none"
                document.getElementById("event-info-container").children[2].style.display = "none"
                document.getElementById("event-info-container").children[3].style.display = "none"
            } catch {
                let o = "o"
            }

            if (current_day_events.length == 4) {
                document.getElementById("1").style.display = "block"
                document.getElementById("2").style.display = "block"
                document.getElementById("3").style.display = "block"
                document.getElementById("4").style.display = "block"
            } else if (current_day_events.length == 3) {
                document.getElementById("1").style.display = "block"
                document.getElementById("2").style.display = "block"
                document.getElementById("3").style.display = "block"
                document.getElementById("4").style.display = "none"
            } else if (current_day_events.length == 2) {
                document.getElementById("1").style.display = "block"
                document.getElementById("2").style.display = "block"
                document.getElementById("3").style.display = "none"
                document.getElementById("4").style.display = "none"
            } else if (current_day_events.length == 1) {
                document.getElementById("1").style.display = "block"
                document.getElementById("2").style.display = "none"
                document.getElementById("3").style.display = "none"
                document.getElementById("4").style.display = "none"
            } else {
                document.getElementById("1").style.display = "none"
                document.getElementById("2").style.display = "none"
                document.getElementById("3").style.display = "none"
                document.getElementById("4").style.display = "none"
            }
            document.getElementById("loading-container").style.display = "none"
            Toggle();
            Toggle();
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
    document.getElementById("event-info-container").children[0].style.display = "block"
    document.getElementById("event-info-container").children[1].style.display = "none"
    document.getElementById("event-info-container").children[2].style.display = "none"
    document.getElementById("event-info-container").children[3].style.display = "none"
});

document.getElementById("2").addEventListener("click", () => {
    document.getElementById("1").setAttribute('data-selected', 'false')
    document.getElementById("2").setAttribute('data-selected', 'true')
    document.getElementById("3").setAttribute('data-selected', 'false')
    document.getElementById("4").setAttribute('data-selected', 'false')
    Toggle();
    Toggle();
    document.getElementById("event-info-container").children[0].style.display = "none"
    document.getElementById("event-info-container").children[1].style.display = "block"
    document.getElementById("event-info-container").children[2].style.display = "none"
    document.getElementById("event-info-container").children[3].style.display = "none"
});

document.getElementById("3").addEventListener("click", () => {
    document.getElementById("1").setAttribute('data-selected', 'false')
    document.getElementById("2").setAttribute('data-selected', 'false')
    document.getElementById("3").setAttribute('data-selected', 'true')
    document.getElementById("4").setAttribute('data-selected', 'false')
    Toggle();
    Toggle();
    document.getElementById("event-info-container").children[0].style.display = "none"
    document.getElementById("event-info-container").children[1].style.display = "none"
    document.getElementById("event-info-container").children[2].style.display = "block"
    document.getElementById("event-info-container").children[3].style.display = "none"
});

document.getElementById("4").addEventListener("click", () => {
    document.getElementById("1").setAttribute('data-selected', 'false')
    document.getElementById("2").setAttribute('data-selected', 'false')
    document.getElementById("3").setAttribute('data-selected', 'false')
    document.getElementById("4").setAttribute('data-selected', 'true')
    Toggle();
    Toggle();
    document.getElementById("event-info-container").children[0].style.display = "none"
    document.getElementById("event-info-container").children[1].style.display = "none"
    document.getElementById("event-info-container").children[2].style.display = "none"
    document.getElementById("event-info-container").children[3].style.display = "block"
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
