<template>
  <div class="flex">
    <div><addSnippet></addSnippet></div>
    <div><deleteSnippet></deleteSnippet></div>
    <div><latestSnippet></latestSnippet></div>
  </div>
</template>

<script>
import addSnippet from "./components/addSnippet.vue";
import latestSnippet from "./components/latestSnippet.vue";
import deleteSnippet from "./components/deleteSnippet.vue";

export default {
  name: "App",
  components: {
    addSnippet,
    latestSnippet,
    deleteSnippet
  }
};
</script>

<style>
html{
  height: 100%;
  background:linear-gradient(180deg, rgba(86, 83, 192, 0) 0%, #203950 84.38%);
}
.flex{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
