import React, { Component } from 'react';
import Lista from './Lista'
// import { cloneDeep } from 'lodash'

class Listas extends Component {

    state = {
        listas: [
            {id: 'a',name: 'lista 1', personas: []},
            {id: 'b', name: 'lista 2', personas: []},
            {id: 'c', name: 'lista 3', personas: []},
        ],
        index: 0
    }

    handleSelectChange = async (e) => {
        e.preventDefault()
        await this.setState({index: e.target.value})
    }

    addPersonaToList = async (index, persona) => {
        const personas = [...this.state.listas[index].personas, persona]

        // let listas = cloneDeep(this.state.listas)
        let listas = this.state.listas
        // listas[index].personas = cloneDeep(personas)
        listas[index].personas = personas

        await this.setState({listas})
    }

    render() {
        let options = this.state.listas.map((item, index) => {
            return (
                <option
                    value={index}
                    key={item.id}>
                    {item.name}
                </option>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    <select onChange={this.handleSelectChange}>
                        {options}
                    </select>
                </div>
                <Lista
                    list_index={+this.state.index}
                    personas={this.state.listas[this.state.index].personas}
                    addPersonaToList={(index, persona) => this.addPersonaToList(index, persona)}
                />
            </div>
        )
    }
}

export default Listas
