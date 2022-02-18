import { createAction } from '@reduxjs/toolkit';

export const addShoppingOneElement = createAction('user/addShoppingOneElement');

export const addShopping = createAction('user/addShopping');

export const removeShopping = createAction('user/removeShopping');

export const deleteProduct = createAction('user/deleteProduct');

export const addLoveProduct = createAction('user/addLoveProduct');

export const deleteLoveProduct = createAction('user/deleteLoveProduct');
