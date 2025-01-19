import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification/notification.service';

@Controller('tasks') // SLC 서버의 API 엔드포인트
export class AppController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('trigger-notification')
  async triggerNotification(@Body() data: any) {
    // Noti 서버로 알림 전송
    await this.notificationService.sendNotification(data);

    return { success: true, message: 'Notification sent to Noti server.' };
  }
}
