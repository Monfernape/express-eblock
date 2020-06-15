"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
class Application {
    constructor() {
        this.app = express_1.default();
        this.app = express_1.default();
        this.mongoConnectionString = "";
    }
    boot() {
        this.initializeApplication();
        this.bootDatabase();
    }
    initializeApplication() {
        this.app.use(express_1.default.json());
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', "*");
            res.header('Access-Control-Allow-Headers', "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
            next();
        });
        this.app.listen((process.env.PORT || 3001), () => console.log(`Server started at port ${process.env.PORT}`));
    }
    bootDatabase() {
        this.mongoConnectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URI}`;
        mongoose_1.default.set('useFindAndModify', false);
        mongoose_1.default.set('useCreateIndex', true);
        mongoose_1.default.set('useUnifiedTopology', true);
        mongoose_1.default.set('useNewUrlParser', true);
        mongoose_1.default.connect(this.mongoConnectionString, err => {
            err ? console.log("Error In Connection", err) : console.log("Connection Succeeded");
        });
    }
}
exports.Application = Application;
