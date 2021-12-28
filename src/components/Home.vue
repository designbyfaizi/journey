<template>
<div class="page">
    <NavBar></NavBar>
    <div class="homeContainer">
        <div class="mainSection">
            <div class="leftContainer">
                <h1>Your daily journey is coming to digital paper now.</h1>
                <h3>Write whatever you lived and what you thought.</h3>
                <button-main
                    name="Try Journey, It's Free."
                    type="b1"
                ></button-main>
            </div>
            <div class="rightContainer">
                <div class="image">
                    <img
                        src="@/assets/IllustrationMain.svg"
                        alt="Journey Illustration Main"
                    />
                </div>
            </div>
        </div>
        <div class="aboutSection">
            <div class="aboutContainer">
                <div class="leftContainer">
                    <div class="image">
                        <img
                            src="@/assets/IllustrationAbout.svg"
                            alt="Write without Losing"
                        />
                    </div>
                </div>
                <div class="rightContainer">
                    <h1>Write without losing</h1>
                    <h3>
                        As soon as the dream fades away, it disappears among the
                        stars, write without losing
                    </h3>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ButtonMain from "@/components/ButtonMain.vue";
import NavBar from "@/components/NavBar.vue";

export default {
    components: {
        ButtonMain,
        NavBar
    },
};
</script>

<style lang="scss" scoped>
.homeContainer {
    .mainSection {
        /* background: red; */
        margin: 0 0 0 10rem;
        /* max-width: 1200px; */
        /* margin: 0 auto 0 auto; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        min-height: 80vh;
        align-items: center;
        .leftContainer {
            flex-grow: 0;
            max-width: 800px;
            h1 {
                font-size: 4rem;
            }
            h3 {
                font-size: 2rem;
                font-weight: 400;
            }
        }
        .rightContainer {
            flex-shrink: 0;
            img {
                min-width: 40vw;
            }
        }
    }

    .aboutSection {
        background: #ffe5bc;
        .aboutContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            min-height: 50vh;
            margin: 0 10rem 0 10rem;
            .leftContainer {
            }
            .rightContainer {
                margin: 0 0 0 20rem;
                h1 {
                    font-size: 4rem;
                }
                h3 {
                    font-size: 2rem;
                    font-weight: 400;
                }
            }
        }
    }
}
</style>
