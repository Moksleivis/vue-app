<template>
  <nav class="main-nav">
    <div class="logo"><router-link to="/">JS Frameworks</router-link></div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/features">Features</router-link></li>
      <li><router-link to="/support">Support</router-link></li>
    </ul>
    <div class="burger">
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
    </div>
  </nav>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
  margin: 20px;
  padding: 0;
  color: inherit;
  text-decoration: none;
  list-style: none;
  font-family: "Open Sans", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.main-nav {
  display: flex;
  height: 8vh;
  justify-content: space-between;
  align-items: center;
  color: #3f3d56;
  border-bottom: 1px solid #00000040;
}
.logo {
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 1.25rem;
  padding: 0 2rem;
}
.nav-links {
  display: flex;
  width: 40%;
  justify-content: space-around;
}
.burger {
  display: none;
  padding: 0.5rem;
  cursor: pointer;
}
.line {
  height: 2px;
  width: 35px;
  margin: 0.5rem 0;
  background: #3f3d56;
  transition: transform 0.75s ease, opacity 0.75s ease;
}

.main-nav.show .line1 {
  transform: translate(-10px) rotate(45deg) translate(15px);
}
.main-nav.show .line2 {
  opacity: 0;
}
.main-nav.show .line3 {
  transform: translate(-10px) rotate(-45deg) translate(15px);
}
.main-nav.show .nav-links {
  transform: translateX(0%);
}
@media screen and (max-width: 768px) {
  * {
    margin: auto;
  }
  .burger {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 8vh;
    right: 0;
    height: 60vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transform: translateX(100%);
    transition: transform 1s ease;
    background-color: #3f3d56;
    color: #6c63ff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
  }
}
/* @media screen and (max-width: 480px) {
  .burger {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 8vh;
    right: 0;
    height: 60vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transform: translateX(100%);
    transition: transform 1s ease;
    background-color: #3f3d56;
    color: #6c63ff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
  }
} */
</style>
