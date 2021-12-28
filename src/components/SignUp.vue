<template>
  <div class="page">
      <NavBar></NavBar>
      <div class="signupContainer">
          <div class="form">
          <h3>Write whatever you lived and what you thought.</h3>
              <input type="text" name="username" id="username" placeholder="Username">
              <input type="email" name="email" id="email" placeholder="Email">
              <input type="password" name="password" id="password" placeholder="Password">
              <button>Sign Up</button>
              <div class="signup">
                  <p>Already a member? <span><router-link to="/login">Log In</router-link></span></p>
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
        NavBar
    },
};
</script>

<style lang="scss">
    .signupContainer{
        .form{
            min-height: 80vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            h3{
                font-weight: 400;
                font-size: 3rem;
            }
            input{
                padding: 1rem;
                min-width: 700px;
                border: none;
                outline: none;
                border-bottom: 1px solid grey;
                &:hover{
                    border-bottom: 1px solid rgb(29, 29, 29);
                    
                }
                &:focus{
                    border-bottom: 1px solid rgb(18, 141, 223);
                }
                &:focus::placeholder{
                        color: rgb(18, 141, 223);
                    }
            }

            button{
                border: 1px solid white;
                outline: none;
                background: black;
                color: white;
                padding: 1rem;
                min-width: 700px;
                cursor: pointer;
                &:hover{
                    border: 1px solid black;
                    background: white;
                    color: black;
                }
            }
        }

    }
</style>