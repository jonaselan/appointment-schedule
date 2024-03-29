import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Appointment Schedule')
    .addTag('users')
    .addTag('appointments')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-docs', app, document);

  const logger = new Logger();
  const port = process.env.PORT ?? 3000;

  await app.listen(port).then(() => {
    logger.log(`Listening on port ${port}`, 'Bootstrap');
  });
}
bootstrap();
