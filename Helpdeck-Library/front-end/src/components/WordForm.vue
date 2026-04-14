<template>
    <form action="#" @submit.prevent="onSubmit">
        <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="germany flag"></i> Code
            </div>
            <input type="text" v-model="helpdesk.code">
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="united kingdom flag"></i> Action
            </div>
            <input type="text" v-model="helpdesk.action">
        </div>
        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="infor circle icon"></i> Description
            </div>
            <input type="text" placeholder="Enter description ... " v-model="helpdesk.description">
        </div>
        <button class="positive ui button" type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    name: 'word-form',
    props: {
        helpdesk: {
            type: Object,
            required: false,
            // Thêm đoạn default này vào để cấp cứu khi dữ liệu bị undefined
            default: function() {
                return { code: '', action: '' }
            }
        }
    },
    data() {
        return {
            errorsPresent: false
        }
    },
    methods: {
        onSubmit: function() {
            //console.log(`Code: ${this.helpdesk.code}`);
            //console.log(`Action: ${this.helpdesk.action}`);
            this.$emit('createOrUpdate', this.helpdesk);
        }
    }
};
</script>