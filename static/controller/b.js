export default {
  name: 'b',
  data () {
    return {
      msg: '欢迎来到 Vue.js B页面',
      message: 'i am dexter ',
      message1: '<h1>我是路飞</h1>',
      class1: false,
      msg1: '',
      radio2:6
      }
  },
  props: {
  	inputValue: String
  },
  methods: {
      onInput: function () {
          this.$emit('message', this.msg1);
      }
    }
}