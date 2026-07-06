import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
    selector: 'app-layout',
    imports: [HeaderComponent, RouterModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './layout.component.html',
})
export class LayoutComponent {}
