import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search',
    imports: [FormsModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './search.component.html',
})
export class SearchComponent {
    search = signal('');
}
