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
    name : 'EditTask',
    props : ['id'],
    data() {
        return {
            title : '',
            details : '',
            uri : 'http://localhost:3000/tasks/'
        }
    },
    mounted() {
        fetch(this.uri + this.id)
        .then((res) => res.json())
        .then((data) => {
            this.title = data.title
            this.details = data.details 
        })
    },
    methods : {
        handleSubmit(e) {
            e.preventDefault()
            fetch(this.uri + this.id, {
                method : 'PUT',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    title : this.title,
                    details : this.details
                })
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