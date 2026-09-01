
// ==========================================
// ADD RECOMMENDATION
// ==========================================

function addRecommendation() {

    const recommendationInput =
        document.getElementById("newRecommendation");

    const recommendationText =
        recommendationInput.value.trim();

    // Do nothing if the recommendation is empty
    if (recommendationText === "") {
        return;
    }

    // Create new recommendation
    const recommendation =
        document.createElement("div");

    recommendation.className = "recommendation";

    recommendation.innerHTML =
        `<p>"${recommendationText}"</p>`;

    // Add recommendation to the list
    document
        .getElementById("recommendation-list")
        .appendChild(recommendation);

    // Clear input
    recommendationInput.value = "";

    // Show popup ONLY after recommendation is successfully added
    showPopup(true);
}


// ==========================================
// SHOW POPUP
// ==========================================

function showPopup(show) {

    if (show === true) {

        alert("Thank you for your recommendation!");

    }

}


// ==========================================
// FORM SUBMISSION
// ==========================================

document
    .getElementById("recommendationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        addRecommendation();

    });

