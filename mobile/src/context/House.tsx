import { createContext } from 'react';

export interface HouseProps {
  _id: number;
  name: string;
  rooms?: [
    {
      name: string;
      icon?: string;
      add?: boolean;
      devices?: [
        {
          name: string;
          status: boolean;
        }
      ];
    }
  ];
}

const HouseContext = createContext<HouseProps>({} as HouseProps);

export default HouseContext;
