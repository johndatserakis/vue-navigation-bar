<template>
    <div class="vnb__brand-image-wrapper">
        <dynamic-link :path="options.brandImagePath" :isUsingVueRouter="options.isUsingVueRouter" class="vnb__brand-image-wrapper__link" aria-label="Homepage">
            <img
                v-if="options.brandImage"
                :src="options.brandImage"
                :alt="options.brandImageAltText"
                class="vnb-image vnb__brand-image-wrapper__link__image"
            >
            <span v-else>{{options.brandImageAltText}}</span>
        </dynamic-link>
    </div>
</template>

<script>
import DynamicLink from '../components/DynamicLink'

export default {
    name: 'brand-image',
    props: {
        options: {
            type: Object,
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
        DynamicLink
    }
}
</script>

<style lang="scss">
    @import '../assets/css/main.scss';

    .vnb-image {
        max-width: 100%;
        height: auto;
    }

    .vnb {
        &__brand-image-wrapper {
            padding-left: 10px;

            &__link {
                &__image {
                    margin-top: $brandImageMarginAdjustment;
                    max-height: $brandImageMaxHeight;
                }
            }
        }
    }
</style>