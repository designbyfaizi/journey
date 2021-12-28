<template>
    <div class="page">
        <NavBar></NavBar>
        <div class="noteContainer">
            <div class="left">
                <div class="ul">
                    <p class="li white">I am a vue js developer.</p>
                    <p class="li">Note # 2</p>
                    <p class="li">Note # 3</p>
                    <p class="li">Add New Note +</p>
                </div>
            </div>
            <div class="right">
                <div class="title">I am a vue js developer.</div>
                <div class="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, iure accusamus nesciunt minima a, tempora
                    commodi rem beatae aliquid, ipsum incidunt modi amet aut
                    error ratione laboriosam dolor voluptates magnam.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import ButtonMain from "@/components/ButtonMain.vue";
import NavBar from "@/components/NavBar.vue";

export default {
    components: {
        //ButtonMain,
        NavBar,
    },
};
</script>

<style lang="scss">
.noteContainer {
    margin: 0 auto 0 auto;
    margin: 0 10rem 0 10rem;
    display: flex;
    height: 80vh;
    .left {
        background: rgb(255, 166, 0);
        border-radius: 9px;
        width: 400px;
        .ul {
            padding: 0.3rem;
            list-style-type: none;
            display: flex;
            flex-direction: column;
            .li {
                padding: 0.7rem;
                margin-bottom: 0.5rem;
                border-radius: 7px;
                background: rgb(255, 238, 205);
                cursor: pointer;
                &:hover {
                    background: white;
                }
            }

            .li:last-of-type {
                margin-top: auto;
                background: black;
                color: white;
                &:hover{
                    background: white;
                    color: rgb(255, 166, 0);
                }
            }
            .white{
                background: white;
            }
            .mb-auto {
                margin-bottom: auto;
            }
            .mt-auto {
                margin-top: auto;
            }
        }
    }

    .right{
        background: rgb(255, 238, 205);
        width: 700px;
        padding: 1rem;

        .title{
            font-size: 3rem;
        }
        .paragraph{
            background: white;
            border: 1px solid rgb(255, 166, 0);
            height: 60%;
            padding: 1rem;
            border-radius: 10px;
        }
    }
}
</style>
