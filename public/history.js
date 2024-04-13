function loadScores() {
    let scores = JSON.parse(localStorage.getItem('scores') || '[]');
    // const scoresText = localStorage.getItem('scores');
    // if (scoresText) {
    //   scores = JSON.parse(scoresText);
    // }
  
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
  
document.addEventListener('DOMContentLoaded', loadScores);
