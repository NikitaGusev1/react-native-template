export type TDefault = typeof defaultTheme;

const defaultTheme = {
  colors: {
    text: '#000000',
    background: '#FFFFFF',
    main: '#FFA500',
    divider: '#D3D3D3',
  },

  // TODO: windowWidth and windowHeight through Dimensions API

  sizes: {
    spacing: 8,
    appPadding: 16,
    header: 24,
    getSpacing: (multiplier: number) => multiplier * defaultTheme.sizes.spacing,
    categoryContainerWidth: 200,
  },

  font: {
    size: {
      regular: '16px',
      h1: '24px',
      small: '14px',
    },
    weight: {
      regular: 400,
      bold: 700,
    },
  },

  roundness: {
    button: 24,
  },
};

export { defaultTheme };
