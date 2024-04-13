document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const playerNameEl = document.querySelector('.player-name');
    const storyText = document.querySelector('p');
    const storyImage = document.getElementById('storyImage');
    const choice1Button = document.getElementById('choice1');
    const choice2Button = document.getElementById('choice2');
    const resetButton = document.getElementById('reset');
    const scoreEl = document.querySelector('score');

    // Game state
    let currentState = 0;

    // Initialize game
    playerNameEl.textContent = localStorage.getItem('userName') ?? 'Mystery player';
    updateStory(currentState);
    resetButton.style.display = 'none';

    // Functions
    function updateStory(state) {
        switch (state) {
            case 0:
                storyText.innerHTML = "You're out on a hike and you come across a baby mountain lion with no mother in sight. It looks like it's injured.<br><br>What do you do?";
                storyImage.src = 'images/cub.jpg'
                choice1Button.textContent = 'Stay away in case the mother is close by';
                choice2Button.textContent = 'Try to pick it up';
                choice1Button.style.display = '';
                choice2Button.style.display = '';
                resetButton.style.display = 'none';
                break;
            case 1:
                storyText.innerHTML = 'You decide to keep your distance, because you know how dangerous mother mountain lions can be. You keep hiking, and hope the cub is alright.<br><br>About 15 minutes later, the trail intersects with a stream that is overflowing its banks. Do you try to hike through it, or call it a day? ';
                storyImage.src = 'images/stream.jpg'
                choice1Button.textContent = 'Hike through the stream';
                choice2Button.textContent = 'Turn around and head back';
                resetButton.style.display = '';
                break;
            case 2:
                storyText.innerHTML = "You scoop up the cub, and examine it. It's calm and doesn't seem to be afraid of you, but it has a pretty bad scrape on its leg.<br><br>You have a first aid kit with you, and you also have a friend who works at a wildlife sanctuary nearby. What do you do?";
                storyImage.src = 'images/cub2.jpg'
                choice1Button.textContent = 'Treat its wound and leave it there';
                choice2Button.textContent = 'Take it to the wildlife sanctuary';
                resetButton.style.display = '';
                break;
            case 3:
                storyText.innerHTML = "You hike through the stream, and your shoes get soaked. It's alright though, it's a pretty warm day, and it's honestly kind of refreshing.<br><br>You get to the top of the mountain, and hike back down. On the way back, you notice that the baby cub isn't in the place you saw it before. You look up, and you just catch a glimpse of its mother, carrying her baby to safety by the scruff of its neck. Oh good! It's safe after all.<br><br>What a refreshing hike!";
                storyImage.src = 'images/carrying.jpg'
                choice1Button.style.display = 'none';
                choice2Button.style.display = 'none';
                saveScore("finished a nice hike despite soggy shoes");
                break;
            case 4:
                storyText.innerHTML = "You don't feel like hiking with soggy shoes today, so you decide to head back.<br><br>On the way back down, you notice that the baby cub isn't in the place you saw it before. You look up, and you just catch a glimpse of its mother, carrying her baby to safety by the scruff of its neck. Oh good! It's safe after all.<br><br>You head home, glad you went on that hike even though it was a bit shorter than you planned. You spend the rest of the day relaxing at home.";
                storyImage.src = 'images/carrying.jpg'
                choice1Button.style.display = 'none';
                choice2Button.style.display = 'none';
                saveScore("headed home early to stay dry");
                break;
            case 5:
                storyText.innerHTML = "You set it down, get out your first aid kit, and get to work. You rinse out its cut with clean water from your water bottle, and put some antibacterial ointment on it.<br><br>Just as you finish and set the cub down, you hear something coming through the trees.<br><br>You back up quickly, and you watch as the cub's mother comes out from the trees, sniffs her baby, looks at you, and then calmly picks up her baby by the scruff of its neck and walks back into the forest.<br><br>Whew! Good thing she wasn't angry. Luckily, she seemed to understand that you weren't a threat.<br><br>Your water bottle is nearly empty now though, so you figure you'd better head home instead of finishing your hike. You're not too sad about that though, because you were able to help out a baby mountain lion, and that doesn't exactly happen every day. ";
                storyImage.src = 'images/carrying2.jpg'
                choice1Button.style.display = 'none';
                choice2Button.style.display = 'none';
                saveScore("helped an injured mountain lion cub");
                break;
            case 6:
                storyText.innerHTML = "Holding the cub in your arms, you start hiking back down the trail. You get to your car and drive straight to the wildlife sanctuary. When you get there, you find your friend and explain the situation.<br><br>\"It's a good thing you brought her in,\" she says after taking a look at the cub. \"With a cut like that, she probably would have gotten an infection and lost her leg. We'll take care of her, and in a week or two she'll be all healed up and we'll release her back where you found her, to be reunited with her mama.\"<br><br>You're glad you could help, and happy to hear that the cub's leg will be alright.<br><br>Two weeks later, your friend texts you a picture. It's kinda hard to see through all the trees, but you can just make out a mother cougar licking her baby.<br><br>Then, you get a second text from your friend.<br><br>\"Mom and baby are back together! Thank you so much for your help.\"";
                storyImage.src = 'images/bandaged.jpg'
                choice1Button.style.display = 'none';
                choice2Button.style.display = 'none';
                saveScore("brought a mountain lion cub to a wildlife sanctuary for treatment");
                break;
        }
    }

    function saveScore(endingDescription) {
        let scores = JSON.parse(localStorage.getItem('scores') || '[]');
        //const scoresText = localStorage.getItem('scores');
        // if (scoresText) {
        //   scores = JSON.parse(scoresText);
        // }
        //const date = new Date().toLocaleString();
        const userName = localStorage.getItem('userName') || 'Anonymous';
        const newScore = { 
            name: userName, 
            score: endingDescription, 
            date: new Date().toLocaleString() 
        };
        scores.push(newScore);
    
        localStorage.setItem('scores', JSON.stringify(scores));
      }

    setInterval(() => {
    const score = "finished the game";
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
        `<div class="event">some_user just ${score}!</div>` +
        chatText.innerHTML;
    }, 15000);

    // Event Listeners
    choice1Button.addEventListener('click', function() {
        if (currentState === 0) {
            currentState = 1;
        } else if (currentState === 1) {
            currentState = 3;
        } else if (currentState === 2) {
            currentState = 5;
        } 
        updateStory(currentState);
    });

    choice2Button.addEventListener('click', function() {
        if (currentState === 0) {
            currentState = 2; 
        } else if (currentState === 1) {
            currentState = 4; 
        } else if (currentState === 2) {
            currentState = 6; 
        }
        updateStory(currentState);
    });

    resetButton.addEventListener('click', function() {
        currentState = 0; // Reset game state to the beginning
        updateStory(currentState);
    });

});