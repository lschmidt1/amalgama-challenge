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
        type: payload.armyType.toLowerCase(),
        units: [
          ...Array(piqueros).fill().map(() => ({ id: uuid.generate(), type: 'Piquero', points: 5 })),
          ...Array(arqueros).fill().map(() => ({ id: uuid.generate(), type: 'Arquero', points: 10 })),
          ...Array(caballeros).fill().map(() => ({ id: uuid.generate(), type: 'Caballero', points: 20 })),
        ]
      }
      return [...state, army]
    default:
      return state
  }
}
