// import MyCheckbox from './checkBox.vue';
import checkBox from './checkbox';

export default {
    title: 'Molecules/Checkbox',
    component: checkBox,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { checkBox },
    template: '<check-box :isDisabled="isDisabled" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    isDisabled: false,
};