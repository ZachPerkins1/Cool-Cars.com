# Cool-Cars.com

Database set up:
1. Log into PSQL CLI tool.
psql -U postgres 

2. Create DB and leave PSQL CLI.
CREATE database coolcars;
\q

3. Run main.SQL.
psql -U postgres -d coolcars -a -f ./database/main.sql

4. Run populate.SQL.
 psql -U postgres -d coolcars -a -f ./database/populate.sql

Frontend set up:
1. Run npm install.

2. Run npm run dev.


Server set up:
1. Run npm install if you haven't already.

2. Run npm build if you haven't already.

3. Run npm start.
