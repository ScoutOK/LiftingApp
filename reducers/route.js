//import axios from 'axios'

export default function reducer (state = [], action) {
  switch(action.type) {

    case HOME:
      return HOME;

    case WORKOUT:
      return WORKOUT;

    case CATALOG:
      return CATALOG;

    default:
      return HOME;
  }
}

// to receive all celebs stored on server

const HOME = 'HOME';
const WORKOUT = 'WORKOUT';
const CATALOG = 'CATALOG';

export const goPlace = (place) => ({
  type: place,
})
