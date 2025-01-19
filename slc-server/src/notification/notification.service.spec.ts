import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class NotificationService {
  private notiServerUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.notiServerUrl = this.configService.get<string>('NOTI_SERVER_URL');
  }

  async sendNotification(payload: any) {
    try {
      const response = await lastValueFrom(
        this.httpService.post(this.notiServerUrl, payload),
      );
      return response.data;
    } catch (error) {
      console.error('Error sending notification:', error.message);
      throw error;
    }
  }
}
