import React from "react";
import { useState } from "react";

const Search=(props)=>{
    const [text,setText]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault()
        props.searchName(text)
        setText('');
    }
return(
    <>
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="text" placeholder="Search here" value={text} onChange={(e)=>setText(e.target.value)}/>
            <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>
        {props.showClear && <button type="submit" className="btn btn-light btn-block" onClick={props.clearUsers}>Clear</button>}
        
    </>
)
}
export default Search;