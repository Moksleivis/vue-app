<template>
  <div class="container">
    <section class="section-one">
      <img
        class="container-image"
        src="../assets/angular.svg"
        alt="Programmers"
      />
      <div class="container-inner">
        <h1 class="headline-angular">Angular</h1>
        <p class="paragraph">
          With Angular, you're taking advantage of a platform that can scale
          from single-developer projects to enterprise-level applications. Best
          of all, the Angular ecosystem consists of a diverse group of over 1.7
          million developers, library authors, and content creators.
        </p>
        <a class="learn" href="https://angular.io/" target="_blank"
          >Learn more</a
        >
      </div>
    </section>
    <section class="section-two">
      <img class="container-image" src="../assets/vue.svg" alt="Code" />
      <div class="container-inner">
        <h1 class="headline-vue">Vue</h1>
        <p class="paragraph">
          Vue is a JavaScript framework for building user interfaces. It builds
          on top of standard HTML, CSS, and JavaScript and provides a
          declarative and component-based programming model that helps you
          efficiently develop user interfaces, be they simple or complex.
        </p>
        <a class="learn" href="https://vuejs.org/" target="_blank"
          >Learn more</a
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "FeaturesPage",
};
</script>

<style scoped>
* {
  margin-top: 0;
  margin-bottom: 0;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 50px;
}

.section-one {
  display: flex;
  flex-direction: column;
  margin-top: 0;
}

.section-two {
  display: flex;
  flex-direction: column-reverse;
  margin-top: 0;
}

.container-image {
  width: 300px;
  height: 300px;
}

.container-inner {
  width: 500px;
}

.headline-angular {
  font-size: 40px;
  color: #b52e31;
}

.headline-vue {
  font-size: 40px;
  color: #41b883;
}

.paragraph {
  font-size: 16px;
  line-height: 24px;
  color: #3f3d56;
}

.learn {
  text-decoration: none;
  font-weight: bold;
  color: #6c63ff;
}

.container h1,
.paragraph,
.learn {
  margin: 20px 0;
}
@media screen and (max-width: 1024px) {
  .container-image {
    height: 250px;
    width: 250px;
  }
  .container-inner {
    width: 250px;
  }
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
  .section-two {
    flex-direction: column;
  }
  .headline-angular {
    font-size: 32px;
  }
  .headline-vue {
    font-size: 32px;
  }
  .paragraph {
    line-height: 28px;
  }
  .section-one {
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 480px) {
  .container h1 {
    font-size: 24px;
  }
  .learn {
    font-size: 20px;
  }
}
</style>
