<template>
    <ion-list>
        <todo-list-item
            v-for="todo in todos" 
            :key="todo.id" 
            :todo="todo"
            @change-status="changeStatus"
            >
        </todo-list-item>
    </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';
import TodoListItem from './TodoListItem.vue';
export default {
    props: ['todos'],
    components: {
        IonList,
        TodoListItem
    },
    methods: {
        changeStatus(todoId){
            this.$store.dispatch('toggleStatus', todoId);
        }
    }
}
</script>