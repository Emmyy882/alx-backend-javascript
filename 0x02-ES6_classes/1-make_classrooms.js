import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const objArray = [19, 20, 34];
  const newArray = [];

  for (const i in objArray) {
    const obj = new ClassRoom(objArray[i]);
    newArray.push(obj);
  }

  return newArray;
}
