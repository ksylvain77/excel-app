import { Link } from "react-router-dom";

const ServerLists = ({ Lists }) => {
  return (
    <div className="server-lists">
      {Lists.map((list) => (
        <div className="server-preview" key={list.id}>
          <Link to={`/Lists/${list.id}`}>
            <h2>{list.name}</h2>
            <p>
              <b>Search Terms: </b>{' '}
              {Array.isArray(list.terms) ? list.terms.join(', ') : list.terms}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServerLists;
