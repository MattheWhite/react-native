export class Place {
  constructor(title, imageUri, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = {lat: location.lat, lng: location.lng}; //  { latitude: number, longitude: number }
    this.id = new Date().toString() + Math.random().toString();
  }
}
