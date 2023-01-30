import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

const ServerDetails = () => {
  const { id } = useParams();
  const {
    data: name,
    error,
    isPending,
  } = useFetch('http://localhost:8000/Lists/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/Lists/' + name.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className="server-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {name && (
        <article>
          <h2>{name.name}</h2>
          <p>
            <b>Server Names: </b>
            {Array.isArray(name.terms) ? name.terms.join(', ') : name.terms}
          </p>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default ServerDetails;
