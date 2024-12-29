const map = L.map("map").setView([28.6139, 77.209], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

const trafficCameras = [
  {
    id: 1,
    location: "Connaught Place",
    status: "🟢 online",
    lat: 28.6315,
    lng: 77.2167,
    image: "/camera1.png",
  },
  {
    id: 2,
    location: "India Gate",
    status: "🟢 online",
    lat: 28.6129,
    lng: 77.2295,
    image: "/camera2.png",
  },
  {
    id: 3,
    location: "Red Fort",
    status: "🟢 online",
    lat: 28.6562,
    lng: 77.241,
    image: "/camera3.png",
  },
  {
    id: 4,
    location: "Akshardham Temple",
    status: "⚪ offline",
    lat: 28.6127,
    lng: 77.2773,
    image: "/camera4.png",
  },
  {
    id: 5,
    location: "Qutub Minar",
    status: "🟢 online",
    lat: 28.5245,
    lng: 77.1855,
    image: "/camera5.png",
  },
  {
    id: 6,
    location: "Chandni Chowk",
    status: "🟢 online",
    lat: 28.6506,
    lng: 77.2244,
    image: "/camera6.png",
  },
  {
    id: 7,
    location: "Karol Bagh",
    status: "🟢 online",
    lat: 28.6478,
    lng: 77.196,
    image: "/camera7.png",
  },
  {
    id: 8,
    location: "Gurudwara Bangla Sahib",
    status: "🟢 online",
    lat: 28.6281,
    lng: 77.2193,
    image: "/camera8.png",
  },
  {
    id: 9,
    location: "Lajpat Nagar",
    status: "⚪ offline",
    lat: 28.5728,
    lng: 77.2474,
    image: "/camera9.png",
  },
  {
    id: 10,
    location: "Connaught Place - Outer Circle",
    status: "🟢 online",
    lat: 28.6345,
    lng: 77.217,
    image: "/camera10.png",
  },
  {
    id: 11,
    location: "Minto Road",
    status: "⚪ offline",
    lat: 28.6239,
    lng: 77.2091,
    image: "/camera11.png",
  },
  {
    id: 12,
    location: "AIIMS",
    status: "🟢 online",
    lat: 28.5882,
    lng: 77.2077,
    image: "/camera12.png",
  },
  {
    id: 13,
    location: "Rajpath",
    status: "🟢 online",
    lat: 28.6155,
    lng: 77.216,
    image: "/camera13.png",
  },
  {
    id: 14,
    location: "Ring Road - Naraina",
    status: "🟢 online",
    lat: 28.607,
    lng: 77.1593,
    image: "/camera14.png",
  },
  {
    id: 15,
    location: "Sarojini Nagar",
    status: "⚪ offline",
    lat: 28.5905,
    lng: 77.2182,
    image: "/camera15.png",
  },
  {
    id: 16,
    location: "Dwarka Sector 21",
    status: "🟢 online",
    lat: 28.5702,
    lng: 77.0715,
    image: "/camera16.png",
  },
  {
    id: 17,
    location: "Noida Link Road",
    status: "🟢 online",
    lat: 28.5693,
    lng: 77.2412,
    image: "/camera17.png",
  },
  {
    id: 18,
    location: "Akshardham Road",
    status: "⚪ offline",
    lat: 28.6133,
    lng: 77.2772,
    image: "/camera18.png",
  },
  {
    id: 19,
    location: "Vikas Puri",
    status: "🟢 online",
    lat: 28.6084,
    lng: 77.1374,
    image: "/camera19.png",
  },
  {
    id: 20,
    location: "Azadpur",
    status: "⚪ offline",
    lat: 28.6957,
    lng: 77.1865,
    image: "/camera20.png",
  },
  {
    id: 21,
    location: "New Friends Colony",
    status: "🟢 online",
    lat: 28.5603,
    lng: 77.2759,
    image: "/camera21.png",
  },
  {
    id: 22,
    location: "Shastri Park",
    status: "⚪ offline",
    lat: 28.6799,
    lng: 77.2497,
    image: "/camera22.png",
  },
  {
    id: 23,
    location: "Rajouri Garden",
    status: "🟢 online",
    lat: 28.6418,
    lng: 77.1221,
    image: "/camera23.png",
  },
  {
    id: 24,
    location: "Vasant Vihar",
    status: "⚪ offline",
    lat: 28.5674,
    lng: 77.1567,
    image: "/camera24.png",
  },
  {
    id: 25,
    location: "Janakpuri",
    status: "🟢 online",
    lat: 28.6215,
    lng: 77.0879,
    image: "/camera25.png",
  },
  {
    id: 26,
    location: "Kalkaji Mandir",
    status: "🟢 online",
    lat: 28.5499,
    lng: 77.2583,
    image: "/camera26.png",
  },
  {
    id: 27,
    location: "Saket",
    status: "⚪ offline",
    lat: 28.5262,
    lng: 77.2174,
    image: "/camera27.png",
  },
  {
    id: 28,
    location: "Yamuna Bank",
    status: "⚪ offline",
    lat: 28.6084,
    lng: 77.2732,
    image: "/camera28.png",
  },
  {
    id: 29,
    location: "Tilak Nagar",
    status: "🟢 online",
    lat: 28.6351,
    lng: 77.0915,
    image: "/camera29.png",
  },
  {
    id: 30,
    location: "Paharganj",
    status: "⚪ offline",
    lat: 28.6431,
    lng: 77.2142,
    image: "/camera30.png",
  },
  {
    id: 31,
    location: "Palam",
    status: "🟢 online",
    lat: 28.5849,
    lng: 77.0841,
    image: "/camera31.png",
  },
  {
    id: 32,
    location: "Jasola",
    status: "⚪ offline",
    lat: 28.5481,
    lng: 77.2889,
    image: "/camera32.png",
  },
  {
    id: 33,
    location: "Munirka",
    status: "🟢 online",
    lat: 28.5534,
    lng: 77.1723,
    image: "/camera33.png",
  },
  {
    id: 34,
    location: "Shadipur",
    status: "🟢 online",
    lat: 28.6412,
    lng: 77.1451,
    image: "/camera34.png",
  },
  {
    id: 35,
    location: "Netaji Subhash Place",
    status: "⚪ offline",
    lat: 28.6929,
    lng: 77.1742,
    image: "/camera35.png",
  },
  {
    id: 36,
    location: "Anand Vihar",
    status: "🟢 online",
    lat: 28.6512,
    lng: 77.3155,
    image: "/camera36.png",
  },
  {
    id: 37,
    location: "Punjabi Bagh",
    status: "⚪ offline",
    lat: 28.6734,
    lng: 77.1245,
    image: "/camera37.png",
  },
  {
    id: 38,
    location: "Rohini Sector 16",
    status: "🟢online",
    lat: 28.7324,
    lng: 77.1271,
    image: "/camera38.png",
  },
  {
    id: 39,
    location: "Rithala",
    status: "🟢online",
    lat: 28.7235,
    lng: 77.0938,
    image: "/camera39.png",
  },
  {
    id: 40,
    location: "Seelampur",
    status: "⚪offline",
    lat: 28.6693,
    lng: 77.2799,
    image: "/camera40.png",
  },
  {
    id: 41,
    location: "Model Town",
    status: "🟢online",
    lat: 28.7039,
    lng: 77.1907,
    image: "/camera41.png",
  },
  {
    id: 42,
    location: "Ashok Vihar",
    status: "🟢online",
    lat: 28.6919,
    lng: 77.1765,
    image: "/camera42.png",
  },
  {
    id: 43,
    location: "Bhikaji Cama Place",
    status: "⚪offline",
    lat: 28.5699,
    lng: 77.1734,
    image: "/camera43.png",
  },
  {
    id: 44,
    location: "Inderlok",
    status: "🟢online",
    lat: 28.6664,
    lng: 77.1678,
    image: "/camera44.png",
  },
  {
    id: 45,
    location: "Kashmere Gate",
    status: "🟢online",
    lat: 28.6698,
    lng: 77.227,
    image: "/camera45.png",
  },
  {
    id: 46,
    location: "Vivek Vihar",
    status: "⚪offline",
    lat: 28.6755,
    lng: 77.3174,
    image: "/camera46.png",
  },
  {
    id: 47,
    location: "Pragati Maidan",
    status: "🟢online",
    lat: 28.6181,
    lng: 77.2399,
    image: "/camera47.png",
  },
  {
    id: 48,
    location: "Lodhi Garden",
    status: "🟢online",
    lat: 28.5933,
    lng: 77.2195,
    image: "/camera48.png",
  },
  {
    id: 49,
    location: "IIT Delhi",
    status: "⚪offline",
    lat: 28.5457,
    lng: 77.1928,
    image: "/camera49.png",
  },
  {
    id: 50,
    location: "Patel Nagar",
    status: "🟢online",
    lat: 28.6473,
    lng: 77.1355,
    image: "/camera50.png",
  },
];

const cameraList = document.getElementById("cameraList");
trafficCameras.forEach((camera) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${camera.location}</span>
    <span class="${camera.status}">${camera.status}</span>
  `;
  cameraList.appendChild(li);

  const marker = L.circleMarker([camera.lat, camera.lng], {
    color: camera.status === "🟢online" ? "green" : "black",
    radius: 8,
  }).addTo(map);

  marker.bindPopup(`
    <div class="popup-content"><img src="${camera.image}" alt="${camera.location} Camera" style="width:100%;height:auto;"/>
    
      <h3>${camera.location}</h3>
      <p>Status: ${camera.status}</p>
      <p>Live Stream: <a href="#">View</a></p>
    </div>
  `);
});
const searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", handleSearch);
function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  const cameraList = document.getElementById("cameraList");

  cameraList.innerHTML = "";

  const filteredCameras = trafficCameras.filter((camera) =>
    camera.location.toLowerCase().includes(searchTerm)
  );

  filteredCameras.forEach((camera) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${camera.location}</span>
      <span class="${camera.status}">${camera.status}</span>
    `;
    cameraList.appendChild(li);

    const marker = L.circleMarker([camera.lat, camera.lng], {
      color: camera.status === "online" ? "green" : "gray",
      radius: 8,
    }).addTo(map);

    marker.bindPopup(`
      <div class="popup-content">
        <h3>${camera.location}</h3>
        <p>Status: ${camera.status}</p>
        <p>Live Stream: <a href="#">View</a></p>
      </div>
    `);
  });
}
