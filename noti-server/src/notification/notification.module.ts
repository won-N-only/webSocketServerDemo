import { Module } from '@nestjs/common';
import { WebsocketGateway } from '../websocket/websocket.gateway';
import { NotificationController } from './notification.controller';

@Module({
  controllers: [NotificationController],
  providers: [WebsocketGateway], // WebSocket Gateway 등록
})
export class NotificationModule {}
