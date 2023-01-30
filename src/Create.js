import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState('');
  const [terms, setTerms] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = { name, terms};

    setIsPending(true);

    fetch('http://localhost:8000/Lists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(list)
    }).then(() => {
      console.log('new list added');
      setIsPending(false);
      history.push('/');
    });
  }

  return (
    <div className="create">
      <h2>Add a New Search Terms List</h2>
      <form onSubmit={handleSubmit}>
        <label>List Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Search Terms - separate by commas:</label>
        <input
          type="text"
          required
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
        />
        {!isPending && <button>Add List</button>}
        {isPending && <button>Adding List...</button>}
      </form>
    </div>
  );
};

export default Create;
