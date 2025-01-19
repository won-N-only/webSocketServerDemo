import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Module({
  imports: [HttpModule], // HTTP 요청을 위한 모듈 추가
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
