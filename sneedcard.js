function getFormInfo(event) {
  event.preventDefault(); // Prevent the form from submitting
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;

  const registerName = document.getElementById("registerName");
  console.log(registerName);

  // Update the name in the original card (visible)
  const visibleCardRegisterName = document.getElementById("registerName");
  visibleCardRegisterName.innerHTML = firstName + " " + lastName;
}

const submitButton = document.getElementById("sneedSubmit");
submitButton.addEventListener("click", getFormInfo);

document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.querySelector(".sneedCardSaveButton");
  const sneedCard = document.querySelector(".sneedCard");

  saveButton.addEventListener("click", function () {
    // Clone the sneedCard element
    const clonedSneedCard = sneedCard.cloneNode(true);

    // Append the cloned element to the current document (hidden)
    clonedSneedCard.style.position = "absolute";
    clonedSneedCard.style.left = "-9999px";
    clonedSneedCard.style.top = "-9999px";
    document.body.appendChild(clonedSneedCard);

    // Wait for a short delay to ensure the cloned element is rendered
    setTimeout(() => {
      // Use HTML2Canvas to capture the cloned element with its styles
      html2canvas(clonedSneedCard).then((canvas) => {
        // Convert the captured content to a data URL
        const imageDataURL = canvas.toDataURL("image/png");

        // Create a new anchor element for the automatic download
        const a = document.createElement("a");
        a.href = imageDataURL;
        a.download = "sneed_card.png"; // Set the desired file name
        a.style.display = "none"; // Hide the link
        document.body.appendChild(a);
        a.click();

        // Clean up by removing the cloned element
        document.body.removeChild(clonedSneedCard);
      });
    }, 100);
  });
});
