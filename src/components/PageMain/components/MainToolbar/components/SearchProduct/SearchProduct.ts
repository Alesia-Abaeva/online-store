import styles from './SearchProduct.module.scss';
import { createElem } from '../../../../../../utils/create-element';
import { createInput } from '../../../../../../utils/create-input-element';
// import { searchProdInput } from '../../../../../../utils/toolbar-search-products';
import { appliedFilters } from '../../../../../../const/store';
import { renderFiltered } from '../../../Filter/filter';

export const renderSearchProduct = (node: NodeListOf<ChildNode>): HTMLElement => {
    // const catalogProduct: HTMLElement = node[0].childNodes[0] as HTMLElement;
    const searchProduct: HTMLElement = createElem('div', styles['toolbar__search-product']);
    const searchProductInput: HTMLInputElement = createInput('input', styles['search-product__input']);
    searchProductInput.setAttribute('type', 'text');
    searchProductInput.setAttribute('placeholder', 'Найти товар ...');
    const filterType = 'input';

    searchProductInput.oninput = () => {
        let valueInput: string = searchProductInput.value.toLocaleLowerCase().trim();

        if (!appliedFilters[filterType]) appliedFilters[filterType] = [];
        appliedFilters[filterType][0] = valueInput;
        renderFiltered(appliedFilters);

        // searchProdInput(valueInput, catalogProduct);
    };

    searchProduct.append(searchProductInput);

    return searchProduct;
};
