import { Notice, Plugin } from "obsidian";
import { DEFAULT_SETTINGS, Settings, SettingTab } from "./settings.ts";

export default class textlintDeno extends Plugin {
	settings: Settings = DEFAULT_SETTINGS;

	async onload() {
		await this.loadSettings();
		this.addSettingTab(new SettingTab(this.app, this));

		this.addRibbonIcon("dice", "Greet", () => {
			new Notice("Hello, world!");
		});
	}

	private async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}
}
