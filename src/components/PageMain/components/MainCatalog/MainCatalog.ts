import { PRODUCTS } from '../../../../const/products';
import { createElem } from '../../../../utils/create-element';
import { newNameProduct } from '../../../../utils/edit-name-products';
// import { newPrice } from '../../../../utils/edit-price';
import { renderProductPrice } from '../MainToolbar/components/ProductPrice/ProductPrice';
import styles from './MainCatalog.module.scss';

export const renderMainCatalog = (): HTMLElement => {
    const catalog: HTMLElement = createElem('div', styles['catalog']);
    const catalogWrapper: HTMLElement = createElem('div', styles['catalog_wrapper']);

    const catalogProduct: HTMLElement = createElem('div', styles['catalog_products']);

    for (let i = 0; i < PRODUCTS.length; i++) {
        console.log();
        const productCard: HTMLElement = createElem('div', 'products-card');
        const productCardOverlay: HTMLElement = createElem('div', 'products-card__overlay');

        // оберка ссылки - здесь же ховер
        const productLink: HTMLElement = createElem('a', 'products-card__link');
        productLink.setAttribute('href', `/product/${PRODUCTS[i].id}`);
        productLink.setAttribute('target', '_blank');

        const productBodyWrapper = createElem('div', 'product-card__body-wrapper');

        // изображение товара
        const productImg: HTMLElement = createElem('div', 'product-card__image');

        const img: HTMLElement = createElem('img', 'image-product');
        img.setAttribute('src', PRODUCTS[i].thumbnail);

        productImg.append(img);

        // описание товара
        const productDesc: HTMLElement = createElem('div', 'product-card__descriptions');
        const productTitle: HTMLElement = createElem('div', 'product-card__title');
        const productBrand: HTMLElement = createElem('p', 'product-card__title-brand');
        const productName: HTMLElement = createElem('span', 'product-card__title-name');
        productBrand.innerHTML = PRODUCTS[i].brand;
        productName.innerHTML = newNameProduct(PRODUCTS[i].brand, PRODUCTS[i].title);

        productTitle.append(productBrand, productName);

        //цена товара
        const productPrice: HTMLElement = renderProductPrice(PRODUCTS[i], 'main');

        const productOrder: HTMLElement = createElem('div', 'product-card__price-order');
        productOrder.innerHTML = 'В корзину';

        const sizeWrapper: HTMLElement = createElem('div', styles['product-card__sizes-wrapper']);

        productDesc.append(productTitle, productPrice);

        productBodyWrapper.append(productImg, productDesc);

        productLink.append(productBodyWrapper);

        productCard.append(productCardOverlay, productLink, productOrder, sizeWrapper);

        catalogProduct.append(productCard);

        productCard.onmouseenter = () => {
            PRODUCTS[i].sizes.forEach((elem) => {
                const productSize: HTMLElement = createElem('div', styles['product-card__sizes']);

                productSize.innerHTML = elem;
                sizeWrapper.classList.add('show_sizes');
                sizeWrapper.append(productSize);

                productSize.onclick = () => {
                    console.log('ВЫБРАЛИ РАЗМЕР', productSize.textContent);
                    productSize.classList.add('active-size');
                    productOrder.classList.add('active-size');
                }; //TODO - перенести в функцию отдельно от onmouseenter
            });
        };

        productCard.onmouseleave = () => {
            sizeWrapper.innerHTML = '';
        };

        productOrder.onclick = () => {
            console.log('В КОРЗИНУ');
        };
    }

    catalogWrapper.append(catalogProduct);
    catalog.append(catalogWrapper);

    return catalog;
};
