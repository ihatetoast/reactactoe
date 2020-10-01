export class Storage {
    constructor(storageName = "scoreboard", initVal = '[]') {
      this.storageName = storageName
        
        if(!localStorage.getItem(storageName)){
            localStorage.setItem(storageName, initVal)
        }
    }
    getData() {
        return JSON.parse(localStorage.getItem(this.storageName));
    }

    update(data) {
        localStorage.setItem(this.storageName, JSON.stringify(data))
    }
}