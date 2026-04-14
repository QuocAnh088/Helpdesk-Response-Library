<template>
    <div>
      <h1>Show Help Desk</h1>
  
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="germany flag"></i> Code
        </div>
        <input type="text" readonly  :value="helpdesk.code"/>
      </div>
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="united kingdom flag"></i> Action
        </div>
        <input type="text" readonly  :value="helpdesk.action"/>
      </div>
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="info circle icon"></i> Description
        </div>
        <input type="text" readonly :value="helpdesk.description"/>
      </div>
      <div class="actions">
        <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
          Edit Help Desk
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { api } from '../helpers/helpers';

  export default {
    name: 'show',
    data() {
      return {
        // Sửa word thành helpdesk
        helpdesk: {}
      }
    },
    async mounted() {
        this.helpdesk = await api.getHelpdesk(this.$route.params.id);
    }
  };
  </script>
  
  <style scoped>
  .actions a {
    display: block;
    text-decoration: underline;
    margin: 20px 10px;
  }
  </style>