<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Test Interview</h3>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#projects-structure">Projects structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#flow">Flow</a>
         <ul>
            <li>
               <a href="#router">Router</a>
            </li>
         </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- Have nodeJs and npm/yarn be installed (for running in local machine)

- Clone the repo
  ```
  git clone https://github.com/PeaceAntoHim/Frans-Interview.git
  ```

- Run this command bellow to start to install all dependencies

  ```
  $ npm install
  ```

- Run this command bellow to check all linter code and type error 
   ```
   $ npm run lint
   ```

- Run this command to start development server
  ```
   npm run dev
  ```

- Run this command to build the project use vite
  ```
  npm run build
  ```

- Run this command to view project after build
   ```
   npm run preview
   ```

### Projects Structure
```
 ├───public
    └───src
        ├───assets
        ├───components
        ├───core
        ├───db
        ├───pages
        └───styles
```

## Flow

### Router

- This app has 3 route:
  
- First '/' for the login in this will go to login page. In here you need email and password to login, here credentials will be used:
  ```
  email:user@example.com
  password:password123
  ```

- Second '/home' after login you will go to home page, and have a view to list days and all days can be clicked but for monday you will got list must to buy

- Third '/list-item' after click monday you will get all list to buy

