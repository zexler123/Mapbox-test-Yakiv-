var qryPlaces = [
    // "places",
    "advertising, marketing",
    "airport",
    // "amusement park, theme park",
    // "assisted living service, assisted, assisted living, home",
    "athletic field, sports field",
    // "bagel, donut",
    // "bar, alcohol",
    // "base, military",
    // "beach",
    // "beauty, hair, salon, barber",
    // "beer, wine, spirit, alcohol, booze",
    // "bicycle, bike, cycle",
    // "boating",
    "bookstore, book shop",
    // "bowling, bowl, bowling alley",
    // "brewery, beer",
    "bus station, bus stop, bus",
    // "campground, rv park",
    // "candy store, candy, candies, confectionary, chocolatier, chocolate",
    // "car rental, truck rental",
    // "car wash, detail, car detail, car wax",
    // "casinos, gaming",
    "cemetery, graveyard, mausoleum",
    // "clothing, accessories, apparel",
    // "college, university",
    // "combat sports, boxing, martial arts, fighting",
    // "computer, electronic",
    // "contractor, repair",
    // "dance",
    // "day care, preschool, daycare, child care",
    // "department store, big box store, department",
    // "dog park",
    // "drug services, alcohol services, clinic",
    // "dry cleaning, laundry, dry cleaner, laundry service, laundromat",
    "education, school",
    // "embassy, foreign",
    // "er, emergency room",
    "fast food",
    // "fire stations, fire house, fire department",
    // "florist, flowers, flower shop",
    // "forest, woods",
    // "funeral service, funeral home",
    // "furniture, decor",
    // "garden",
    // "gas station, fuel, gas",
    // "gift, novelty",
    // "glasses, optical",
    // "government agency",
    // "gun range",
    // "home improvement, repairman, handyman, repair",
    "hospital, clinic, medical center",
    // "hotel, motel",
    // "houseware, home goods",
    "ice cream parlor, ice cream",
    "insurance",
    "jewelry, watches, accessories",
    "juice bar, smoothie, juice",
    "lake",
    // "landmark",
    // "legal, lawyer, law, law office",
    // "lodging",
    // "massage, masseuse",
    // "meat, seafood, butcher, deli",
    // "miniature golf, minigolf",
    // "mountain",
    // "museum",
    // "music, show venue, concert, concert hall",
    // "natural park",
    // "newsstand, newspaper, news, magazine",
    // "night club, disco",
    // "notary, notary public",
    // "nursery, garden, garden center",
    // "outdoors",
    // "painting, art",
    // "park",
    // "parking, parking lot",
    // "pet, petshop, dog, cat",
    // "pharmacy",
    // "photo, frame, framing",
    // "photography, photo service",
    // "physical therapy, rehabilitation",
    // "pizza, restaurant",
    // "police station, law enforcement",
    // "port, ferry",
    // "post office, mail",
    // "professional cleaning, cleaning",
    // "rail station, train station",
    // "real estate agent, realtor, real estate agency",
    // "rest area, rest stop, pitstop",
    // "restaurant",
    // "scuba diving, pool",
    // "shoes, apparel",
    // "shopping center, mall, shopping mall",
    // "spa",
    // "sporting good, sports store",
    // "storage, storage facility, storage lot",
    // "supermarket, groceries, grocery, market, super",
    // "swimming pool, pool, swim club",
    // "tailor",
    // "tattoo, tattooing",
    // "theater, movie theater, cinema",
    "tour, travel agent",
    "tourist information, services, tourism, information",
    "toy, toy shop",
    "utility companies, utilities, utility, public utility, electricity, natural gas, water, sewage, power company",
    "vehicle maintenance, car maintenance, vehicle repair, car repair",
    "winery, vineyard, wine tasting",
    "zoo, aquarium, wildlife sanctuary",
]
var geocoder = ""
var stores = ""
var currentLocation = ""
var prevLocation = ""
var markers = []
var currentZoom = 0
var prevZoom = 0
var stopFlag = false
var userLocation = ''
var direction = ''
var canvas = "";
var start = [-122.662323, 45.523751];
var to = ""
function buildLocationList(data) {
    var listings = document.getElementById('listings');
    while (listings.firstChild) {
      listings.removeChild(listings.firstChild);
    }

    data.features.forEach(function (store, i) {
      /**
       * Create a shortcut for `store.properties`,
       * which will be used several times below.
       **/
      var prop = store.properties;

      /* Add a new listing section to the sidebar. */
      
      var listing = listings.appendChild(document.createElement('div'));
      /* Assign a unique `id` to the listing. */
      listing.id = 'listing-' + prop.id;
      /* Assign the `item` class to each listing for styling. */
      listing.className = 'item';

      /* Add the link to the individual listing created above. */
      var link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
    //   link.id = 'link-' + prop.id;
        link.addEventListener("click", function() {
            flyToStore(store)
        });
      link.innerHTML = prop.address;

      /* Add details to the individual listing. */
      var details = listing.appendChild(document.createElement('div'));
      details.className = "info-list"
    if(typeof prop.foursquare!="undefined"){
        var foursquare = details.appendChild(document.createElement('div'))
        foursquare.innerHTML = "Foursquare";
        foursquare.className = "foqu-button";
        console.log(prop.foursquare)
        foursquare.addEventListener('click', function () {
          $.ajax({
              url:"https://api.foursquare.com/v2/venues/"+prop.foursquare+"?client_id=E0EVGTW5SOUGWOIWDURD5VLDMOOBW15QSXDEZ5FPML2XVXJF&client_secret=10YUV55DWSAVYSQH1JWWS45Z5TIWQLEPFBRFRE45IO5D15MO&v=20210101",
              type:"get",
              success:function(result){
                console.log(result)
                var venue = result.response.venue
                $("#place_name").html(venue.name)
                $("#place_rating").html(venue.rating)
                $("#place_reviews").html(venue.likes.count+" likes")
                $("#place_description").html(venue.description)
                $("#locate").html(venue.location.address)
                $("#address").html(venue.location.formattedAddress)
                $("#twitter").html(venue.contact.twitter)
                $("#phone").html(venue.contact.formattedPhone)
                // $("#website").html(venue.contact.formattedPhone)
                if(venue.url){
                  $("#website").attr("href", venue.url)
                  $("#website")[0].style.display='block'
                } else {
                  $("#website")[0].style.display='none'
                }
                  console.log($("#foursquareMode")[0].style.display='block')
              },
              error:function(error){
                  // console.log(error)
              }
          })
          
      })
    }
    
    if(typeof prop.wikidata!="undefined"){
      var wiki = details.appendChild(document.createElement('div'))
      wiki.innerHTML = "Wikidata";
      wiki.className = "wiki-button";
      wiki.addEventListener('click', function () {
          $.ajax({
              url:"https://www.wikidata.org/w/api.php?action=wbgetentities&ids="+prop.wikidata+"&format=json&token=9ed1499d99c0c34c73faa07157b3b6075b427365",
              type:"get",
              success:function(result){
                  // console.log(result)
              },
              error:function(error){
                  // console.log(error)
              }
          })
      })
      // if (prop.phone) {
      //     details.innerHTML += ' &middot; ' + prop.phoneFormatted;
      // }
  }

      /**
       * Listen to the element and when it is clicked, do four things:
       * 1. Update the `currentFeature` to the store associated with the clicked link
       * 2. Fly to the point
       * 3. Close all other popups and display popup for clicked store
       * 4. Highlight listing in sidebar (and remove highlight for all other listings)
       **/
      link.addEventListener('click', function (e) {
        for (var i = 0; i < data.features.length; i++) {
          if (this.id === 'link-' + data.features[i].properties.id) {
            var clickedListing = data.features[i];
            flyToStore(clickedListing);
            createPopUp(clickedListing);
          }
        }
        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');
      });
    });
  }

  function addMarkers() {
    /* For each feature in the GeoJSON object above: */
    // markers.map((mk, index)=>{
    //     mk.remove()
    // })
    // markers = []

    stores.features.forEach(function (marker) {
      if(markers.indexOf(marker)<0){
        markers.push(marker)
      } else {
        return false
      }
      
      /* Create a div element for the marker. */
      var el = document.createElement('div');
      /* Assign a unique `id` to the marker. */
      el.id = 'marker-' + marker.properties.id;
      /* Assign the `marker` class to each marker for styling. */
      
      if(typeof marker.properties.maki!="undefined"){
        // console.log(marker, "maraker")
        console.log(marker.properties)
        el.className = 'marker';
        switch(marker.properties.maki){
          

          case "fast-food":
            el.className = 'restaurant';
            break;
          case "hospital":   /// not attached
            el.className = 'hospital';
            break;

          case "school":   /// not attached
            el.className = 'education';
            break;
          case "airport":   /// not attached
            el.className = 'airport';
            break;
          case "bus":   /// not attached
            el.className = 'bus';
            break;
          case "attraction":   /// not attached
            el.className = 'attraction';
            break;
          case "fuel":   /// not attached
            el.className = 'fuel';
            break;
          
          default :
            el.className = 'marker';
            break;
        }
      } else {
        el.className = 'marker';
      }

      /**
       * Create a marker using the div element
       * defined above and add it to the map.
       **/
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

      /**
       * Listen to the element and when it is clicked, do three things:
       * 1. Fly to the point
       * 2. Close all other popups and display popup for clicked store
       * 3. Highlight listing in sidebar (and remove highlight for all other listings)
       **/
      el.addEventListener('click', function (e) {
        /* Fly to the point */
        flyToStore(marker);
        /* Close all other popups and display popup for clicked store */
        createPopUp(marker);
        to = marker
        showRouter("driving")
        /* Highlight listing in sidebar */
        var activeItem = document.getElementsByClassName('active');
        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        var listing = document.getElementById(
          'listing-' + marker.properties.id
        );
        listing.classList.add('active');
      });
    });
  }


  function flyToStore(currentFeature) {
    stopFlag = true
    map.flyTo({
      center: currentFeature.geometry.coordinates,
    //   zoom: 15
    });
    
  }

  /**
   * Create a Mapbox GL JS `Popup`.
   **/
  function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();
    to = currentFeature
    var popup = new mapboxgl.Popup({ closeOnClick: true })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        '<h3>'+currentFeature.text+'</h3>' +
        '<h4>' +
        currentFeature.properties.address +
        '</h4>'+
        '<div class=\'btn-container\'><h5 class=\'driving\' onclick=\"showRouter(\'driving\')\">driving</h5>'+
        '<h5  class=\'walking\' onclick=\"showRouter(\'walking\')\">walking</h5>'+
        '<h5 class=\'cycling\'  onclick=\"showRouter(\'cycling\')\">cycling</h5></div>'

      )
      .addTo(map);
  }

function searchNearBy (){
   
    stores = {
        'type': 'FeatureCollection',
        'features': [
          
        ]
      };
    // console.log(currentLocation)
    var center = map.getCenter()
    currentLocation = {
        latitude: center.lng,
        longitude: center.lat
    }
    // console.log(currentLocation, "center")
    var zoom = map.getZoom()
    // console.log(zoom, "zoom")
    //0.8719052172011957 
    if(stopFlag) return false
    // if(Math.abs(currentZoom - prevZoom) > 3 || currentZoom == prevZoom){
    //     prevZoom = currentZoom
    //     // console.log("get data")
    // } else {
    //     return false
    // }
    var moveDelta = Math.sqrt(Math.pow(currentLocation.latitude-prevLocation.latitude, 2)+Math.pow(currentLocation.longitude-prevLocation.longitude, 2))
    // console.log("movedetala", moveDelta)
    if(moveDelta>=0.05|| moveDelta == 0) {
        prevLocation = currentLocation
    } else {
        return false
    }
    // var popUps = document.getElementsByClassName('mapboxgl-popup');
    // if (popUps[0]) popUps[0].remove();
    var bound = map.getBounds()
    console.log("search")
    var deltaX = Math.abs(bound._ne.lat-bound._sw.lat)/2
    var deltaY = Math.abs(bound._ne.lng-bound._sw.lng)/2
   qryPlaces.map((qry, index)=>{
    var xhr = $.ajax({
            url:"https://api.mapbox.com/geocoding/v5/mapbox.places/"+qry+".json?bbox="+(currentLocation.latitude-deltaX)+","+(currentLocation.longitude-deltaY)+","+(currentLocation.latitude+deltaX)+","+(currentLocation.longitude+deltaY)+".&access_token=pk.eyJ1IjoiYmFuemFhciIsImEiOiJ4akIxdlZBIn0.D431j0UB6ko4pLzO7P8edw",
            type:"get",
            dataType:"json",
            success:function(result){
                // console.log(result)
                // console.log(stores, "before")
                result.features.map((item, index)=>{
                    stores.features.push(item)
                })
                // console.log(stores, "start")
                // map.getSource('places').setData(stores);
                // buildLocationList(stores);
                // addMarkers();
                buildLocationList(stores);
                addMarkers();
            },
            error:function(error){
                // console.log(error)
            }
        })
    })


    // {
    //     'type': 'Feature',
    //     'geometry': {
    //       'type': 'Point',
    //       'coordinates': [-77.034084142948, 38.909671288923]
    //     },
    //     'properties': {
    //       'phoneFormatted': '(202) 234-7336',
    //       'phone': '2022347336',
    //       'address': '1471 P St NW',
    //       'city': 'Washington DC',
    //       'country': 'United States',
    //       'crossStreet': 'at 15th St NW',
    //       'postalCode': '20005',
    //       'state': 'D.C.'
    //     }
    //   },
    
}

function addGeoCoder(){
    geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: true, // Use the geocoder's default marker style
        bbox: [-77.210763, 38.803367, -76.853675, 39.052643] // Set the bounding box coordinates
    });
}

function modalClose (){
  console.log("adfsdf")
  $("#foursquareMode")[0].style.display='none'
}

function showRouter (profile){
  // 
  console.log(to)
  $.ajax({
    url:"https://api.mapbox.com/directions/v5/mapbox/"+profile+"/"+userLocation.latitude+","+userLocation.longitude+";"+to.center[0]+","+to.center[1]+"?alternatives=true&geometries=geojson&steps=true&access_token=pk.eyJ1IjoiYmFuemFhciIsImEiOiJ4akIxdlZBIn0.D431j0UB6ko4pLzO7P8edw",
    type:"get",
    success:function(result){
      console.log(result)
      var data = result.routes[0];
      var route = data.geometry.coordinates;
      var geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };
      console.log(geojson, "json")
      if (map.getSource('route')) {
        map.getSource('route').setData(geojson);
        map.setPaintProperty('route', 'line-color', profile=='driving'?'#3887be':profile=='walking'?'green':'blue');
      } else { // otherwise, make a new request
        console.log("add router")
        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: geojson
              }
            }
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': profile=='driving'?'#3887be':profile=='walking'?'green':'blue',
            'line-width': 5,
            'line-opacity': 0.75
          }
        });
      }

    },
    error:function(error){
        // console.log(error)
    }
  })
}