import React from 'react';
import CusStyleComp from './CusStyleComp';


const values = {
    '01bbb998-af3d-47a4-b0ff-e67d033d80e9': 'Luz Ballard',
    '01021494-f157-4183-964c-6b0ddc964ab8': 'Corey Johnson',
    '97a2daa4-406b-4b1c-831e-bdfd90b224f2': 'Andrew Torres',
    '6256ba85-b59f-40b9-8715-406cc54d7f05': 'Nichole Wilson',
    '5c0c746c-ec56-4fb7-8b32-066b64d70611': 'Nancy Hall',
    'c103b480-8efb-450f-9141-6a8037de2348': 'Agnes Lorenzen',
    '4e0cc3dc-fce9-45d9-85c7-a3ae5cb0ce57': 'Donald Hyde',
    'f80af139-5c68-4475-8cb6-ced7e38c6f43': 'Dennis Fuller',
    '5073359e-b228-4852-b1a3-3f2edfc8672f': 'Francis Hodgkins',
    '9c9a3cc8-044e-43d0-87ff-58a6b44eca53': 'David McLain'
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedId: []
        }
        this.handleChildCheck = this.handleChildCheck.bind(this); 
        this.handleChildUncheck = this.handleChildUncheck.bind(this); 
    }

    handleChildUncheck(pram) {
        console.log(pram)
        let arr = this.state.selectedId;
        let newArray = [];

        for(let key in values){
            if( values[key] === pram ) {
                newArray = arr.filter(i => i !== key)
            }
        }
        
        this.setState(state => ({
            selectedId: newArray
        }));
    }

    handleChildCheck(pram) {
        console.log(pram)
        if( !this.state.selectedId.includes(pram) )
        {
            for(let key in values){
                if( values[key] === pram ) {
                    let arr = this.state.selectedId;
                    arr.push(key)
                    this.setState(state => ({
                        selectedId: arr
                    }));
                }
            }
        }
    }

    render() { 
        const listItems = Object.values(values).map((name) =>
                                <CusStyleComp  
                                    key={name} 
                                    passValue={name} 
                                    handleChildCheck={this.handleChildCheck} 
                                    handleChildUncheck={this.handleChildUncheck} 
                                />
                            );
        return (
            <div className="ui container grid">
                <div className="row">
                    <div className="ui four column grid">
                        {listItems}                    
                    </div>
                </div>
                <div className="row">
                    <pre style={{backgroundColor: "#ddd"}}>
                        <code>
                            <p>const selectedId = {"{"}</p>
                            <ul style={{listStyle: "none"}}>
                                {this.state.selectedId.map(item => {
                                    return <li key={item.toString()}>{item.toString() + ','}</li>;
                                })}
                            </ul>
                            <p>{"}"}</p>
                        </code>
                    </pre>
                </div>  
            </div>
        );
    }
}

export default App;