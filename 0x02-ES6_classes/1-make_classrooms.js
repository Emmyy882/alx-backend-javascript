import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const objArray = [19, 20, 34];
  const newArray = [];

  // eslint-disable-next-line guard-for-in
  for (const i in objArray) {
    const obj = new ClassRoom(objArray[i]);
    newArray.push(obj);
  }

  return newArray;
}
