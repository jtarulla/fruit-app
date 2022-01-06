<template>
    <transition name="fade">
        <div class="fruit-form--mask">
            <div class="fruit-form--wrapper">
                <div class="fruit-form--container">
                    <h3 class="fruit-form--title">
                        Add a new fruit
                    </h3>
                    <form class="fruit-form--form" @submit.prevent="addItem">
                        <div class="fruit-form--field">
                            <label for="name">Fruit name:*</label>
                            <input required type="text" name="name" v-model="newFruit.name">
                        </div>
                        <div class="fruit-form--field">
                            <label>Fruit description:*</label>
                            <input required type="text" name="description" v-model="newFruit.description">
                        </div>
                        <div class="fruit-form--field">
                            <label>Fruit taste:*</label>
                            <input required type="text" name="taste" v-model="newFruit.taste">
                        </div>
                        <div class="fruit-form--field">
                            <label>Fruit image (url):*</label>
                            <input required type="text" name="img-url" v-model="newFruit.image">
                        </div>
                        <div class="fruit-form--field">
                            <label>Fruit price per Kg:*</label>
                            <input required type="number" name="price" v-model="newFruit.price">
                        </div>
                        
                        <div class="fruit-form--buttons">
                            <button class="button-secondary" @click.prevent="$emit('close')">
                                cancel
                            </button>
                            <input class="button-primary" type="submit" value="add new">
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    </transition>
</template>

<script>
import faker from 'faker';
import { mapActions } from 'vuex';

    export default {
        name: 'FruitForm',
        data(){
            return {
                newFruit: {
                    isFruit: true,
                    name: '',
                    image: '',
                    price: '',
                    color: faker.internet.color(),
                    description: '',
                    taste: '',
                    expires: faker.date.future(),
                }
            }
        },
        methods: {
            ...mapActions(['addFruit']),
            addItem(){
                this.addFruit(this.newFruit);
                this.$emit('close');
            }
        }
    }
</script>
