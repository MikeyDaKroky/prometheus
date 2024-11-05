// Toggle the visibility of side navigation and overlay
function toggleNav() {
    var nav = document.getElementById("mySidenav");
    var overlay = document.getElementById("overlay");
    if (nav.style.width === "250px") {
        closeNav();
    } else {
        nav.style.width = "250px";
        overlay.style.display = "block"; // Show overlay
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").style.display = "none"; // Hide overlay
}

// Show the default homepage content on page load
document.addEventListener("DOMContentLoaded", function() {
    toggleContent('homePage'); // Display the home content by default
});

// Function to toggle the visibility of content sections
function toggleContent(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "block") {
        section.style.display = "none"; // Hide if already visible
    } else {
        // Hide all other sections
        var sections = document.querySelectorAll('.content');
        sections.forEach(function(sec) {
            sec.style.display = "none";
        });

        section.style.display = "block"; // Show clicked section
    }
}

// Function to toggle the visibility of subfolders
function toggleSubfolder(subfolderId) {
    var subfolder = document.getElementById(subfolderId);
    if (subfolder.style.display === "block") {
        subfolder.style.display = "none";
    } else {
        subfolder.style.display = "block";
    }
}

// Dilution calculator function with added water calculation
function calculateDilution() {
    const cbefore = parseFloat(document.getElementById("cbefore").value);
    const vbefore = parseFloat(document.getElementById("vbefore").value);
    const cafter = parseFloat(document.getElementById("cafter").value);
    const vafterInput = document.getElementById("vafter").value;
    let vafter = parseFloat(vafterInput);

    let resultMessage = '';
    let waterMessage = ''; // This will hold the amount of water required, if applicable

    if (cbefore > 0 && vbefore > 0 && cafter > 0 && vafter > 0) {
        const result = cbefore * vbefore === cafter * vafter;
        resultMessage = `Result: ${result}`;
    } else if (cbefore > 0 && vbefore > 0 && cafter > 0) {
        vafter = (cbefore * vbefore) / cafter;
        resultMessage = `Volume after dilution: ${vafter.toFixed(4)} ml`;
        // Calculate water required
        if (vbefore < vafter) {
            const waterRequired = vafter - vbefore;
            waterMessage = `Amount of water to add: ${waterRequired.toFixed(4)} ml`;
        }
    } else if (cbefore > 0 && vbefore > 0 && vafter > 0) {
        const cafter = cbefore * vbefore / vafter;
        resultMessage = `Concentration After: ${cafter.toFixed(4)} M`;
    } else if (cbefore > 0 && cafter > 0 && vafter > 0) {
        const vbefore = cafter * vafter / cbefore;
        resultMessage = `Volume Before: ${vbefore.toFixed(4)} ml`;
    } else if (vbefore > 0 && cafter > 0 && vafter > 0) {
        const cbefore = cafter * vafter / vbefore;
        resultMessage = `Concentration Before: ${cbefore.toFixed(4)} M`;
    } else {
        resultMessage = "Please enter at least three valid input values";
    }

    // Display results
    document.getElementById("dilution-result").innerHTML = resultMessage;
    document.getElementById("water-required").innerHTML = waterMessage;
}

function calculateSolute() {
    const gramsSolute = parseFloat(document.getElementById("gramsSolute").value);
    const volumeSolute = parseFloat(document.getElementById("volumeSolute").value);
    const concentrationSolute = parseFloat(document.getElementById("concentrationSolute").value);
    const weightSolute = parseFloat(document.getElementById("weightSolute").value);
  
    let resultMessageSolute = '';
  
    if (gramsSolute === 0 || isNaN(gramsSolute)) {
      if (volumeSolute > 0 && concentrationSolute > 0 && weightSolute > 0) {
        const gramsSoluteCalc = volumeSolute * concentrationSolute * weightSolute;
        resultMessageSolute = `Grams to weigh: ${gramsSoluteCalc.toFixed(4)} g`;
      } else {
        resultMessageSolute = "Please enter volume, concentration, and formula weight";
      }
    } else if (volumeSolute === 0 || isNaN(volumeSolute)) {
      if (gramsSolute > 0 && concentrationSolute > 0 && weightSolute > 0) {
        const volumeSoluteCalc = gramsSolute / (concentrationSolute * weightSolute);
        resultMessageSolute = `Volume: ${volumeSoluteCalc.toFixed(4)} dm^-3`;
      } else {
        resultMessageSolute = "Please enter grams, concentration, and formula weight";
      }
    } else if (concentrationSolute === 0 || isNaN(concentrationSolute)) {
      if (gramsSolute > 0 && volumeSolute > 0 && weightSolute > 0) {
        const concentrationSoluteCalc = gramsSolute / (volumeSolute * weightSolute);
        resultMessageSolute = `Concentration: ${concentrationSoluteCalc.toFixed(4)} M`;
      } else {
        resultMessageSolute = "Please enter grams, volume, and formula weight";
      }
    } else if (weightSolute === 0 || isNaN(weightSolute)) {
      if (gramsSolute > 0 && volumeSolute > 0 && concentrationSolute > 0) {
        const weightSoluteCalc = gramsSolute / (volumeSolute * concentrationSolute);
        resultMessageSolute = `Formula weight: ${weightSoluteCalc.toFixed(4)} g/mol`;
      } else {
        resultMessageSolute = "Please enter grams, volume, and concentration";
      }
    } else {
      resultMessageSolute = "All values are already filled";
    }
  
    document.getElementById("solute-result").innerHTML = resultMessageSolute;
  }

// Search functionality for chemicals
function searchChemicals() {
    const input = document.getElementById('searchBar').value.toUpperCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardText = card.querySelector('h3').innerText.toUpperCase();
        if (cardText.indexOf(input) > -1) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}


// Function to flip card when clicked
function flipCard(card) {
    const front = card.querySelector('.card-front');
    const back = card.querySelector('.card-back');
    if (front.style.transform === 'rotateY(180deg)') {
        front.style.transform = 'rotateY(0deg)';
        back.style.transform = 'rotateY(180deg)';
    } else {
        front.style.transform = 'rotateY(180deg)';
        back.style.transform = 'rotateY(0deg)';
    }
}

function flipCardSpace(cardSpace) {
    const front = cardSpace.querySelector('.card-frontSpace');
    const back = cardSpace.querySelector('.card-backSpace');
    if (front.style.transform === 'rotateY(180deg)') {
        front.style.transform = 'rotateY(0deg)';
        back.style.transform = 'rotateY(180deg)';
    } else {
        front.style.transform = 'rotateY(180deg)';
        back.style.transform = 'rotateY(0deg)';
    }
}
