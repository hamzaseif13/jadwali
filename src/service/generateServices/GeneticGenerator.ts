import { Section } from '../../entity/Section';
import {Generator }from './BruteForceGenerator'
import { Options } from './generateService';

export class GeneticGenerator extends Generator {
   
    constructor(options: Options) {
        super(options);
      }
    public generate(): Promise<Section[][]> {
        return this.fetchSections(this.options.courses).then(sections=> {
            return [];            
        })
    }

}