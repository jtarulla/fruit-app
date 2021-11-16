<template>
  <div class="fruit-detail">
    <div class="container">
        <router-link :to="{ name: 'Home'}">
            <div class="fruit-detail--back">
                <icon-arrow />
                home
            </div>
        </router-link>
        <div v-if="fruit" class="fruit-detail--content">
            <div class="fruit-detail--img">
                <img :src=fruit.image :alt=fruit.name />
            </div>
            <div class="fruit-detail--info">
                <h1 class="fruit-detail--title">
                    {{fruit.name}}
                </h1>
                <p class="fruit-detail--data">
                    <strong>Description : </strong>
                    {{fruit.description}}
                </p>
                <p class="fruit-detail--data">
                    <strong>Taste: </strong>
                    {{fruit.taste}}
                </p>
                <p class="fruit-detail--data">
                    <strong>Price: </strong>
                    €{{fruit.price}}
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import iconArrow from '@/assets/icon-arrow.vue';

export default {
  name: 'FruitDetail',
  components: {
      iconArrow
  },
  data () {
    return {
      fruit: {}
    }
  },
  computed: {
    ...mapGetters(['getFruitById'])
  },
  created () {
    this.getFruit()
  },
  methods: {
    getFruit() {
      this.fruit = this.getFruitById(this.$route.params.id)
    }
  }
}
</script>
