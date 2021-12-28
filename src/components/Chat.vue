<template>
    <div class="page">
        <NavBar></NavBar>
        <div class="main">
            <ul
                ref:message-container
                class="message-container"
                id="message-container"
            >
                <li class="message-list">
                    <div class="message-left">
                        <p class="message">
                            Thanks for contacting us. How can we help you ?
                            <span>Asad Tariq || a few seconds ago </span>
                        </p>
                    </div>
                </li>

                <!-- <li class="message-list" v-for="message in messages">
                <div v-if="message.length === 0"></div>
                <div v-if="message.isOwnMessage === true" class="message-right">
                    <p>
                        {{ message.data.message }}
                        <span
                            >{{ message.data.name }} ||
                            {{ moment(message.data.dateTime).fromNow() }}
                        </span>
                    </p>
                </div>
                <div v-if="message.isOwnMessage === false" class="message-left">
                    <p>
                        {{ message.data.message }}
                        <span
                            >{{ message.data.name }} ||
                            {{ moment(message.data.dateTime).fromNow() }}
                        </span>
                    </p>
                </div>
            </li> -->
                <li
                    v-if="messageFeedback.length !== 0"
                    class="message-feedback"
                >
                    <p class="feedback" id="feedback">
                        {{ messageFeedback }}
                    </p>
                </li>
            </ul>

            <form
                v-on:submit.prevent="sendMessage"
                class="message-form"
                id="message-form"
            >
                <input
                    @focus="sendFeedback"
                    @blur="clearFeedback"
                    @keypress="sendFeedback"
                    v-model="messageInput"
                    type="text"
                    name="message"
                    id="message-input"
                    class="message-input"
                />
                <div class="v-divider"></div>
                <button type="submit" class="send-button">
                    Send
                </button>
            </form>
            <!-- <div class="footer">
            <h3 class="footer-text">Made in VueJS with 💚</h3>
        </div> -->
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
    data() {
        return {
            token: "",
            totalClients: 0,
            totalUsers: 0,
            totalAdmins: 0,
            messageInput: "",
            messageFeedback: "",
            name: "",
            messages: [],
            regex: {
                emptySpaces: "^\\s+$",
            },
            value: "Testing",
        };
    },
};
</script>
<style>
:root {
    --color-primary: black;
    --color-secondary: #57db67;
    --color-tertiary: black;
    --box-width: clamp(100%, 700px, 60vw);
    --bubble-width: clamp(50%, 250px, 70vw);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
    font-family: "Open Sans", sans-serif;
}

body {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    min-height: -webkit-fill-available;
    padding: 1rem;
}

.main {
    width: var(--box-width);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    height: 100%;
    background: rgb(228, 228, 228);
    border-radius: 5px;
}

.message-container {
    flex-grow: 1;
    /* background: red; */
    display: flex;
    flex-direction: column;
    min-height: 50vh;
    height: 65vh;
    overflow-y: scroll;
    overflow-x: hidden;
}

.message-form {
    flex-shrink: 0;
    justify-self: end;
}

.message-list {
    display: flex;
    flex-direction: column;
}

.message-left,
.message-right {
    list-style: none;
    padding: 8px 12px;
    margin: 12px;
    max-width: var(--bubble-width);
    font-size: 18px;
    word-wrap: break-word;
}

.message-left {
    border-radius: 20px 20px 20px 0;
    align-self: flex-start;
    background-color: #fff;
    box-shadow: -2px 2px 4px #dcdcdc;
}
.message-right {
    border-radius: 20px 20px 0 20px;
    align-self: flex-end;
    background-color: var(--color-primary);
    box-shadow: -2px 2px 4px #dcdcdc;
    color: #f6f6f6;
}

.message-left > p > span,
.message-right > p span {
    display: block;
    font-style: italic;
    font-size: 12px;
    margin-top: 4px;
}

.feedback {
    font-style: italic;
    font-size: 14px;
    padding: 0 16px 16px 16px;
    color: #2d2d2d;
    text-align: center;
}

.message-form {
    z-index: 10;
    display: flex;
    justify-content: space-between;
}

.message-input {
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; */
    border-radius: 7px 0 0 7px;
    flex-grow: 1;
    height: 48px;
    font-size: 16px;
    /* border: none; */
    outline: none;
    padding: 0 12px;
    background-color: rgb(255, 255, 255);
    border: 0 solid var(--color-tertiary);
    transition: all 0.1s;
}
.message-input:hover {
    border: 2px solid var(--color-tertiary);
}
.message-input:focus {
    border: 2px solid var(--color-tertiary);
}

.send-button {
    border-radius: 0 5px 5px 0;
    height: 48px;
    font-size: 16px;
    color: white;
    border: none;
    padding: 0 20px;
    outline: none;
    background-color: var(--color-primary);
    cursor: pointer;
    transition: all 0.2s;
}

.send-button:hover {
    background: white;
    color: var(--color-primary);
}

.v-divider {
    height: 48px;
    width: 2px;
    background-color: #f6f6f6;
}

.clients-total {
    margin: 20px 0;
    color: var(--color-tertiary);
}

.footer {
    background-color: grey;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-text {
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-primary);
}

/* width */
::-webkit-scrollbar {
    width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    background: whitesmoke;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: rgb(201, 201, 201);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: var(--color-tertiary);
}

@media screen and (max-width: 768px) {
    .main {
        max-height: 65vh;
    }
}
</style>
