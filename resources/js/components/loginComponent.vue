<template>
   <v-app id="inspire">
    <v-app id="inspire">
      <v-main>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
              <v-card class="elevation-12">
                <v-toolbar
                  color="error"
                  dark
                  flat
                >
                  <v-toolbar-title>Login form</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Login"
                      name="login"
                      prepend-icon="mdi-account"
                      v-model="email"
                      type="text"
                    ></v-text-field>
  
                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      v-model="password"
                      prepend-icon="mdi-lock"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="error" @click="login">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </v-app>
</template>

<script>
export default {
    data(){
      return{
        email:'',
        password:'',
      }
    },
    methods:{
      login:function(){
        localStorage.setItem('token','hywe8whhwb28yw8hw23y282y');
      }
    }
  

}
</script>

<style lang="stylus" scoped>

</style>