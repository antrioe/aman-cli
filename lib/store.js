"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var store_exports = {};
__export(store_exports, {
  storeList: () => storeList
});
module.exports = __toCommonJS(store_exports);
const storeList = [
  {
    name: "vue3",
    value: "github:xsrole/template-vue3"
  },
  {
    name: "vue3-uni",
    value: "github:xsrole/template-uni"
  },
  {
    name: "vue3-admin",
    value: "github:xsrole/template-admin"
  },
  {
    name: "vue3-admin-simple",
    value: "github:xsrole/template-admin-simple"
  },
  {
    name: "nuxt3",
    value: "github:xsrole/template-nuxt3"
  },
  {
    name: "electron",
    value: "github:xsrole/template-electron"
  },
  {
    name: "multi-entry",
    value: "github:xsrole/template-multi-entry"
  },
  {
    name: "express",
    value: "github:xsrole/template-express"
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  storeList
});