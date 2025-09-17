// Sample NGO locations
  const ngos = [
    { name: "Helping Hands", region: "North", status: "Active", lat: 40.4093, lng: 49.8671 },
    { name: "Green Future", region: "South", status: "Inactive", lat: 39.9208, lng: 48.4562 },
    { name: "Health Aid", region: "East", status: "Active", lat: 40.1000, lng: 49.6000 },
    { name: "Education First", region: "West", status: "Active", lat: 40.2000, lng: 49.5000 }
  ];

  // Initialize map
  const map = L.map('map').setView([40.4093, 49.8671], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  let markers = [];

  function displayMarkers(data) {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    data.forEach(ngo => {
      const marker = L.marker([ngo.lat, ngo.lng])
        .bindPopup(`<b>${ngo.name}</b><br>Region: ${ngo.region}<br>Status: ${ngo.status}`)
        .addTo(map);
      markers.push(marker);
    });
  }

  // Initial display
  displayMarkers(ngos);

  // Filter function
  function filterNGOs() {
    const region = document.getElementById('regionFilter').value;
    const status = document.getElementById('statusFilter').value;
    const search = document.getElementById('searchInput').value.toLowerCase();

    const filtered = ngos.filter(ngo => 
      (!region || ngo.region === region) &&
      (!status || ngo.status === status) &&
      (!search || ngo.name.toLowerCase().includes(search))
    );

    displayMarkers(filtered);
  }

  document.getElementById('regionFilter').addEventListener('change', filterNGOs);
  document.getElementById('statusFilter').addEventListener('change', filterNGOs);
  document.getElementById('searchInput').addEventListener('input', filterNGOs);