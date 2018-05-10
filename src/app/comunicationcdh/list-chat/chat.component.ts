import { Component, OnInit} from '@angular/core';
import { ContactService } from '../services/contact.service';
declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']


})

export class ChatComponent{
    public titulo: String;
    public contactos: any;
    private contactService: ContactService;

    constructor(){
        this.titulo = 'Chat';

        $(document).ready(function(){
            $("li").click(function(){
              $("#numMensaje").remove();
            });
          });
    }

    ngOnInit(){
        
        this.contactService.getContacts()
            .subscribe((contacts: any) => {
                this.contactos = [
                    {contacto: contacts.nick, estado: 'true', mensaje: 'hola', numMensaje: '1'},
                    {contacto: contacts.eva, estado: 'false', mensaje: 'Como estas?', numMensaje: '3'},
                    {contacto: contacts.jack, estado: 'true', mensaje: 'hola', numMensaje: '2'},
                    {contacto: contacts.lee, estado: 'true', mensaje: 'Buenos Dias', numMensaje: '1'},
                    {contacto: contacts.alan, estado: 'false', mensaje: 'Como esta?', numMensaje: '1'},
                    {contacto: contacts.kate, estado: 'true', mensaje: 'hola', numMensaje: '2'},
                    {contacto: contacts.jackson, estado: 'false', mensaje: 'hola amigo', numMensaje: '3'},
        ];
    });
        console.log('se ha cargado el componente');
    }


    
}