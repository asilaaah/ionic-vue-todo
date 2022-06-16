<template>
<base-layout page-title="Add Todo Page" page-default-back-link="/todos">
    <create-todo-form @save-todo="saveTodo"></create-todo-form>
</base-layout>
</template>

<script>
import CreateTodoForm from '../components/todos/CreateTodoForm.vue'
export default{
    components: {
        CreateTodoForm
    },

    methods: {
        saveTodo(todoData){
            this.$store.dispatch('addTodo', todoData);
            this.$router.replace('/todos');
        }
    }
}
</script>