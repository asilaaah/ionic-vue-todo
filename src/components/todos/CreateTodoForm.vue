<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-item>
            <ion-label position="floating">Title</ion-label>
            <ion-input v-model="title" type="text" required></ion-input>
        </ion-item>
        <ion-item>
            <ion-label position="floating">Image URL</ion-label>
            <ion-input v-model="imageUrl" type="url" required></ion-input>
        </ion-item>
            <ion-button class="ion-margin-top" expand="block" type="submit">Create</ion-button>
    </form>
</template>

<script>
import { IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
export default{
    emits: ['save-todo'],
    data(){
        return{
            title: '',
            imageUrl: ''
        }
    },
    components: {
        IonItem, 
        IonLabel,
        IonInput,
        IonButton
    },

    methods: {
        submitForm(){
            const todoData = {
                title: this.title,
                image: this.imageUrl
            }
            this.$emit('save-todo', todoData)
        }
    }
}
</script>