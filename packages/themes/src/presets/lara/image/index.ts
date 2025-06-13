import type { ImageDesignTokens, ImageTokenSections } from '@primeuix/themes/types/image';

export const root: ImageTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const preview: ImageTokenSections.Preview = {
    icon: {
        size: '1.5rem'
    },
    mask: {
        background: '{mask.background}',
        color: '{mask.color}'
    }
};

export const toolbar: ImageTokenSections.Toolbar = {
    position: {
        left: 'auto',
        right: '1rem',
        top: '1rem',
        bottom: 'auto'
    },
    blur: '8px',
    background: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(255,255,255,0.2)',
    borderWidth: '1px',
    borderRadius: '{content.border.radius}',
    padding: '.5rem',
    gap: '0.5rem'
};

export const action: ImageTokenSections.Action = {
    hoverBackground: 'rgba(255,255,255,0.1)',
    color: '{surface.50}',
    hoverColor: '{surface.0}',
    size: '3rem',
    iconSize: '1.5rem',
    borderRadius: '{content.border.radius}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export default {
    root,
    preview,
    toolbar,
    action
} satisfies ImageDesignTokens;
