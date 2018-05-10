import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

let counter = 0;

@Injectable()
export class ContactService{

    private contacts = {
        nick: { id:'1', name: 'Nick Jones', picture: 'assets/imagenes/nick.png', ultConx: '9:12 pm' },
        eva: { id:'3', name: 'Eva Moor', picture: 'assets/imagenes/eva.png', ultConx: '9:12 pm' },
        jack: { id:'4', name: 'Jack Williams', picture: 'assets/imagenes/jack.png', ultConx: '9:12 pm' },
        lee: { id:'5', name: 'Lee Wong', picture: 'assets/imagenes/lee.png', ultConx: '9:12 pm' },
        alan: { id:'6', name: 'Alan Thompson', picture: 'assets/imagenes/alan.png', ultConx: '9:12 pm' },
        kate: { id:'7', name: 'Kate Martinez', picture: 'assets/imagenes/kate.png', ultConx: '9:12 pm' },
        jackson: { id:'4', name: 'Jackson Moor', picture: 'assets/imagenes/nick.png', ultConx: '9:12 pm' },

    };
    private contactArray: any[];


    constructor() {
        this.contactArray = Object.values(this.contacts);
    }

    getContacts(): Observable<any> {
        return Observable.of(this.contacts);
    }
    
    getContactArray(): Observable<any[]> {
        return Observable.of(this.contactArray);
    }
    
    getContact(): Observable<any> {
        counter = (counter + 1) % this.contactArray.length;
        return Observable.of(this.contactArray[counter]);
    }
}


