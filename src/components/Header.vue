<template>
 <header class="header">
        <div class="container">
             <router-link :to="{ name: 'Home'}">
                <img
                    class="header--logo"
                    src='../assets/logo.png'
                    alt="logo"
                />
            </router-link>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>