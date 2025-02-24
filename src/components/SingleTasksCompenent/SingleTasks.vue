<template>
    <div class="task">
        <div class="actions">
            <h1 @click="toggleDetails">{{task.title}}</h1>
            <div class="icons">
                <span class="material-symbols-outlined">delete</span>
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
    data() {
        return {
            showDetails: false
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails
        }
    }
}
</script>

<style>

</style>