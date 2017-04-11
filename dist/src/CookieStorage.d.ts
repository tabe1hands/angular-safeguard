import { ICustomStorage } from './metadata';
export declare class CookieStorage implements ICustomStorage {
    hasItem(key: any): boolean;
    getItem(key: any): any;
    setItem(key: any, value: any, config: any): void;
    removeItem(key: any): void;
    clear(): void;
    key(index: any): string;
    readonly length: number;
}
