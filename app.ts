// Interfacce del Sistema Moove
interface IMezzo {
    tipo: 'bici' | 'scooter' | 'monopattino';
    id: string;
    stato: 'disponibile' | 'in uso' | 'manutenzione';

    assegnaUtente(utente: IUtente): void;
}

interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamentoPreferito: string;

    prenotaMezzo(mezzo: IMezzo): void;
}

interface ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];

    aggiungiMezzo(mezzo: IMezzo): void;
}

// Classi che Implementano le Interfacce

class Mezzo implements IMezzo {
    tipo: 'bici' | 'scooter' | 'monopattino';
    id: string;
    stato: 'disponibile' | 'in uso' | 'manutenzione';

    constructor(tipo: 'bici' | 'scooter' | 'monopattino', id: string) {
        this.tipo = tipo;
        this.id = id;
        this.stato = 'disponibile';
        console.log(`[Mezzo Creato] ${this.tipo} ID: ${this.id}, Stato: ${this.stato}`);
    }

    assegnaUtente(utente: IUtente): void {
        if (this.stato === 'disponibile') {
            this.stato = 'in uso';
            console.log(`[Mezzo Assegnato] Il mezzo ${this.tipo} ID:${this.id} è stato assegnato a ${utente.nome} ${utente.cognome}.`);
        } else {
            console.warn(`[ATTENZIONE] Il mezzo ${this.tipo} ID:${this.id} non è disponibile (stato attuale: ${this.stato}).`);
        }
    }
}

class Utente implements IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamentoPreferito: string;

    constructor(nome: string, cognome: string, email: string, metodoPagamentoPreferito: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamentoPreferito = metodoPagamentoPreferito;
        console.log(`[Utente Creato] ${this.nome} ${this.cognome}, Email: ${this.email}`);
    }

    prenotaMezzo(mezzo: IMezzo): void {
        if (mezzo.stato === 'disponibile') {
            console.log(`[Prenotazione In Corso] ${this.nome} ${this.cognome} sta provando a prenotare il ${mezzo.tipo} ID:${mezzo.id}.`);
            mezzo.assegnaUtente(this);
        } else {
            console.error(`[ERRORE] Il ${mezzo.tipo} ID:${mezzo.id} non può essere prenotato, è attualmente ${mezzo.stato}.`);
        }
    }
}

class Citta implements ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];

    constructor(nome: string) {
        this.nome = nome;
        this.mezziDisponibili = [];
        console.log(`[Città Creata] ${this.nome}`);
    }

    aggiungiMezzo(mezzo: IMezzo): void {
        this.mezziDisponibili.push(mezzo);
        console.log(`[Mezzo Aggiunto] Il ${mezzo.tipo} ID:${mezzo.id} è stato aggiunto a ${this.nome}. Totale mezzi: ${this.mezziDisponibili.length}`);
    }

    mostraStatoMezzi(): void {
        console.log(`Stato Mezzi a ${this.nome}:`);
        if (this.mezziDisponibili.length === 0) {
            console.log("Nessun mezzo disponibile in questa città.");
            return;
        }
        this.mezziDisponibili.forEach(mezzo => {
            console.log(`  - ${mezzo.tipo} (ID: ${mezzo.id}): Stato -> ${mezzo.stato}`);
        });
    }
}

// Logica di collegamento e test

// Istanzia alcuni oggetti Mezzo
const bici1 = new Mezzo('bici', 'B001');
const scooter1 = new Mezzo('scooter', 'S001');
const monopattino1 = new Mezzo('monopattino', 'M001');
const bici2 = new Mezzo('bici', 'B002');
const scooter2 = new Mezzo('scooter', 'S002');

// Istanzia oggetti Utente
const utenteAlice = new Utente('Alice', 'Rossi', 'alice.rossi@example.com', 'Carta di Credito');
const utenteMarco = new Utente('Marco', 'Verdi', 'marco.verdi@example.com', 'PayPal');

// Crea un'istanza della classe Citta e aggiungi i mezzi
const milano = new Citta('Milano');
milano.aggiungiMezzo(bici1);
milano.aggiungiMezzo(scooter1);
milano.aggiungiMezzo(monopattino1);

milano.mostraStatoMezzi();

// Testa la logica di prenotazione dei mezzi da parte degli utenti

// Alice prenota una bici
utenteAlice.prenotaMezzo(bici1);
milano.mostraStatoMezzi();

// Marco prova a prenotare la bici già in uso da Alice
utenteMarco.prenotaMezzo(bici1);
milano.mostraStatoMezzi();

// Marco prenota uno scooter disponibile
utenteMarco.prenotaMezzo(scooter1);
milano.mostraStatoMezzi();

// Test aggiunta di nuovi mezzi alle città
milano.aggiungiMezzo(bici2);
milano.aggiungiMezzo(scooter2);
milano.mostraStatoMezzi();

// Simulazione di un mezzo in manutenzione
monopattino1.stato = 'manutenzione';
console.log(`[Aggiornamento Stato] Il monopattino ID:${monopattino1.id} è ora in manutenzione.`);
milano.mostraStatoMezzi();

// Utente prova a prenotare un mezzo in manutenzione
utenteAlice.prenotaMezzo(monopattino1);
