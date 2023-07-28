import React from "react";


class SearchForm extends React.Component{
    handleSubmit=evt=>{
        evt.preventDefault()
        this.props.searchDogs(this.props.input)
    }

    render(){
        return(<>
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.props.input} onChange={this.props.change} placeholder="breed"/>
                <button type="submit" >Submit</button>
        </form>
        </>)
    }

}


export default SearchForm;