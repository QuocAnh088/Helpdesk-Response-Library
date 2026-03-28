<template>
    <div>
        <h1>Helpdesk Library</h1>
        <table id="helpdesk" class="ui celled compact table">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Action</th>
                    <th colspan="3"></th>
                </tr>
            </thead>
            <tbody v-if="helpdeck && helpdeck.length > 0">
                <tr v-for="(help, i) in helpdeck" :key="i">
                    <td>{{ help.code }}</td>
                    <td>{{ help.action }}</td>
                    
                    <td width="75" class="center aligned">
                        <router-link :to="{ name: 'show', params: { id: help._id } }">Show</router-link>
                    </td>
                    <td width="75" class="center aligned">
                        <router-link :to="{ name: 'edit', params: { id: help._id } }">Edit</router-link>
                    </td>
                    <td width="75" class="center aligned" @click.prevent="onDelete(help._id)">
                        <a :href="`/helpdesks/${help._id}`">Delete</a>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="5" class="center aligned">No helpdesk items found.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
    name: 'helpdesk',
    data() {
        return {
            helpdeck: [],
        };
    },
    methods: {
        async onDelete(id) {
            const sure = window.confirm('Are you sure you want to delete this help desk?');
            if (!sure) return;
            try {
                await api.deleteHelpdesk(id);
                this.helpdeck = this.helpdeck.filter(help => help._id !== id);
            } catch (error) {
                console.error("Lỗi khi xóa:", error);
            }
        }
    },
    async mounted() {
        try {
            this.helpdeck = await api.getHelpdesks();
        } catch (error) {
            console.error("Lỗi khi tải danh sách:", error);
        }
    }
};
</script>