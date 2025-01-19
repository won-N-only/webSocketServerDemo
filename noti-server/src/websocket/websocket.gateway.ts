import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true }) // CORS 허용
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  // 클라이언트가 연결되었을 때 실행
  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  // 클라이언트가 연결 해제되었을 때 실행
  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  // 특정 메시지를 클라이언트로 전송
  sendMessageToClient(message: string) {
    this.server.emit('notification', message); // 'notification' 이벤트로 메시지 전송
  }
}
