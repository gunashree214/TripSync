function planPlace(place) {
    localStorage.setItem(
        "tripData",
        JSON.stringify({
            destination: place,
            travelers: "2"
        })
    );

    window.location.href = "planner.html";
}