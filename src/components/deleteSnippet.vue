<template>
  <div>
      <h1>Delete snippets</h1> 
   
    <div class="deleter">
        <div class="form-group">
            <label>Enter id:</label>
            <input type="text" v-model="snippetId" />
            <button @click="deleteSnippet">Delete snippet</button>
        </div>
    </div>
    
    <h3 v-show="success">Snippet deleted!</h3>
  </div>
</template>

<script>
const baseUrl = "https://www.forverkliga.se/JavaScript/api/api-snippets.php";

export default {
  data: () => ({
    snippetId: "",
    success: false
  }),
  methods: {
    async deleteSnippet() {
      try {
        let response = await this.$http.post(baseUrl, {
          delete: "",
          id: this.snippetId
        });
        this.snippetId = "";
        if (response.data.status == "success") {
          this.success = true;
        }
        console.log(response.data);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    }
  }
};
</script>



<style scoped>
label{
    margin-top: 14px;
    display: block;
}

h1{
    text-align: center;
}

.deleter {
    margin: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
}
input {
    border:2px solid black;
    border-radius: 0.5em;
    
}
button {
    width: 14em;
    margin-left: 1em;
    border: 2px solid black;
    cursor: pointer;
    border-radius: 0.5em;

}
h3 {
    text-align: center;
    font-size: larger;
    border: 2px solid black;
    color: black;
    border-radius: 0.5em;
    width:100px;
    margin: auto;
    
}
</style>