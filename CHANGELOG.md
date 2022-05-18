# CHANGELOG.md

## 5.0.2 (2022-03-20)

- Upgrade to Vue 3 support at `v5.0.0` and beyond. Vue 2 support is available at `v4.1.0`.

## 4.1.0 (2020-10-15)

- Adds `tooltipPlacement` prop to control direction of menu tooltip. This prevents the tooltip libraries from adjusting the position once set. This is preferable for a dropdown-type system we have here. Thank you @jeffreykthomas for your research and help on this.

## 1.3.1 (2019-08-06)

- Adjusting project formatting.
- Renamed events `mobile-popup-shown` and `mobile-popup-hidden` to `vnb-mobile-popup-shown` and `vnb-mobile-popup-hidden`.
- Added ability to make links `emit` events instead of triggering their path. Good for cases when you want to run a function using a `menuOption` instead of following a link.
- Hiding the popup and collapse button if there are no `menuOptions` to show.
- Added `tooltipAnimationType` to the options so that you can change the dropdown animation type.

## 1.3.0 (2019-04-23)

- Added the ability to provide your own collapse open and close image - `collapseButtonImageOpen` and `collapseButtonImageClose` . Added dynamic `id` functionality to the menu options to allow for multiple instances of the component.

## 1.2.0 (2019-03-29)

- Added optional `slot` option named `custom-slot` .

## 1.0.0 (2019-03-18)

- Initial work
