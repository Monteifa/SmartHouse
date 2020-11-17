import { createContext } from 'react';

export interface LogContext {
  name: string;
  status: boolean;
}

const ActionsLogContext = createContext<LogContext[]>([]);

export default ActionsLogContext;
