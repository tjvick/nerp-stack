export const dropMyTable = `
DROP TABLE IF EXISTS my_table;
`;

export const createMyTable = `
CREATE TABLE IF NOT EXISTS my_table (
  id SERIAL PRIMARY KEY,
  message VARCHAR DEFAULT ''
)
`;

export const insertIntoMyTable = `
INSERT INTO my_table (message)
VALUES ('This message lives in a database')
`;

export const readMyTable = `
SELECT
  id,
  message
FROM my_table;
`
