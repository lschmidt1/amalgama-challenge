import uuid from 'short-uuid'

import { types } from '../actions/armies'

const initialState = []

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case types.CREATE_ARMY:
      let piqueros, arqueros, caballeros
      if (payload.armyType === 'CHINOS') {
        piqueros = 2
        arqueros = 25
        caballeros = 2
      }
      if (payload.armyType === 'INGLESES') {
        piqueros = 10
        arqueros = 10
        caballeros = 10
      }
      if (payload.armyType === 'BIZANTINOS') {
        piqueros = 5
        arqueros = 8
        caballeros = 15
      }
      const army = {
        id: uuid.generate(),
        budget: 1000,
        type: payload.armyType.toLowerCase(),
        units: [
          ...Array(piqueros).fill().map(() => ({ id: uuid.generate(), type: 'Piquero', points: 5 })),
          ...Array(arqueros).fill().map(() => ({ id: uuid.generate(), type: 'Arquero', points: 10 })),
          ...Array(caballeros).fill().map(() => ({ id: uuid.generate(), type: 'Caballero', points: 20 })),
        ]
      }
      return [...state, army]
    case types.TRAIN_UNIT:
      const { armyId, unitId } = payload
      const armies = state.map(army => {
        if (army.id !== armyId) {
          return army
        }
        let cost = 0
        const units = army.units.map(unit => {
          if (unit.id !== unitId) {
            return unit
          }
          let addPoints = 0
          if (unit.type === 'Piquero') {
            cost = 10
            addPoints = 3
          }
          if (unit.type === 'Arquero') {
            cost = 20
            addPoints = 7
          }
          if (unit.type === 'Caballero') {
            cost = 30
            addPoints = 10
          }
          return {
            ...unit,
            points: unit.points + addPoints
          }
        })

        const budget = army.budget - cost
        if (budget < 0) {
          return army
        }
        
        return {
          ...army,
          budget,
          units
        }
      })
      return armies
    default:
      return state
  }
}
