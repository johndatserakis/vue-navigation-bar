<template>
    <div id="app">

        <section class="main-navbar-section">
            <div class="container">
                <vue-navigation-bar :options="navbarData" />
            </div>
        </section>

        <div class="container py-4">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <h3><strong>vue-navigation-bar</strong></h3>
                </div>
            </div>
        </div>

        <div class="container pt-3 pb-4">
            <div class="row justify-content-center mb-4">
                <div class="col-lg-6">
                    <span class="badge badge-primary mb-1">install</span>
                    <div class="code-text">npm i vue-navigation-bar</div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="list-group">
                      <a href="https://github.com/johndatserakis/vue-navigation-bar" class="list-group-item list-group-item-action" target="_blank">View on GitHub</a>
                      <a href="https://www.npmjs.com/package/vue-navigation-bar" class="list-group-item list-group-item-action" target="_blank">View on NPM</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container py-2">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <hr>
                </div>
            </div>
        </div>

        <div class="container py-3">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <p><code>vue-navigation-bar</code> is a simple, pretty navbar for your Vue projects. And wouldn't you know it - this page is using it right now!</p>

                    <p>Check out <a href="https://github.com/johndatserakis/vue-navigation-bar">the GitHub</a> page to see how you can use <code>vue-navigation-bar</code> in your Vue projects.</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                navbarData: {
                    elementId: 'main-navbar',
                    isUsingVueRouter: true,
                    mobileBreakpoint: 992,
                    brandImagePath: '/',
                    brandImage: require('../src/assets/images/lockup-color.png'),
                    brandImageAltText: 'vnb',
                    collapseButtonStyle: 'dark',
                    showBrandImageInMobilePopup: false,
                    ariaLabelMainNav: 'Main Navigation',
                    menuOptionsLeft: [
                        {
                            type: 'link',
                            text: 'Why Dunder Mifflin',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: 'About',
                                    subText: 'Stupid corporate wet blankets. Like booze ever killed anyone.',
                                    path: '/about',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Locations',
                                    subText: 'You\'re a presentation tool!',
                                    path: '/locations',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Blog',
                                    subText: 'I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.',
                                    path: '/blog',
                                },
                            ]
                        },
                        {
                            type: 'link',
                            text: 'Contact',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: 'Customer Service',
                                    path: '/customer-service',
                                },
                                {
                                    type: 'link',
                                    text: 'Accounting',
                                    path: '/accounting',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Reception',
                                    path: '/reception',
                                },
                            ]
                        },
                        {
                            type: 'link',
                            text: 'Pricing',
                            path: '/pricing',
                        },
                    ],
                    menuOptionsRight: [
                        {
                            type: 'button',
                            text: 'Signup',
                            path: '/signup',
                            class: 'button-red'
                        },
                        {
                            type: 'button',
                            text: 'Login',
                            path: '/login',
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans');

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
        font-family: 'Noto Sans', sans-serif;
    }

    #app {
        height: 100%;
        height: 100vh;
        width: 100%;
        line-height: 1.5;
    }

    .code-text {
        background: #eee;
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
        animation:octocat-wave 560ms ease-in-out
    }
    @keyframes octocat-wave {
        0%,100% {transform:rotate(0)}
        20%,60% {transform:rotate(-25deg)}
        40%,80% {transform:rotate(10deg)}
    }
    @media (max-width:500px) {
        .github-corner:hover .octo-arm {animation:none}
        .github-corner .octo-arm {animation:octocat-wave 560ms ease-in-out}
    }

    //
    // vue-navigation-bar customization below
    //

    .main-navbar-section {
        background: #eee;
    }

    .vnb {
        .button-red {
            background: #FF3B30;

            &:hover {
                background: darken(#FF3B30, 10%);
            }
        }
    }
</style>
