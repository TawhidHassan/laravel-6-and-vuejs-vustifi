<template>
     <v-container>
        <v-row>
          <v-col>
              <v-alert type="info" border="" elevation="" color="green">
              i am vuetify component
              </v-alert>
                  <v-btn small elevation="100" color="blue" to="/foo">Load foo</v-btn>
                  <v-btn small elevation="100" color="blue" to="/bar">Load Bar</v-btn>
                  <v-btn small elevation="100" color="blue" to="/user/sifat">Load user</v-btn>
              
          </v-col>
        </v-row>
        <v-row>
            <v-col>
                <router-view></router-view>
            </v-col>
        </v-row>
      </v-container>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
