export const types = {
  CREATE_ARMY: 'CREATE_ARMY'
}

export function createArmy(armyType) {
  return {
    type: types.CREATE_ARMY,
    armyType
  }
}