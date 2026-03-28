<template>
    <div>
        <h1>New Help Desk</h1>
        <word-form :helpdesk="helpdesk" @createOrUpdate="createOrUpdate"></word-form>
    </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helpers';

export default {
    name: 'new-helpdesk',
    components: {
        'word-form': WordForm
    },
    // Khai báo data mặc định ở đây để không bị undefined
    data() {
        return {
            helpdesk: {
                code: '',
                action: ''
            }
        };
    },
    methods: {
        createOrUpdate: async function(helpdesk) {
            try {
                const res = await api.createHelpdesk(helpdesk);
                this.$router.push('/helpdesk'); 
            } catch (error) {
                console.error("Lỗi:", error);
            }
        }
    }
};
</script>