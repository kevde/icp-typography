import React from 'react';

import { ThemeProvider, Typography as MuiTypography } from '@mui/material';
import './Typography.css';
import { darkTheme } from '../styles/theme';
interface TypographyProps {
  /**
   * How the typography variant should be?
   */
  variant?: "h1" | "h2" | "h3" | "h4" | "s1" | "s2" | "s3" | "s4" | "p1" | "p2" | "p3" | "p4" | "c1" | "c2" | "c3" | "c4" | "c5" | "c6";
  /**
   * Text containing of the typography element?
   */
  children: any;
  mode?: "dark" | "light";
  /**
   * Is the text primary?
   */
  primary?: boolean;
}

const THICKNESS: any = {
  HEADLINE: 700,
  SEMI_BOLD: 600,
  MEDIUM: 500,
  REGULAR: 400
}

const VARIANT_DETAILS: any = {
  h1: { fontWeight: THICKNESS.HEADLINE, fontSize: '48pt' },
  h2: { fontWeight: THICKNESS.SEMI_BOLD, fontSize: '40pt' },
  h3: { fontWeight: THICKNESS.SEMI_BOLD, fontSize: '32pt' },
  h4: { fontWeight: THICKNESS.SEMI_BOLD, fontSize: '24pt' },
  s1: { fontWeight: THICKNESS.SEMI_BOLD, fontSize: '18pt' },
  s2: { fontWeight: THICKNESS.MEDIUM, fontSize: '18pt' },
  s3: { fontWeight: THICKNESS.SEMI_BOLD, fontSize: '16pt' },
  s4: { fontWeight: THICKNESS.MEDIUM, fontSize: '16pt' },
  s5: { fontWeight: THICKNESS.SEMI_BOLD, fontSize: '14pt' },
  p1: { fontWeight: THICKNESS.MEDIUM, fontSize: '14pt' },
  p2: { fontWeight: THICKNESS.REGULAR, fontSize: '14pt' },
  p3: { fontWeight: THICKNESS.MEDIUM, fontSize: '12pt' },
  p4: { fontWeight: THICKNESS.REGULAR, fontSize: '12pt' },
  c1: { fontWeight: THICKNESS.MEDIUM, fontSize: '12pt' },
  c2: { fontWeight: THICKNESS.REGULAR, fontSize: '12pt' },
  c3: { fontWeight: THICKNESS.MEDIUM, fontSize: '10pt' },
  c4: { fontWeight: THICKNESS.REGULAR, fontSize: '10pt' },
  c5: { fontWeight: THICKNESS.MEDIUM, fontSize: '8pt' },
  c6: { fontWeight: THICKNESS.REGULAR, fontSize: '8pt' },
}

export const Typography = ({
  children = 'Default Text',
  variant = 'h1',
  mode = 'dark',
  primary = false,
}: TypographyProps) => (
  <ThemeProvider theme={darkTheme}>
      <MuiTypography variant={variant} style={VARIANT_DETAILS[variant]}>
        {children}
      </MuiTypography>
  </ThemeProvider>
);
