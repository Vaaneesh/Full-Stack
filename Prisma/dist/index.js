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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertData(email, password, firstname) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = yield prisma.user.create({
            data: {
                email,
                password,
                firstname
            }
        });
        console.log(user);
    });
}
let data = [
    { email: 'batra@gmail.com', password: '1234', firstname: 'Vansh Batra' },
    { email: 'ashu@gmail.com', password: '3444', firstname: 'Ashu' },
    { email: 'rawal@gmail.com', password: '1235', firstname: 'Rawal' }
];
function insertManyData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield prisma.user.createMany({
                data: data.map(entry => ({
                    email: entry.email,
                    password: entry.password,
                    firstname: entry.firstname
                }))
            });
            console.log(users);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function find(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findUnique({
            where: {
                id: id
            }
        });
        if (user) {
            console.log(user);
        }
        else
            console.log("User not found");
    });
}
function findMany() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findMany({
            where: {
                firstname: {
                    startsWith: 'V'
                }
            }
        });
        if (user) {
            console.log(user);
        }
        else
            console.log("User not found");
    });
}
function deleteOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.delete({
            where: {
                id: id
            }
        });
        if (user)
            console.log("User deleted");
        else
            console.log("User not found");
    });
}
function deleteMany() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.deleteMany({
            where: {
                firstname: "Ashu"
            }
        });
        if (user)
            console.log("user deleted");
    });
}
function update(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.update({
            where: {
                id: id
            },
            data: {
                firstname: "Rawal Bhabhi"
            },
        });
    });
}
// insertManyData(data);
// find(2);
// findMany();
// deleteOne(6);
// deleteMany();
update(13);
// insertData("vasu@gmail.com","vasu123","Vasu");
