import {makeAutoObservable} from "mobx"

export default class DeviceStore {

    constructor() {
        
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: '120000', rating: 5, img: 'https://img.mvideo.ru/Pdb/30067223b.jpg' },
            {id: 2, name: 'Iphone 10 pro', price: '120000', rating: 5, img: 'https://img.mvideo.ru/Pdb/30067223b.jpg' },
            {id: 3, name: 'Iphone 10 pro', price: '120000', rating: 5, img: 'https://img.mvideo.ru/Pdb/30067223b.jpg' },
            {id: 4, name: 'Iphone 10 pro', price: '120000', rating: 5, img: 'https://img.mvideo.ru/Pdb/30067223b.jpg' },
            {id: 5, name: 'Iphone 10 pro', price: '120000', rating: 5, img: 'https://img.mvideo.ru/Pdb/30067223b.jpg' },
            {id: 6, name: 'Iphone 10 pro', price: '120000', rating: 5, img: 'https://img.mvideo.ru/Pdb/30067223b.jpg' }
        ]
        
        this._selectedType = {}
        this._selectedBrand = {}
        
        makeAutoObservable(this)
    }

    setTypes(types) { ////// Создаем экшн
        this._types = types
    }

    setBrand(brands) {
        this._brands= brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand(){
        return this._selectedBrand
    }
 
}