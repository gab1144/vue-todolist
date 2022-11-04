const {createApp} = Vue;

createApp({
  data(){
    return{
      tasks:[
        {
          text: "Lavare i piatti",
          done: false
        },
        {
          text: "Partita di calcetto",
          done: true
        },
        {
          text: "Prove con la band",
          done: false
        }
      ],
      logoPath: "img/logo.png",
      errorDelete: "",
      newTaskText: "",
      errorAddNewTask: ""
    }
  },
  methods:{
    removeTask(index){
      this.errorDelete="";
      if(this.tasks[index].done){
        this.tasks.splice(index, 1);
      } else {
        this.errorDelete="Non puoi cancellare un'attività se non l'hai ancora svolta";
      }
    },
    addTask(){
      if(this.newTaskText.length < 5){
        this.errorAddNewTask = "Attenzione! Il messaggio deve avere almeno 5 caratteri";
      }else{
        const newTask = {
          text: this.newTaskText,
          done: false
        }

        if(this.tasks.find(task =>task.text.toLowerCase() === newTask.text.toLowerCase())){
          this.errorAddNewTask = "Hai già inserito questa task";
        }else{
          this.tasks.unshift(newTask);
          this.errorAddNewTask = "";
        }
      }
    }
  }
}).mount('#app')