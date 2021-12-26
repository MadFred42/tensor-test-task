import { sections as initialConfig } from '../config';

export default class ConfigService {
    static getConfig = () => {
        return initialConfig;
    };        
};