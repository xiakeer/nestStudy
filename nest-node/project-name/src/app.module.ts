import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CatsController } from './cat.controller'
import { DemoModule } from './demo/demo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DemoModule, UserModule],
  controllers: [AppController],
  providers: [{
    provide: 'abc',
    useClass: AppService
  }, {
    provide: 'test',
    useValue: ['a', 'b', 'c']
  }, {
    provide: 'factory',
    useFactory() {
      
    }
  }],
})
export class AppModule { }
