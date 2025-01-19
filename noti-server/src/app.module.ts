import { Module } from '@nestjs/common';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [NotificationModule], // Notification 모듈 추가
})
export class AppModule {}
