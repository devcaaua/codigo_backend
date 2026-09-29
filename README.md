# Aula_Beckend_Atividade

## API Empresa de Dispositivos

Projeto exemplo para aula de desenvolvimento de sistemas backend utilizando dados em mockupJSON

- times.json

```JSON
[
    {
        "id": 1,
        "item": "Notebook Dell",
        "local": "Labortorio 01",
        "dataRegistro": "2026-09-10",
        "valor": 3500,
        "patrimonio": "PAT-00125"
    },
    {
        "id": 2,
        "item": "Notebook Samsumg",
        "local": "Labortorio 02",
        "dataRegistro": "2026-08-11",
        "valor": 4500,
        "patrimonio": "PAT-00126"
    },
    {
        "id": 3,
        "item": "Notebook Apple",
        "local": "Labortorio 03",
        "dataRegistro": "2026-10-12",
        "valor": 5500,
        "patrimonio": "PAT-00127"
    }
]
```

## Órgãos transversais
- VsCode
- Node.js
- JavaScript
- JSON

## Passos para executar
- 1 Clone o/a
- 2 Abra com VsCode e em um terminal CMD ou BASH didige:
  
npm install
npm run dev

- 3 Teste as rotas com a extensão Thunder Client do VsCode

### Para testar o Front-End
- Abra o arquivo client/index.html com a extensão Live Server do VsCode

## Rotas

app.post: http://localhost:3000/inventario

app.get: http://localhost:3000/inventario

app.put: http://localhost:3000/inventario/:id

app.delete: http://localhost:3000/inventario/:id

## Exemplos de requisições

- Criar POST: http://localhost:3000/inventario
- Corpo

{
    "item": "Projetor Epson",
    "local": "Sala 03",
    "dataRegistro": "2026-10-19",
    "valor": 5800,
    "patrimonio": "PAT-00128"
}

- Resposta

{
    "id": 4,
    "item": "Projetor Epson",
    "local": "Sala 03"
    "dataRegistro": "2026-10-15",
    "valor": 5800,
    "patrimonio": "PAT-00128"
}

- Atualização PUT: http://localhost:3000/inventario/:id

{
    "item": "Projetor AOC",
    "local": "Sala 05",
    "dataRegistro": "2026-10-13",
    "valor": 6000,
    "patrimonio": "PAT-00129"
}

- Reposta

{
    "id": 5,
    "item": "Projetor AOC",
    "local": "Sala 07",
    "dataRegistro": "2026-10-17",
    "valor": 8000,
    "patrimonio": "PAT-00129"
}

## Testes com extensão Thunder Client do VsCode

<img width="904" height="975" alt="image" src="https://github.com/user-attachments/assets/cbe8da05-1e12-419a-ae1e-f28c7b3c2645" />

<img width="922" height="1008" alt="image" src="https://github.com/user-attachments/assets/599d2833-e8a4-42c9-9047-647da2c07454" />

<img width="940" height="1001" alt="image" src="https://github.com/user-attachments/assets/76f54599-f388-4034-a179-ef0b6914b29a" />

<img width="938" height="1021" alt="image" src="https://github.com/user-attachments/assets/93b20ac4-6505-4f2b-ad65-eead19010ce7" />
