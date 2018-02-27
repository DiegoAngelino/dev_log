---
title: File sharing Decentralizzato - Step 1
---
> Come ho (provato) a costruire un sistema di file sharing basato su IPFS e IOTA

### IPFS - piccoli cenni
La homepage di [IPFS](https://ipfs.io/) lo descrive come un protocollo web p2p per rendere l'intera rete più veloce, sicura ed aperta.
Non è questo lo scopo di questa breve intro, ma solo per dare un'idea, la tecnologia alla base - o almeno alla quale si ispira - è la stessa sulla quale si basa [BitTorrent](http://www.bittorrent.com) e parti del file system dei sistemi Linux.
Ovviamente per qualsiasi altra ricerca, Big G è tuo amico <3

Lo scopo del mio progetto è costruire un sistema di file sharing decentralizzato e gratuito, che offra completa resilienza dei propri file rendendoli accessibili a chiunque - quindi se avete un diario segreto, non credo che sia il luogo giusto dove savarlo!

Sicuramente non è un'idea originale, anche se a giudicare dai documenti che sono riuscito a reperire non è certo come cercare "Come disistallare un programma da Windows" su Gogle e trovare la risposta di [Aranzulla](https://www.aranzulla.it/).

### Perché IOTA
Se sai già di cosa sto parlando e hei già sentito - o letto - di qualcosa di simile, sicuramente ti starai chiedendo come mai abbia scelto [IOTA](https://iota.org/) e non [Ethereum](https://www.ethereum.org/).
Il motivo principale che mi ha spinto a preferirlo è il costo delle transazioni (trx): su IOTA non ci sono, o meglio, non hanno costi aggiuntivi.

### IOTA - Piccoli cenni
Il il page title del sito di ([IOTA](https://iota.org/)) dice: "The Next Generation Blockchain". 
In effetti è anch'essa una blockchain, ma anziché esserlo nel modo canonico lo fa basando la tua tecnologia sul MerkleDAG (Merkle Directed Acyclic Graph) - che però chiama Tangle - che altro non è che la struttura matematica ad albero - udite, udite - usata anche da IPFS, sul cui [blog](https://discuss.ipfs.io/) si può trovare questa definizione ([fonte](https://discuss.ipfs.io/t/what-is-a-merkle-dag/386))
>"A Merkle DAG is a Merkle directed acyclic graph. That is a data structure similar to a Merkle tree19 but not so strict: 
>such DAG does not need to be balanced and its non-leaf nodes are allowed to contain data."
IOTA nasce principalmente per permettere micro pgamenti tra smart devices, ed è perciò adatta ad essere utilizzata senza avere molta potenza di calcolo. Non può essere minata e le sue trx sono gratuite, o meglio, anzichè pagare una vera e propra fee, per poter inserire una trx nel Tangle c'è bisogno di validare due trx non ancora validate. Quindi la fee che si paga con altre cryptovalute, in IOTA si paga mettendo a disposizione la propria potenza di calcolo e sostenendo attivamente la rete.


### "Talk is cheap, show me the code" - citazione figa ma un po' fuori luogo
Sicuramente se stai legendo questo articolo non è certo per chiacchierare di quando può essere figo e innovativo IPFS, o per filosofeggiare sulla rivalità che c'è tra Ethereum e IOTA (almeno per quanto riguarda il Team di Ethereum!).
Passo subito alle cose importanti dicendo che il mio obiettivo per questo progetto è quello di essere il più decentralizzato possibile,
perciò cercherò di evitare VPS e altri servizi terzi come [Heroku](https://www.heroku.com/) o [Docker](https://www.docker.com/).
Cercherò di eseguire quanto più possibile nel browser, e di disribuire lo stesso sito via IPFS.
"Checherò" perchè nel momento in cui scrivo, non ho ancora trovato come eseguire un nodo IOTA nel browser, inolttre ci sono altri aspetti che non sono ancora stati definiti in modo chiaro.

I prodotto finale sarà suddiviso in due parti
- carricamento di un (o più, è da decidere) file su IPFS
- caricamento dell'hash identificativo del contenuto appena caricato, sul Tangle di IOTA

Ipoizzavo anche di inserire un'autenticazione utente tramite Telegram (in futuro potrebbe essere sviluppato un bot aposito) o Google in modo da inserire nella trx di IOTA che contiene l'hash del file caricato, anche un nominativo in modo da poter mostrare all'utente uno storico dei suoi file. Ma questo punto è ancora molto lontano dall'essere definito.

### Da dove partire?
Il mio primo passo è stato cercare in rete una guida su come caricare un file su IPFS. Facile trovarla, facilissimo, ma non era esatamente ciò che cercavo. Inizialmente trovavo solo guide su come impostare un nodo IPFS "up-and-running" in locale, e naturalmente le stesse sarebbero sevite se avessi voluto inizializzare un nodo su una VPS o simili. Ma quello che mi seviva era un modo per poter sviluppare una soluzione server-less.
Così ho cercato delle API per IPFS, ed è qui che [GitHub](https://github.com/) mi è venuto in soccorso tendendomi una mano, aiutato anche da [Medium](https://medium.com/).
Casualmente trovo [questo](https://medium.com/@angellopozo/uploading-an-image-to-ipfs-e1f65f039da4) articolo, che insieme agli esempi del repository ufficiale di [IPFS](https://github.com/ipfs) sono la base del mio primo approccio.


Nel caso sia interessato a vedere i progressi fatti o voglia darmi una mano,
puoi trovare tutto il codice su [GitHub](https://github.com/DiegoAngelino/DecentralizedFileSharing).



#EnjoyCoding
[wrote with <3 by Diego](justAnotherVacuumLink)