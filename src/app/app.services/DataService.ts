import { Injectable } from '@angular/core';

@Injectable()
export class DataService
{
    sourcePools: {sourcePoolID: number, sourcePoolName: string, jobType: string[]}[];
    pts: {ptsID: number, label: string}[];
    countries: {countryID: number, label: string}[];

    constructor(){
        this.sourcePools = [
            {sourcePoolID: 332343232, sourcePoolName: 'MySourcePool', jobType: ['1','2','3']},
            {sourcePoolID: 234234323, sourcePoolName: 'MySourcePool', jobType: ['1','2','3']},
            {sourcePoolID: 326643454, sourcePoolName: 'MySourcePool', jobType: ['1','2','3']},
            {sourcePoolID: 347754565, sourcePoolName: 'MySourcePool', jobType: ['1','2','3']},
        ];
          this.pts = [
            {ptsID: 332343232, label: '332343232'},
            {ptsID: 234234323, label: '234234323'},
            {ptsID: 326643454, label: '326643454'},
            {ptsID: 347754565, label: '347754565'}
        ];
          this.countries = [
            {countryID: 1, label: 'Singapore'},
            {countryID: 2, label: 'India'},
            {countryID: 3, label: 'China'},
            {countryID: 4, label: 'HongKong'}
        ];
    }
}