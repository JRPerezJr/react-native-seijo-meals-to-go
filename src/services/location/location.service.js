import camelize from 'camelize';
import { locations } from './location.mock';

export const locationRequest = async searchTerm => {
  try {
    const locationMock = locations[searchTerm];
    return locationMock;
  } catch (error) {
    console.log('Not found');
  }
};

export const locationTransform = result => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
