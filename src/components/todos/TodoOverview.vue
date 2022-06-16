<template>
<div class="ion-text-center">
        <ion-img class="ion-margin-top" :src="image"></ion-img>
        <ion-list class="ion-margin-top">
            <span class="text">{{title}}</span>
                <ion-icon v-if="completed" :icon="checkmarkCircle"></ion-icon>
                <ion-icon v-else :icon="closeCircle"></ion-icon>
        </ion-list>
    </div>
</template>

<script>
import { IonImg, IonList, IonIcon } from '@ionic/vue';
import { checkmarkCircle, closeCircle } from "ionicons/icons";
export default {
    props: ['image', 'title', 'completed'],
    components: {
        IonImg, 
        IonList,
        IonIcon
    },
    data() {
        return { checkmarkCircle, closeCircle }
    }
}
</script>

<style>
    ion-img::part(image) {
        width: 50%; 
        display: block;
        margin: 0 auto;
    }

    ion-icon {
        font-size: 25px;
        display: inline-block;
        vertical-align: middle;
    }

    .text{
        display: inline-block;
        vertical-align: middle;
    }
</style>