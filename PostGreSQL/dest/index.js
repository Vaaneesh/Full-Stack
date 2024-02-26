"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://prabhakarvaaneesh:4lRFHaIWA0QG@ep-red-mode-a1f9ukjs.ap-southeast-1.aws.neon.tech/Vaaneesh?sslmode=require"
});
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
    });
}
connect();
function createPostTable() {
    return __awaiter(this, void 0, void 0, function* () {
        // connect();  //bahar bhi koi dikkat ni
        const query = `CREATE TABLE posts(
        id SERIAL PRIMARY KEY,
        postname VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255)NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`;
        let result = yield client.query(query);
        console.log(result);
    });
}
// createPostTable();
//insert
function insertData(postname, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `INSERT INTO posts(postname,email,password)
    VALUES ($1, $2, $3);`;
        const value = [postname, email, password];
        const result = yield client.query(query, value);
        console.log(result);
    });
}
insertData("Vasu", "vasu@gamil.com", "vasu123");
