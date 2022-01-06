<template>
    <div class="fruit-card">
        <div class="fruit-card--img">
            <img :src=fruit.image :alt=fruit.name />
        </div>
        <div class="fruit-card--title">
            <div class="fruit-card--title-text">
                {{fruit.name}}
            </div>
            <div
                class="fruit-card--title-delete"
                @click="removeItem(fruit)"
            >
                <icon-delete />
            </div>
        </div>
        <router-link :to="`fruit/${fruit.id}`">
            <div class="fruit-card--view-more">
                details
                <icon-arrow />
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import iconArrow from '@/assets/icon-arrow.vue';
import iconDelete from '@/assets/icon-delete.vue';

export default {
  name: 'FruitCard',
  components: {
      iconArrow,
      iconDelete
  },
  props: {
    fruit: {
        type: Object,
        required: true
    }
  },
  methods: {
    ...mapActions(['deleteFruit']),
    removeItem(item) {
        if (window.confirm(`Do you really want to delete ${item.name} item?`)) {
            this.deleteFruit(item);
        }
    }
  }
}
</script>
