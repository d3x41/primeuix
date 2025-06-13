/**
 *
 * MultiSelect Design Tokens
 *
 * @module multiselect
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
export declare namespace MultiSelectTokenSections {
    interface Root {
        /**
         * Background of root
         *
         * @designToken multiselect.background
         */
        background?: string;
        /**
         * Disabled background of root
         *
         * @designToken multiselect.disabled.background
         */
        disabledBackground?: string;
        /**
         * Filled background of root
         *
         * @designToken multiselect.filled.background
         */
        filledBackground?: string;
        /**
         * Filled hover background of root
         *
         * @designToken multiselect.filled.hover.background
         */
        filledHoverBackground?: string;
        /**
         * Filled focus background of root
         *
         * @designToken multiselect.filled.focus.background
         */
        filledFocusBackground?: string;
        /**
         * Border color of root
         *
         * @designToken multiselect.border.color
         */
        borderColor?: string;
        /**
         * Hover border color of root
         *
         * @designToken multiselect.hover.border.color
         */
        hoverBorderColor?: string;
        /**
         * Focus border color of root
         *
         * @designToken multiselect.focus.border.color
         */
        focusBorderColor?: string;
        /**
         * Invalid border color of root
         *
         * @designToken multiselect.invalid.border.color
         */
        invalidBorderColor?: string;
        /**
         * Color of root
         *
         * @designToken multiselect.color
         */
        color?: string;
        /**
         * Disabled color of root
         *
         * @designToken multiselect.disabled.color
         */
        disabledColor?: string;
        /**
         * Placeholder color of root
         *
         * @designToken multiselect.placeholder.color
         */
        placeholderColor?: string;
        /**
         * Invalid placeholder color of root
         *
         * @designToken multiselect.invalid.placeholder.color
         */
        invalidPlaceholderColor?: string;
        /**
         * Shadow of root
         *
         * @designToken multiselect.shadow
         */
        shadow?: string;
        /**
         * Padding x of root
         *
         * @designToken multiselect.padding.x
         */
        paddingX?: string;
        /**
         * Padding y of root
         *
         * @designToken multiselect.padding.y
         */
        paddingY?: string;
        /**
         * Border radius of root
         *
         * @designToken multiselect.border.radius
         */
        borderRadius?: string;
        /**
         * Focus ring of root
         */
        focusRing?: {
            /**
             * Focus ring width of root
             *
             * @designToken multiselect.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of root
             *
             * @designToken multiselect.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of root
             *
             * @designToken multiselect.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of root
             *
             * @designToken multiselect.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of root
             *
             * @designToken multiselect.focus.ring.shadow
             */
            shadow?: string;
        };
        /**
         * Transition duration of root
         *
         * @designToken multiselect.transition.duration
         */
        transitionDuration?: string;
        /**
         * Sm of root
         */
        sm?: {
            /**
             * Sm font size of root
             *
             * @designToken multiselect.sm.font.size
             */
            fontSize?: string;
            /**
             * Sm padding x of root
             *
             * @designToken multiselect.sm.padding.x
             */
            paddingX?: string;
            /**
             * Sm padding y of root
             *
             * @designToken multiselect.sm.padding.y
             */
            paddingY?: string;
        };
        /**
         * Lg of root
         */
        lg?: {
            /**
             * Lg font size of root
             *
             * @designToken multiselect.lg.font.size
             */
            fontSize?: string;
            /**
             * Lg padding x of root
             *
             * @designToken multiselect.lg.padding.x
             */
            paddingX?: string;
            /**
             * Lg padding y of root
             *
             * @designToken multiselect.lg.padding.y
             */
            paddingY?: string;
        };
    }

    interface Dropdown {
        /**
         * Width of dropdown
         *
         * @designToken multiselect.dropdown.width
         */
        width?: string;
        /**
         * Color of dropdown
         *
         * @designToken multiselect.dropdown.color
         */
        color?: string;
    }

    interface Overlay {
        /**
         * Background of overlay
         *
         * @designToken multiselect.overlay.background
         */
        background?: string;
        /**
         * Border color of overlay
         *
         * @designToken multiselect.overlay.border.color
         */
        borderColor?: string;
        /**
         * Border radius of overlay
         *
         * @designToken multiselect.overlay.border.radius
         */
        borderRadius?: string;
        /**
         * Color of overlay
         *
         * @designToken multiselect.overlay.color
         */
        color?: string;
        /**
         * Shadow of overlay
         *
         * @designToken multiselect.overlay.shadow
         */
        shadow?: string;
    }

    interface List {
        /**
         * Padding of list
         *
         * @designToken multiselect.list.padding
         */
        padding?: string;
        /**
         * Gap of list
         *
         * @designToken multiselect.list.gap
         */
        gap?: string;
        /**
         * Header of list
         */
        header?: {
            /**
             * Header padding of list
             *
             * @designToken multiselect.list.header.padding
             */
            padding?: string;
        };
    }

    interface Option {
        /**
         * Focus background of option
         *
         * @designToken multiselect.option.focus.background
         */
        focusBackground?: string;
        /**
         * Selected background of option
         *
         * @designToken multiselect.option.selected.background
         */
        selectedBackground?: string;
        /**
         * Selected focus background of option
         *
         * @designToken multiselect.option.selected.focus.background
         */
        selectedFocusBackground?: string;
        /**
         * Color of option
         *
         * @designToken multiselect.option.color
         */
        color?: string;
        /**
         * Focus color of option
         *
         * @designToken multiselect.option.focus.color
         */
        focusColor?: string;
        /**
         * Selected color of option
         *
         * @designToken multiselect.option.selected.color
         */
        selectedColor?: string;
        /**
         * Selected focus color of option
         *
         * @designToken multiselect.option.selected.focus.color
         */
        selectedFocusColor?: string;
        /**
         * Padding of option
         *
         * @designToken multiselect.option.padding
         */
        padding?: string;
        /**
         * Border radius of option
         *
         * @designToken multiselect.option.border.radius
         */
        borderRadius?: string;
        /**
         * Gap of option
         *
         * @designToken multiselect.option.gap
         */
        gap?: string;
    }

    interface OptionGroup {
        /**
         * Background of option group
         *
         * @designToken multiselect.option.group.background
         */
        background?: string;
        /**
         * Color of option group
         *
         * @designToken multiselect.option.group.color
         */
        color?: string;
        /**
         * Font weight of option group
         *
         * @designToken multiselect.option.group.font.weight
         */
        fontWeight?: string;
        /**
         * Padding of option group
         *
         * @designToken multiselect.option.group.padding
         */
        padding?: string;
    }

    interface ClearIcon {
        /**
         * Color of clear icon
         *
         * @designToken multiselect.clear.icon.color
         */
        color?: string;
    }

    interface Chip {
        /**
         * Border radius of chip
         *
         * @designToken multiselect.chip.border.radius
         */
        borderRadius?: string;
    }

    interface EmptyMessage {
        /**
         * Padding of empty message
         *
         * @designToken multiselect.empty.message.padding
         */
        padding?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<MultiSelectDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 *
 * _MultiSelect Design Tokens_
 *
 * @group components
 * @module multiselect
 * @see
 * --- ---
 * **Compatible Libraries**
 *
 * [![PrimeNG](https://i.postimg.cc/63f7jVST/primeng-icon-24.png)](https://primeng.org/theming/styled)
 * [![PrimeVue](https://i.postimg.cc/cC1vVgyh/primevue-icon-24.png)](https://primevue.org/theming/styled)
 * --- ---
 * **Figma UI Kit**
 *
 * [PrimeNG](https://primeng.org/uikit) | [PrimeVue](https://primevue.org/uikit)
 *
 */
export interface MultiSelectDesignTokens extends DesignTokens<MultiSelectDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: MultiSelectTokenSections.Root;
    /**
     * Used to pass tokens of the dropdown section
     */
    dropdown?: MultiSelectTokenSections.Dropdown;
    /**
     * Used to pass tokens of the overlay section
     */
    overlay?: MultiSelectTokenSections.Overlay;
    /**
     * Used to pass tokens of the list section
     */
    list?: MultiSelectTokenSections.List;
    /**
     * Used to pass tokens of the option section
     */
    option?: MultiSelectTokenSections.Option;
    /**
     * Used to pass tokens of the option group section
     */
    optionGroup?: MultiSelectTokenSections.OptionGroup;
    /**
     * Used to pass tokens of the clear icon section
     */
    clearIcon?: MultiSelectTokenSections.ClearIcon;
    /**
     * Used to pass tokens of the chip section
     */
    chip?: MultiSelectTokenSections.Chip;
    /**
     * Used to pass tokens of the empty message section
     */
    emptyMessage?: MultiSelectTokenSections.EmptyMessage;
}
