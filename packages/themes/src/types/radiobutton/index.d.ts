/**
 *
 * RadioButton Design Tokens
 *
 * @module radiobutton
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
export declare namespace RadioButtonTokenSections {
    interface Root {
        /**
         * Width of root
         *
         * @designToken radiobutton.width
         */
        width?: string;
        /**
         * Height of root
         *
         * @designToken radiobutton.height
         */
        height?: string;
        /**
         * Background of root
         *
         * @designToken radiobutton.background
         */
        background?: string;
        /**
         * Checked background of root
         *
         * @designToken radiobutton.checked.background
         */
        checkedBackground?: string;
        /**
         * Checked hover background of root
         *
         * @designToken radiobutton.checked.hover.background
         */
        checkedHoverBackground?: string;
        /**
         * Disabled background of root
         *
         * @designToken radiobutton.disabled.background
         */
        disabledBackground?: string;
        /**
         * Filled background of root
         *
         * @designToken radiobutton.filled.background
         */
        filledBackground?: string;
        /**
         * Border color of root
         *
         * @designToken radiobutton.border.color
         */
        borderColor?: string;
        /**
         * Hover border color of root
         *
         * @designToken radiobutton.hover.border.color
         */
        hoverBorderColor?: string;
        /**
         * Focus border color of root
         *
         * @designToken radiobutton.focus.border.color
         */
        focusBorderColor?: string;
        /**
         * Checked border color of root
         *
         * @designToken radiobutton.checked.border.color
         */
        checkedBorderColor?: string;
        /**
         * Checked hover border color of root
         *
         * @designToken radiobutton.checked.hover.border.color
         */
        checkedHoverBorderColor?: string;
        /**
         * Checked focus border color of root
         *
         * @designToken radiobutton.checked.focus.border.color
         */
        checkedFocusBorderColor?: string;
        /**
         * Checked disabled border color of root
         *
         * @designToken radiobutton.checked.disabled.border.color
         */
        checkedDisabledBorderColor?: string;
        /**
         * Invalid border color of root
         *
         * @designToken radiobutton.invalid.border.color
         */
        invalidBorderColor?: string;
        /**
         * Shadow of root
         *
         * @designToken radiobutton.shadow
         */
        shadow?: string;
        /**
         * Focus ring of root
         */
        focusRing?: {
            /**
             * Focus ring width of root
             *
             * @designToken radiobutton.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of root
             *
             * @designToken radiobutton.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of root
             *
             * @designToken radiobutton.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of root
             *
             * @designToken radiobutton.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of root
             *
             * @designToken radiobutton.focus.ring.shadow
             */
            shadow?: string;
        };
        /**
         * Transition duration of root
         *
         * @designToken radiobutton.transition.duration
         */
        transitionDuration?: string;
        /**
         * Sm of root
         */
        sm?: {
            /**
             * Sm width of root
             *
             * @designToken radiobutton.sm.width
             */
            width?: string;
            /**
             * Sm height of root
             *
             * @designToken radiobutton.sm.height
             */
            height?: string;
        };
        /**
         * Lg of root
         */
        lg?: {
            /**
             * Lg width of root
             *
             * @designToken radiobutton.lg.width
             */
            width?: string;
            /**
             * Lg height of root
             *
             * @designToken radiobutton.lg.height
             */
            height?: string;
        };
    }

    interface Icon {
        /**
         * Size of icon
         *
         * @designToken radiobutton.icon.size
         */
        size?: string;
        /**
         * Checked color of icon
         *
         * @designToken radiobutton.icon.checked.color
         */
        checkedColor?: string;
        /**
         * Checked hover color of icon
         *
         * @designToken radiobutton.icon.checked.hover.color
         */
        checkedHoverColor?: string;
        /**
         * Disabled color of icon
         *
         * @designToken radiobutton.icon.disabled.color
         */
        disabledColor?: string;
        /**
         * Sm of icon
         */
        sm?: {
            /**
             * Sm size of icon
             *
             * @designToken radiobutton.icon.sm.size
             */
            size?: string;
        };
        /**
         * Lg of icon
         */
        lg?: {
            /**
             * Lg size of icon
             *
             * @designToken radiobutton.icon.lg.size
             */
            size?: string;
        };
    }

    /* Static Sections */
    type ColorScheme = CS<RadioButtonDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 *
 * _RadioButton Design Tokens_
 *
 * @group components
 * @module radiobutton
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
export interface RadioButtonDesignTokens extends DesignTokens<RadioButtonDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: RadioButtonTokenSections.Root;
    /**
     * Used to pass tokens of the icon section
     */
    icon?: RadioButtonTokenSections.Icon;
}
