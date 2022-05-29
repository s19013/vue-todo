const app = Vue.createApp({
    data() {
        return {
            newItem:"",
            todos:[],
            alertMessage:""
        }
    },
    methods: {
        addItem: function(){
            if (this.newItem === '') {
                this.alertMessage = "required"
                return
            }
            let todo = {
                item  :this.newItem,
                isDone:false,
            }
            this.todos.push(todo)
            this.newItem = ""
            this.alertMessage = ""
        },
        deleteItem:function (index) {
            this.todos.splice(index,1)//削除を始める場所､個数
        }
    },

})
app.mount('#app')

