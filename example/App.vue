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
                    brandImagePath: './',
                    brandImage: require('../src/assets/images/lockup-color.png'),
                    brandImageAltText: 'vnb',
                    collapseButtonStyle: 'dark',
                    showBrandImageInMobilePopup: true,
                    ariaLabelMainNav: 'Main Navigation',
                    menuOptionsLeft: [
                        {
                            type: 'link',
                            text: 'Why Dunder Mifflin',
                            icon: '<i class="fa fa-question-circle"></i>',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: 'About',
                                    subText: 'Stupid corporate wet blankets. Like booze ever killed anyone.',
                                    path: './about',
                                    icon: '<svg id="i-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 14 L16 23 M16 8 L16 10" /> <circle cx="16" cy="16" r="14" /> </svg>',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Locations',
                                    subText: 'You\'re a presentation tool!',
                                    path: './locations',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Blog',
                                    subText: 'I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.',
                                    path: './blog',
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
                                    path: './customer-service',
                                },
                                {
                                    type: 'link',
                                    text: 'Accounting',
                                    path: './accounting',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Reception',
                                    path: './reception',
                                    icon: '<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>',
                                },
                            ]
                        },
                        {
                            type: 'link',
                            text: 'Pricing',
                            path: './pricing',
                        },
                    ],
                    menuOptionsRight: [
                        {
                            type: 'button',
                            text: 'Signup',
                            path: './signup',
                            class: 'button-red',
                            iconLeft: '<svg id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="currentcolor" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" /> </svg>'
                        },
                        {
                            type: 'button',
                            text: 'Login',
                            path: './login',
                            iconRight: '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700');

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
        font-family: 'Montserrat', sans-serif;
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
        font-family: 'Montserrat', sans-serif;

        .button-red {
            background: #FF3B30;

            &:hover {
                background: darken(#FF3B30, 10%);
            }
        }
    }
</style>
