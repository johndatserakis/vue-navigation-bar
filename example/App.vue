<template>
  <div id="app">
    <section class="main-navbar-section">
      <div class="container">
        <vue-navigation-bar :options="navbarOptions" @vnb-item-clicked="vnbItemClicked">
          <!-- Custom Slot - Uncomment to use -->
          <!-- <template v-slot:custom-section>
            <div class="custom-section-content">
              <div class="input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  placeholder
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon1"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </template>-->
        </vue-navigation-bar>
      </div>
    </section>

    <section class="main-content-section">
      <div class="container py-4">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <h3>
              <strong>vue-navigation-bar</strong>
            </h3>
          </div>
        </div>
      </div>

      <div class="container pt-3 pb-4">
        <div class="row justify-content-center mb-4">
          <div class="col-lg-6">
            <span class="badge badge-primary mb-1">To install:</span>
            <div class="code-text">yarn add vue-navigation-bar</div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="list-group">
              <a
                href="https://github.com/johndatserakis/vue-navigation-bar"
                class="list-group-item list-group-item-action"
                target="_blank"
              >View on GitHub</a>
              <a
                href="https://www.npmjs.com/package/vue-navigation-bar"
                class="list-group-item list-group-item-action"
                target="_blank"
              >View on NPM</a>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-2">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <hr />
          </div>
        </div>
      </div>

      <div class="container py-3">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <p>
              <code>vue-navigation-bar</code> is a simple, pretty navbar for your Vue projects. And
              wouldn't you know it - this page is using it right now!
            </p>

            <p>
              Check out
              <a href="https://github.com/johndatserakis/vue-navigation-bar">the GitHub</a>
              page to see how you can use
              <code>vue-navigation-bar</code> in your Vue projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import brandImage from '../src/assets/images/lockup-color.png'

export default {
  name: 'app',
  data () {
    return {
      navbarOptions: {
        elementId: 'main-navbar',
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: './',
        brandImage,
        brandImageAltText: 'brand-image',
        collapseButtonOpenColor: '#661c23',
        collapseButtonCloseColor: '#661c23',
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        tooltipAnimationType: 'shift-away',
        tooltipPlacement: 'bottom',
        menuOptionsLeft: [
          {
            type: 'link',
            text: 'Why Dunder Mifflin',
            arrowColor: '#659CC8',
            subMenuOptions: [
              {
                isLinkAction: true,
                type: 'link',
                text: 'About',
                subText: 'Stupid corporate wet blankets. Like booze ever killed anyone.',
                path: {name: 'about'},
              },
              {
                type: 'hr',
              },
              {
                type: 'link',
                text: 'Locations',
                subText: "You're a presentation tool!",
                path: {name: 'locations'},
              },
              {
                type: 'hr',
              },
              {
                type: 'link',
                text: 'Blog',
                subText:
                  'I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.',
                path: {name: 'blog'},
              },
            ],
          },
          {
            type: 'link',
            text: 'Contact',
            subMenuOptions: [
              {
                type: 'link',
                text: 'Customer Service',
                path: {name: 'customer-service'},
                iconLeft: '<i class="fa fa-user fa-fw"></i>',
              },
              {
                type: 'link',
                text: 'Accounting',
                path: {name: 'accounting'},
                iconLeft: '<i class="fa fa-star fa-fw"></i>',
              },
              {
                type: 'hr',
              },
              {
                type: 'link',
                text: 'Reception',
                path: {name: 'reception'},
                iconLeft:
                  '<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>',
              },
            ],
          },
        ],
        menuOptionsRight: [
          {
            type: 'button',
            text: 'Signup',
            path: {name: 'signup'},
            class: 'button-red',
          },
          {
            type: 'button',
            text: 'Login',
            path: {name: 'login'},
            iconRight:
              '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>',
          },
        ],
      },
    };
  },
  methods: {
    vnbItemClicked (text) {
      if (text === 'About') {
        alert("'About' was selected.");
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700");

html {
  width: 100%;
  font-size: 18px;
  color: #333;
}

body {
  margin: 0;
  height: 100%;
  height: 100vh;
  width: 100%;
  font-family: "Montserrat", sans-serif;
}

#app {
  height: 100%;
  height: 100vh;
  width: 100%;
  line-height: 1.5;
}

.code-text {
  background: #fff;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
}

@media (min-width: 992px) {
  .code-text {
    margin-bottom: 0;
  }
}

.btn {
  text-transform: uppercase;
  font-weight: bold;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}

.main-content-section {
  padding: 45px 0;
  background: #eee;
  min-height: 100%;
}

//
// vue-navigation-bar customization below
//

.main-navbar-section {
  background: #fff;
}

.vnb {
  font-family: "Montserrat", sans-serif;

  @media (min-width: 992px) {
    .button-red {
      background: #ff3b30;

      &:hover {
        background: darken(#ff3b30, 10%);
      }
    }
  }

  &__menu-options {
    &__option {
      &__button {
        &__icon {
          svg {
            margin-top: -3px;
          }
        }
      }
    }
  }

  &__popup {
    &__bottom {
      &__menu-options {
        &__option {
          &__link {
            &__icon {
              svg {
                margin-top: -4px;
              }
            }
          }
        }
      }
    }
  }

  .custom-section-content {
    width: 100%;

    @media (min-width: 568px) {
      width: 50%;
    }

    @media (min-width: 992px) {
      width: 15%;
    }

    @media (min-width: 1200px) {
      width: 20%;
    }
  }
}
</style>
