/**
 *
 * Tabs Design Tokens
 *
 * @module tabs
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
export declare namespace TabsTokenSections {
    interface Root {
        /**
         * Transition duration of root
         *
         * @designToken tabs.transition.duration
         */
        transitionDuration?: string;
    }

    interface Tablist {
        /**
         * Border width of tablist
         *
         * @designToken tabs.tablist.border.width
         */
        borderWidth?: string;
        /**
         * Background of tablist
         *
         * @designToken tabs.tablist.background
         */
        background?: string;
        /**
         * Border color of tablist
         *
         * @designToken tabs.tablist.border.color
         */
        borderColor?: string;
    }

    interface Tab {
        /**
         * Background of tab
         *
         * @designToken tabs.tab.background
         */
        background?: string;
        /**
         * Hover background of tab
         *
         * @designToken tabs.tab.hover.background
         */
        hoverBackground?: string;
        /**
         * Active background of tab
         *
         * @designToken tabs.tab.active.background
         */
        activeBackground?: string;
        /**
         * Border width of tab
         *
         * @designToken tabs.tab.border.width
         */
        borderWidth?: string;
        /**
         * Border color of tab
         *
         * @designToken tabs.tab.border.color
         */
        borderColor?: string;
        /**
         * Hover border color of tab
         *
         * @designToken tabs.tab.hover.border.color
         */
        hoverBorderColor?: string;
        /**
         * Active border color of tab
         *
         * @designToken tabs.tab.active.border.color
         */
        activeBorderColor?: string;
        /**
         * Color of tab
         *
         * @designToken tabs.tab.color
         */
        color?: string;
        /**
         * Hover color of tab
         *
         * @designToken tabs.tab.hover.color
         */
        hoverColor?: string;
        /**
         * Active color of tab
         *
         * @designToken tabs.tab.active.color
         */
        activeColor?: string;
        /**
         * Padding of tab
         *
         * @designToken tabs.tab.padding
         */
        padding?: string;
        /**
         * Font weight of tab
         *
         * @designToken tabs.tab.font.weight
         */
        fontWeight?: string;
        /**
         * Margin of tab
         *
         * @designToken tabs.tab.margin
         */
        margin?: string;
        /**
         * Gap of tab
         *
         * @designToken tabs.tab.gap
         */
        gap?: string;
        /**
         * Focus ring of tab
         */
        focusRing?: {
            /**
             * Focus ring width of tab
             *
             * @designToken tabs.tab.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of tab
             *
             * @designToken tabs.tab.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of tab
             *
             * @designToken tabs.tab.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of tab
             *
             * @designToken tabs.tab.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of tab
             *
             * @designToken tabs.tab.focus.ring.shadow
             */
            shadow?: string;
        };
    }

    interface Tabpanel {
        /**
         * Background of tabpanel
         *
         * @designToken tabs.tabpanel.background
         */
        background?: string;
        /**
         * Color of tabpanel
         *
         * @designToken tabs.tabpanel.color
         */
        color?: string;
        /**
         * Padding of tabpanel
         *
         * @designToken tabs.tabpanel.padding
         */
        padding?: string;
        /**
         * Focus ring of tabpanel
         */
        focusRing?: {
            /**
             * Focus ring width of tabpanel
             *
             * @designToken tabs.tabpanel.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of tabpanel
             *
             * @designToken tabs.tabpanel.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of tabpanel
             *
             * @designToken tabs.tabpanel.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of tabpanel
             *
             * @designToken tabs.tabpanel.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of tabpanel
             *
             * @designToken tabs.tabpanel.focus.ring.shadow
             */
            shadow?: string;
        };
    }

    interface NavButton {
        /**
         * Background of nav button
         *
         * @designToken tabs.nav.button.background
         */
        background?: string;
        /**
         * Color of nav button
         *
         * @designToken tabs.nav.button.color
         */
        color?: string;
        /**
         * Hover color of nav button
         *
         * @designToken tabs.nav.button.hover.color
         */
        hoverColor?: string;
        /**
         * Width of nav button
         *
         * @designToken tabs.nav.button.width
         */
        width?: string;
        /**
         * Focus ring of nav button
         */
        focusRing?: {
            /**
             * Focus ring width of nav button
             *
             * @designToken tabs.nav.button.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of nav button
             *
             * @designToken tabs.nav.button.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of nav button
             *
             * @designToken tabs.nav.button.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of nav button
             *
             * @designToken tabs.nav.button.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of nav button
             *
             * @designToken tabs.nav.button.focus.ring.shadow
             */
            shadow?: string;
        };
        /**
         * Shadow of nav button
         *
         * @designToken tabs.nav.button.shadow
         */
        shadow?: string;
    }

    interface ActiveBar {
        /**
         * Height of active bar
         *
         * @designToken tabs.active.bar.height
         */
        height?: string;
        /**
         * Bottom of active bar
         *
         * @designToken tabs.active.bar.bottom
         */
        bottom?: string;
        /**
         * Background of active bar
         *
         * @designToken tabs.active.bar.background
         */
        background?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<TabsDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 *
 * _Tabs Design Tokens_
 *
 * @group components
 * @module tabs
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
export interface TabsDesignTokens extends DesignTokens<TabsDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: TabsTokenSections.Root;
    /**
     * Used to pass tokens of the tablist section
     */
    tablist?: TabsTokenSections.Tablist;
    /**
     * Used to pass tokens of the tab section
     */
    tab?: TabsTokenSections.Tab;
    /**
     * Used to pass tokens of the tabpanel section
     */
    tabpanel?: TabsTokenSections.Tabpanel;
    /**
     * Used to pass tokens of the nav button section
     */
    navButton?: TabsTokenSections.NavButton;
    /**
     * Used to pass tokens of the active bar section
     */
    activeBar?: TabsTokenSections.ActiveBar;
}
