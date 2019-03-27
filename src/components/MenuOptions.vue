<template>
    <div
        v-if="$vssWidth > options.mobileBreakpoint"
        :class="[
            'vnb__menu-options',
            {'vnb__menu-options--left': type === 'left'},
            {'vnb__menu-options--right': type === 'right'}
        ]"
    >
        <div
            v-for="option in (type === 'left') ? options.menuOptionsLeft : options.menuOptionsRight"
            class="vnb__menu-options__option"
        >
            <desktop-menu-item-link v-if="option.type === 'link'" :option="option" :options="options" />

            <desktop-menu-item-button v-else-if="option.type === 'button'" :option="option" :options="options" />

            <desktop-menu-item-spacer v-else="option.type === 'spacer'" :option="option" />
        </div>
    </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'
import DesktopMenuItemLink from '../components/DesktopMenuItemLink.vue'
import DesktopMenuItemButton from '../components/DesktopMenuItemButton.vue'
import DesktopMenuItemSpacer from '../components/DesktopMenuItemSpacer.vue'

export default {
    name: 'menu-options',
    mixins: [VueScreenSize.VueScreenSizeMixin],
    props: {
        options: {
            type: Object,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    data () {
        return {
        }
    },
    computed: {
    },
    methods: {
    },
    components: {
        DesktopMenuItemLink,
        DesktopMenuItemButton,
        DesktopMenuItemSpacer
    }
}
</script>

<style lang="scss">
    @import '../assets/css/main.scss';

    .vnb {
        &__menu-options {
            display: flex;
            flex-direction: row;
            align-items: center;

            &--left {
                margin-right: auto;
                justify-content: flex-start;
                padding-left: 30px;
            }

            &--right {
                margin-left: auto;
                justify-content: flex-end;
                padding-right: 10px;
            }

            &__option {
                &:not(:last-child) {
                    margin-right: 20px;
                }
            }
        }
    }
</style>