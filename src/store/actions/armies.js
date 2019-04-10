export const types = {
  CREATE_ARMY: 'CREATE_ARMY',
  TRAIN_UNIT: 'TRAIN_UNIT'
}

export function createArmy(armyType) {
  return {
    type: types.CREATE_ARMY,
    armyType
  }
}

export function train(armyId, unitId) {
  return {
    type: types.TRAIN_UNIT,
    armyId,
    unitId
  }
}