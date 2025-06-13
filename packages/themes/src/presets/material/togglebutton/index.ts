import type { ToggleButtonDesignTokens, ToggleButtonTokenSections } from '@primeuix/themes/types/togglebutton';

export const root: ToggleButtonTokenSections.Root = {
    padding: '0.75rem 1rem',
    borderRadius: '{form.field.border.radius}',
    gap: '0.5rem',
    fontWeight: '500',
    background: '{form.field.background}',
    borderColor: '{form.field.border.color}',
    color: '{form.field.color}',
    hoverColor: '{form.field.color}',
    checkedColor: '{form.field.color}',
    checkedBorderColor: '{form.field.border.color}',
    disabledBackground: '{form.field.disabled.background}',
    disabledBorderColor: '{form.field.disabled.background}',
    disabledColor: '{form.field.disabled.color}',
    invalidBorderColor: '{form.field.invalid.border.color}',
    focusRing: {
        width: '0',
        style: 'none',
        offset: '0',
        color: 'unset',
        shadow: 'none'
    },
    transitionDuration: '{form.field.transition.duration}',
    sm: {
        fontSize: '{form.field.sm.font.size}',
        padding: '0.625rem 0.75rem'
    },
    lg: {
        fontSize: '{form.field.lg.font.size}',
        padding: '0.875rem 1.25rem'
    }
};

export const icon: ToggleButtonTokenSections.Icon = {
    color: '{text.muted.color}',
    hoverColor: '{text.muted.color}',
    checkedColor: '{text.muted.color}',
    disabledColor: '{form.field.disabled.color}'
};

export const content: ToggleButtonTokenSections.Content = {
    checkedBackground: 'transparent',
    checkedShadow: 'none',
    padding: '0',
    borderRadius: '0',
    sm: {
        padding: '0'
    },
    lg: {
        padding: '0'
    }
};

export const colorScheme: ToggleButtonTokenSections.ColorScheme = {
    light: {
        root: {
            hoverBackground: '{surface.100}',
            checkedBackground: '{surface.200}'
        }
    },
    dark: {
        root: {
            hoverBackground: '{surface.800}',
            checkedBackground: '{surface.700}'
        }
    }
};

export const css: ToggleButtonTokenSections.CSS = /*css*/ `
.p-togglebutton:focus-visible {
    background: dt('togglebutton.hover.background');
}
`;

export default {
    root,
    icon,
    content,
    colorScheme,
    css
} satisfies ToggleButtonDesignTokens;
