import { BaseDomain } from './base-domain';
import { ExperimentConfig } from './experiment-config';

export class ExperimentRecord extends BaseDomain {
    experiment: number;
    config: number;
    model: number;
    configObj?: ExperimentConfig;
}
