<div id="top"></div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#About-the-Challenge">About The Challenge</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#Run-Tests">Run Tests</a></li>
        <li><a href="#Scenarios">Scenarios</a></li>
        <li><a href="#Challenges">Challenges</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Jobsity Test Automation Challenges 🤖

![image](https://www.jobsity.com/assets/img/logo/brand-jobsity.svg)


### Built With

* [JavaScript](https://www.javascript.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Cypress](https://www.cypress.io/)
* [Mocha](https://mochajs.org/)
* [Chai Assertions](https://chaijs.org/)
* [Allure Reports](https://docs.qameta.io/)
* [Docker](https://docker.io)
* [FakerJs](https://fakerjs.dev/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites


1. Clone this repo inside any directory
   ```sh
   git clone https://github.com/Moaz-Adel/Jobsity-Challenge.git
   ```
2. Change current directory to be inside the cloned repo
   ```sh
   cd Jobsity-Challenge
   ```
3. Install 
    ```sh
   npm i
   ```

## Different ways to run the tests

### The Default test runs

To run the tests directly just type the following commands:

1. Interactive Mode: `npx cypress open` (open the tests with the browser)
2. If Allure is installed:
    1. `npm run cy:test:report` (Headless Mode)
    2. Will generate an allure report automatically & Mocha report
3. Without generating Allure Report (Headless Mode)
    1.  `npx cypress run` 
    2. Will generate a mocha report only
    
--------

### 🥉 Using **Docker-Compose**

Just run

`docker-compose run e2e-chrome`

and to try different browsers replace chrome with:

- `e2e-firefox`
- `e2e-electron`

------

### 🥈 In Docker with one Command

Prerequisites:

- [Docker](https://www.docker.com/) installed and running (on any Operating System)

Just type the following command inside the directory

`docker run -it -v $PWD:/e2e -w /e2e cypress/included:11.0.1`

You can specify any browser as an environment variable to test against multiple browsers like the following:

`docker run -it -v $PWD:/e2e -w /e2e cypress/included:11.0.1 --browser chrome`

Pass one of the following:

- `chrome`
- `firefox`

----

## 🏃‍♂️Run Results

Two Reports will be generated:

### Mocha Awesome (Always will be generated):
![Untitled (1)](https://user-images.githubusercontent.com/66737098/201546513-5170b5f9-253c-4913-9a09-35c94600ad6b.png)

### Allure Report (If allure is installed):
<img width="1432" alt="Untitled" src="https://user-images.githubusercontent.com/66737098/201546529-71e4c37a-c12d-4538-b055-646d530be927.png">




-------------------
## Notes:

> All interactions are configured refactored to include

> "Retries" to decrease Flakeness

> The refactored methods are documented for ease of use 

> Following Page Object Model Design Pattern

> Following Coding Standards and Best Practices
--------------------------------
  


<p align="right">(<a href="#top">back to top</a>)</p>


## 🤖 Thanks and Happy Testing 🐞

