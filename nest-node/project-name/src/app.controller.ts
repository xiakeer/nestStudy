import { Controller, Get, HttpCode, Post, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(@Inject('abc') private readonly appService: AppService,
    @Inject('test') private readonly shop: string[]
  ) { }

  @Get()
  getHello(): string[] {
    return this.shop;
  }
}
