<template>
    <div class="alert  alert-dismissible fade show" role="alert" :class="messageClass">
        <strong>{{message.type}} </strong> {{message.body}}.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
    export default{
        name: "Alert",
        props: {
            message: {
                type: String,
                body: String,
            }
        },
        computed:{
            messageClass : function () {
              return 'alert-'+this.message.type;
            }
        }
    }
</script>