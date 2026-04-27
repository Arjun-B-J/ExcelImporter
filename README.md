# ExcelImporter

A small full-stack demo that reads an Excel spreadsheet on the backend and renders its rows as a table in the browser. The Flask API parses the workbook with pandas and returns it as JSON; the Angular frontend fetches the JSON and displays it.

## Tech stack

- **Frontend:** Angular 15 + Bootstrap 5 (`Frontend/ng-importer`)
- **Backend:** Python 3.8 + Flask + Flask-CORS + pandas + openpyxl (`Backend`)
- **Orchestration:** Docker Compose

## Project structure

```
.
├── Backend/                  # Flask API
│   ├── app.py                # /getJSON endpoint, reads test.xlsx via pandas
│   ├── requirements.txt
│   ├── Dockerfile
│   └── test.xlsx             # sample spreadsheet served by the API
├── Frontend/
│   └── ng-importer/          # Angular 15 app
│       ├── src/app/          # AppComponent fetches /getJSON and renders a table
│       ├── package.json
│       └── Dockerfile
└── docker-compose.yml
```

## Running

With Docker installed:

```bash
docker compose up --build
```

This starts two containers:

- Backend (Flask) on http://localhost:5000
- Frontend (Angular dev server) on http://localhost:4200

Open http://localhost:4200 in a browser. The Angular app calls `GET http://localhost:5000/getJSON`, which returns the contents of `Backend/test.xlsx` as a JSON array.

## Data format

The backend reads `Backend/test.xlsx` and returns rows via `pandas.DataFrame.to_json(orient="records")`. The bundled sample sheet has columns `Id`, `Name`, `Username`, `Email`, which is what the Angular table is wired to display. To use a different sheet, replace `Backend/test.xlsx` and update the `USERS` interface and table columns in `Frontend/ng-importer/src/app/app.component.ts` / `app.component.html` to match.
