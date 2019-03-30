<template>

    <nav class="vnb" :id="finalOptions.elementId" :aria-label="finalOptions.ariaLabelMainNav">

        <brand-image :options="finalOptions" />

        <menu-options :options="finalOptions" :type="'left'" />

        <slot v-if="$vssWidth > options.mobileBreakpoint" name="custom-section"></slot>

        <menu-options :options="finalOptions" :type="'right'" />

        <collapse-button :options="finalOptions" :menuIsVisible="menuIsVisible" @collapse-button-clicked="showMobilePopup" />

        <popup :options="finalOptions" :menuIsVisible="menuIsVisible" @close-button-clicked="closeMobilePopup">
            <template v-slot:custom-section>
                <slot name="custom-section"></slot>
            </template>
        </popup>

    </nav>

</template>

<script>

import VueScreenSize from 'vue-screen-size'
import uuidV4 from './common/uuidv4'
import BrandImage from './components/BrandImage.vue'
import MenuOptions from './components/MenuOptions.vue'
import CollapseButton from './components/CollapseButton.vue'
import Popup from './components/Popup.vue'

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
                showBrandImageInMobilePopup: (this.options.showBrandImageInMobilePopup) ? true : false,
                ariaLabelMainNav: (this.options.ariaLabelMainNav) ? this.options.ariaLabelMainNav : 'Main Navigation',
                menuOptionsLeft: (this.options.menuOptionsLeft) ? this.options.menuOptionsLeft : [],
                menuOptionsRight: (this.options.menuOptionsRight) ? this.options.menuOptionsRight : []
            }
        }
    },
    methods: {
        closeMobilePopup () {
            this.menuIsVisible = false
            this.$emit('mobile-popup-hidden')
        },
        showMobilePopup () {
            this.menuIsVisible = true
            this.$emit('mobile-popup-shown')
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

        a {
            text-decoration: none;
        }
    }

    .tippy-tooltip {
        padding: 0;
    }

    .vnb-image {
        max-width: 100%;
        height: auto;
    }
</style>