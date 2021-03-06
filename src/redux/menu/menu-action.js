import { createAction } from '@reduxjs/toolkit';

export const openMenuPrice = createAction('menu/openMenuPrice');
export const closeMenuPrice = createAction('menu/closeMenuPrice');

export const openMenuDimensions = createAction('menu/openMenuDimensions');
export const closeMenuDimensions = createAction('menu/closeMenuDimensions');

export const openMenuColors = createAction('menu/openMenuColors');
export const closeMenuColors = createAction('menu/closeMenuColors');

export const openMenuCollection = createAction('menu/openMenuCollection');
export const closeMenuCollection = createAction('menu/closeMenuCollection');

export const openMenuProductMicros = createAction('menu/openMenuProductMicros');
export const closeMenuProductMicros = createAction(
  'menu/closeMenuProductMicros',
);

export const openMenuNoText = createAction('menu/openMenuNoText');
export const closeMenuNoText = createAction('menu/closeMenuNoText');
