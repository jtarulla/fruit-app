<template>
    <div class="error-page">
        <Header />
        <div class="container">
            <div class="error-page--content">
                <h1>Sorry, we couldn't find the fruit </h1>
                <router-link :to="{ name: 'Home'}">
                    <div class="button-secondary">
                        back home
                    </div>
                </router-link>
                <img
                    class="error-page--image"
                    src='../assets/error-fruit.png'
                    alt='error-image' 
                />
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'ErrorPage',
  components: {
    Header
  }
}
</script>