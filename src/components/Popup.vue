<template>
  <div v-if="menuIsVisible" class="vnb__popup">
    <div class="vnb__popup__top">
      <img
        v-if="options.showBrandImageInMobilePopup && options.brandImage"
        :src="options.brandImage"
        :alt="options.brandImageAltText"
        class="vnb-image vnb__popup__top__image"
      />

      <button
        class="vnb__popup__top__close-button"
        @click="closeButtonClicked"
        aria-label="Close Button"
        title="Close"
        :aria-expanded="menuIsVisible ? 'true' : 'false'"
      >
        <img
          v-if="options.collapseButtonImageClose"
          :src="options.collapseButtonImageClose"
          :alt="'Close button'"
          class="vnb__popup__top__close-button__image"
        />
        <svg
          v-else
          height="100pt"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
          width="100pt"
          xmlns="http://www.w3.org/2000/svg"
          class="vnb__popup__top__close-button__image"
          :style="{fill: options.collapseButtonCloseColor}"
        >
          <title>Close button</title>
          <path
            d="m42 967c-12-13-22-27-22-33 0-5 93-102 207-216l208-208-208-208c-114-114-207-214-207-223 0-8 11-26 25-39l26-24 214 214 215 215 215-215 214-214 26 24c14 13 25 28 25 34s-92 103-205 216-205 209-205 215 92 102 205 215 205 210 205 216c0 12-42 54-55 54-5 0-104-94-220-210l-210-210-210 210c-115 116-212 210-216 210-3 0-15-10-27-23z"
            transform="matrix(.1 0 0 -.1 0 100)"
          />
        </svg>
      </button>
    </div>

    <div class="vnb__popup__bottom">
      <div v-if="!!this.$slots['custom-section']" class="vnb__popup__bottom__custom-section">
        <slot name="custom-section"></slot>
      </div>

      <ul class="vnb__popup__bottom__menu-options">
        <li
          v-for="(option, index) in combinedMenuItems"
          :key="index"
          class="vnb__popup__bottom__menu-options__option"
        >
          <dynamic-link
            v-if="!option.subMenuOptions"
            :path="option.path"
            :isUsingVueRouter="options.isUsingVueRouter"
            :class="['vnb__popup__bottom__menu-options__option__link', option.class]"
            @click="itemSelected(option)"
            :aria-label="option.text"
            :isLinkAction="option.isLinkAction ? true : false"
          >
            <template #content>
              <span
                v-if="option.iconLeft"
                class="vnb__popup__bottom__menu-options__option__link__icon vnb__popup__bottom__menu-options__option__link__icon--left"
                v-html="option.iconLeft"
              ></span>
              {{option.text}}
              <span
                v-if="option.iconRight"
                class="vnb__popup__bottom__menu-options__option__link__icon vnb__popup__bottom__menu-options__option__link__icon--right"
                v-html="option.iconRight"
              ></span>
            </template>
          </dynamic-link>

          <span
            v-else
            class="vnb__popup__bottom__menu-options__option__link vnb__popup__bottom__menu-options__option__link--no-highlight"
          >{{option.text}}</span>

          <div class="vnb__popup__bottom__sub-menu-options">
            <div
              v-for="(subOption, index) in option.subMenuOptions"
              :key="index"
              class="vnb__popup__bottom__sub-menu-options__option"
            >
              <dynamic-link
                :path="subOption.path"
                :isUsingVueRouter="options.isUsingVueRouter"
                v-if="subOption.type === 'link'"
                class="vnb__popup__bottom__sub-menu-options__option__link"
                @click="itemSelected(subOption)"
                :aria-label="subOption.text"
                :isLinkAction="option.isLinkAction ? true : false"
              >
                <template #content>
                  {{subOption.text}}
                  <span
                    class="vnb__popup__bottom__sub-menu-options__option__link__sub-text"
                  >
                    {{
                      subOption.subText
                    }}
                  </span>
                </template>
              </dynamic-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DynamicLink from '../components/DynamicLink.vue';

export default {
  name: 'popup',
  props: {
    options: {
      type: Object,
      required: true,
    },
    menuIsVisible: {
      type: Boolean,
      required: true,
    },
  },
  data () {
    return {};
  },
  computed: {
    combinedMenuItems () {
      let combinedArray = this.options.menuOptionsLeft.concat(this.options.menuOptionsRight);
      return combinedArray;
    },
  },
  methods: {
    closeButtonClicked () {
      this.$emit('close-button-clicked');
    },
    itemSelected (option) {
      this.$emit('vnb-item-clicked', option.text);
      this.closeButtonClicked();
    },
  },
  components: {
    DynamicLink,
  },
  emits: [
    'close-button-clicked',
    'vnb-item-clicked',
  ]
};
</script>

<style lang="scss">
@import "../assets/css/main.scss";

.vnb {
  &__popup {
    background: $white;
    position: absolute;
    left: 10px;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    perspective: 2000px;
    box-shadow: $box-shadow;
    margin-bottom: 20px;
    z-index: 100000;

    &__top {
      padding: 15px 24px 0;
      border-top: 1px solid darken($white, 12%);
      border-left: 1px solid darken($white, 12%);
      border-right: 1px solid darken($white, 12%);
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;

      &__image {
        max-height: 27px;
        margin-bottom: 5px;
      }

      &__close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        border: 0;
        background: transparent;

        &:hover {
          opacity: 0.75;
        }

        &__image {
          max-height: 15px;
        }

        svg {
          width: auto;
        }
      }
    }

    &__bottom {
      background: $white;
      padding: 10px 0 10px;
      border-left: 1px solid darken($white, 12%);
      border-right: 1px solid darken($white, 12%);
      border-bottom: 1px solid darken($white, 12%);
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;

      &__custom-section {
        padding: 12px 24px;
      }

      &__menu-options {
        list-style-type: none;
        padding-left: 0;
        display: flex;
        flex-direction: column;

        &__option {
          &:not(:last-child) {
            margin-bottom: 10px;
          }

          &__link {
            padding: 12px 24px;
            color: lighten($black, 15%);
            font-weight: 500;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            transition: color 0.2s ease-in, background 0.2s ease-in,
              border 0.2s ease-in;
            border-left: 2px solid $white;
            width: 100%;

            &:hover {
              color: $black;
              text-decoration: none;
              background: lighten($grey, 2%);
              border-left: 2px solid $blue;
            }

            &--no-highlight {
              padding: 12px 24px 6px;
              font-weight: 400;
              font-size: 0.8rem;
              color: lighten($black, 26%);

              &:hover {
                color: lighten($black, 26%);
                background: $white;
                border-left: 2px solid $white;
              }
            }

            &__icon {
              svg {
                max-height: 16px;
                max-width: 16px;
              }

              &--left {
                margin-right: 5px;
              }

              &--right {
                margin-left: 5px;
              }
            }
          }
        }
      }

      &__sub-menu-options {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        font-size: 0.9rem;

        &__option {
          width: 100%;

          &__link {
            padding: 6px 24px;
            width: 100%;
            display: block;
            color: lighten($black, 15%);
            font-weight: 500;
            transition: color 0.2s ease-in, background 0.2s ease-in,
              border 0.2s ease-in;
            border-left: 2px solid $white;

            &:hover {
              color: $black;
              text-decoration: none;
              background: $grey;
              border-left: 2px solid $black;
            }

            &__sub-text {
              margin-top: 5px;
              display: block;
              font-size: 0.75rem;
              color: lighten($black, 35%);
            }
          }
        }
      }
    }
  }
}

.vnb-image {
  max-width: 100%;
  height: auto;
}
</style>
