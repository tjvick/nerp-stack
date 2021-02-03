import pg from "pg";
import {connectionString} from "../config.js";

const { Pool } = pg;

export const pool = new Pool({ connectionString });
