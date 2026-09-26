// TripSync Planner

function getValue(id) {
    const element = document.getElementById(id);
    return element ? element.value : "";
}

function generateTrip() {

    // Get travel dates
    const startDate = getValue("startDate");
    const endDate = getValue("endDate");

    // Validate dates
    if (!startDate || !endDate) {
        alert("Please select your travel dates.");
        return;
    }

    if (endDate < startDate) {
        alert("End date cannot be before start date.");
        return;
    }

    // Get trip details
    const destination = getValue("travelPlace");
    const travelers = getValue("plannerTravelers");
    const budget = getValue("budget");
    const travelPace = getValue("travelPace");
    const specialRequest = getValue("specialRequest");

    // Get selected interests
    const interests = [
        ...document.querySelectorAll(".interest-btn")
    ]
    .filter(btn => btn.classList.contains("active"))
    .map(btn => btn.textContent.trim());

    // Create trip object
    const trip = {
        destination: destination,
        startDate: startDate,
        endDate: endDate,
        travelers: travelers,
        budget: budget,
        interests: interests,
        travelPace: travelPace,
        specialRequest: specialRequest
    };

    // Save in browser
    localStorage.setItem(
        "plannedTrip",
        JSON.stringify(trip)
    );

    // Send trip to backend
    fetch("http://localhost:5000/api/trips", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trip)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Server error");
        }

        return response.json();
    })
    .then(data => {

        console.log("Trip saved to backend:", data);

        alert("Your trip plan is ready! ✈️");

        window.location.href = "itinerary.html";
    })
    .catch(error => {

        console.error("Backend error:", error);

        alert(
            "Trip created, but the backend could not be reached."
        );

        // Still continue to itinerary page
        window.location.href = "itinerary.html";
    });
}


// Make function available to HTML onclick
window.generateTrip = generateTrip;