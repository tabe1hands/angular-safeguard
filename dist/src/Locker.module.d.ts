import { ModuleWithProviders } from '@angular/core';
import { ILockerConfig } from './metadata';
export declare class LockerModule {
    static withConfig(userConfig: ILockerConfig): ModuleWithProviders;
}
