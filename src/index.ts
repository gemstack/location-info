import { getLocationsFromProcessArguements } from './utils';

const main = () => {
  const arguementsArray = process.argv.slice(2);
  const locations = getLocationsFromProcessArguements(arguementsArray);

  console.log(locations)
};

main();
