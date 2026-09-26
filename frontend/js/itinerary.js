document.addEventListener("DOMContentLoaded", () => {

    const trip = JSON.parse(localStorage.getItem("plannedTrip"));

    if (!trip) {
        document.getElementById("itineraryList").innerHTML =
            "<p>No trip found. Please plan a trip first.</p>";
        return;
    }

    document.getElementById("tripDestination").textContent =
        trip.destination;

    document.getElementById("tripDates").textContent =
        `📅 ${trip.startDate} → ${trip.endDate}`;

    document.getElementById("tripTravelers").textContent =
        `👥 Travelers: ${trip.travelers}`;

    document.getElementById("tripBudget").textContent =
        `💰 Budget: ${trip.budget}`;

    document.getElementById("tripSummary").textContent =
        `A personalized trip plan for ${trip.destination}`;

    const interests = trip.interests.length
        ? trip.interests.join(", ")
        : "Sightseeing";

    const days = [
        `Explore ${trip.destination} and visit popular attractions.`,
        `Enjoy ${interests} and discover local places.`,
        `Try local food, shopping and cultural experiences.`,
        `Relax, explore nearby attractions and enjoy your final day.`
    ];

    const list = document.getElementById("itineraryList");

    days.forEach((activity, index) => {
        list.innerHTML += `
            <div class="day-card">
                <h3>Day ${index + 1}</h3>
                <p>${activity}</p>
            </div>
        `;
    });

});