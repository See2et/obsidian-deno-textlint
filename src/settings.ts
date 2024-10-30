import { type App, Notice, PluginSettingTab, Setting } from "obsidian";
import type TextlintDenoPlugin from "./main.ts";

export interface Settings {
	sampleStr: string;
}

export const DEFAULT_SETTINGS: Settings = {
	sampleStr: "this is a sample",
};

export class SettingTab extends PluginSettingTab {
	plugin: TextlintDenoPlugin;

	constructor(app: App, plugin: TextlintDenoPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display() {
		const { containerEl } = this;
		containerEl.empty();

		new Setting(containerEl)
			.setName("Sample String")
			.setDesc(
				"This is a sample string",
			)
			.addTextArea((textArea) =>
				textArea
					.setPlaceholder(
						"put random string",
					)
			);
	}
}
