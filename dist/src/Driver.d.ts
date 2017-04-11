import { IStorageSetConfig, IWebStorage, ICustomStorage } from './metadata';
export declare class Driver {
    storage: IWebStorage | ICustomStorage;
    constructor(storage: IWebStorage | ICustomStorage);
    set(key: string, data: any, config?: IStorageSetConfig): void;
    get(key: string): any;
    has(key: string): boolean;
    remove(key: string): void;
    clear(): void;
    key(index?: number): string;
    isSupported(): boolean;
}
