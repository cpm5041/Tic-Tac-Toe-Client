[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic-Tac-Toe Template

Tic Tac Toe Summary

Wireframe of my game project at inception:
  https://www.dropbox.com/s/485n8u02fw8ik69/Photo%20Apr%2003%2C%208%2015%2008%20PM.jpg?dl=0
  https://www.dropbox.com/s/9p6sw4lppeihl8y/Photo%20Apr%2003%2C%208%2017%2046%20PM.jpg?dl=0

Requirements:
  Present working browser game, built by you, hosted on GitHub Pages.

  Practice using version control by:

    Sharing your work through a git repository hosted on Github.
    Making frequent, cohesive commits dating back to the very beginning of the project with good commit messages.
    Produce documentation in the form of a README, which must:

    Link to your hosted game in the URL section of your Github repo.
    List technologies used.
    Document your planning and tell a story about your development process and problem-solving strategy.
    List unsolved problems which would be fixed in future iterations.
    Link to wireframes and user stories.
  Your app must:
    Be a single-page application.
    Use a custom game engine written by you.
    Be deployed online, where the rest of the world can access it.
    Render a game board in the browser.
    Switch turns between X and O (or whichever markers you select).
    Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins.
    Support playing multiple games, one at a time.
    Use jQuery for DOM manipulation and event handling.
    Use AJAX for interacting with a provided API. Specifically, your app must:
    Visually display the results of retrieving game statistics, such as total games won by a user. (READ)
    Create new games on the server. (CREATE)
    Update a game by storing new moves. (UPDATE)
    Have login, logout, and change password functionality.

Approach:
  I tried to approach this project methodically. I focused on one task at a time
  rather than trying to think bigger picture. I used jQuery, html, css, ajax, and
  sass to put everything together. I put together a basic html page, and once I
  had logic flushed out I circled back and styled it a little more. I still
  have more work to do on the backend side with AJAX calls and statistics.

Challenges:
  Right off the bat I forgot some boilerplate HTML that caused some unexpected
  behavior that caused some issues.
  Click Handling- It took me some time to figure out how I wanted to register
  click events on the individual divs.
  Background image- I was able to host a background image locally but then once
  deployed it didnt show. I had to add it to an imgur site to resolve.
  Bootstrap- I wish I had more time to play around with bootstrap so I Could
  add modals to my site.

User Stories:
  As a user, I would like to create and account so I can play a game.
  As a user, I want to be able to click on a square and input either x or o.
  As user, I want to be able to see what my opponent selects each turn so I can respond.
  As a user, I would like to be able to log out and change password so I can manage my account.
  As a user, I want to be able to play again after a game finishes so I can play another match.
  As a user, I want to validate moves so the app doesnt switch to oppenents turn.

Next Steps:
  If I had another week to continue working on the Tic-Tac-Toe game, I would
  spend more time working on the APIs as well as testing out any user facing bugs.
  The project was challenging given the time frame but given another week, I
  feel I could dive deeper and work out any bugs. Furthermore, I would like
  to spend some time with bootstrap, specifically I would want to make a dropdown
  for the credentials and have the functionality be in modals.
  For my next project, I will definitely spend more time in the planning phase.
  During this project, I really dove right in without spending time at the
  beginning planning out how I wanted to approach things.
  I learned how to think things out for myself and to not be afraid to try
  something unknown. I had a lot of help along the way and it gave me confidence
  to be able to try things for myself.


## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
