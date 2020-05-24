<template>
  <div>
    <h1>See latest snippets</h1>
    <div class="latest-btn-container">
      <button class="show-latest-button" @click="getLatestSnippet">Get latest snippets!</button>
    </div>
    <div v-if="model">
      <div class="latest-container" v-for="item in model" :key="item.id">
        <div class="latest-body">
          <p class="latest-title">Title: {{item.title}}</p>
          <p>Snippet: {{item.content}}</p>
          <p class="item-id">ID: {{item.id}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const baseUrl = "https://www.forverkliga.se/JavaScript/api/api-snippets.php";

export default {
  data: () => ({
    model: null
  }),
  methods: {
    async getLatestSnippet() {
      try {
        let response = await this.$http.get(baseUrl, {
          params: { latest: "" }
        });

        this.model = response.data;
        console.log(response.data);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    }
  }
};
</script>

<style scoped>
h1{
    text-align: center;
}
.latest-btn-container {
  display: flex;
  justify-content: center;
  margin-top:1.0em;
}
.show-latest-button {
  margin-top: 30px;
  width: 30em;
  height: 3em;
  margin-bottom: 1em;
  font-weight: 700;
  border: 2px solid black;
  cursor: pointer;
  border-radius: 0.5em;
}
.show-latest-button:hover {
  background-color: #333;
    color: white;
    border-radius: 0.5em;

}
.latest-container {
  display: flex;
  justify-content: center;
}
.latest-body {
  position: relative;
  margin: 0.1em;
  padding-left: 1.2em;
  background-color: white;
  border: 2px solid black;
  width: 20vw;
  height: 8em;
  border-radius:0.5em; ;
}
.latest-title {
  font-size: larger;
  
}
.item-id {
  position: absolute;
  margin-right: 1em;
  right: 0;
  bottom: 0;
}
</style>;
