<template>
    <base-layout page-title="Todo details page" page-default-back-link="/todos">
        <todo-overview v-if="todo" 
            :image="todo.image" 
            :title="todo.title" 
            :completed="todo.completed">
        </todo-overview>
        <h1 v-else>To do action does not exist</h1>
    </base-layout>
</template>

<script>
import TodoOverview from '../components/todos/TodoOverview.vue';

export default{
    components:{
        TodoOverview
    },
    data(){
        return {
            todoId: this.$route.params.id
        }
    },
    computed: {
        todo(){
            return this.$store.getters.todo(this.todoId);
        }
    },
    watch: {
        $route(currentRoute){
            this.todoId = currentRoute.params.id;
        }
    }
}
</script>