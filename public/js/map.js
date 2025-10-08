mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});
console.log(listing.geometry.coordinates);
const marker1 = new mapboxgl.Marker({ color: "red " })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 20 }).setHTML(
      `<h5><b>${listing.title}</b></h5><p>${listing.location}</p>`
    )
  )
  .addTo(map);
