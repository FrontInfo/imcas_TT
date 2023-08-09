import {Injectable} from "@angular/core";
import {TRANSLATIONS} from "./i18n/Translations";

@Injectable()
export class GlobalContext {
    private device: string = localStorage.getItem("currentDevice") ?? "desktop";
    private lang: string = localStorage.getItem("currentLanguage") ?? "en";
    private translation: Map<string, string> = new Map<string, string>();

    constructor() {
        this.translation = new Map(TRANSLATIONS.get(this.lang));
    }

    getLang(): string {
        return this.lang;
    }

    setLang(lang: string): void {
        this.lang = lang;
        localStorage.setItem("currentLanguage", this.lang);
        this.translation = new Map(TRANSLATIONS.get(this.lang));
    }

    deviceIsMobile(): boolean {
        return this.device === "mobile";
    }

    setDevice(device: string): void {
        this.device = device;
        localStorage.setItem("currentDevice", this.device);
    }

    getTranslationOfKey(key: string): string {
        if (this.translation.has(key)) {
            return this.translation.get(key)!;
        }
        return "";
    }
}
