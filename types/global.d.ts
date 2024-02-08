export declare global {
  interface CtxOptions {
    lineWidth: number;
    lineColor: RgbaColor;
    fillColor: RgbaColor;
    shape: Shape;
  }

  interface Shape {}

  interface ServerToClient {
    room_exists: (exists: boolean) => void;
    joined: (roomId: string, failed?: boolean) => void;
    room: (room: Room, usersMovesToParse: string, usersToParse: string) => void;
    created: (roomId: string) => void;
    your_move: (move: Move) => void;
    user_draw: (move: Move, userId: string) => void;
    user_undo(userId: string): void;
    mouse_moved: (x: number, y: number, userId: string) => void;
    new_user: (userId: string, username: string) => void;
    user_disconnected: (userId: string) => void;
    new_msg: (userId: string, msg: string) => void;
  }

  interface ClientToServer {
    check_room: (roomId: string) => void;
    draw: (move: Move) => void;
    mouse_move: (x: number, y: number) => void;
    undo: () => void;
    create_room: (username: string) => void;
    join_room: (room: string, username: string) => void;
    joined_room: () => void;
    leave_room: () => void;
    send_msg: (msg: string) => void;
  }
}
