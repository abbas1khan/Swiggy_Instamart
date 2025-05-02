import React, { ReactNode } from 'react';
import { TamaguiProvider } from '@tamagui/core';
import { tamaguiConfig } from './config';

export const StyleProvider = ({ children }: { children: ReactNode }) => (
    <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>
);
