import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'color': '#404040',
    'font': [{ 'unit': 'px', 'value': 400 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': ''Source' }, { 'unit': 'string', 'value': 'Sans' }, { 'unit': 'string', 'value': 'Pro',' }, { 'unit': 'string', 'value': ''Helvetica' }, { 'unit': 'string', 'value': 'Neue',' }, { 'unit': 'string', 'value': 'Sans-serif' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'WebkitFontSmoothing': 'antialiased'
  },
  '*': {
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  'sidebar': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.25)' }]
  },
  'pad2': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'map': {
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.2 }],
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'h1': {
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 2 }]
  },
  'a': {
    'color': '#404040',
    'textDecoration': 'none'
  },
  'a:hover': {
    'color': '#101010'
  },
  'heading': {
    'background': '#fff',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'minHeight': [{ 'unit': 'px', 'value': 60 }],
    'lineHeight': [{ 'unit': 'px', 'value': 60 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'backgroundColor': '#00853e',
    'color': '#fff'
  },
  'listings': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflow': 'auto',
    'paddingBottom': [{ 'unit': 'px', 'value': 60 }]
  },
  'listings item': {
    'display': 'block',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'textDecoration': 'none'
  },
  'listings item:last-child': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }]
  },
  'listings item title': {
    'display': 'block',
    'color': '#00853e',
    'fontWeight': '700'
  },
  'listings item title small': {
    'fontWeight': '400'
  },
  'listings itemactive title': {
    'color': '#8cc63f'
  },
  'listings item title:hover': {
    'color': '#8cc63f'
  },
  'listings itemactive': {
    'backgroundColor': '#f8f8f8'
  },
  '::-webkit-scrollbar': {
    'width': [{ 'unit': 'px', 'value': 3 }],
    'height': [{ 'unit': 'px', 'value': 3 }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }],
    'background': 'rgba(0, 0, 0, 0.1)'
  },
  '::-webkit-scrollbar-track': {
    'background': 'none'
  },
  '::-webkit-scrollbar-thumb': {
    'background': '#00853e',
    'borderRadius': '0'
  },
  'clearfix': {
    'display': 'block'
  },
  'clearfix:after': {
    'content': ''.'',
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'clear': 'both',
    'visibility': 'hidden'
  },
  // Marker tweaks
  'mapboxgl-popup': {
    'paddingBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'mapboxgl-popup-close-button': {
    'display': 'none'
  },
  'mapboxgl-popup-content': {
    'font': [{ 'unit': 'px', 'value': 400 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': ''Source' }, { 'unit': 'string', 'value': 'Sans' }, { 'unit': 'string', 'value': 'Pro',' }, { 'unit': 'string', 'value': ''Helvetica' }, { 'unit': 'string', 'value': 'Neue',' }, { 'unit': 'string', 'value': 'Sans-serif' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 280 }]
  },
  'mapboxgl-popup-content-wrapper': {
    'padding': [{ 'unit': '%V', 'value': 0.01 }, { 'unit': '%H', 'value': 0.01 }, { 'unit': '%V', 'value': 0.01 }, { 'unit': '%H', 'value': 0.01 }]
  },
  'mapboxgl-popup-content h3': {
    'background': '#91c949',
    'color': '#fff',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '3px 3px 0 0',
    'fontWeight': '700',
    'marginTop': [{ 'unit': 'px', 'value': -15 }]
  },
  'mapboxgl-popup-content h4': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'fontWeight': '400'
  },
  'mapboxgl-popup-content div': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'mapboxgl-container leaflet-marker-icon': {
    'cursor': 'pointer'
  },
  'mapboxgl-popup-anchor-top > mapboxgl-popup-content': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'mapboxgl-popup-anchor-top > mapboxgl-popup-tip': {
    'borderBottomColor': '#91c949'
  },
  'mapboxgl-ctrl-geocoder': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '0',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 800 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'mapboxgl-ctrl-geocoder > div': {
    'minWidth': [{ 'unit': '%H', 'value': 1 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'info-list': {
    'display': 'flex',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'wiki-button': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#8cc63f' }],
    'width': [{ 'unit': 'px', 'value': 81 }],
    'textAlign': 'center',
    'borderRadius': '6px',
    'margin': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'cursor': 'pointer'
  },
  'foqu-button': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'blue' }],
    'width': [{ 'unit': 'px', 'value': 81 }],
    'textAlign': 'center',
    'borderRadius': '6px',
    'margin': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'cursor': 'pointer'
  },
  'marker': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'backgroundImage': 'url('./img/marker.png')',
    'backgroundColor': 'rgba(0, 0, 0, 0)'
  },
  'restaurant': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'backgroundImage': 'url('./img/restaurant.png')',
    'backgroundColor': 'rgba(0, 0, 0, 0)'
  },
  'travel': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'backgroundImage': 'url('./img/travel.png')',
    'backgroundColor': 'rgba(0, 0, 0, 0)'
  },
  'education': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'backgroundImage': 'url('./img/education.png')',
    'backgroundColor': 'rgba(0, 0, 0, 0)'
  },
  'book': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'backgroundImage': 'url('./img/book.png')',
    'backgroundColor': 'rgba(0, 0, 0, 0)'
  },
  'airport': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'backgroundImage': 'url('./img/airport.png')',
    'backgroundColor': 'rgba(0, 0, 0, 0)'
  },
  'bus': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'backgroundImage': 'url('./img/bus.png')',
    'backgroundColor': 'rgba(0, 0, 0, 0)'
  },
  'fuel': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'backgroundImage': 'url('./img/fuel.png')',
    'backgroundColor': 'rgba(0, 0, 0, 0)'
  },
  'hospital': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'backgroundImage': 'url('./img/hospital.png')',
    'backgroundColor': 'rgba(0, 0, 0, 0)'
  },
  '#foursquareMode': {
    'width': [{ 'unit': 'px', 'value': 446 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 2 }],
    'top': [{ 'unit': 'px', 'value': 2 }],
    'zIndex': '2',
    'background': 'white',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '8px',
    'display': 'none'
  },
  'fq-header-container': {
    'background': 'green',
    'color': 'white',
    'height': [{ 'unit': 'px', 'value': 42 }],
    'display': 'flex',
    'justifyContent': 'space-between',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'alignItems': 'center'
  },
  'fq-title': {
  },
  'fq-close-btn:hover': {
    'cursor': 'pointer'
  },
  'fq-body-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'fq-body-rating': {
    'display': 'flex',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'gray' }]
  },
  'glyphicon-star': {
    'color': 'gold'
  },
  'fq-rating': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'fq-body-subinfo': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'gray' }],
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'flex-start',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'fq-subinfo-row': {
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    'height': [{ 'unit': 'px', 'value': 30 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'subinfo-title': {
    'fontWeight': 'bold'
  },
  'fq-body-contact': {
    'display': 'flex',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    'margin': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'justifyContent': 'center'
  },
  'fq-body-address': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'contact': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'gray' }],
    'borderRadius': '5px',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'color': 'blue'
  },
  'btn-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'justifyContent': 'space-around',
    'alignItems': 'center'
  },
  'btn-container > h5': {
    'borderRadius': '5px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }],
    'width': [{ 'unit': 'px', 'value': 60 }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }],
    'cursor': 'pointer'
  },
  'walking': {
    'color': 'green'
  },
  'cycling': {
    'color': 'blue'
  },
  'driving': {
    'color': '#3887be'
  }
});
