import { pluginTester } from "babel-plugin-tester";
import plugin from "../src/index.js";
import path from "node:path";

pluginTester({ plugin, fixtures: path.join(__dirname, "fixtures") });
