import { defineStore } from 'pinia'

export const useWasteStore = defineStore({
  id: 'waste',
  state: () => ({
    count: 0,
    title: 'My Counter Title',
    wasteList: []
  }),
  actions: {
    increase(amount: number) {
      this.count += amount
    },
    decrease(amount: number) {
      this.count -= amount
    },
  },
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return 'even'
      return 'odd'
    }
  }
})