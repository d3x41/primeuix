import type { ImageCompareDesignTokens, ImageCompareTokenSections } from '@primeuix/themes/types/imagecompare';

export const handle: ImageCompareTokenSections.Handle = {
    size: '20px',
    hoverSize: '40px',
    background: 'rgba(255,255,255,0.4)',
    hoverBackground: 'rgba(255,255,255,0.6)',
    borderColor: 'unset',
    hoverBorderColor: 'unset',
    borderWidth: '0',
    borderRadius: '50%',
    transitionDuration: '{transition.duration}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: 'rgba(255,255,255,0.3)',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const css: ImageCompareTokenSections.CSS = /*css*/ ``;

export default {
    handle,
    css
} satisfies ImageCompareDesignTokens;
