<template>
  <div class="container">
    <img
      class="container-image"
      src="../assets/frameworks.svg"
      alt="frameworks"
    />
    <div class="container-inner">
      <h1 class="headline">
        Elevate Your Front-End Development with Power and Efficiency!
      </h1>
      <p class="paragraph">
        At their most basic, JS frameworks are collections of JavaScript code
        libraries that provide developers with pre-written JS code to use for
        routine programming features and tasks—literally a framework to build
        websites or web applications around.
      </p>
      <router-link to="/features" custom v-slot="{ navigate }">
        <button @click="navigate" role="link" class="btn">Begin</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  margin: 0 50px;
}

.container-image {
  width: 400px;
}

.container-inner {
  width: 500px;
}

.headline {
  font-size: 40px;
  color: #3f3d56;
}

.paragraph {
  font-size: 16px;
  line-height: 24px;
  color: #3f3d56;
}

.btn {
  background-color: #3f3d56;
  color: #fff;
  padding: 10px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.headline,
.paragraph,
.btn {
  margin: 20px;
}

@media screen and (max-width: 768px) {
  .container {
    display: block;
    width: 100%;
    text-align: center;
    padding: 40px;
    margin: 0;
    margin-top: 20px;
  }
  .container-image {
    width: 80%;
  }
  .container-inner {
    width: 80%;
  }
  .headline {
    font-size: 32px;
  }
  .paragraph {
    line-height: 28px;
  }
}
@media screen and (max-width: 480px) {
  .headline {
    font-size: 24px;
  }
}
</style>
