<template>
  <div class="fruit-page">
    <Header />
    <FruitDetail />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import FruitDetail from '@/components/FruitDetail.vue';

export default {
  name: 'FruitPage',
  components: {
    Header,
    FruitDetail
  }
}
</script>
