import type { ThemeStyleOptions } from '@primeuix/styled';
import type { MultiSelectDesignTokens } from '@primeuix/themes/types/multiselect';

export default {
    root: {
        background: '{form.field.background}',
        disabledBackground: '{form.field.disabled.background}',
        filledBackground: '{form.field.filled.background}',
        filledHoverBackground: '{form.field.filled.hover.background}',
        filledFocusBackground: '{form.field.filled.focus.background}',
        borderColor: '{form.field.border.color}',
        hoverBorderColor: '{form.field.hover.border.color}',
        focusBorderColor: '{form.field.focus.border.color}',
        invalidBorderColor: '{form.field.invalid.border.color}',
        color: '{form.field.color}',
        disabledColor: '{form.field.disabled.color}',
        placeholderColor: '{form.field.placeholder.color}',
        invalidPlaceholderColor: '{form.field.invalid.placeholder.color}',
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
        transitionDuration: '{form.field.transition.duration}',
        sm: {
            fontSize: '{form.field.sm.font.size}',
            paddingX: '{form.field.sm.padding.x}',
            paddingY: '{form.field.sm.padding.y}'
        },
        lg: {
            fontSize: '{form.field.lg.font.size}',
            paddingX: '{form.field.lg.padding.x}',
            paddingY: '{form.field.lg.padding.y}'
        }
    },
    dropdown: {
        width: '2.5rem',
        color: '{form.field.icon.color}'
    },
    overlay: {
        background: '{overlay.select.background}',
        borderColor: '{overlay.select.border.color}',
        borderRadius: '{overlay.select.border.radius}',
        color: '{overlay.select.color}',
        shadow: '{overlay.select.shadow}'
    },
    list: {
        padding: '{list.padding}',
        gap: '{list.gap}',
        header: {
            padding: '{list.header.padding}'
        }
    },
    option: {
        focusBackground: '{list.option.focus.background}',
        selectedBackground: '{list.option.selected.background}',
        selectedFocusBackground: '{list.option.selected.focus.background}',
        color: '{list.option.color}',
        focusColor: '{list.option.focus.color}',
        selectedColor: '{list.option.selected.color}',
        selectedFocusColor: '{list.option.selected.focus.color}',
        padding: '{list.option.padding}',
        borderRadius: '{list.option.border.radius}',
        gap: '0.75rem'
    },
    optionGroup: {
        background: '{list.option.group.background}',
        color: '{list.option.group.color}',
        fontWeight: '{list.option.group.font.weight}',
        padding: '{list.option.group.padding}'
    },
    chip: {
        borderRadius: '{border.radius.sm}'
    },
    clearIcon: {
        color: '{form.field.icon.color}'
    },
    emptyMessage: {
        padding: '{list.option.padding}'
    },
    css: ({ dt }: ThemeStyleOptions) => `
.p-multiselect.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${dt('multiselect.filled.background')} no-repeat;
    background-image: linear-gradient(to bottom, ${dt('multiselect.focus.border.color')}, ${dt('multiselect.focus.border.color')}), linear-gradient(to bottom, ${dt('multiselect.border.color')}, ${dt('multiselect.border.color')});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: ${dt('multiselect.filled.hover.background')} no-repeat;
    background-image: linear-gradient(to bottom, ${dt('multiselect.focus.border.color')}, ${dt('multiselect.focus.border.color')}), linear-gradient(to bottom, ${dt('multiselect.hover.border.color')}, ${dt('multiselect.hover.border.color')});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${dt('multiselect.filled.focus.background')} no-repeat;
    background-image: linear-gradient(to bottom, ${dt('multiselect.focus.border.color')}, ${dt('multiselect.focus.border.color')}), linear-gradient(to bottom, ${dt('multiselect.border.color')}, ${dt('multiselect.border.color')});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${dt('multiselect.focus.border.color')}, ${dt('multiselect.focus.border.color')}), linear-gradient(to bottom, ${dt('multiselect.hover.border.color')}, ${dt('multiselect.hover.border.color')});
}

.p-multiselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${dt('multiselect.invalid.border.color')}, ${dt('multiselect.invalid.border.color')}), linear-gradient(to bottom, ${dt('multiselect.invalid.border.color')}, ${dt('multiselect.invalid.border.color')});
}

.p-multiselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${dt('multiselect.invalid.border.color')}, ${dt('multiselect.invalid.border.color')}), linear-gradient(to bottom, ${dt('multiselect.invalid.border.color')}, ${dt('multiselect.invalid.border.color')});
}

.p-multiselect-option {
    transition: none;
}
`
} satisfies MultiSelectDesignTokens;
