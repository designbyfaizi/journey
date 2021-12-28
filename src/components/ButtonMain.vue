<template>
  <button :class="type">{{name}}</button>
</template>

<script>
export default {
    props:['name', 'type']
}
</script>

<style lang="scss">
.b1{
    background: linear-gradient(#EF5B72, #F2A626);
    border: none;
    padding: 1rem 1.7rem;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        background: linear-gradient(#F2A626, #EF5B72);
    }
}

</style>