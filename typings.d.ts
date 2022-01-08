declare module '@mui/material/styles' {
  interface TypographyVariants {
    s1: React.CSSProperties;
    s2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    s1?: React.CSSProperties;
    s2?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    s1: true;
    s2: true;
  }
}