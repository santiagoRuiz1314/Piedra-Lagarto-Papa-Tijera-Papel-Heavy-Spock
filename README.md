# Rock Paper Scissors Lizard Spock

This website has been based on the Rock, Paper, Scissors, Lizard, Spock game originally created by Sam Kass. Fans of the Big Bang Theory television series will recognise this game as it features in several episodes. This site provides an interactive version of the game where users can play against the computer with the goal of being the first to 10 wins. 

The website has been made to complete the second project within the Code Institute Full Stack Developer course and focuses predominately on the use of the Java Script language. It also uses HTML5 and CCS3 for the structure of the site being built in a way that allows it to be responsive across a range of devices. 

![Am I responsive? for Rock, Paper, Scissors, Lizard, Spock game website](/assets/readMe-images/RPSLS_responsive.png)


Link to live project: https://tr94.github.io/rock-paper-scissors-lizard-spock/

# User Experience

The target audience for this site are fans of the Big Bang Theory who will already be familiar with the game from watching the television series. This site is intended to allow them to play the game, as seen on television, against a randomised computer output. 

The user goals for new and returning users are the same:
- As a user, I want to play the game as seen in the television show
- As a user, I want the game to have a goal to aim for with a tally of scores
- As a new user, I want be reminded of the rules of the game

# Development Planes

To develop the site in a structured manner the 5 development planes have been considered. Working through these in a systematic manner allows the key building blocks of the site to be in place before fine tuning the aesthetics. Working methodically in this way should result in the initial release being much closer to the final desired output. 

## Strategy

There are no commercial drivers for this website, it’s pure focus is to provide an interactive game for fans of the Big Bang Theory series. Therefore the only strategic requirements for the site are to ensure the user has an authentic gaming experience which:
- Is accurate to the rules of the game
- Feels genuine I.e; computer opponent is fair
- Is interactive and engaging

## Scope

Defining the scope at this early stage allows the development work to stay focused, it agrees what is on and off the table for the initial release. 

Based on the user experience and strategy above, the content requirements are:
- A reminder of the rules of the game 
- A game area for the user to interact with
- A goal for the user to work towards 
- A score counter for the user to being to track against the goal
- Feedback for the result of each round

## Structure
The structure of this site is very simple:
- Game page; will hold the game content  
- Rules page; linked from the home page and opens in a new tab. A static page showing the rules

![Site Map for Rock, Paper, Scissors, Lizard, Spock game website](/assets/readMe-images/RPSLS_Structure.png)

## Skeleton

In order to visualise the pages, the content has been mocked up using wireframes. Using wireframes at this stage of the development allows the freedom to be creative without being tied into the code. This gives a flavour of how the page(s) will look and can be easily modified until agreement is reached. 

Balsamiq was used to create the wireframes: 

Game page:

![Game page wireframe for Rock, Paper, Scissors, Lizard, Spock game](/assets/readMe-images/RPSLS_Home.png)

Rules page:

![Rules page wireframe for Rock, Paper, Scissors, Lizard, Spock game](/assets/readMe-images/RPSLS_Rules.png)

At this stage, the wireframes are reviewed against the original goals and strategy for the site. It is important to check the design is fit for purpose before committing to the coding process. 

Review against the content requirements: 
A reminder of the rules of the game:
- Adding the rules into the main game would have distracted from the game and made the page quite busy. Button added which opens a new tab and displays the rules for users that need a reminder.
A game area for the user to interact with:
- Clear instructions will be given on how to operate the game, pseudo styling will indicate action to the user. 
A goal for the user to work towards:
- First to 10 wins is the clear goal for this game
A score counter for the user to being to track against the goal:
- Score counter included at the bottom of the page to keep track against the goal
Feedback for the result of each round:
- "Win or Lose" box will display the result of each round such as "paper covers rock".

For this site the review showed the design to meet the requirements and therefore agreement was made to proceed. 

## Surface:
Once the structure and wireframe have been agreed, the look and feel of the site can be developed. This may need to align to branding but in the case of this site there are no commercial requirements. 

Based on the Big Bang Theory and science themes along with Sci-Fi Spock influence, the styling for this site is a space/sci-fi theme. 

### Colour
The over-arching colour for the background is an off-grey which feels modern and perhaps a little industrial like a space ship. 

The hover colours for each button as carried through from the image explaining the game rules (hyperlinked "rules" button). This image was taken from an internet search so the styling was not under the control of this project however keeping the colours consistent throughout helps it feel part of the overal design. 

The results feedback box uses simple colours to denote win (green) and lose (red) which is easily understandable to the player. 

### Font
Google Fonts was used to find a font pairing that portrays a Sci-Fi theme.

"Orbitron" was recommended for this and, using Font-Joy it was paired with "Prompt". Orbitron gives a heavy title which is bold and clear whilst Prompt is easier to read for the body of the website. 

### Images and Icons
The imagery for this website has been kept deliberately simple to not distract from the game. The player choice buttons has been imaged with the hand signals for each option, more realistic images of the options could have been used but it was decided to keep the game feeling more like something you would play in the playground with an opponent. 

The icon for the tab title mirrors this using a hand "fist" just like you're playing face to face with your opponent. The icon was sourced from Font Awesome.

# Features: 
The game page has been split into several sections which has distinct purposes. See image below for diagram:
![Explanation of Rock, Paper, Scissors, Lizard, Spock game area](/assets/readMe-images/RPSLS_markup.png)

Button area:
This has 4 buttons in total however they are displayed at different points within the game. 
- Rules: The "rules" button is always on show and this links to a new tab page displaying the rules. 
- Start: "Start" has to be clicked by the player before the game can start. The reset of the game functionality is locked until this button is clicked.
- Quit: Once the "start" button has been clicked it disappears and is replaced with a "quit" button. This is clicked if the player wants to end the game and it resets the game. 
- Reset: Once the game has been played out and one of the players has reached 10 wins the game will declare the winner. At this point the "quit" button will disappear and be replaced with a "reset" button which also resets the game.

Choice area: 
This area is "unlocked" once the "start" button has been clicked. The player can then make their choice for the round by clicking on their desired image. The cursor changes to indicate a clickable link and when hovering over any of the images a border colour is added to make the choice clear and interative. 

Results / Feedback area:
This provides instructions and feedback to the player. 
Upon loading the game the instruction is provided to click the "start" button. 
Once the "start" button is clicked, the instruction is provided to make a choice using the 5 image buttons. 
As soon as the first choice is made this area then becomes feedback on the results of each round such as "rock smashes scissors - player wins!"
When one of the players reaches 10 the box colour fills red or green and declares the final winner with an instruction to click the "reset" button. 

Game area:
The area where the head to head gaming happens. The player and computer choices are displayed here next to each other for each round. 

Score counter area: 
The scores are kept in a simple counter in this area. 

# Technologies used:

Coding languages used: 

HTML5
CCS3
Java Script

External resources: 

# Accessibility: 

Considering how to make a website is accessible to all users should be high on the list of priorities during development. For this site the following aspects have been incorporated:
Alt labels on the images/buttons
Aria label on the “rules page” link 

Within Google Developer tools, Lighthouse is a way of measuring the accessibility of a website. For this site the report shows as below:

![Lighthouse scores for Rock, Paper, Scissors, Lizard, Spock game](/assets/readMe-images/RPSLS_lighthouse.png)

# Testing

# Bugs

# Deployment

This project was developed using Code Anywhere and all updates were committed to GitHub to keep track of changes and store the code. The website is deployed using GitHub Pages which provides a published link to the live site. 

Live site: https://tr94.github.io/rock-paper-scissors-lizard-spock/

## Credits 

### Media:

### Words: 

P words: https://the-big-bang-theory.com/rock-paper-scissors-lizard-spock/

### Code:

Acknowledgements: