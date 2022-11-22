const api_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=9V-OFj2X2CRvVvATOQtNGA30cdq1gNCQjoFLhiGShnpWVyjPjyrIWL1I7rky8Rr1EA-49Arq7jKXf1r0I6D_nGKyZDJFs6KFm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnE8qm7V8vc929nhfcFmD82PVgYDImS4sXuX2jZGcJCX0S4hnj_u8iZ3FrXPHF_MzvK8kNYcMftVfHG6n3Ysp38UJpe0J070fvw&lib=MN6OZnxKwUW0oF-2LQ9t5J1IOmpMGpgTG';

/////////////////////////////////////////////////

let node

let foundEvent = false;

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

/////////////////////////////////////////////////

fetch(api_url)
  .then((response) => response.json())
  .then(json => {
    for (let i = 0; i <= 4; i++) {
        if (json[i].Practice != false) {
            foundEvent = true;
            CreateEvents()

            node = document.createTextNode("Type")
            type_title.appendChild(node)
            card.appendChild(type_title)

            node = document.createTextNode("Practice (" + json[i].Practice + ")")
            type.appendChild(node)
            card.appendChild(type)

            node = document.createTextNode("Day")
            day_title.appendChild(node)
            card.appendChild(day_title)

            node = document.createTextNode(json[i].Day)
            day.appendChild(node)
            card.appendChild(day)

            node = document.createTextNode("Time")
            time_title.appendChild(node)
            card.appendChild(time_title)

            node = document.createTextNode(json[i].PTime)
            time.appendChild(node)
            card.appendChild(time)

            node = document.createTextNode("Location")
            location_title.appendChild(node)
            card.appendChild(location_title)

            node = document.createTextNode(json[i].PLocation)
            place.appendChild(node)
            card.appendChild(place)

            events_section.appendChild(card)
            DestroyEvents()

        }
        if (json[i].Match != false) {
            foundEvent = true;
            CreateEvents()

            node = document.createTextNode("Type")
            type_title.appendChild(node)
            card.appendChild(type_title)

            node = document.createTextNode("Match (" + json[i].Match + ")")
            type.appendChild(node)
            card.appendChild(type)

            node = document.createTextNode("Day")
            day_title.appendChild(node)
            card.appendChild(day_title)

            node = document.createTextNode(json[i].Day)
            day.appendChild(node)
            card.appendChild(day)

            node = document.createTextNode("Time")
            time_title.appendChild(node)
            card.appendChild(time_title)

            node = document.createTextNode(json[i].MTime)
            time.appendChild(node)
            card.appendChild(time)

            node = document.createTextNode("Location")
            location_title.appendChild(node)
            card.appendChild(location_title)

            node = document.createTextNode(json[i].MLocation)
            place.appendChild(node)
            card.appendChild(place)

            events_section.appendChild(card)
            DestroyEvents()

        }
    }
    if (foundEvent == false) {
        CreateEvents()

        node = document.createTextNode("ㅤ");
        type_title.appendChild(node);
        card.appendChild(type_title);

        node = document.createTextNode("No events right now, check in later.");
        type.appendChild(node);
        card.appendChild(type);

        events_section.appendChild(card);
        DestroyEvents()
    }
  });
