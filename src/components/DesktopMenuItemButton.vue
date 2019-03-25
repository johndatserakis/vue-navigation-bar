<template>
    <a
        :href="option.path"
        :class="[
            'vnb__menu-options__option__button',
            'vnb-button',
            option.class
        ]"
        :aria-label="option.text"
    >
        {{option.text}}
    </a>
</template>

<script>
export default {
    name: 'desktop-menu-item-button',
    props: {
        option: {
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
    }
}
</script>

<style lang="scss">
    @import '../assets/css/main.scss';

    .vnb {
        &__menu-options {
            &__option {
                &__button {
                    display: inline-block;
                    font-weight: 400;
                    color: $white;
                    text-align: center;
                    vertical-align: middle;
                    user-select: none;
                    font-size: 0.9rem;
                    line-height: 1.0;
                    border-radius: .25rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    padding: 0.5rem 1rem;
                    transition: background 0.2s ease-in;
                }
            }
        }
    }

    .vnb-button {
        background: $blue;

        &:hover {
            color: $white;
            background: darken($blue, 10%);
            text-decoration: none;
        }
    }
</style>