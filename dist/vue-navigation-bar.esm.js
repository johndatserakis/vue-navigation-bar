import tippy from 'tippy.js';
import VueScreenSize from 'vue-screen-size';

// https://stackoverflow.com/a/2117523/8014660
function uuidV4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    })
}

var script = {
    name: 'dynamic-link',
    render: function (h) {
        if (this.isUsingVueRouter){
            return h('router-link', { props: { to: {path: this.path} } }, this.$slots.default)
        }

        return h('a', this.$slots.default)
    },
    props: {
        isUsingVueRouter: {
            type: Boolean,
            required: true
        },
        path: {
            type: String,
            required: true
        }
    }
}

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;

/* template */

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  

  
  var DynamicLink = normalizeComponent_1(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  )

//

var script$1 = {
    name: 'brand-image',
    props: {
        options: {
            type: Object,
            required: true
        }
    },
    data: function data () {
        return {
        }
    },
    computed: {
    },
    methods: {
    },
    components: {
        DynamicLink: DynamicLink
    }
}

/* script */
var __vue_script__$1 = script$1;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "vnb__brand-image-wrapper" },
    [
      _c(
        "dynamic-link",
        {
          staticClass: "vnb__brand-image-wrapper__link",
          attrs: {
            path: _vm.options.brandImagePath,
            isUsingVueRouter: _vm.options.isUsingVueRouter,
            "aria-label": "Homepage"
          }
        },
        [
          _vm.options.brandImage
            ? _c("img", {
                staticClass: "vnb-image vnb__brand-image-wrapper__link__image",
                attrs: {
                  src: _vm.options.brandImage,
                  alt: _vm.options.brandImageAltText
                }
              })
            : _c("span", [_vm._v(_vm._s(_vm.options.brandImageAltText))])
        ]
      )
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var BrandImage = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  )

//

var script$2 = {
    name: 'desktop-menu-item-link',
    props: {
        option: {
            type: Object,
            required: true
        }
    },
    data: function data () {
        return {
            currentExpandedStatus: 'closed'
        }
    },
    computed: {
        isExpanded: function isExpanded () {
            if (this.currentExpandedStatus === 'open') {
                return true
            }

            return false
        }
    },
    methods: {
        // Each time a sub-menu-option is clicked, close all the tooltips
        subMenuItemSelected: function subMenuItemSelected (text) {
            this.closeAllTooltips();
        },

        // When we keydown tab on the last sub-menu-option, we want to close
        // all the tooltips
        subMenuItemTabbed: function subMenuItemTabbed (text) {
            // Let's check to see if this item is the last
            // item in the subMenuOptions array
            if (this.option.subMenuOptions[this.option.subMenuOptions.length - 1].text === text) {
                this.closeAllTooltips();
            }
        },

        menuShown: function menuShown () {
            this.currentExpandedStatus = 'open';
        },
        menuHidden: function menuHidden () {
            this.currentExpandedStatus = 'closed';
        },

        closeAllTooltips: function closeAllTooltips () {
            var elements = document.querySelectorAll('.tippy-popper');
            if (elements.length > 0) {
                elements[0]._tippy.hide();
            }
        },

        initTippy: function initTippy() {
            var this$1 = this;

            var el = document.getElementById('dropdown-menu-parent-' + this.option.text.replace(/\s+/g, ''));

            var template = document.getElementById('sub-menu-options-' + this.option.text.replace(/\s+/g, ''));
            template.style.display = 'block';

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
                onShow: function () {
                    // https://github.com/atomiks/tippy.js-react/issues/7
                    [].concat( document.querySelectorAll('.tippy-popper') ).forEach(function (popper) {
                        popper._tippy.hide(0);
                    });

                    // fire the menuShown function
                    this$1.menuShown();
                },
                onHide: function () {
                    // fire the menuHidden function
                    this$1.menuHidden();
                }
            });
        }
    },
    mounted: function mounted () {
        // Let's setup our tippy here in mounted
        if (this.option.subMenuOptions && this.option.subMenuOptions.length) {
            this.initTippy();
        }
    }
}

/* script */
var __vue_script__$2 = script$2;
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return !_vm.option.subMenuOptions || !_vm.option.subMenuOptions.length
    ? _c(
        "a",
        {
          staticClass: "vnb__menu-options__option__link",
          attrs: {
            href: _vm.option.path,
            "aria-label": _vm.option.text,
            tabindex: "0"
          }
        },
        [_vm._v("\n    " + _vm._s(_vm.option.text) + "\n")]
      )
    : _c(
        "span",
        {
          staticClass: "vnb__menu-options__option__link",
          attrs: {
            href: _vm.option.path,
            id: "dropdown-menu-parent-" + _vm.option.text.replace(/\s+/g, ""),
            "aria-haspopup": "true",
            "aria-expanded": _vm.isExpanded ? "true" : "false",
            "aria-label": _vm.option.text,
            tabindex: "0"
          }
        },
        [
          _vm._v("\n    " + _vm._s(_vm.option.text) + "\n\n    "),
          _vm.option.type === "link"
            ? _c(
                "div",
                {
                  staticClass: "vnb__sub-menu-options",
                  attrs: {
                    id:
                      "sub-menu-options-" + _vm.option.text.replace(/\s+/g, "")
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "vnb__sub-menu-options__option",
                      attrs: { tabindex: "-1" }
                    },
                    _vm._l(_vm.option.subMenuOptions, function(subOption) {
                      return subOption.type === "link"
                        ? _c(
                            "a",
                            {
                              staticClass:
                                "vnb__sub-menu-options__option__link",
                              attrs: {
                                href: subOption.path,
                                "aria-label": subOption.text,
                                tabindex: "0"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.subMenuItemSelected(subOption.text)
                                },
                                keydown: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "tab",
                                      9,
                                      $event.key,
                                      "Tab"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.subMenuItemTabbed(subOption.text)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(subOption.text) +
                                  "\n            "
                              )
                            ]
                          )
                        : _c("hr", {
                            staticClass: "vnb__sub-menu-options__option__hr",
                            attrs: { tabindex: "-1" }
                          })
                    }),
                    0
                  )
                ]
              )
            : _vm._e()
        ]
      )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var DesktopMenuItemLink = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  )

//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$3 = {
    name: 'desktop-menu-item-button',
    props: {
        option: {
            type: Object,
            required: true
        }
    },
    data: function data () {
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}

/* script */
var __vue_script__$3 = script$3;
/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "a",
    {
      class: [
        "vnb__menu-options__option__button",
        "vnb-button",
        _vm.option.class
      ],
      attrs: { href: _vm.option.path, "aria-label": _vm.option.text }
    },
    [_vm._v("\n    " + _vm._s(_vm.option.text) + "\n")]
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  var __vue_inject_styles__$3 = undefined;
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = undefined;
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var DesktopMenuItemButton = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  )

//
//
//
//
//
//

var script$4 = {
    name: 'desktop-menu-item-spacer',
    props: {
        option: {
            type: Object,
            required: true
        }
    },
    data: function data () {
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}

/* script */
var __vue_script__$4 = script$4;
/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "vnb__menu-options__option__spacer" })
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  var __vue_inject_styles__$4 = undefined;
  /* scoped */
  var __vue_scope_id__$4 = undefined;
  /* module identifier */
  var __vue_module_identifier__$4 = undefined;
  /* functional template */
  var __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var DesktopMenuItemSpacer = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  )

//

var script$5 = {
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
    data: function data () {
        return {
        }
    },
    computed: {
    },
    methods: {
    },
    components: {
        DesktopMenuItemLink: DesktopMenuItemLink,
        DesktopMenuItemButton: DesktopMenuItemButton,
        DesktopMenuItemSpacer: DesktopMenuItemSpacer
    }
}

/* script */
var __vue_script__$5 = script$5;
/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.$vssWidth > _vm.options.mobileBreakpoint
    ? _c(
        "div",
        {
          class: [
            "vnb__menu-options",
            { "vnb__menu-options--left": _vm.type === "left" },
            { "vnb__menu-options--right": _vm.type === "right" }
          ]
        },
        _vm._l(
          _vm.type === "left"
            ? _vm.options.menuOptionsLeft
            : _vm.options.menuOptionsRight,
          function(option) {
            return _c(
              "div",
              { staticClass: "vnb__menu-options__option" },
              [
                option.type === "link"
                  ? _c("desktop-menu-item-link", { attrs: { option: option } })
                  : option.type === "button"
                  ? _c("desktop-menu-item-button", {
                      attrs: { option: option }
                    })
                  : _c("desktop-menu-item-spacer", {
                      attrs: { option: option }
                    })
              ],
              1
            )
          }
        ),
        0
      )
    : _vm._e()
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  var __vue_inject_styles__$5 = undefined;
  /* scoped */
  var __vue_scope_id__$5 = undefined;
  /* module identifier */
  var __vue_module_identifier__$5 = undefined;
  /* functional template */
  var __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var MenuOptions = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  )

//

var script$6 = {
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
    data: function data () {
        return {
        }
    },
    computed: {
    },
    methods: {
        collapseButtonStyle: function collapseButtonStyle () {
            return (this.options.collapseButtonStyle === 'dark') ? require('../assets/images/collapse-menu-dark.png') : require('../assets/images/collapse-menu-light.png')
        },
        collapseButtonClicked: function collapseButtonClicked () {
            this.$emit('collapse-button-clicked');
        }
    }
}

/* script */
var __vue_script__$6 = script$6;
/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.$vssWidth < _vm.options.mobileBreakpoint
    ? _c(
        "button",
        {
          staticClass: "vnb__collapse-button",
          attrs: {
            type: "button",
            "aria-expanded": _vm.menuIsVisible ? "true" : "false"
          },
          on: { click: _vm.collapseButtonClicked }
        },
        [
          _c("img", {
            staticClass: "vnb__collapse-button__image",
            attrs: { src: _vm.collapseButtonStyle(), alt: "Menu" }
          })
        ]
      )
    : _vm._e()
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  var __vue_inject_styles__$6 = undefined;
  /* scoped */
  var __vue_scope_id__$6 = undefined;
  /* module identifier */
  var __vue_module_identifier__$6 = undefined;
  /* functional template */
  var __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var CollapseButton = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    undefined
  )

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$7 = {
    name: 'popup',
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
    data: function data () {
        return {
        }
    },
    computed: {
        combinedMenuItems: function combinedMenuItems () {
            var combinedArray = this.options.menuOptionsLeft.concat(this.options.menuOptionsRight);
            return combinedArray
        }
    },
    methods: {
        closeButtonClicked: function closeButtonClicked () {
            this.$emit('close-button-clicked');
        },
        itemSelected: function itemSelected () {
            this.closeButtonClicked();
        }
    }
}

var img = new Image(); img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABGdBTUEAALGPC/xhBQAABYpJREFUeAHt3M1rG0cUAHBJSQ7Of2DZ0NYBB1LwobaQ8cmF3ipDLzoUCoEc3HPpucX5Fwo9tFCo+3EylLb4XpcEQrF9aIkvNsHJwRL0UHpwfLLjvqdotqvVzu7Oaj7eW70BsbvzrfdDGklotlaTRCoCN3SzabVaC7Ozs/P9fv9vXR3JN49Au91empubu312dvZvWutGWiZgvHd9ff0Uyv5aXl7+emtrK7VeWlvJS49At9u9sbKy8s3l5eWfV1dXTyGu76bVrCczhxi/AsiMKqvX6z90Op37APNK5cmxeAQQ4/T09HuI6YexVhdw3jk8PPwtllcbectKwxhWXjo5Obmzubn5y97e3nW8AznPjoAGAxvdgke32Ww+gWXhOZwPUgQyfAntxl8ZqtLwKCiJgORdZmCopgOU+fn5x71e7wVmxteGhxkYgw6g/KPd3d1tWVNUPPXHAhiq8W2I60N1EYHAOvGTysw6CkpWdF6XGWAMGkBMo9hHILBof4GLd/5wtZqg6KNkigE9bW9sbHypeozWEFyscdHGxRsKl1SFjKOsKYnglMR4EP/0GoFg34KSiLDBpQ0MHG4EBDMEBaNglmxh4KhjIJgpKBiFYskmBo6YCoIFgoJRyE62MXA0LQgWCgpGIT25wMCRMkGwgqBgFEaTKwwcJRcEKwkKRuF1comBIxQCwYqCAr8Epv9qi+HRJfzSN/I9Q1dR5RcGwQbTjOIDA2NsBDKtKL4wSoFMG4pPjNIg04LiG2MikKqjhMCYGKSqKKEwrIBUDSUkhjWQqqCExrAKwh2FAoZ1EK4oVDCcgHBDoYThDIQLCjUMpyDUUShiOAehikIVwwsINRTKGN5AqKBQx/AKEhqFA4Z3kFAoXDCCgPhG4YQRDMQXCjeMoCCuUThiBAdxhcIVgwSIbRTOGGRAbKFwx8A4jG2LxsyQCfcv4j5G3KVVZB5qy/bR0VE9ZetxVhfGf2LL6sxWGTkQfGKmKNDkR4BpAGJ8H3hWjEhi4IRJguDESqBgsyKJLAZO3vifi0WesY06Jf62WmRY0hj4BMiC4OQso5DHIA9iEYUFBgsQCyhsMPC5kl3UcXLJtL6+fvP8/PwYPk29lSzTXD9bWFi4u7Ozc6UpJ5cd3cmB3MwSE8IvfYDxnQEG9nAHvpt8i5/YEt2RvSS9qKuolfgGrprikdUdJ8iDTIihYNigkAaxhMEKhSyIZQw2KCRBSmBsw29ZeNNO9ncxIgdSBgO3Hi8uLv5chVtLkQIpiwEfa1+V+JmF5EJPBmQSDLVAVAGFBIgNjKqgBAexiVEFlKAgLjC4owQDcYnBGSUIiA8MrijeQXxicETxChICgxuKN5CQGJxQvIBQwOCC4hyEEgYHFKcgFDGoozgDoYxBGcUJCAcMqijWQThhUESxCsIRgxqKNRDOGJRQrIBUAYMKysQgVcKggDIRSBUxQqOUBqkyRkiUUiDTgBEKxRhkmjBCoBiBTCOGb5TCINOM4ROlEIhgKJJSG1GN/iGZCyIY/2OoM5f/kMwEEQxFMH50haIFEYxxhGSOC5RUEMFIhl5/bRtlDEQw9MHXldhEGQERDF3I8/NtoUQggpEf9LwaNlAikJmZmU9gwE/zBh2Ws7pdRcHnZKVaGZTj4+N/+v3+HziB+B0OPig4I8HICRRuset0Ovfxbnc5VVVxFPsIpNFofAalF6qG5igYmsAksw1QXkLbz1X76C2r1+u9aDabT6CgC49bqkLsKBixYBQ5LfD29RJeCO8fHBw8Uv1FIJgB72PPNSiCoSJmeMxAGWDs7+//Hu9yBAQLEig34X3wK9gH/jG+BOMN5bx4BGIos9DqHXhc4CsjiZHZ4+rq6pvtdvteZiUpNI5Aq9V6e21t7Q3jhtJAIiARgAj8B7kNT6PB1/G8AAAAAElFTkSuQmCC';

/* script */
var __vue_script__$7 = script$7;
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.menuIsVisible
    ? _c("div", { staticClass: "vnb__popup" }, [
        _c("div", { staticClass: "vnb__popup__top" }, [
          _c(
            "button",
            {
              staticClass: "vnb__popup__top__close-button",
              attrs: {
                "aria-label": "Close Button",
                title: "Close",
                "aria-expanded": _vm.menuIsVisible ? "true" : "false"
              },
              on: { click: _vm.closeButtonClicked }
            },
            [
              _c("img", {
                staticClass: "vnb__popup__top__close-button__image",
                attrs: {
                  src: img,
                  alt: "Close button"
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vnb__popup__bottom" }, [
          _c(
            "ul",
            { staticClass: "vnb__popup__bottom__menu-options" },
            _vm._l(_vm.combinedMenuItems, function(option) {
              return _c(
                "li",
                { staticClass: "vnb__popup__bottom__menu-options__option" },
                [
                  !option.subMenuOptions
                    ? _c(
                        "a",
                        {
                          staticClass:
                            "vnb__popup__bottom__menu-options__option__link",
                          attrs: {
                            href: option.path,
                            "aria-label": option.text
                          },
                          on: { click: _vm.itemSelected }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(option.text) +
                              "\n                "
                          )
                        ]
                      )
                    : _c(
                        "span",
                        {
                          staticClass:
                            "vnb__popup__bottom__menu-options__option__link vnb__popup__bottom__menu-options__option__link--no-highlight"
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(option.text) +
                              "\n                "
                          )
                        ]
                      ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vnb__popup__bottom__sub-menu-options" },
                    _vm._l(option.subMenuOptions, function(subOption) {
                      return _c(
                        "div",
                        {
                          staticClass:
                            "vnb__popup__bottom__sub-menu-options__option"
                        },
                        [
                          subOption.type === "link"
                            ? _c(
                                "a",
                                {
                                  staticClass:
                                    "vnb__popup__bottom__sub-menu-options__option__link",
                                  attrs: {
                                    href: subOption.path,
                                    "aria-label": subOption.text
                                  },
                                  on: { click: _vm.itemSelected }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(subOption.text) +
                                      "\n                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    }),
                    0
                  )
                ]
              )
            }),
            0
          )
        ])
      ])
    : _vm._e()
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  var __vue_inject_styles__$7 = undefined;
  /* scoped */
  var __vue_scope_id__$7 = undefined;
  /* module identifier */
  var __vue_module_identifier__$7 = undefined;
  /* functional template */
  var __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Popup = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    undefined
  )

//

var script$8 = {
    name: 'vue-navigation-bar',
    mixins: [VueScreenSize.VueScreenSizeMixin],
    props: {
        options: {
            type: Object,
            required: true
        }
    },
    data: function data () {
        return {
            menuIsVisible: false
        }
    },
    computed: {
        finalOptions: function finalOptions () {
            return {
                elementId: (this.options.elementId) ? this.options.elementId : uuidV4(),
                isUsingVueRouter: (this.options.isUsingVueRouter) ? true : false,
                mobileBreakpoint: (this.options.mobileBreakpoint) ? this.options.mobileBreakpoint : 992,
                brandImagePath: (this.options.brandImagePath) ? this.options.brandImagePath : '/',
                brandImage: (this.options.brandImage) ? this.options.brandImage : null,
                brandImageAltText: (this.options.brandImageAltText) ? this.options.brandImageAltText : 'brand-image',
                collapseButtonStyle: (this.options.collapseButtonStyle) ? this.options.collapseButtonStyle : 'dark', // light, dark
                ariaLabelMainNav: (this.options.ariaLabelMainNav) ? this.options.ariaLabelMainNav : 'Main Navigation',
                menuOptionsLeft: (this.options.menuOptionsLeft) ? this.options.menuOptionsLeft : [],
                menuOptionsRight: (this.options.menuOptionsRight) ? this.options.menuOptionsRight : []
            }
        }
    },
    methods: {
        closeButtonClicked: function closeButtonClicked () {
            this.menuIsVisible = false;
        },
        collapseButtonClicked: function collapseButtonClicked () {
            this.menuIsVisible = !this.menuIsVisible;
        }
    },
    components: {
        BrandImage: BrandImage,
        MenuOptions: MenuOptions,
        CollapseButton: CollapseButton,
        Popup: Popup
    }
}

/* script */
var __vue_script__$8 = script$8;
/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "nav",
    {
      staticClass: "vnb",
      attrs: {
        id: _vm.finalOptions.elementId,
        "aria-label": _vm.finalOptions.ariaLabelMainNav
      }
    },
    [
      _c("brand-image", { attrs: { options: _vm.finalOptions } }),
      _vm._v(" "),
      _c("menu-options", {
        attrs: { options: _vm.finalOptions, type: "left" }
      }),
      _vm._v(" "),
      _c("menu-options", {
        attrs: { options: _vm.finalOptions, type: "right" }
      }),
      _vm._v(" "),
      _c("collapse-button", {
        attrs: { options: _vm.finalOptions, menuIsVisible: _vm.menuIsVisible },
        on: { "collapse-button-clicked": _vm.collapseButtonClicked }
      }),
      _vm._v(" "),
      _c("popup", {
        attrs: { options: _vm.finalOptions, menuIsVisible: _vm.menuIsVisible },
        on: { "close-button-clicked": _vm.closeButtonClicked }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  var __vue_inject_styles__$8 = undefined;
  /* scoped */
  var __vue_scope_id__$8 = undefined;
  /* module identifier */
  var __vue_module_identifier__$8 = undefined;
  /* functional template */
  var __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var component = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    undefined,
    undefined
  )

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('VueNavigationBar', component);
}

// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// To auto-install when vue is found
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default component;
export { install };
