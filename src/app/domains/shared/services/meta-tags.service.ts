import { inject, Service } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser'
import { environment } from '@environments/environment';

export interface PageMetaData {
    title: string
    description: string
    image: string
    url: string
}

const defaultMetaData: PageMetaData = {
    title: 'ngStore',
    description: 'No Store is a store for Ng products',
    image: 'http://picsum.photho/200/300',
    url: environment.domain
}


@Service()
export class MetaTagsService {

    titleService = inject(Title)
    metaService = inject(Meta)

    updtaMetaTags(metaData: Partial<PageMetaData>) {
        const metaDataToUpdate = {
            ...defaultMetaData,
            ...metaData
        }

        const tags = this.generateMetaTagsDefinitions(metaDataToUpdate)

        tags.forEach(tag => this.metaService.updateTag(tag))

        this.titleService.setTitle(metaData.title || defaultMetaData.title)

    }

    private generateMetaTagsDefinitions(metaData: PageMetaData): MetaDefinition[] {
        return [
            {
                name: 'title',
                content: metaData.title
            },
            {
                name: 'description',
                content: metaData.description
            },
            {
                property: 'og:title',
                content: metaData.title
            },
            {
                property: 'og:description',
                content: metaData.description
            },                                    
            {
                property: 'og:image',
                content: metaData.image
            },
            {
                property: 'og:url',
                content: metaData.url
            },
        ]

    }
}
