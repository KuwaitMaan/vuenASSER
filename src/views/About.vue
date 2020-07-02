<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ok />
    <aboutme />
  </div>
</template>

<script>
import ok from "@/components/helloWorl.vue";

export default {
  name: "About",
  components: {
    ok,
  },
};
</script>


<script>
import welcome from "@/components/lastmsg.vue";

export default {
  name: "About",
  components: {
    welcome,
  },
};
</script>