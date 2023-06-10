import mapboxgl from 'mapbox-gl';

export const showMap = (long, lat) => {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
  console.log(process.env.REACT_APP_MAPBOX_KEY)

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [long, lat],
    zoom: 15,
  });

  const marker = new mapboxgl.Marker().setLngLat([long, lat]).addTo(map);

  map.on('click', (event) => {
    marker.setLngLat(event.lngLat);
  });
};