import type { DividerDesignTokens, DividerTokenSections } from '@primeuix/themes/types/divider';

export const root: DividerTokenSections.Root = {
    borderColor: '{content.border.color}'
};

export const content: DividerTokenSections.Content = {
    background: '{content.background}',
    color: '{text.color}'
};

export const horizontal: DividerTokenSections.Horizontal = {
    margin: '1rem 0',
    padding: '0 1rem',
    content: {
        padding: '0 0.5rem'
    }
};

export const vertical: DividerTokenSections.Vertical = {
    margin: '0 1rem',
    padding: '0.5rem 0',
    content: {
        padding: '0.5rem 0'
    }
};

export default {
    root,
    content,
    horizontal,
    vertical
} satisfies DividerDesignTokens;
