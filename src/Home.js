import ServerLists from './ServerLists';
import useFetch from './useFetch';

const Home = () => {
  const {
    error,
    isPending,
    data: Lists,
  } = useFetch('http://localhost:8000/Lists');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {Lists && <ServerLists Lists={Lists} />}
    </div>
  );
};

export default Home;
