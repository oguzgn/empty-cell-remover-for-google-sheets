#  Google Sheets Cleanup Script

Automate your Google Sheets cleanup process by removing **unnecessary empty rows and columns** across all sheets in your spreadsheet. This script not only helps you maintain a tidy workspace but also optimizes your sheet's performance by minimizing the cell usage, crucial for avoiding the **Google Sheets 10 million cell limit**.

---

##  Features

- **Cleans All Sheets in One Click**: Automatically deletes all empty rows and columns in every sheet of your Google Spreadsheet.
- **Improves Performance**: Reduces unnecessary cell usage, ensuring smoother performance for large spreadsheets.
- **Optimizes Cell Count**: Helps avoid Google Sheets' **10 million cell limit** by managing unused cells efficiently.
- **Custom Menu Integration**: Adds a user-friendly menu in your spreadsheet for one-click functionality.
- **Lightweight and Easy to Use**: No dependencies, just copy and paste the script to get started.

---

##  Installation

1. Open your Google Spreadsheet.
2. Navigate to **Extensions > Apps Script**.
3. Paste the  **"deleteEmptyRowsAndColumnsAcrossSheets.gs"** code into the script editor:
4. Save the project with a name (e.g., Cleanup Script).
5. Refresh your Google Spreadsheet to enable the script.

---

##  Example: Step-by-Step Guide

### Scenario:
You have a spreadsheet with multiple sheets where data only occupies a small portion, but the sheet dimensions extend unnecessarily to thousands of rows and columns.

### Steps:
1. Open your Google Spreadsheet.
2. After installing the script, navigate to the **Custom Menu** in the top menu bar.
3. Select **Delete Empty Rows and Columns Across Sheets**.
4. Watch the magic happen as your spreadsheet is automatically cleaned:
   - Excess rows and columns will be removed.
   - The sheet will resize to the smallest possible dimensions based on your data.

---

##  Integration with Larger Workflows

This script is particularly useful in scenarios like:
- Preparing data for visualization tools like Google Data Studio.
- Optimizing spreadsheets before importing/exporting to external systems.
- Ensuring smoother collaboration on large-scale spreadsheets.

---

##  Troubleshooting

### Issue: The script doesn't seem to work.
- **Solution**: Ensure you’ve saved the script and refreshed the spreadsheet after installation.

### Issue: I accidentally deleted important rows/columns.
- **Solution**: Use Google Sheets' **Version History** to restore a previous version of your spreadsheet.

### Issue: Custom Menu is not appearing.
- **Solution**: Go to **Extensions > Apps Script**, and re-run the `onOpen` function manually.

---

##  Related Links

- [Google Apps Script Documentation](https://developers.google.com/apps-script/)
- [Google Sheets 10 Million Cell Limit Explanation](https://support.google.com/docs/answer/37603?hl=en)

---

##  Acknowledgments

Thanks to the open-source community and Google Apps Script developers for providing inspiration and tools to make projects like this possible.

---
