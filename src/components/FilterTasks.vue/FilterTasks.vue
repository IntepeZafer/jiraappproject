<template>
  <nav>
    <button @click="updateFilter('all')">Hepsi</button>
    <button @click="updateFilter('completed')">Tamamlandı</button>
    <button @click="updateFilter('continue')">Devam Edenler</button>
  </nav>
</template>

<script>
export default {
    name : 'FilterTasks',
    data() {
        return {}
    },
    props : ['current'],
    emits : ['filter'],
    components : {
        updateFilter(filterValue){
            this.$emit('filter', filterValue)
        }
    },
}
</script>

<style>

</style>