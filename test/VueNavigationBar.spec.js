import { shallowMount } from "@vue/test-utils";
import VueNavigationBar from "@/vue-navigation-bar.vue";

describe("VueNavigationBar.vue", () => {
  it("Sets props correctly", async () => {
    let initialPropsData = {
      elementId: "main-navbar",
      isUsingVueRouter: true,
      mobileBreakpoint: 992,
      brandImagePath: "/",
      brandImage: null,
      brandImageAltText: "vnb",
      collapseButtonImageOpen: null,
      collapseButtonImageClose: null,
      showBrandImageInMobilePopup: false,
      ariaLabelMainNav: "Main Navigation",
      tooltipAnimationType: "shift-away",
      menuOptionsLeft: [
        {
          type: "link",
          text: "Why Dunder Mifflin",
          path: "/why",
          subMenuOptions: [
            {
              isLinkAction: true,
              type: "link",
              text: "About",
              path: "/about"
            },
            {
              type: "hr"
            },
            {
              type: "link",
              text: "Locations",
              path: "/locations"
            },
            {
              type: "link",
              text: "Blog",
              path: "/blog"
            }
          ]
        },
        {
          type: "link",
          text: "Contact",
          path: "/contact",
          subMenuOptions: [
            {
              type: "link",
              text: "Customer Service",
              path: "/customer-service"
            },
            {
              type: "link",
              text: "Accounting",
              path: "/accounting"
            },
            {
              type: "link",
              text: "Reception",
              path: "/reception"
            }
          ]
        },
        {
          type: "link",
          text: "Pricing",
          path: "/pricing"
        }
      ],
      menuOptionsRight: [
        {
          type: "button",
          text: "Signup",
          path: "/signup",
          class: "button-red"
        },
        {
          type: "button",
          text: "Login",
          path: "/login"
        }
      ]
    };

    const wrapper = shallowMount(VueNavigationBar, {
      propsData: {
        options: {
          elementId: initialPropsData.elementId,
          isUsingVueRouter: initialPropsData.isUsingVueRouter,
          mobileBreakpoint: initialPropsData.mobileBreakpoint,
          brandImagePath: initialPropsData.brandImagePath,
          brandImage: initialPropsData.brandImage,
          brandImageAltText: initialPropsData.brandImageAltText,
          collapseButtonImageOpen: initialPropsData.collapseButtonImageOpen,
          collapseButtonImageClose: initialPropsData.collapseButtonImageClose,
          showBrandImageInMobilePopup:
            initialPropsData.showBrandImageInMobilePopup,
          ariaLabelMainNav: initialPropsData.ariaLabelMainNav,
          tooltipAnimationType: initialPropsData.tooltipAnimationType,
          menuOptionsLeft: initialPropsData.menuOptionsLeft,
          menuOptionsRight: initialPropsData.menuOptionsRight
        }
      }
    });

    expect(wrapper.vm.finalOptions.elementId).toBe(initialPropsData.elementId);
    expect(wrapper.vm.finalOptions.isUsingVueRouter).toBe(
      initialPropsData.isUsingVueRouter
    );
    expect(wrapper.vm.finalOptions.mobileBreakpoint).toBe(
      initialPropsData.mobileBreakpoint
    );
    expect(wrapper.vm.finalOptions.brandImagePath).toBe(
      initialPropsData.brandImagePath
    );
    expect(wrapper.vm.finalOptions.brandImage).toBe(
      initialPropsData.brandImage
    );
    expect(wrapper.vm.finalOptions.brandImageAltText).toBe(
      initialPropsData.brandImageAltText
    );
    expect(wrapper.vm.finalOptions.collapseButtonImageOpen).toBe(
      initialPropsData.collapseButtonImageOpen
    );
    expect(wrapper.vm.finalOptions.collapseButtonImageClose).toBe(
      initialPropsData.collapseButtonImageClose
    );
    expect(wrapper.vm.finalOptions.showBrandImageInMobilePopup).toBe(
      initialPropsData.showBrandImageInMobilePopup
    );
    expect(wrapper.vm.finalOptions.ariaLabelMainNav).toBe(
      initialPropsData.ariaLabelMainNav
    );
    expect(wrapper.vm.finalOptions.tooltipAnimationType).toBe(
      initialPropsData.tooltipAnimationType
    );
    expect(wrapper.vm.finalOptions.menuOptionsLeft).toBe(
      initialPropsData.menuOptionsLeft
    );
    expect(wrapper.vm.finalOptions.menuOptionsRight).toBe(
      initialPropsData.menuOptionsRight
    );
  });

  it("Confirms the `vue-navigation-bar` was built", async () => {
    let initialPropsData = {
      elementId: "main-navbar"
    };

    const wrapper = shallowMount(VueNavigationBar, {
      propsData: {
        options: {
          elementId: initialPropsData.elementId
        }
      }
    });

    expect(wrapper.findComponent({ name: "vue-navigation-bar" })).toBeTruthy();
  });
});
