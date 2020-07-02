<template>
  <div class="login">
    <h1>login</h1>
    <br />
    <label>Enter email</label>
    <input v-model="email" />
    <label>password</label>
    <input v-model="password" />
    <button @click="insert">login</button>
  </div>
</template>


<script>
export default {
    name : 'login' ,
      methods: { 
          insert : {
            axios.post(
                "localhost:8080/user/login?email=${email}&password=${password}", {
                    headers: {
                        'Accept': 'application/json',
                    }           
                 }),
            },
        },
    },
})    
</script>