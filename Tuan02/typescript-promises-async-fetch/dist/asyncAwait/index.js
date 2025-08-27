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
exports.postData = exports.fetchMultipleData = exports.fetchData = void 0;
const fetchData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});
exports.fetchData = fetchData;
const fetchMultipleData = (urls) => __awaiter(void 0, void 0, void 0, function* () {
    const fetchPromises = urls.map(url => (0, exports.fetchData)(url));
    return Promise.all(fetchPromises);
});
exports.fetchMultipleData = fetchMultipleData;
const postData = (url, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = yield response.json();
        return result;
    }
    catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
});
exports.postData = postData;
