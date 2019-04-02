<template>
    <dynamic-link
        :path="option.path"
        :isUsingVueRouter="options.isUsingVueRouter"
        v-if="!option.subMenuOptions || !option.subMenuOptions.length"
        class="vnb__menu-options__option__link"
        :aria-label="option.text"
        tabindex="0"
    >
        <span
            v-if="option.iconLeft"
            class="vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--left"
            v-html="option.iconLeft"
        ></span>

        {{option.text}}

        <span
            v-if="option.iconRight"
            class="vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--right"
            v-html="option.iconRight"
        ></span>
    </dynamic-link>

    <span
        v-else
        class="vnb__menu-options__option__link"
        :id="'dropdown-menu-parent-' + option.text.replace(/\s+/g, '')"
        aria-haspopup="true"
        :aria-expanded="(isExpanded) ? 'true' : 'false'"
        :aria-label="option.text"
        tabindex="0"
    >
        <span
            v-if="option.iconLeft"
            class="vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--left"
            v-html="option.iconLeft"
        ></span>

        {{option.text}}

        <span
            v-if="option.iconRight"
            class="vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--right"
            v-html="option.iconRight"
        ></span>

        <img
            :src="require('../assets/images/chevron-down.png')"
            alt="arrow"
            :class="[
                'vnb__menu-options__option__arrow',
                {'vnb__menu-options__option__arrow--hover': isExpanded}
            ]"
        >

        <div
            class="vnb__sub-menu-options"
            v-if="option.type === 'link'"
            :id="'sub-menu-options-' + option.text.replace(/\s+/g, '')"
        >
            <div
                class="vnb__sub-menu-options__option"
                tabindex="-1"
            >
                <dynamic-link
                    :path="subOption.path"
                    :isUsingVueRouter="options.isUsingVueRouter"
                    v-for="(subOption, index) in option.subMenuOptions"
                    :key="index"
                    v-if="subOption.type === 'link'"
                    class="vnb__sub-menu-options__option__link"
                    @click.native="subMenuItemSelected(subOption.text)"
                    :aria-label="subOption.text"
                    tabindex="0"
                    @keydown.tab.native="subMenuItemTabbed(subOption.text)"
                >
                    <span
                        v-if="subOption.iconLeft"
                        class="vnb__sub-menu-options__option__link__icon vnb__sub-menu-options__option__link__icon--left"
                        v-html="subOption.iconLeft"
                    ></span>

                    <span class="vnb__sub-menu-options__option__link__text-wrapper">
                        <span class="vnb__sub-menu-options__option__link__text-wrapper__text">
                            {{subOption.text}}
                        </span>

                        <span v-if="subOption.subText" class="vnb__sub-menu-options__option__link__text-wrapper__sub-text">
                            {{subOption.subText}}
                        </span>
                    </span>

                    <span
                        v-if="subOption.iconRight"
                        class="vnb__sub-menu-options__option__link__icon vnb__sub-menu-options__option__link__icon--right"
                        v-html="subOption.iconRight"
                    ></span>

                </dynamic-link>

                <hr
                    v-else
                    class="vnb__sub-menu-options__option__hr"
                    tabindex="-1"
                >
            </div>
        </div>
    </span>
</template>

<script>
import DynamicLink from '../components/DynamicLink.vue'
import 'tippy.js/themes/light.css'
import tippy from 'tippy.js'

export default {
    name: 'desktop-menu-item-link',
    props: {
        option: {
            type: Object,
            required: true
        },
        options: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            currentExpandedStatus: 'closed'
        }
    },
    computed: {
        isExpanded () {
            if (this.currentExpandedStatus === 'open') {
                return true
            }

            return false
        }
    },
    methods: {
        // Each time a sub-menu-option is clicked, close all the tooltips
        subMenuItemSelected (text) {
            this.closeAllTooltips()
        },

        // When we keydown tab on the last sub-menu-option, we want to close
        // all the tooltips
        subMenuItemTabbed (text) {
            // Let's check to see if this item is the last
            // item in the subMenuOptions array
            if (this.option.subMenuOptions[this.option.subMenuOptions.length - 1].text === text) {
                this.closeAllTooltips()
            }
        },

        menuShown () {
            this.currentExpandedStatus = 'open'
        },
        menuHidden () {
            this.currentExpandedStatus = 'closed'
        },

        closeAllTooltips () {
            let elements = document.querySelectorAll('.tippy-popper')
            if (elements.length > 0) {
                elements[0]._tippy.hide()
            }
        },

        initTippy() {
            let el = document.getElementById('dropdown-menu-parent-' + this.option.text.replace(/\s+/g, ''))

            const template = document.getElementById('sub-menu-options-' + this.option.text.replace(/\s+/g, ''))
            template.style.display = 'block'

            tippy(el, {
                theme: 'light',
                content: template,
                interactive: true,
                animation: "perspective",
                animateFill: false,
                role: 'Menu',
                // trigger: 'click', // for testing
                trigger: 'click mouseenter focus',
                appendTo: 'parent',
                arrow: true,
                inertia: false,
                onShow: () => {
                    // https://github.com/atomiks/tippy.js-react/issues/7
                    [...document.querySelectorAll('.tippy-popper')].forEach(popper => {
                        // Have to triple-check
                        if (popper && popper._tippy) {
                            popper._tippy.hide(0)
                        }
                    })

                    // fire the menuShown function
                    this.menuShown()
                },
                onHide: () => {
                    // fire the menuHidden function
                    this.menuHidden()
                }
            })
        }
    },
    mounted () {
        // Let's setup our tippy here in mounted
        if (this.option.subMenuOptions && this.option.subMenuOptions.length) {
            this.initTippy()
        }
    },
    components: {
        DynamicLink
    }
}
</script>

<style lang="scss">
    @import '../assets/css/main.scss';

    .vnb {
        &__menu-options {
            &__option {
                &__link {
                    cursor: pointer;
                    font-weight: 500;
                    color: lighten($black, 20);
                    transition: color 0.2s ease-in;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;

                    &:hover {
                        color: $black;
                        text-decoration: none;
                    }

                    &__icon {
                        svg {
                            max-height: 20px;
                        }

                        &--left {
                            margin-right: 5px;
                        }

                        &--right {
                            margin-left: 5px;
                        }
                    }
                }

                &__arrow {
                    margin-left: 8px;
                    max-height: 5px;
                    transition: transform 0.2s ease-in-out;

                    &--hover {
                        transform: rotate(180deg);
                    }
                }
            }
        }

        &__sub-menu-options {
            background: $white;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: $border-radius;
            padding: 10px 0;

            &__option {
                min-width: 250px;
                max-width: 300px;

                &__link {
                    padding: 12px 12px;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    color: lighten($black, 20);
                    transition: color 0.2s ease-in, background 0.2s ease-in, border 0.2s ease-in;
                    border-left: 2px solid $white;

                    &:hover {
                        color: $black;
                        text-decoration: none;
                        background: lighten($grey, 2%);
                        border-left: 2px solid $blue;
                    }

                    &__icon {
                        svg {
                            max-height: 40px;
                        }

                        &--left {
                            margin-right: 15px;
                        }

                        &--right {
                            margin-left: 15px;
                        }
                    }

                    &__text-wrapper {
                        width: 100%;

                        &__text {
                            display: block;
                            text-align: left;
                        }

                        &__sub-text {
                            margin-top: 5px;
                            display: block;
                            font-size: 0.75rem;
                            text-align: left;
                        }
                    }
                }

                &__hr {
                    margin-top: 10px;
                    margin-bottom: 10px;
                    border-color: rgba(0,0,0, 0.1);
                }
            }
        }
    }
</style>