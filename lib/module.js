import { NgModule } from '@angular/core';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ConfigPipe } from './pipe';
import { ConfigService } from './service';

@NgModule({
    declarations: [
        ConfigPipe
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ConfigService
    ]
})
export class ConfigModule {}
