<template>
  <form @submit="handleSubmit">
    <label>Başlık</label>
    <input type="text" required v-model="title">
    <label>İş Detayı</label>
    <textarea v-model="details" required></textarea>
    <button>Ekle</button>
  </form>
</template>

<script>
export default {
    name : 'AddTasks',
    data(){
      return{
        title : '',
        details : ''
      }
    },
    methods : {
      handleSubmit(e){
        e.preventDefault()
        let newTask = {
          id : Math.floor(Math.random()*100000),
          title : this.title,
          details : this.details

        }
        fetch('http://localhost:3000/tasks', {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(newTask)
        })
        .then(() => {
            this.$router.push({name : 'home'})
        })
        .catch((err) => console.log(err))
      }
    }
}
</script>

<style>

</style>