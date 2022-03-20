import { shallowMount } from '@vue/test-utils';
import VueNavigationBar from '@/vue-navigation-bar.vue';

describe('VueNavigationBar.vue', () => {
  it('Sets props correctly', async () => {
    let initialProps = {
      elementId: 'main-navbar',
      isUsingVueRouter: true,
      mobileBreakpoint: 992,
      brandImagePath: '/',
      brandImage: null,
      brandImageAltText: 'vnb',
      collapseButtonImageOpen: null,
      collapseButtonImageClose: null,
      showBrandImageInMobilePopup: false,
      ariaLabelMainNav: 'Main Navigation',
      tooltipAnimationType: 'shift-away',
      menuOptionsLeft: [
        {
          type: 'link',
          text: 'Why Dunder Mifflin',
          path: '/why',
          subMenuOptions: [
            {
              isLinkAction: true,
              type: 'link',
              text: 'About',
              path: '/about',
            },
            {
              type: 'hr',
            },
            {
              type: 'link',
              text: 'Locations',
              path: '/locations',
            },
            {
              type: 'link',
              text: 'Blog',
              path: '/blog',
            },
          ],
        },
        {
          type: 'link',
          text: 'Contact',
          path: '/contact',
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
              type: 'link',
              text: 'Reception',
              path: '/reception',
            },
          ],
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
          class: 'button-red',
        },
        {
          type: 'button',
          text: 'Login',
          path: '/login',
        },
      ],
    };

    const wrapper = shallowMount(VueNavigationBar, {
      props: {
        options: {
          elementId: initialProps.elementId,
          isUsingVueRouter: initialProps.isUsingVueRouter,
          mobileBreakpoint: initialProps.mobileBreakpoint,
          brandImagePath: initialProps.brandImagePath,
          brandImage: initialProps.brandImage,
          brandImageAltText: initialProps.brandImageAltText,
          collapseButtonImageOpen: initialProps.collapseButtonImageOpen,
          collapseButtonImageClose: initialProps.collapseButtonImageClose,
          showBrandImageInMobilePopup: initialProps.showBrandImageInMobilePopup,
          ariaLabelMainNav: initialProps.ariaLabelMainNav,
          tooltipAnimationType: initialProps.tooltipAnimationType,
          menuOptionsLeft: initialProps.menuOptionsLeft,
          menuOptionsRight: initialProps.menuOptionsRight,
        },
      },
    });

    expect(wrapper.vm.finalOptions.elementId).toBe(initialProps.elementId);
    expect(wrapper.vm.finalOptions.isUsingVueRouter).toBe(initialProps.isUsingVueRouter);
    expect(wrapper.vm.finalOptions.mobileBreakpoint).toBe(initialProps.mobileBreakpoint);
    expect(wrapper.vm.finalOptions.brandImagePath).toBe(initialProps.brandImagePath);
    expect(wrapper.vm.finalOptions.brandImage).toBe(initialProps.brandImage);
    expect(wrapper.vm.finalOptions.brandImageAltText).toBe(initialProps.brandImageAltText);
    expect(wrapper.vm.finalOptions.collapseButtonImageOpen).toBe(
      initialProps.collapseButtonImageOpen,
    );
    expect(wrapper.vm.finalOptions.collapseButtonImageClose).toBe(
      initialProps.collapseButtonImageClose,
    );
    expect(wrapper.vm.finalOptions.showBrandImageInMobilePopup).toBe(
      initialProps.showBrandImageInMobilePopup,
    );
    expect(wrapper.vm.finalOptions.ariaLabelMainNav).toBe(initialProps.ariaLabelMainNav);
    expect(wrapper.vm.finalOptions.tooltipAnimationType).toBe(initialProps.tooltipAnimationType);
    expect(wrapper.vm.finalOptions.menuOptionsLeft).toStrictEqual(initialProps.menuOptionsLeft);
    expect(wrapper.vm.finalOptions.menuOptionsRight).toStrictEqual(initialProps.menuOptionsRight);
  });

  it('Confirms the `vue-navigation-bar` was built', async () => {
    let initialProps = {
      elementId: 'main-navbar',
    };

    const wrapper = shallowMount(VueNavigationBar, {
      props: {
        options: {
          elementId: initialProps.elementId,
        },
      },
    });

    expect(wrapper.findComponent({ name: 'vue-navigation-bar' })).toBeTruthy();
  });
});
