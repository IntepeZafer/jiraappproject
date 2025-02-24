<template>
  <div v-if="tasks.length">
    <div v-for="task in tasks" :key="task.id">
      <SingleTasks :task="task" />
    </div>
  </div>
</template>

<script>
import SingleTasks from '../components/SingleTasksCompenent/SingleTasks.vue'
export default {
  name: 'HomeView',
  components: {
    SingleTasks : SingleTasks
  },
  data(){
    return {
      tasks : []
    }
  },
  mounted() {
    fetch('http://localhost:3000/tasks')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      this.tasks = data
      console.log(this.tasks)
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
</script>
