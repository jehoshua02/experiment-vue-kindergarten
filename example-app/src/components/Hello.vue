<template>
  <div>
    <h1>Hello</h1>
    <router-link to="/bye">Bye</router-link>
    <span>|</span>
    <router-link to="/secret">Secret</router-link>

    <p>
      <input 
        v-model="role"
        type="radio" 
        name="role" 
        value="admin" 
        @change="onRoleChange" >
      <label>Admin</label>
    </p>
    <p>
      <input 
        v-model="role" 
        type="radio" 
        name="role" 
        value="user" 
        @change="onRoleChange" >
      <label>Regular User</label>
    </p>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    data () {
        return {
            role: 'admin'
        }
    },
    computed: {
        ...mapState([
            'user'
        ]),
    },
    mounted () {
        this.role = this.user.info.role
    },
    methods: {
        ...mapMutations([
            'changeRole'
        ]),
        onRoleChange () {
            this.changeRole(this.role)
        }
    }
}
</script>