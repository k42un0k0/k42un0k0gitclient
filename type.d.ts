/// <reference types="electron" />

declare interface Window { electron: typeof Electron }
declare namespace NodeJS {
    interface Global { electron: typeof Electron }
}