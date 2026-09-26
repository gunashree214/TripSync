// ==========================================
// TRIPSYNC - MAIN APP JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------------------
    // PLAN MY TRIP
    // ------------------------------------------

    const planButton = document.querySelector(".plan-btn");

    if (planButton) {
        planButton.addEventListener("click", startPlanning);
    }


    // ------------------------------------------
    // START PLANNING FUNCTION
    // ------------------------------------------

    function startPlanning() {

        const destinationInput =
            document.getElementById("destination");

        const dateInput =
            document.getElementById("travelDate");

        const travelersInput =
            document.getElementById("travelers");


        // Check elements exist
        if (!destinationInput || !dateInput || !travelersInput) {
            console.error("Trip form elements not found.");
            return;
        }


        const destination =
            destinationInput.value.trim();

        const travelDate =
            dateInput.value;

        const travelers =
            travelersInput.value;


        // ------------------------------------------
        // VALIDATION
        // ------------------------------------------

        if (destination === "") {
            alert("Please enter your destination.");
            destinationInput.focus();
            return;
        }

        if (travelDate === "") {
            alert("Please select your travel date.");
            dateInput.focus();
            return;
        }


        // ------------------------------------------
        // SAVE TRIP INFORMATION
        // ------------------------------------------

        const tripData = {
            destination: destination,
            date: travelDate,
            travelers: travelers
        };

        localStorage.setItem(
            "tripData",
            JSON.stringify(tripData)
        );


        // ------------------------------------------
        // GO TO PLANNER
        // ------------------------------------------

        window.location.href = "planner.html";
    }


    // ------------------------------------------
    // SET MINIMUM DATE TO TODAY
    // ------------------------------------------

    const dateInput =
        document.getElementById("travelDate");

    if (dateInput) {

        const today =
            new Date().toISOString().split("T")[0];

        dateInput.min = today;
    }


    // ------------------------------------------
    // NAVIGATION HELPER
    // ------------------------------------------

    window.goToPage = function(page) {
        window.location.href = page;
    };


    // ------------------------------------------
    // CONSOLE MESSAGE
    // ------------------------------------------

    console.log("TripSync loaded successfully ✈️");
});