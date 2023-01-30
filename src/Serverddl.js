import React from 'react';
import search_terms from './search_terms';

class Serverddl extends React.Component {
  render() {
    return (
      <div>
        <select>
          <option selected disabled="true">
            -- Select Team --
          </option>
          {search_terms.Lists.map((result) => (
            <option>{result.Name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Serverddl;
