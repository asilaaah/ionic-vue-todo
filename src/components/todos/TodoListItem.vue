<template>
    <ion-item>
        <ion-checkbox @click="updateCompleted" class="ion-margin-horizontal" color="secondary"></ion-checkbox>
        <ion-label>{{todo.title}}</ion-label>
        <ion-button :router-link="`/todos/${todo.id}`">View</ion-button>
    </ion-item>
</template>

<script>
import { IonItem, IonCheckbox, IonLabel, IonButton } from '@ionic/vue';

export default{
    emits: ['change-status'],
    props:['todo'],
    components: {
        IonItem,
        IonCheckbox,
        IonLabel,
        IonButton
    },
    methods: {
        updateCompleted(){
            this.$emit('change-status', this.todo.id)
        }
    }
}
</script>