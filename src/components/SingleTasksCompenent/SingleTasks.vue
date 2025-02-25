<template>
    <div class="task">
        <div class="actions">
            <h1 @click="toggleDetails">{{task.title}}</h1>
            <div class="icons">
                <span @click="deleteTask" class="material-symbols-outlined">delete</span>
                <span class="material-symbols-outlined">edit</span>
                <span class="material-symbols-outlined">done</span>
            </div>
        </div>
        <div class="details" v-if="showDetails">
            <p>{{task.details}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleTasks',
    props: {
        task: Object
    },
    emits: ['delete'],
    data() {
        return {
            showDetails: false,
            uri: 'http://localhost:3000/tasks/'
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails
        },
        deleteTask() {
            fetch(this.uri + this.task.id, {
                method: 'DELETE'
            })
            .then(() => this.$emit('delete', this.task.id))
            .catch((err) => console.log(err))
        }
    }
}
</script>

<style>

</style>