import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ThemePortalProvider } from './theme';


const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ThemePortalProvider>
      <ToastProvider>{children}</ToastProvider>
    </ThemePortalProvider>
  </AuthProvider>
);

export default AppProvider;