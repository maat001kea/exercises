"use strict";

const queueElement = document.getElementById("queueNumber");
const personelListElement = document.getElementById("personelList");
const queueNameElement = document.getElementById("queueName");
const lastUpdatedElement = document.getElementById("lastUpdated");

async function fetchQueueData() {
  try {
    const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
    const data = await response.json();

    // Opdater kønummer
    queueElement.textContent = data.inQueue;

    // Opdater navn på kø (fx "FooBar")
    queueNameElement.textContent = data.name;

    // Opdater tidspunkt for sidste opdatering
    lastUpdatedElement.textContent = data.loggedAt;

    // Opdater personale liste
    personelListElement.innerHTML = ""; // Ryd tidligere indhold
    data.personel.forEach((person) => {
      const listItem = document.createElement("li");
      listItem.textContent = person;
      personelListElement.appendChild(listItem);
    });

    // Tilføj animationseffekt
    queueElement.classList.add("grow");

    // Fjern animationseffekt, når den er færdig
    queueElement.addEventListener("transitionend", () => {
      queueElement.classList.remove("grow");
    });
  } catch (error) {
    console.error("Fejl ved hentning af data:", error);
    queueElement.textContent = "Fejl!";
  }
}

// Hent data hver 10. sekund
fetchQueueData();
setInterval(fetchQueueData, 10000);
