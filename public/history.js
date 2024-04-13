async function loadScores() {
    let scores = [];
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/scores');
      scores = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just use the last saved scores
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }
    }
    displayScores(scores);
  }

function displayScores(scores) {
      const tableBodyEl = document.querySelector('#scores');
  
    if (scores.length) {
        scores.forEach((score, index) => {
            const rowEl = document.createElement('tr');

            const nameTdEl = document.createElement('td');
            const scoreTdEl = document.createElement('td');
            const dateTdEl = document.createElement('td');

            nameTdEl.textContent = score.name;
            scoreTdEl.textContent = score.score;
            dateTdEl.textContent = score.date;

            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(scoreTdEl);
            rowEl.appendChild(dateTdEl);

            tableBodyEl.appendChild(rowEl);
        });
    } else {
        tableBodyEl.innerHTML = '<tr><td colspan="4">Be the first to play</td></tr>';
    }
}

function fetchRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            const imgElement = document.getElementById('dog-image');
            imgElement.src = data.message; // Update image source
        } else {
            console.error('Failed to fetch dog image:', data.message);
        }
    })
    .catch(error => {
        console.error('Error fetching dog image:', error);
    });
}

fetchRandomDogImage();
loadScores();
