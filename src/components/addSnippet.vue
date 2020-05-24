<template>
  <div class="main-content">
    <h1>Uppload snippets!</h1>
    <div class="form-center">
      <div class="form-area">
        <p>Enter snippet:</p>
        <input v-model="title" type="text" />
        <p>Enter code:</p>
        <textarea v-model="content" cols="20" rows="10"></textarea>
        <button @click="uploadSnippet">Add snippet</button>
        <h3 v-if="success">Snippet added!</h3>
      </div>
    </div>
  </div>
</template>

<script>
const baseUrl = "https://www.forverkliga.se/JavaScript/api/api-snippets.php";

export default {
  data: () => ({
    title: "",
    content: "",
    success: false
  }),
  methods: {
    async uploadSnippet() {
      try {
        let response = await this.$http.post(baseUrl, {
          add: "",
          title: this.title,
          content: this.content
        });
        this.title = "";
        this.content = "";
        if (response.data.status == "success") {
          this.success = true;
        }
      } catch (error) {
        console.log("Something went wrong", error);
      }
    }
  }
};
</script>
 
<style scoped>
p {
    margin: 0;
    margin-top: 1em;
}
h1 {
    display: flex;
    justify-content: center;
}
.form-area {
    display: flex;
    flex-direction: column;
}
input {
    border:2px solid black;
    border-radius: 0.5em;
    
}
textarea {
    border:2px solid black;
    width: 15em;
    border-radius: 0.5em;
}
.form-center {
    display: flex;
    justify-content: center;
}
h3 {
    text-align: center;
    font-size: larger;
    border: 2px solid black;
    color: black;
    border-radius: 0.5em;
    width:100px;
    margin: auto;
    margin-top: 10px;
}
button{
    margin-top:10px;
    border: 2px solid black;
    cursor: pointer;
    border-radius: 0.5em;
}
</style>
