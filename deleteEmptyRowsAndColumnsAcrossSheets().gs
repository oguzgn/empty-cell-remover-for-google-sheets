function deleteEmptyRowsAndColumnsAcrossSheets() {

    // Get all sheets in the spreadsheet

    const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets(); // Iterate through each sheet
    sheets.forEach(sheet => {

        // Get sheet data

        const data = sheet.getDataRange().getValues(); // Determine last row and column
        const lastRow = data.length;
        const lastCol = Math.max(...data.map((arr) => arr.length)); // Get maximum rows and columns in the sheet
        const maxRows = sheet.getMaxRows();
        const maxCols = sheet.getMaxColumns(); // Only remove rows and columns if there are empty rows or columns beyond the last row and columns
        if (maxRows > lastRow) {
            sheet.deleteRows(lastRow + 1, maxRows - lastRow);
        }
        if (maxCols > lastCol) {
            sheet.deleteColumns(lastCol + 1, maxCols - lastCol);
        }
    });
}
/**

* OnOpen trigger that creates a custom menu
* @param {Object} e
*/

function onOpen(e) {
    createCustomMenu();
}
/**
 * Create a custom menu UI in the spreadsheet
 */
function createCustomMenu() {
    let menu = SpreadsheetApp.getUi().createMenu("Custom Menu");
    menu.addItem("Delete Empty Rows and Columns Across Sheets", "deleteEmptyRowsAndColumnsAcrossSheets");
    menu.addToUi();
}
