import React, { Component } from 'react';
import faker from 'faker'

class Lista extends Component {

    addPersona = async (e) => {
        let persona = {
            id: faker.random.number(),
            name: faker.name.findName(),
            email: faker.internet.email()
        }
        await this.props.addPersonaToList(this.props.list_index, persona)
    }

    render() {
        let personas = this.props.personas.map(persona => {
            return (
                <div className="col-3" key={persona.id}>
                    <ul>
                        <li>name: {persona.name}</li>
                        <li>email: {persona.email}</li>
                    </ul>
                </div>
            )
        })

        return (
            <div className="row">
                <div><span>{this.props.list_index}</span></div>
                <button onClick={() => this.addPersona()}>Adicionar Persona</button>
                <div className="row">
                    {personas}
                </div>
            </div>
        )
    }
}

export default Lista
