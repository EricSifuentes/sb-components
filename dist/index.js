"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStories = exports.Page = exports.Header = exports.MyLabel = void 0;
var MyLabel_1 = require("./components/MyLabel");
Object.defineProperty(exports, "MyLabel", { enumerable: true, get: function () { return __importDefault(MyLabel_1).default; } });
var Header_1 = require("./stories/Header");
Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return Header_1.Header; } });
var Page_1 = require("./stories/Page");
Object.defineProperty(exports, "Page", { enumerable: true, get: function () { return Page_1.Page; } });
var Button_stories_1 = require("./stories/Button.stories");
Object.defineProperty(exports, "ButtonStories", { enumerable: true, get: function () { return __importDefault(Button_stories_1).default; } });
