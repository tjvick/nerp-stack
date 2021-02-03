import {pool} from "../database/pool.js";
import {createMyTable, dropMyTable, insertIntoMyTable} from "../database/queries.js";

await pool.query(dropMyTable);
await pool.query(createMyTable);
await pool.query(insertIntoMyTable);

await pool.end();