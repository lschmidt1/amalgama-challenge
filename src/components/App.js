import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createArmy, train } from '../store/actions/armies';

class App extends Component {
  state = {
    changeSize: 1
  }

  render() {
    const { armies, totalArmies, createArmy, train } = this.props
    
    return (
      <div className="App">
        <h1>Armies: {totalArmies}</h1>
        <button onClick={() => createArmy('CHINOS')}>Crear Chinos</button>
        <button onClick={() => createArmy('INGLESES')}>Crear Igleses</button>
        <button onClick={() => createArmy('BIZANTINOS')}>Crear Bizantinos</button>

        <div className="armies">
          {armies.map(army => {
            const { id, type, units, budget } = army
            return (
              <div key={id}>
              <h4>Army of {type} - Budget: {budget}</h4>
              <ul>
                {units.map(unit => (
                  <li key={unit.id}>
                    {unit.type} - Points: {unit.points} - 
                    <button onClick={() => train(army.id, unit.id)}>Train</button>
                  </li>
                ))}
              </ul>
            </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  totalArmies: state.armies.length,
  armies: state.armies
})

const mapDispatchToProps = dispatch => ({
  createArmy: type => dispatch(createArmy(type)),
  train: (armyId, unitId) => dispatch(train(armyId, unitId))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
