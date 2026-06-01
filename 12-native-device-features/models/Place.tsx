export class Place {
  constructor(title, imageUri, location, id) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = {lat: location.lat, lng: location.lng}; //  { latitude: number, longitude: number }
    // this.id = new Date().toString() + Math.random().toString();
    this.id = id; // will be set at last by database and when it is fetched, at object initialization it will be received now
  }
}
