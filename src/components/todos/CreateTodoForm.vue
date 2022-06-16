<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-item>
            <ion-label position="floating">Title</ion-label>
            <ion-input v-model="title" type="text" required></ion-input>
        </ion-item>
        <ion-item>
            <ion-thumbnail>
                <ion-img v-if="takenImageUrl" :src="takenImageUrl" />
                <ion-img v-else src="https://acadianakarate.com/wp-content/uploads/2017/04/default-image.jpg"/>
            </ion-thumbnail>
            <ion-button type="button" fill="clear" @click="takePhoto">
                <ion-icon slot="start" :icon="camera"></ion-icon>
                Take Photo
            </ion-button>
        </ion-item>
            <ion-button class="ion-margin-top" expand="block" type="submit">Create</ion-button>
    </form>
</template>

<script>
import { IonItem, IonLabel, IonInput, IonButton, IonThumbnail, IonImg, IonIcon } from '@ionic/vue';
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';

export default{
    emits: ['save-todo'],
    data(){
        return{
            title: '',
            takenImageUrl: null,
            camera
        }
    },
    components: {
        IonItem, 
        IonLabel,
        IonInput,
        IonButton,
        IonThumbnail,
        IonImg,
        IonIcon
    },

    methods: {
        submitForm(){
            const todoData = {
                title: this.title,
                image: this.takenImageUrl
            }
            this.$emit('save-todo', todoData)
        },

        async takePhoto(){
            const image = await Camera.getPhoto({
                quality: 90,
                resultType: CameraResultType.Uri
            });
            this.takenImageUrl = image.webPath;
        }
    }
}
</script>