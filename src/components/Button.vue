<template>
  <router-link :to="to" :class="type">{{name}}</router-link>
</template>

<script>
export default {
    props:['name', 'type', "to"]
}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
}
.b1{
    background: white;
    border: 1px solid black;
    color: black;
    padding: 0.3rem 1.3rem;
    cursor: pointer;
    &:hover{
        background: black;
        border: 1px solid white;
        color: white;
    }
}

.b2{
    background: black;
    border: 1px solid white;
    color: white;
    padding: 0.3rem 1.3rem;
    cursor: pointer;
    &:hover{
        background: white;
        border: 1px solid black;
        color: black;
    }
}
</style>