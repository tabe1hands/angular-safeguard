import { IStorageSetConfig, DriverType } from './metadata';
import { DRIVERS } from './DriverTypes';
import { LockerConfig } from './LockerConfig';
export declare class Locker {
    driverTypes: DriverType[];
    lockerConfig: LockerConfig;
    private driverFallback;
    private namespace;
    private separator;
    constructor(driverTypes: DriverType[], lockerConfig: LockerConfig);
    setNamespace(namespace?: string): void;
    setSeparator(separator?: string): void;
    setDriverFallback(driverFallback?: DRIVERS | DRIVERS[]): void;
    set(type: DRIVERS, key: any, data: any, config?: IStorageSetConfig): void;
    get(type: DRIVERS, key: any): any;
    has(type: DRIVERS, key: any): boolean;
    remove(type: DRIVERS, key: any): void;
    key(type: DRIVERS, index?: any): string;
    clear(type: DRIVERS): void;
    private _makeKey(key);
    private _decodeKey(key);
    private _getDriver(type);
    private _getDriverType(type);
    private _getFallbackDriverType();
}
