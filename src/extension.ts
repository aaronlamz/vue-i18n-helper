import * as vscode from 'vscode';

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vscode-i18n-helper" is now active!');

	let disposable = vscode.commands.registerCommand('vscode-i18n-helper.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vscode-i18n-helper!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {
  console.log('Deactivated');
}

