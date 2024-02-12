# Translate application (Backend + Frontend)

## Technical solution:
- PostgreSQL Database
- TypeORM for DB migrations
- NestJS (NodeJS framework) Backend
- ReactJS Frontend (Running with NGINX server)

## Assumptions:

Columns in original CSVs are slightly renamed for getting straightforward consistency with test application database columns structure.

Entries table:
- `MelingoId` to `id`
- `Pos` to `pos`
- `Entry` to `entry`
- `TranslationFull` to `translationFull`

Examples table:
- `ID` to `id`
- `MelingoID` to `melingoId`
-  `Text` to `text`

The rest of columns in original CSVs is not imported and not used in the test application

## Installation and starting the app

```bash
$ docker compose up
```

## Testing app functionality

To test backend endpoint directly:

`http://localhost:8881/search?word=butter`

To test application through the UI:

`http://localhost:3000`

To navigate to pgAdmin for monitoring DB:

`http://localhost:5050` (credentials located in `.env` file)