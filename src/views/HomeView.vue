<template>
  <FilterTasks :current="current" @filter="filterTasks"/>
  <div v-if="tasks.length">
    <div v-for="task in tasks" :key="task.id">
      <SingleTasks :task="task" @delete="handleDeleteTask" @complete="handleCompleteTask"/>
      <AddTasks/>
    </div>
  </div>
</template>

<script>
import SingleTasks from '../components/SingleTasksCompenent/SingleTasks.vue'
import FilterTasks from '@/components/FilterTasks.vue/FilterTasks.vue';
export default {
  name: 'HomeView',
  components: {
    SingleTasks : SingleTasks,
    FilterTasks : FilterTasks
  },
  data(){
    return {
      tasks : [],
      title : '',
      details : '',
      uri : 'http://localhost:3000/tasks/',
      current : 'all'
    }
  },
  mounted() {
    fetch('http://localhost:3000/tasks')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      this.tasks = data
    })
    .catch((err) => {
      console.log(err)
    })
  },
  methods: {
    handleDeleteTask(id) {
     this.tasks = this.tasks.filter((task) => {
        return task.id !== id
      })
    },
    handleCompleteTask(id) {
      let task = this.tasks.find((task) => {
        return task.id === id
      })
      task.complete = !task.complete
    },
    filterTasks(status) {
      this.current = status
      if (status === 'all') {
        fetch('http://localhost:3000/tasks')
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          this.tasks = data
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
}
</script>
