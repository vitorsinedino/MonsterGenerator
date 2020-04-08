import React from 'react';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import './index.css';

class App extends React.Component {


    constructor(){
        super();

        this.state = {
            monsters : [],
            searchField: ''
        };

    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
        
    }

    render() { 
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
            );


        return (
            <div className='App'>
                <h1>Monsters Roledex</h1>
                <SearchBox 
                placeholder='search monsters'
                handleChange={e => this.setState({searchField: e.target.value})}
                />
                <CardList monsters = {filteredMonsters}/>
            </div>
           
            
        );
    }
}
 
export default App;