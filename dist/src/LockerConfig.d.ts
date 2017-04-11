import { OpaqueToken } from '@angular/core';
import { ILockerConfig } from './metadata';
import { DRIVERS } from './DriverTypes';
export declare const LOCKER_USER_CONFIG: OpaqueToken;
export declare const USER_CONFIG_PROVIDER: {
    provide: OpaqueToken;
    useValue: {
        namespaceSeparator: string;
        driverFallback: DRIVERS;
        driverNamespace: string;
    };
};
export declare class LockerConfig {
    driverNamespace: string;
    driverFallback: DRIVERS | DRIVERS[];
    namespaceSeparator: string;
    constructor(config: ILockerConfig);
}
