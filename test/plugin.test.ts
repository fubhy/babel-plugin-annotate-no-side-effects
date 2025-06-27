import path from "node:path";
import { pluginTester } from "babel-plugin-tester";
import plugin from "../src/index.js";

pluginTester({ plugin, fixtures: path.join(__dirname, "fixtures") });
