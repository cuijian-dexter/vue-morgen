// 显示信息的组件
<template>
    <div class="grid-content bg-grayish span-border">
        <div class="userHeight">
            {{uservalue}}
        </div>
    </div>
</template>

 <script>
 export default {
   name:'userinfo',
   data() {
       return {
       }
   },
   props: ['uservalue']
 }
 </script>
 