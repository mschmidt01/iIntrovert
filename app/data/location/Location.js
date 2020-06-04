import Immutable from 'immutable';

const Location = Immutable.Record({
    id: '',
    name: '',
    address: '',
    type: '',
    isFavorite: false,
    coordinates: '',
    rating: 0.0,
    popularTimes: [],
})

export default Location;