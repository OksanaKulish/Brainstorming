import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
    public readonly _cookieName = 'SOCAuthToken';

    private readonly _slashChar = '/';

    public constructor() {
    }

    public get apiWebHostEndpoint(): string {
        const baseServerUri = " ";

        return baseServerUri.endsWith(this._slashChar) ? baseServerUri : baseServerUri + this._slashChar;
    }

    public get apiUsersEndpoint(): string {
        return this.apiWebHostEndpoint + 'api/users';
    }

}