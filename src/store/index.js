import { createStore } from 'vuex';

const store = createStore({
    state() {
        return{
            todos:[
                {
                    id: '1', 
                    title: 'Buy grocery', 
                    completed: false,
                    image: 'https://shopee.com.my/blog/wp-content/uploads/2021/02/Shopee-Mart-Cover.jpg'
                },
                {
                    id: '2', 
                    title: 'Clean the house', 
                    completed: false,
                    image: 'https://lifestyle.prod.content.iproperty.com/news/wp-content/uploads/sites/3/2021/03/10145322/professional-house-cleaning-services-malaysia.jpg'
                },
                {
                    id: '3', 
                    title: 'Read books', 
                    completed: false,
                    image: 'https://www.oberlo.com/media/1612639204-image3.jpg?fit=max&fm=webp&w=1824'
                },
                {
                    id: '4', 
                    title: 'Study programming', 
                    completed: false,
                    image: 'https://www.codingdojo.com/blog/wp-content/uploads/learncodefaster.jpg'
                },
                
            ]
        }
    },

    mutations: {
        addTodo(state, todoData){
            const newTodo ={
                id: state.todos[state.todos.length - 1].id + 1,
                title: todoData.title,
                completed: false,
                image: todoData.image
            }
            state.todos.unshift(newTodo);
        },
        toggleStatus(state, todoId) {
            const selectedTodo = state.todos.find((todo => todo.id === todoId));
            selectedTodo.completed = !selectedTodo.completed;
            console.log(selectedTodo);
        },
    },

    actions: {
        addTodo(context, todoData){
            context.commit('addTodo', todoData);
        },
        toggleStatus(context, todoId){
            context.commit('toggleStatus', todoId);
        }
    },
    
    getters: {
        todos(state) {
            return state.todos;
        },
        todo: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    }
});

export default store;