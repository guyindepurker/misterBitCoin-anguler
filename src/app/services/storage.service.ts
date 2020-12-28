import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  public save(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
  }

  public load(key) {
    const val = localStorage.getItem(key)
    return JSON.parse(val)
  }

  public remove(key) {
    localStorage.removeItem(key);
  }
}
