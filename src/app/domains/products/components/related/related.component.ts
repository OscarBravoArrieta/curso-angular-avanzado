import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductService } from '@shared/services/product.service';
import { ProductComponent } from '../product/product.component';

@Component({
    selector: 'app-related',
    imports: [ProductComponent],
    templateUrl: './related.component.html',
    styleUrl: './related.component.css',
})
export class RelatedComponent {

    productService = inject(ProductService)

    $slug = input.required<string>({ alias: 'slug'})

    relatedProducts = rxResource({
        params: () => ({
            slug: this.$slug()
        }),
        stream: ({ params }) => {
            return this.productService.getRelatedProducts(params.slug);
        }
    })


}
