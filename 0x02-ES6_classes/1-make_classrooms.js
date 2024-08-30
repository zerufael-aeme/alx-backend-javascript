function initializeRooms() {
    return [
        `ClassRoom { _maxStudentsSize: ${new ClassRoom(19)._maxStudentsSize}}`,
        `ClassRoom { _maxStudentsSize: ${new ClassRoom(20)._maxStudentsSize}}`,
        `ClassRoom { _maxStudentsSize: ${new ClassRoom(34)._maxStudentsSize}}`
    ];
}
console.log(initializeRooms());
