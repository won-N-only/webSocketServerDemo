import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS 활성화
  app.enableCors();

  // 환경변수에서 포트를 읽어 서버 실행
  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Noti server is running on http://localhost:${port}`);
}
bootstrap();
