import React from 'react';

import { ThemeProvider, Typography as MuiTypography } from '@mui/material';
import './Typography.css';
import { darkTheme, lightTheme } from '../styles/theme';

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

export const Typography = ({
  children = 'Default Text',
  variant = 'h1',
  mode = 'dark',
  primary = false,
}: TypographyProps) => (
  <ThemeProvider theme={darkTheme}>
    <MuiTypography className={variant}>
      {children}
    </MuiTypography>
  </ThemeProvider>
);
