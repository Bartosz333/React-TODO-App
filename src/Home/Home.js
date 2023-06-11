import Hero from '../components/Hero/Hero';
import SearchForm from '../components/SearchForm/SearchForm';
import { Lists } from '../components/Lists/Lists';

export const Home = () => {
  return (
    <>
      <Hero />
      <SearchForm />
      <Lists />
    </>
  );
};
