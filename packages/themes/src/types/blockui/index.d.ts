/**
 *
 * BlockUI Design Tokens
 *
 * @module blockui
 *
 */

import type { ColorScheme as CS, DesignTokens, ExtendedCSS, ExtendedTokens } from '..';

/**
 * Design Token Sections
 */
export declare namespace BlockUITokenSections {
    interface Root {
        /**
         * Border radius of root
         *
         * @designToken blockui.border.radius
         */
        borderRadius?: string;
    }

    /* Static Sections */
    type ColorScheme = CS<BlockUIDesignTokens>;
    type CSS = ExtendedCSS;
    type Extend = ExtendedTokens;
}

/**
 * Design Tokens
 */
export interface BlockUIDesignTokens extends DesignTokens<BlockUIDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: BlockUITokenSections.Root;
}

/**
 *
 * _BlockUI Design Tokens_
 *
 * @group components
 * @module blockui
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
declare const _default: BlockUIDesignTokens;
export default _default;
