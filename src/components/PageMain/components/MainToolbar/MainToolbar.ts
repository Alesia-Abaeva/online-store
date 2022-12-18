import { PRODUCTS } from '../../../../const/products';
import { createElem } from '../../../../utils/create-element';
import { renderSearchProduct } from './components/SearchProduct/SearchProduct';
import { renderSelectSort } from './components/SelectSort/SelectSort';
import styles from './MainToolbar.module.scss';

export const renderMainToolbar = (): HTMLElement => {
    const mainToolbar: HTMLElement = createElem('div', styles['main__toolbar']);

    const selectSort: HTMLElement = renderSelectSort();
    const productQuantity: HTMLElement = createElem('div', styles['toolbar__quantity']);
    productQuantity.innerHTML = `FOUND: ${String(PRODUCTS.length)}`;

    const searchProduct: HTMLElement = renderSearchProduct();

    mainToolbar.append(searchProduct, productQuantity, selectSort);

    return mainToolbar;
};
