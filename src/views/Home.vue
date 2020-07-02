<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <aboutme />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};

</script>

<script>
import aboutme from "@/components/aboutme.vue";

export default {
  name : 'Home',
  components:{
    aboutme
}
};
</script>

