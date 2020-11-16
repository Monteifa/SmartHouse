import Device from 'src/models/Device';
import Room from 'src/models/Room';

export function findRoomIndex(rooms: Room[], roomName: string): number | null {
  let roomIndex: number | null;
  rooms.map((room, index) => room.name === roomName && (roomIndex = index));

  return roomIndex;
}

export function findDeviceIndex(
  devices: Device[],
  deviceName: string
): number | null {
  let deviceIndex: number | null;
  devices.map(
    (device, index) => device.name === deviceName && (deviceIndex = index)
  );

  return deviceIndex;
}
