import { Body, Controller, Post } from '@nestjs/common';
import { WebsocketGateway } from '../websocket/websocket.gateway';

@Controller('notify') // SLC 서버에서 요청받을 엔드포인트
export class NotificationController {
  constructor(private readonly websocketGateway: WebsocketGateway) {}

  @Post() // POST 요청 처리
  async handleNotification(@Body() data: any) {
    console.log('Received notification data:', data);

    // WebSocket Gateway를 통해 메시지 전송
    const { message } = data;
    this.websocketGateway.sendMessageToClient(message);

    return {
      success: true,
      message: 'Notification sent to WebSocket clients.',
    };
  }
}
