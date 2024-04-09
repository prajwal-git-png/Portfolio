document.addEventListener("DOMContentLoaded", function() {
    // Find the download link
    var downloadLink = document.getElementById("downloadLink");

    // Add an event listener to simulate a click event
    downloadLink.addEventListener("click", function(event) {
        // Prevent the default action (going to "#")
        event.preventDefault();

        // Replace "#" with the actual link to the PDF file
        var pdfURL = "pdf/resume.pdf";

        // Open the PDF in a new tab/window
        window.open(pdfURL, "_blank");
    });
});