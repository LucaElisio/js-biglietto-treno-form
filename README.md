# Js Biglietto Treno Form

### Descrizione
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

##### MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

##### MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

### Svolgimento


## HTML
1. Inserimento tag
    - [x] Input Number (km)
    - [x] Input Number (età)
    - [x] Bottone

## JS

1. Definizione variabili globali:
    - [ ] Prezzo al km = 0.21
    - [ ] Sconto = 0

2. Raccolta dati:
    - [ ] Chiedo all'utente il numero di km da percorrere
    - [ ] Chiedo all'utente l'età

3. Esecuzione logica:
    - [ ] Calcolo il prezzo di base (prezzo al km * km)
    - [ ] Se (età < 18) sconto = 0.20, altrimenti se (età > 65) sconto = 0.60
    - [ ] Calcolo sconto totale (prezzo di base * sconto)
    - [ ] Calcolo prezzo finale (prezzo di base - sconto applicato)

4. Output:
    - [ ] Stampo i km, l'età, il prezzo base, lo sconto applicato e il prezzo finale.



