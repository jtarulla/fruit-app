<template>
  <div v-if="getLoadingStatus" class="loading-spinner"></div>

  <div v-else class="fruit-list">
    <div class="container">
      <div v-if="getFruits.length" class="fruit-list--content">
        <FruitCard  
          v-for="fruit in getFruits" 
          :key="fruit.id"
          :fruit="fruit"
        />
      </div>
      <h1 v-else class="fruit-list--no-content">
        No fruits were found. Try adding one!
      </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FruitCard from './FruitCard.vue';

export default {
  name: 'FruitList',
  components: {
    FruitCard
  },
  computed: {
    ...mapGetters(['getFruits', 'getLoadingStatus'])
  },
  created() {
    this.fetchAllFruits();
  },
  methods: {
    ...mapActions(['fetchAllFruits'])
  }
}
</script>
