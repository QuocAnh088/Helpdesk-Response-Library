<template>
    <div>
        <h1>Edit Help Desk</h1>
        <word-form @createOrUpdate="createOrUpdate" :helpdesk=this.helpdesk></word-form>
    </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helpers';

export default {
    name: 'edit',
    components: {
        'word-form': WordForm
    },
    data: function() {
        return {
            helpdesk: {}
        };
    },
    async mounted() {
        this.helpdesk = await api.getHelpdesk(this.$route.params.id);
    },
    methods:{
        createOrUpdate: async function(helpdesk) {
        await api.updateHelpdesk(helpdesk);
        this.flash('Help Desk updated successfully!', 'success');
        this.$router.push(`/helpdesks/${helpdesk._id}`);
        }
    }
};
</script>