import type { SplitButtonDesignTokens, SplitButtonTokenSections } from '@primeuix/themes/types/splitbutton';

export const root: SplitButtonTokenSections.Root = {
    borderRadius: '{form.field.border.radius}',
    roundedBorderRadius: '2rem',
    raisedShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'
};

export const css: SplitButtonTokenSections.CSS = /*css*/ ``;

export default {
    root,
    css
} satisfies SplitButtonDesignTokens;
