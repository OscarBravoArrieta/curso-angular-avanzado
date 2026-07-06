import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RouterLinkWithHref } from '@angular/router';

@Component({
    selector: 'app-not-found',
    imports: [RouterLinkWithHref],
    templateUrl: './not-found.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent {}
