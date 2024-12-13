import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('FlyStore')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(5000);
  const logger: Logger = new Logger('App Logic', {
    timestamp: true,
  });
  logger.log('app running on ');
}
bootstrap();




