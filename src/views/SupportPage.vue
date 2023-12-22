<template>
  <div class="container">
    <div class="header">
      <img
        class="container-image"
        src="../assets/comments.svg"
        alt="Commenting"
      />
      <h2 class="exp">
        The only thing better than having an amazing experience is sharing it
        with someone who truly cares.
      </h2>
    </div>
    <section class="comments-section">
      <h2>Let us know about your experience!</h2>
      <div class="comment-box">
        <input
          class="author-input"
          type="text"
          placeholder="Author Name"
          v-model="newAuthor"
        />
        <textarea
          rows="5"
          cols="30"
          placeholder="Tell us about your experience here"
          class="comment-input"
          v-model="newComment"
        ></textarea>
        <button class="btn-comment" @click="addComment">Add Comment</button>
        <ul class="comments-list">
          <li
            class="comment"
            v-for="comment in comments"
            v-bind:key="comment.id"
          >
            <div class="comment-author">
              <h3 class="comment-author-name">{{ comment.author }}</h3>
            </div>
            <div class="comment-content">
              <p>
                {{ comment.content }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SupportPage",
  data() {
    return {
      comments: [
        {
          id: 1,
          author: "William",
          content:
            "Angular is a good choice for building large, complex applications that require a high degree of maintainability and scalability.",
        },
        {
          id: 2,
          author: "Martha",
          content:
            "React is a good choice for building smaller, more dynamic applications that need to be able to respond to user interactions quickly.",
        },
        {
          id: 3,
          author: "Paul",
          content:
            "Vue is a good choice for building applications of all sizes, from small prototypes to large production-ready applications.",
        },
      ],
      newAuthor: "",
      newComment: "",
    };
  },
  methods: {
    addComment() {
      this.comments.push({
        id: this.comments.length + 1,
        author: this.newAuthor,
        content: this.newComment,
      });
      this.newAuthor = "";
      this.newComment = "";
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
}
.container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  margin: 0 50px;
}

.container-image {
  width: 400px;
  height: 400px;
}

.exp {
  width: 400px;
  color: #3f3d56;
  line-height: 40px;
  font-style: italic;
}

.comments-section {
  width: 50%;
  padding: 20px;
  border-radius: 4px;
}
.author-input {
  width: 100%;
  height: 40px;
  border: 2px solid #6c63ff;
  border-radius: 4px;
  background-color: #fff;
  color: #3f3d56;
  font-size: 16px;
  margin-bottom: 10px;
}
.comment-input {
  width: 100%;
  height: 100px;
  border: 2px solid #6c63ff;
  border-radius: 4px;
  background-color: #fff;
  color: #3f3d56;
  font-size: 16px;
  resize: none;
}
.btn-comment {
  background-color: #3f3d56;
  color: #fff;
  padding: 10px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}
.comment-list {
  list-style: none;
  margin-top: 0;
  padding: 0;
}
.comment {
  text-align: left;
  margin-top: 20px;
  padding: 10px;
  background-color: #3f3d56;
  color: #fff;
  border: 4px solid #6c63ff;
  border-radius: 8px;
}
.comment-author-name {
  font-weight: bold;
  margin-right: 10px;
}

.comment-author-date {
  font-size: 12px;
  color: #6c63ff;
}

.comment-content {
  padding: 10px;
  font-weight: normal;
}

/* @media screen and (max-width: 1024px) {
  .container {
    flex-direction: column;
    margin: 0;
    width: 100%;
  }
  .container-image {
    width: 80%;
  }
  .exp {
    width: 80%;
  }
  .comments-section {
    width: 80%;
  }
} */

@media screen and (max-width: 768px) {
  .header {
    display: flex;
    flex-direction: column-reverse;
  }
  .container {
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px;
    margin: 0;
    margin-top: 20px;
  }
  .container-image {
    width: 80%;
    margin-top: 20px;
  }
  .exp {
    width: 80%;
  }
  .comments-section {
    width: 80%;
    margin-top: 0;
  }
}
</style>
