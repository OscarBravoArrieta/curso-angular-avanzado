import { Component, inject, input, resource } from '@angular/core';

import { RouterLinkWithHref } from '@angular/router';
import { ProductComponent } from '@products/components/product/product.component';

import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-list',
    imports: [ProductComponent, RouterLinkWithHref],
    templateUrl: './list.component.html',
})
export default class ListComponent {
    private cartService = inject(CartService);
    private productService = inject(ProductService);
    private categoryService = inject(CategoryService);
    readonly slug = input<string>();

    //Evaluate the use of categoryResource and categoryResourceRx

    categoryResource = rxResource({
        loader: () => this.categoryService.getAll(),
    });

    categoryResourceRx = resource({
        loader: () => this.categoryService.getAllPromise(),
    });

    productsResource = rxResource({
        request: () => ({ category_slug: this.slug() }),
        loader: ({ request }) => this.productService.getProducts(request),
    });

    addToCart(product: Product) {
        this.cartService.addToCart(product);
    }

    resetCategries() {
        this.categoryResource.set([]);
    }

    reloadCategories() {
        this.categoryResource.reload();
    }

    reloadProducts() {
        this.productsResource.reload();
    }
}
