<template>
  <div class="home">
    <Header />
    <FruitList />
    <FruitForm
      v-if="showModal"
      @close="showModal = false"
    />
    <div class="home--add">
      <img
          class="home--add-btn"
          src='../assets/plus.png'
          alt="add-new"
          @click="showModal = true"
      />
    </div>
  </div>
</template>

<script>
import FruitList from '@/components/FruitList.vue';
import Header from '@/components/Header.vue';
import FruitForm from '@/components/FruitForm.vue';

export default {
  name: 'Home',
  components: {
    FruitList,
    Header,
    FruitForm
  },
  data(){
    return {
      showModal: false
    }
  }
}
</script>
