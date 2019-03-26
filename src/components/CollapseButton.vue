<template>
    <button
        v-if="$vssWidth < options.mobileBreakpoint"
        class="vnb__collapse-button"
        @click="collapseButtonClicked"
        type="button"
        :aria-expanded="(menuIsVisible) ? 'true' : 'false'"
    >
        <img
            :src="
                (this.options.collapseButtonStyle === 'dark') ? require('../assets/images/collapse-menu-dark.png') : require('../assets/images/collapse-menu-light.png')
            "
            :alt="'Menu'"
            class="vnb__collapse-button__image"
        >
    </button>
</template>

<script>
import VueScreenSize from 'vue-screen-size'

export default {
    name: 'collapse-button',
    mixins: [VueScreenSize.VueScreenSizeMixin],
    props: {
        options: {
            type: Object,
            required: true
        },
        menuIsVisible: {
            type: Boolean,
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
        collapseButtonClicked () {
            this.$emit('collapse-button-clicked')
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/css/main.scss';

    .vnb {
        &__collapse-button {
            cursor: pointer;
            border: 0;
            background: transparent;
            margin-right: 10px;

            &:hover {
                opacity: 0.75;
            }

            &__image {
                max-height: 30px;
            }
        }
    }
</style>