import Vue from 'vue';
import { styled } from '@egoist/vue-emotion';
import { VueEmotion } from '@egoist/vue-emotion'
Vue.use(VueEmotion);

const getCheckbox = () => {
    return styled('input')`
    ${(props) => {
        if (props.isDisabled) {
            return ` 
            margin: 0;
            appearance: none;
            display: block;
            width: 18px;
            height: 18px;
            background-color: rgb(226,233,239);
            border: 2px solid #CCC;
            border-radius: 4px;
            outline: none;
            &:checked {
                position: relative;
                /* The checkmark */
                &::after {
                    box-sizing: border-box;
                    content: '';
                    position: absolute;
                    width: 6px;
                    height: 10px;
                    border: 2px solid #fff;
                    border-top: none;
                    border-left: none;
                    transform-origin: bottom right;
                    transform:
                    translateX(0)
                    translateY(1px)
                    rotate(45deg);
                }
            }
            `
        } else {
            return `    
                margin: 0;
                appearance: none;
                display: block;
                width: 18px;
                height: 18px;
                background-color: #fff;
                border: 2px solid #666;
                border-radius: 4px;
                outline: none;

                &:checked {
                    position: relative;
                    background-color: #5290ff;
                    border-color: transparent;
                    &:focus {
                        border-color: white;
                        box-shadow: 0 0 0 2px #5290ff;
                    }
                    /* The checkmark */
                    &::after {
                        box-sizing: border-box;
                        content: '';
                        position: absolute;
                        width: 6px;
                        height: 10px;
                        border: 2px solid #fff;
                        border-top: none;
                        border-left: none;
                        transform-origin: bottom right;
                        transform:
                        translateX(0)
                        translateY(1px)
                        rotate(45deg);
                    }
                }

                &:hover {
                    box-shadow: 0 0 0 5px rgb(226,233,239);
                }
                &:focus {
                    border-color: #5290ff;
                }
            `
        }
    }}
    `
}

export default {
    name: 'checkBox',
    components: '',
    props: {
        isDisabled: {
            type: Boolean,
            default: false,
        }
    },
    render: function (h) {
        const CheckBox = getCheckbox()
        return (
            <div style="display: inline-flex">
                <CheckBox isDisabled={this.isDisabled} type="checkbox" disabled={this.isDisabled ? true : false}></CheckBox> 
                <span style="margin-left: 8px">Blue whale decided to have shrimp</span>
            </div>

        )
    }
}