import type { InputChipsDesignTokens, InputChipsTokenSections } from '@primeuix/themes/types/inputchips';

export const root: InputChipsTokenSections.Root = {
    background: '{form.field.background}',
    disabledBackground: '{form.field.disabled.background}',
    filledBackground: '{form.field.filled.background}',
    filledFocusBackground: '{form.field.filled.focus.background}',
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.hover.border.color}',
    focusBorderColor: '{form.field.focus.border.color}',
    invalidBorderColor: '{form.field.invalid.border.color}',
    color: '{form.field.color}',
    disabledColor: '{form.field.disabled.color}',
    placeholderColor: '{form.field.placeholder.color}',
    shadow: '{form.field.shadow}',
    paddingX: '{form.field.padding.x}',
    paddingY: '{form.field.padding.y}',
    borderRadius: '{form.field.border.radius}',
    focusRing: {
        width: '{form.field.focus.ring.width}',
        style: '{form.field.focus.ring.style}',
        color: '{form.field.focus.ring.color}',
        offset: '{form.field.focus.ring.offset}',
        shadow: '{form.field.focus.ring.shadow}'
    },
    transitionDuration: '{form.field.transition.duration}'
};

export const chip: InputChipsTokenSections.Chip = {
    borderRadius: '{border.radius.sm}'
};

export const colorScheme: InputChipsTokenSections.ColorScheme = {
    light: {
        chip: {
            focusBackground: '{surface.200}',
            color: '{surface.800}'
        }
    },
    dark: {
        chip: {
            focusBackground: '{surface.700}',
            color: '{surface.0}'
        }
    }
};

export const css: InputChipsTokenSections.CSS = /*css*/ ``;

export default {
    root,
    chip,
    colorScheme,
    css
} satisfies InputChipsDesignTokens;
