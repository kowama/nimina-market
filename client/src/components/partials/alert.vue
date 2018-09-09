<template>
    <div class="alert  alert-dismissible fade show" role="alert" :class="messageClass">
        <strong>{{message.t}} </strong> {{message.msg}}.
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
                t: String,
                msg: String
            }
        },
        computed:{
            messageClass : function () {
              return 'alert-'+this.message.t;
            }
        }
    }
</script>