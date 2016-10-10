import { Pipe } from '@angular/core';
import { ConfigService } from './';

@Pipe({ name: 'config' })
export class ConfigPipe {

  constructor(configService: ConfigService) {
    this._configService = configService;
  }

  transform(value) {
    return this._configService.get(value);
  }

}
