export class Storage {
    constructor(storageName = 'gameHistory', initialValue = '[]') {
      this.storageName = storageName
  
          // Check if localStorage contains any data from previous games
      if (!localStorage.getItem(storageName)) {
              // If not, create new item for our Tic Tac Toe game
        localStorage.setItem(storageName, initialValue)
      }
    }
    
    getData() {
    return JSON.parse(localStorage.getItem(this.storageName))

    }
  
    update(data) {

      localStorage.setItem(this.initialValue, JSON.stringify(data))

    }
  }