import { shallowMount } from '@vue/test-utils'
import VueNavigationBar from '@/vue-navigation-bar.vue'

describe('VueNavigationBar.vue', () => {
    it('Sets props correctly', async () => {
        let initialPropsData = {
            mobileBreakpoint: 992,
            desktopHeight: 200,
            mobileHeight: 100,
            background: '#eee',
            textColor: '#333',
            text: 'Test text',
            fontSize: '2rem'
        }

        const wrapper = shallowMount(VueNavigationBar, {
            propsData: {
                mobileBreakpoint: initialPropsData.mobileBreakpoint,
                desktopHeight: initialPropsData.desktopHeight,
                mobileHeight: initialPropsData.mobileHeight,
                background: initialPropsData.background,
                textColor: initialPropsData.textColor,
                text: initialPropsData.text,
                fontSize: initialPropsData.fontSize
            }
        })

        expect(wrapper.vm.mobileBreakpoint).toBe(initialPropsData.mobileBreakpoint)
        expect(wrapper.vm.desktopHeight).toBe(initialPropsData.desktopHeight)
        expect(wrapper.vm.mobileHeight).toBe(initialPropsData.mobileHeight)
        expect(wrapper.vm.background).toBe(initialPropsData.background)
        expect(wrapper.vm.textColor).toBe(initialPropsData.textColor)
        expect(wrapper.vm.text).toBe(initialPropsData.text)
        expect(wrapper.vm.fontSize).toBe(initialPropsData.fontSize)
    })
})