const GOOGLE_API_KEY = "XYZ";


// should use your own Google account -> GCP -> Google Maps API Key

export function getMapPreview(latitude, longitude) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&mapType=roadmap&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

// should use your own Google Cloud account -> GCP -> geocoding API

export async function getAddress(latitude, longitude) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
  await fetch();
}
