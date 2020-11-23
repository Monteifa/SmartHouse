import React, { createContext, useState } from 'react';

export interface NotificationProps {
  name?: string;
  status?: boolean;
}
export interface NotificationContextData {
  notifications: NotificationProps[];
  addNotification(name: string, status: boolean): void;
}

const NotificationContext = createContext<NotificationContextData>(
  {} as NotificationContextData
);

export const NotificationProvider: React.FC = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  function addNotification(name: string, status: boolean) {
    setNotifications([...notifications, { name, status }]);
  }

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
