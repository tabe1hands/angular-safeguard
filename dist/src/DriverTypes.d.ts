import { OpaqueToken } from '@angular/core';
import { PollyfillDriver } from './PolyfillDriver';
import { Driver } from './Driver';
import { DriverType } from './metadata';
export declare const enum DRIVERS {
    LOCAL = 0,
    SESSION = 1,
    MEMORY = 2,
    COOKIE = 3,
}
export declare class LocalStorageDriver implements DriverType {
    storage: PollyfillDriver;
    type: DRIVERS;
}
export declare class SessionStorageDriver implements DriverType {
    storage: PollyfillDriver;
    type: DRIVERS;
}
export declare class MemoryStorageDriver implements DriverType {
    storage: PollyfillDriver;
    type: DRIVERS;
}
export declare class CookieStorageDriver implements DriverType {
    storage: Driver;
    type: DRIVERS;
}
export declare const LOCKER_DRIVER_TYPES: OpaqueToken;
export declare const DRIVER_TYPES_PROVIDERS: {
    provide: OpaqueToken;
    multi: boolean;
    useValue: typeof CookieStorageDriver;
}[];
