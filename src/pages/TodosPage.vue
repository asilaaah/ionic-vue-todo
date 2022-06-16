<template>
    <base-layout page-title="Todo List">
    <template v-slot:actions-end>
        <ion-button router-link="/todos/add">
        <ion-icon class="ion-margin-right" slot="icon-only" size="large" :icon="addCircle"></ion-icon>
        </ion-button>
    </template>
        <todos-list :todos="todos"></todos-list>
    </base-layout>
</template> 

<script>
import { IonButton, IonIcon } from '@ionic/vue';
import { addCircle } from 'ionicons/icons';
import TodosList from '../components/todos/TodosList.vue';
export default {
    data(){
        return{
            addCircle
        }
    },
    components: {
        IonButton,
        IonIcon,
        TodosList
    },
    computed: {
        todos() {
            return this.$store.getters.todos;
        }
    }
}
</script>