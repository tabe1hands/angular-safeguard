import { ICustomStorage } from './metadata';
export declare class MemoryStorage implements ICustomStorage {
    hasItem(key: any): any;
    getItem(key: any): any;
    setItem(key: any, value: any, config: any): void;
    removeItem(key: any): void;
    clear(): void;
    key(index: any): any;
    readonly length: any;
}
