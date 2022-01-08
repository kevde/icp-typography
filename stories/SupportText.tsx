import React from 'react';

import { CssBaseline, ThemeProvider, Typography as MuiTypography } from '@mui/material';
import './Typography.css';
import { createTheme } from '../styles/theme';
import { VARIANT_DETAILS } from '../styles/typography';
import basic from '../styles/colors/basic';

interface SupportTextProps {
  /**
   * How the SupportText variant should be?
   */
  variant?: "s5" | "p1" | "p2" | "p3" | "p4" | "c1" | "c2" | "c3" | "c4" | "c5" | "c6";
  status?: "hint" | "success" | "info" | "warning";
  /**
   * Text containing of the SupportText element?
   */
  children: any;
  mode?: "dark" | "light";
  /**
   * Is the text primary?
   */
  primary?: boolean;
  disabled?: boolean;
}

export const SupportText = ({
  children = 'Support Text',
  variant = 's5',
  mode = 'dark',
  status = 'hint',
  primary = false,
  disabled = false,
}: SupportTextProps) => {
  const isDarkMode = mode === 'dark'
  const isHint = status === 'hint'
  const hintColor = isDarkMode ? basic[200] : basic[400]
  const statusColor = `${status}.${mode}`
  return (
    <ThemeProvider theme={createTheme(isDarkMode)}>
      <CssBaseline />
      <MuiTypography sx={{
        ...VARIANT_DETAILS[variant],
        color: disabled ? 'text.disabled' : primary ? 'primary.main' : isHint ? hintColor : statusColor
      }}>
        {children}
      </MuiTypography>
    </ThemeProvider>
  )
};
