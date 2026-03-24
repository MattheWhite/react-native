class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //  { latitude: number, longitude: number }
    this.id = new Date().toString() + Math.random().toString();
  }
}
