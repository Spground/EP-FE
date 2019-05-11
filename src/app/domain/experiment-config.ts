import { BaseDomain } from './base-domain';

export class ExperimentConfig extends BaseDomain {
    experiment: number;
    config_json: string;
}