import { defineComponent } from 'vue'
import ButtonRenderFunc from './ButtonRenderFunc'
const button = defineComponent({
    name: 'btn-component',
    components: { ButtonRenderFunc },
    template: '<button style="color:green">Template Function Button</button> <ButtonRenderFunc />'
})
export default button