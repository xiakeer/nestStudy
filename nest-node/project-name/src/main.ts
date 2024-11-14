import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common'
import { AppModule } from './app.module';
import * as session from 'express-session'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  app.enableVersioning({
    type: VersioningType.URI
  })
  app.use(session({ secret: 'peng', rolling: true, name: 'peng123', cookie: { maxAge: 999999 } }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
