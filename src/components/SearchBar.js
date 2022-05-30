import React, {useState} from 'react';

const SearchBar = ({ onFormSubmit }) =>{
    const [term, setTerm] = useState('');
    
    const onSubmit = event => {
        event.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Search for A Video</label>
                    <input onChange={(event)=>setTerm(event.target.value)}
                        type="text" value={term} />
                </div>
            </form>
        </div>
    ); 
}

export default SearchBar;