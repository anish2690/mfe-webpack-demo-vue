import { defineComponent, h } from 'vue'
const buttonRenderFunc = defineComponent({
    name: 'btn-render-func',
    render() {
        return h(
            'button',
            {
                id: 'btn-primary',
                style: {
                    color: 'blue'
                }
            },
            'Button created with render functions'
        )
    }
})
export default buttonRenderFunc