// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage(`ENVIRONMENT DIVISION is optional.
		
		DATA DIVISION is optional.
		
		In IDENTIFICATION DIVISION, except PROGRAM-ID. everything else is optional.
		
		From Column 8-11, we call AREA-A where we should code DIVISIONS, SECTIONS, PARAGRAPHS and 01 group level items.
		
		From column 12-72, we call AREA-B where we will code rest of the Cobol statements other than DIVISIONS, SECTIONS, PARAGRAPHS and 01 group level items.
		
		If you specify SELECT OPTIONAL file ASSIGN TO filename, and if filename is not present physically then the program will NOT abend. Files with OPTIONAL can be opened with EXTEND, I/O or INPUT mode so that the file will be created else it return status code 35.
		
		FILE STATUS is used to identify the status of each operation performed against the file. FILE STATUS IS ws-status, where ws-status can be declared in working storage section with length of 2 bytes.  
		
		SELECT empfile ASSIGN TO empfileo where empfile is a logical file and empfileo is physical file. Inside the cobol program, for any operation on this file we have to use logical file name which is empfile and later all these operations will be reflected in physical file empfileo.
		
		If you are passing data from JCL to cobol program using PARM parameter, please declare two variables in linkage section viz., one is to store length of the data and the other one for actual data.
		
		Main program will have 'PROCEDURE DIVISION' where as sub-program or called program will have 'PROCEDURE DIVISION using [data-items]...' 
		
		USAGE clause reduce the storage space indirectly increasing the efficiency of the program. The default usage is DISPLAY and its not applicable for 66,77 and 88 level items. 
		
		COMP-1 => Left most 8 bits for exponent and remaining 24 bits for mantissa. COMP-2 => Left most 12 bits for exponent and 52 bits for mantissa. Both of the items store data in the format of Mantissa and exponent.
		
		Comp-3 => also called as packed decimal form where the data will be stored in memory as BCD (Binary Coded Decimal) format. Two digits can be stored in each byte and the number of bytes required for a variable is calculated using formula (n+1)/2. The low nybble of the least significant byte contains a sign. So even though we didn't define sign variable for COMP-3, a nibble is reserved for it. 
		
		Examples: 
		
			PIC S9(7) COMP-3.     Byte size = (7 + 1) / 2 = 4
		
			PIC S9(5)V99 COMP-3.  Byte size = (5 + 2 + 1) / 2 = 4
		
			PIC S9(6) COMP-3.     Byte size = (6 + 1) / 2 = 3.5, rounded to 4
		
			Comp-3 fields reserve a nybble for the sign, even for "unsigned" values, so the following fields are still 4 bytes:
		
			PIC 9(7) COMP-3.     Byte size = (7 + 1) / 2 = 4
		
			PIC 9(6) COMP-3.     Byte size = (6 + 1) / 2 = 3.5, rounded to 4
		
			
		14. START command is used in DYNAMIC mode to read the KSDS file. It will set the pointer to the next read for reading the record.
			 START file-name KEY <relational-operator> <data-name>
					 [INVALID KEY statements]
					 [NOT INVALID KEY statements]
			 END-EVALUATE.
			 First key-value will be moved to data name and once START commands executes, the pointer will be placed at the starting of matched record.
		
		15. READ NEXT is used to read the records sequentially after the record to which pointer was set by the START command based on key value.`);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
