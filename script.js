function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true); 

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
    document.getElementById('popup').innerText = ' Thanks for your recommendation!';
    // Add a tick mark icon to the popup
    var tickIcon = document.createElement("i");
    tickIcon.classList.add("fas", "fa-check");
    document.getElementById('popup').appendChild(tickIcon);
    // Add an OK button to the popup
    var okButton = document.createElement("button");
    okButton.innerText = "OK";
    okButton.addEventListener("click", function() {
      // Hide the popup when the OK button is clicked
      showPopup(false);
    });
    document.getElementById('popup').appendChild(okButton);
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
