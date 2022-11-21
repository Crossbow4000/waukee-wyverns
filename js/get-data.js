const api_url = 'https://api.sheety.co/5ee27d6536c5a1b1bac026b071e23292/apiStuff/sheet1';

/////////////////////////////////////////////////

let node

function CreateEvents() {
  events_section = document.getElementById("events");
  card = document.createElement("div");
  card.classList.add("event-card");
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

/////////////////////////////////////////////////

fetch(api_url)
  .then((response) => response.json())
  .then(json => {
    for (let i = 0; i <= 4; i++) {
        if (json.sheet1[i].practice != false) {

            CreateEvents()

            node = document.createTextNode("Type")
            type_title.appendChild(node)
            card.appendChild(type_title)

            node = document.createTextNode("Practice (" + json.sheet1[i].practice + ")")
            type.appendChild(node)
            card.appendChild(type)

            node = document.createTextNode("Day")
            day_title.appendChild(node)
            card.appendChild(day_title)

            node = document.createTextNode(json.sheet1[i].day)
            day.appendChild(node)
            card.appendChild(day)

            node = document.createTextNode("Time")
            time_title.appendChild(node)
            card.appendChild(time_title)

            node = document.createTextNode(json.sheet1[i].practiceTime)
            time.appendChild(node)
            card.appendChild(time)

            node = document.createTextNode("Location")
            location_title.appendChild(node)
            card.appendChild(location_title)

            node = document.createTextNode(json.sheet1[i].practiceLocation)
            place.appendChild(node)
            card.appendChild(place)

            events_section.appendChild(card)
            DestroyEvents()

        } else if (json.sheet1[i].match != false) {

            CreateEvents()

            node = document.createTextNode("Type")
            type_title.appendChild(node)
            card.appendChild(type_title)

            node = document.createTextNode("Match (" + json.sheet1[i].match + ")")
            type.appendChild(node)
            card.appendChild(type)

            node = document.createTextNode("Day")
            day_title.appendChild(node)
            card.appendChild(day_title)

            node = document.createTextNode(json.sheet1[i].day)
            day.appendChild(node)
            card.appendChild(day)

            node = document.createTextNode("Time")
            time_title.appendChild(node)
            card.appendChild(time_title)

            node = document.createTextNode(json.sheet1[i].matchTime)
            time.appendChild(node)
            card.appendChild(time)

            node = document.createTextNode("Location")
            location_title.appendChild(node)
            card.appendChild(location_title)

            node = document.createTextNode(json.sheet1[i].matchLocation)
            place.appendChild(node)
            card.appendChild(place)

            events_section.appendChild(card)
            DestroyEvents()

        }
    }
  });
