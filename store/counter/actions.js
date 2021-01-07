export const INCREASE_COUNTER_VALUE = 'INCREASE_COUNTER_VALUE'
export const REDUCE_COUNTER_VALUE = 'REDUCE_COUNTER_VALUE'
export const RESET_COUNTER_VALUE = 'RESET_COUNTER_VALUE'

export const increaseCounterValue = () => ({
  type: INCREASE_COUNTER_VALUE,
})

export const reduceCounterValue = () => ({
  type: REDUCE_COUNTER_VALUE,
})

export const resetCounterValue = () => ({
  type: RESET_COUNTER_VALUE,
})
