import type { MenubarDesignTokens, MenubarTokenSections } from '@primeuix/themes/types/menubar';

export const root: MenubarTokenSections.Root = {
    borderColor: 'transparent',
    borderRadius: '{content.border.radius}',
    color: '{content.color}',
    gap: '0.5rem',
    padding: '0.75rem 1rem',
    transitionDuration: '{transition.duration}'
};

export const baseItem: MenubarTokenSections.BaseItem = {
    borderRadius: '{content.border.radius}',
    padding: '0.75rem 1rem'
};

export const item: MenubarTokenSections.Item = {
    focusBackground: '{navigation.item.focus.background}',
    activeBackground: '{navigation.item.active.background}',
    color: '{navigation.item.color}',
    focusColor: '{navigation.item.focus.color}',
    activeColor: '{navigation.item.active.color}',
    padding: '{navigation.item.padding}',
    borderRadius: '{navigation.item.border.radius}',
    gap: '{navigation.item.gap}',
    icon: {
        color: '{navigation.item.icon.color}',
        focusColor: '{navigation.item.icon.focus.color}',
        activeColor: '{navigation.item.icon.active.color}'
    }
};

export const submenu: MenubarTokenSections.Submenu = {
    padding: '{navigation.list.padding}',
    gap: '{navigation.list.gap}',
    background: '{content.background}',
    borderColor: '{content.border.color}',
    borderRadius: '{content.border.radius}',
    shadow: '{overlay.navigation.shadow}',
    mobileIndent: '1.25rem',
    icon: {
        size: '{navigation.submenu.icon.size}',
        color: '{navigation.submenu.icon.color}',
        focusColor: '{navigation.submenu.icon.focus.color}',
        activeColor: '{navigation.submenu.icon.active.color}'
    }
};

export const separator: MenubarTokenSections.Separator = {
    borderColor: '{content.border.color}'
};

export const mobileButton: MenubarTokenSections.MobileButton = {
    borderRadius: '50%',
    size: '2rem',
    color: '{text.muted.color}',
    hoverColor: '{text.hover.muted.color}',
    hoverBackground: '{content.hover.background}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const colorScheme: MenubarTokenSections.ColorScheme = {
    light: {
        root: {
            background: '{surface.50}'
        }
    },
    dark: {
        root: {
            background: '{surface.800}'
        }
    }
};

export default {
    root,
    baseItem,
    item,
    submenu,
    separator,
    mobileButton,
    colorScheme
} satisfies MenubarDesignTokens;
