import type { SliderDesignTokens, SliderTokenSections } from '@primeuix/themes/types/slider';

export const root: SliderTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const track: SliderTokenSections.Track = {
    background: '{content.border.color}',
    borderRadius: '{border.radius.xs}',
    size: '2px'
};

export const range: SliderTokenSections.Range = {
    background: '{primary.color}'
};

export const handle: SliderTokenSections.Handle = {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    background: '{primary.color}',
    hoverBackground: '{primary.color}',
    content: {
        borderRadius: '50%',
        background: '{primary.color}',
        hoverBackground: '{primary.color}',
        width: '18px',
        height: '18px',
        shadow: '0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)'
    },
    focusRing: {
        width: '0',
        style: 'none',
        color: 'unset',
        offset: '0',
        shadow: 'none'
    }
};

export const css: SliderTokenSections.CSS = /*css*/ `
.p-slider-handle {
    transition: box-shadow dt('slider.transition.duration');
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('slider.handle.background'), transparent 92%);
}

.p-slider-handle:focus-visible,
.p-slider:not(.p-disabled) .p-slider-handle:focus:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('slider.handle.background'), transparent 84%);
}
`;

export default {
    root,
    track,
    range,
    handle,
    css
} satisfies SliderDesignTokens;
