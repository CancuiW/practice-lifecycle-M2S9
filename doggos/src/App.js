import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm'

const fetchDogs=(breed)=>{
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
                .then(res=>res)
                .catch(err=>console.error("nnnooo"))
}
class App extends React.Component {
    constructor(){
        console.log("constructor run")
        super();
        this.state={dogs:[],
                    breed:"husky",
                   input:""};
    }

    componentDidMount(){
        console.log("didMount run")
        fetchDogs(this.state.breed).then(res=>{
            this.setState({...this.state,
                            dogs:res.data.message})
        })
        
    }
    componentDidUpdate(preProps,preState){
        console.log('didUpdate run')
        console.log(preState)
        console.log(this.state)
    }
    inputChange=evt=>{
        this.setState({...this.state,input:evt.target.value})

    }
    searchDogs=dogName=>{
        console.log('search dogs')
        fetchDogs(dogName).then(res=>{
           
            this.setState({...this.state,dogs:res.data.message,breed:dogName})
        })
    }


    render(){
        console.log("render run")
        return(
            <>
            <h1>My App</h1>
                <SearchForm input={this.state.input} change={this.inputChange} searchDogs={this.searchDogs} />
            <div>
                {this.state.dogs.map((item,id)=> <img src={item} alt="image_description" key={id} width="200"/>)

                }

            </div>
           
            </>
        )
    }

}

export default App;