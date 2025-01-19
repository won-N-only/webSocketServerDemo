import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class NotificationService {
  constructor(private readonly httpService: HttpService) {}

  async sendNotification(payload: any) {
    const url = 'http://noti-server-url/notify'; // Noti 서버의 알림 API 엔드포인트
    try {
      const response = await lastValueFrom(this.httpService.post(url, payload));
      return response.data;
    } catch (error) {
      console.error('Error sending notification:', error.message);
      throw error;
    }
  }
}
