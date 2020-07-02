<template>

    <div class="header">
        <div class="container"> 
            <div id="nav">
                <ul class="text-right">
                <router-link to="/">Home</router-link> |
                 <router-link to="/about">About</router-link> |
                 <router-link to="/help">Help</router-link> |
                 <router-link to="/contact">contact</router-link> | 
                  <router-link to="/login">login</router-link>
                </ul>
            </div>
        </div>
     </div>
</template>

<script>
export default {
    name : 'Appheader' ,
}
</script>