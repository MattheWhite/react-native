const GOOGLE_API_KEY = "XYZ";

/**
 * Should use your own Google account -> GCP -> Google Maps API Key
 * 
 * @param {*} latitude 
 * @param {*} longitude 
 * @returns image preview URL with your API KEY included
 */
export function getMapPreview(latitude, longitude) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&mapType=roadmap&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

/**
 * Should use your own Google Cloud account -> GCP -> geocoding API
 * 
 * @param {*} latitude
 * @param {*} longitude 
 * @returns human readable address from the selected coordinates 
 */
export async function getAddress(latitude, longitude) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address!");
  }

  const data = await response.json();
  const address = data.results[0].formatted_address; // official docs gives this field
  return address;
}
