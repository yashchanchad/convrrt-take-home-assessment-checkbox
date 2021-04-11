
<script>
import './checkBox.css';
import styled from '@emotion/styled'

const getInputStyle = styled.input`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    color: #000;
    background-color: #fd1e1e;
    
    :hover{
      outline: 5px solid blue;
    }
`
export default {
  name: 'my-checkbox',

  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    // focus: {
    //   type: Boolean,
    //   default: false,
    // },
    // focusViaTab: {
    //   type: Boolean,
    //   default: false,
    // },
    // size: {
    //   type: Boolean,
    //   default: 'medium',
    //   validator: function (value) {
    //     return ['small', 'medium', 'large'].indexOf(value) !== -1;
    //   },
    // },
    // backgroundColor: {
    //   type: String,
    // },
    // checked: {
    //   type: Boolean,
    //   default: false,
    // }
  },

  computed: {
    classes() {
      console.log(this.default, this.focus, this.focusViaTab);
      return {
        'storybook-checkbox': this.default,
        // 'storybook-checkbox--primary': this.primary,
        // 'storybook-button--secondary': !this.primary,
        'storybook-checkbox--focus': this.focus,
        'storybook-checkbox--focusViaTab': this.focusViaTab,
        // [`storybook-checkbox--${this.focusViaTab}`]: true,
      };
    },
    // style() {
    //   return {
    //     backgroundColor: this.backgroundColor,
    //   };
    // },
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>
