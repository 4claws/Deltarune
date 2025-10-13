## Tutorial

### Come funziona markdown?
- [Documento onnicomprensivo](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

### Come aggiungo una nuova pagina?
Basta aggiungerla all'interno di docs come `<nomepagina>.md`.

### Come aggiungo delle foto?
Tutti i file media possono essere messi dentro `docs/assets/` e referenziati così:

`![Nomefoto](assets/img/foto.formato)` oppure si possono importare foto esterne con `![Nomefoto](link)`.

### Come cambio la barra di navigazione?
Per aggiungere una pagina alla barra di navigazione modifica la sezione `nav` di `mkdocs.yml`.

Basta aggiungere un altro punto alla lista in formato: `- '<nome visualizzato>': <nomefile>`.

### Posso modificare qualcosa senza dover ribuildare il sito?
Si! Nel titolo del commit, metti all'inizio `[Skip CI]`.

Ad esempio: `[Skip CI] Caricata immagine per dopo`.
