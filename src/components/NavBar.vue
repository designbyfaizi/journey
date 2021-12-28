<template>
    <div class="nav">
        <div class="nav-container">
            <router-link to="/" class="logo-container">
                <img alt="Vue logo" src="@/assets/Icon.svg" />
                <h1>Journey</h1>
            </router-link>
            <div class="navlink-container">
                <div class="navlinks">
                    <router-link to="/notes">Notes</router-link>
                    <router-link to="/chat">Chat</router-link>
                </div>
                <div class="nav-buttons">
                    <the-button
                        to="/login"
                        type="b1"
                        name="Login"
                    ></the-button>
                    <the-button
                        to="/signup"
                        type="b2"
                        name="Sign Up"
                    ></the-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import theButton from "@/components/Button.vue";

export default {
    components: {
        theButton,
    },
};
</script>

<style lang="scss">
.nav {
    /* max-width: 1200px; */
    margin: 0 auto 0 auto;
    margin: 0 10rem 0 10rem;
    .nav-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .logo-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0 0 0 1rem;
            text-decoration: none;
            color: black;
        }

        .navlink-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            .navlinks {
                a {
                    margin: 0 0 0 1rem;
                    text-decoration: none;
                    color: black;
                    padding: 0.2rem 0.7rem;
                    &:hover {
                        background: rgb(226, 226, 226);
                        /* border-radius: 7px; */
                    }
                }
            }
            .nav-buttons {
                a {
                    margin: 0 0 0 1rem;
                }
            }
        }
    }
}
</style>
