
OLA! MAIS UMA SEMANA E COM UM CONTRATO A CUMPRIR
Dessa vez fizemos uma relação com postmam e o robo 3T

Vamos ao contrato:

* "/titulos/marvel" Deverá retornar todos os títulos com o estudio Marvel

* "/titulos/ghibli" Deverá retornar todos os títulos com o estudio Ghibli

* "/titulos/pixar" Deverá retornar todos os títulos com o estudio Pixar

* "/estudios" Deverá retornar todos os estudios cadastrados

* "/titulos" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

* "/estudios" Deverá criar um estudio

* "/titulos" Deverá criar um título

* "/titulos/[ID]" Deverá deletar titulo por id específico e retorna mensagem amigável

* "/estudios/[ID]" Deverá deletar estudio por id específico e retorna mensagem amigável

* "/titulos/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado

 "/estudios/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o estudio alterado

Regras de negócio
* Não deverá ser possível criar estudio com o mesmo nome
* Não deverá ser possível criar título com o mesmo nome
* Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema, utilizando o numero do id do estudio correspondente no corpo da requisição


Dados para Collection Estudios:
id: autogerado e obrigatório
nome: texto e obrigatório
criadoEm: data gerada automaticamente e obrigatório


API deve retornar seguinte JSON:
```javascript
[
    {
        "criadoEm": "2021-08-07T17:16:29.746Z",
        "_id": "610ebffa7a7dc30e24af5ee7",
        "nome": "Pixar",
        "__v": 0
    },
    {
        "criadoEm": "2021-08-12T21:37:11.383Z",
        "_id": "61159490b367853bc0a9c119",
        "nome": "Marvel",
        "__v": 0
    },
    {
        "criadoEm": "2021-08-13T00:25:58.196Z",
        "_id": "6115c25e337a58400c27e19f",
        "nome": "Ghibli",
        "__v": 0
    }
]
```

Dados para Collection Titulos:

id: autogerado e obrigatório
nome: texto e obrigatório
genero: texto e obrigatório
descricao: texto e obrigatório
criadoEm: data gerada automaticamente e obrigatório
estudio: referencia do estudio cadastrado previamente obrigatório

API deve retornar seguinte JSON:

```javascript
  {
        "criadoEm": "2021-08-13T14:10:20.829Z",
        "_id": "61167d51311dd01808938918",
        "nome": "spidermen: Longe de Casa",
        "genero": "acao",
        "descricao": "Peter Parker está em uma viagem de duas semanas pela Europa, ao lado de seus amigos de colégio, quando é surpreendido pela visita de Nick Fury. Convocado para mais uma missão heroica, ele precisa enfrentar vários vilões que surgem em cidades-símbolo do continente, como Londres, Paris e Veneza, e também a aparição do enigmático Mysterio.",
        "estudio": {
            "criadoEm": "2021-08-12T21:37:11.383Z",
            "_id": "61159490b367853bc0a9c119",
            "nome": "Marvel",
            "__v": 0
        },
        "__v": 0
    }
```


      UM POUQUINHO DA EMOÇÃO

        buscando por estudios
```javascript
        const mostrarTituloMarvel = async (req, res) => {
          const titulos = await Titulo.find().populate('estudio')
            const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Marvel")
```