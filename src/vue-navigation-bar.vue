<template>

    <nav class="vnb" :id="finalOptions.elementId" :aria-label="finalOptions.ariaLabelMainNav">

        <brand-image :options="finalOptions" />

        <menu-options :options="finalOptions" :type="'left'" />

        <menu-options :options="finalOptions" :type="'right'" />

        <collapse-button :options="finalOptions" :menuIsVisible="menuIsVisible" @collapse-button-clicked="collapseButtonClicked" />

        <popup :options="finalOptions" :menuIsVisible="menuIsVisible" @close-button-clicked="closeButtonClicked" />

    </nav>

</template>

<script>

import VueScreenSize from 'vue-screen-size'
import uuidV4 from './common/uuidv4'

import BrandImage from './components/BrandImage'
import MenuOptions from './components/MenuOptions'
import CollapseButton from './components/CollapseButton'
import Popup from './components/Popup'

export default {
    name: 'vue-navigation-bar',
    mixins: [VueScreenSize.VueScreenSizeMixin],
    props: {
        options: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            menuIsVisible: false
        }
    },
    computed: {
        finalOptions () {
            return {
                elementId: (this.options.elementId) ? this.options.elementId : uuidV4(),
                isUsingVueRouter: (this.options.isUsingVueRouter) ? true : false,
                mobileBreakpoint: (this.options.mobileBreakpoint) ? this.options.mobileBreakpoint : 992,
                brandImagePath: (this.options.brandImagePath) ? this.options.brandImagePath : '/',
                brandImage: (this.options.brandImage) ? this.options.brandImage : null,
                brandImageAltText: (this.options.brandImageAltText) ? this.options.brandImageAltText : 'brand-image',
                collapseButtonStyle: (this.options.collapseButtonStyle) ? this.options.collapseButtonStyle : 'dark', // light, dark
                ariaLabelMainNav: (this.options.ariaLabelMainNav) ? this.options.ariaLabelMainNav : 'Main Navigation',
                menuOptionsLeft: (this.options.menuOptionsLeft) ? this.options.menuOptionsLeft : [],
                menuOptionsRight: (this.options.menuOptionsRight) ? this.options.menuOptionsRight : []
            }
        }
    },
    methods: {
        closeButtonClicked () {
            this.menuIsVisible = false
        },
        collapseButtonClicked () {
            this.menuIsVisible = !this.menuIsVisible
        }
    },
    components: {
        BrandImage,
        MenuOptions,
        CollapseButton,
        Popup
    }
}
</script>

<style lang="scss">
    @import './assets/css/main.scss';

    .vnb {
        * {
            box-sizing: border-box;
        }

        background: $backgroundColor;
        padding-top: 15px;
        padding-bottom: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .tippy-tooltip {
        padding: 0;
    }
</style>