import type { ProgressSpinnerDesignTokens, ProgressSpinnerTokenSections } from '@primeuix/themes/types/progressspinner';

export const colorScheme: ProgressSpinnerTokenSections.ColorScheme = {
    light: {
        root: {
            colorOne: '{pink.500}',
            colorTwo: '{sky.500}',
            colorThree: '{emerald.500}',
            colorFour: '{amber.500}'
        }
    },
    dark: {
        root: {
            colorOne: '{pink.400}',
            colorTwo: '{sky.400}',
            colorThree: '{emerald.400}',
            colorFour: '{amber.400}'
        }
    }
};

export default {
    colorScheme
} satisfies ProgressSpinnerDesignTokens;
