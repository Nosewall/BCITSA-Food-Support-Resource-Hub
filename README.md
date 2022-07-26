<!-- Using README template from: https://github.com/othneildrew/Best-README-Template -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Nosewall/BCITSA-Food-Support-Resource-Hub">
    <img src="images/Wellness Icons_Community Food Network.png" alt="Community Food nedtwork icon" width="80" height="80">
  </a>

  <h2 align="center">🍍 Community Food Network 🍍</h2>
  <p align="center">
    Your guide to food support in the lower mainland. Visit us at : 
    <a href="https://foodnetwork.bcitsa.ca/">FoodNetwork.bcitsa.ca</a>
    <br />
    <br />
  </p>
</p>

![Homepage preview](/images/homepage.png)

## Table of Contents

- [Our Mission 🧠](#our-mission-)
- [Technology Stack 🛠️](#technology-stack-%EF%B8%8F)
- [Prerequisites 🍪](#prerequisites-)
- [Setup And Deployment 🔧](#setup-and-deployment-)

## Our Mission 🧠

The Community food network was forked from Campus Lightbox, a project created by [Project Aurora](https://www.projectaurora.ca/).

Food insecurity has severe implications for one’s health and wellbeing. Post-secondary students are particularly vulnerable, with over 50% of students at Canadian post-secondary institutions experiencing moderate to severe levels of food insecurity. The Food Support Hub is an all-encompassing service that includes several different avenues for all BCIT students to access support.

![Cards preview](/images/cards.png)

## Technology Stack 🛠️

Dependencies defined in package.json:

[ReactJS](https://reactjs.org/)
| [Semantic-UI](https://react.semantic-ui.com/)
| [EmailJS](https://www.emailjs.com/)
| [FuseJS](https://fusejs.io/)
| [Moment](https://momentjs.com/)
| [UnderscoreJS](https://underscorejs.org/)

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/) installed on your PC.

## Setup And Deployment 🔧

1. Clone the repo using:

   ```bash
     git clone https://github.com/Nosewall/BCITSA-Food-Support-Resource-Hub
   ```

2. To start the development server, run the following bash commands:

   🚨 Alert: Avoid using npm, do not push `package-lock.json`

   ```bash
   yarn install
   yarn start
   ```

3. To deploy website, run:

   ⚠️ Caution: Test first

   ```bash
    yarn deploy
   ```

4. Congrats! The updated website is up and running. To see it live, visit:

   ```https
     https://foodnetwork.bcitsa.ca
   ```
