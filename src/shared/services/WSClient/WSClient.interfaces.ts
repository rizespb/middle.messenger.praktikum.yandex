type TWSListener = (event: MessageEvent) => void;

export type IWSListeners = Partial<Record<keyof WebSocketEventMap, TWSListener[]>>;
