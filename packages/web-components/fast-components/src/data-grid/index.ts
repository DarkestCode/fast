import { customElement } from "@microsoft/fast-element";
import { 
    DataGrid, 
    DataGridTemplate as gridTemplate,
    DataGridHeader, 
    DataGridHeaderTemplate as gridHeaderTemplate, 
    DataGridRow, 
    DataGridRowTemplate as gridRowTemplate,
    DataGridRows, 
    DataGridRowsTemplate as gridRowsTemplate, 
    DataGridCell, 
    DataGridRowTemplate as gridCellTemplate  
} from "@microsoft/fast-foundation";
import { DataGridStyles as gridStyles } from "./data-grid.styles";
import { DataGridHeaderStyles as headerStyles } from "./data-grid-header.styles";
import { DataGridRowStyles as rowStyles } from "./data-grid-row.styles";
import { DataGridRowsStyles as rowsStyles } from "./data-grid-rows.styles";
import { DataGridCellStyles as cellStyles } from "./data-grid-cell.styles";

/**
 * The FAST Data Grid Element. 
 *
 * @public
 * @remarks
 * HTML Element: \<fast-data-grid\>
 */
@customElement({
    name: "fast-data-grid",
    template: gridTemplate,
    styles: gridStyles,
})
export class FASTDataGrid extends DataGrid {}

/**
 * Styles for DataGrid
 * @public
 */
export const DataGridStyles = gridStyles;

/**
 * The FAST Data Grid Header Element. 
 *
 * @public
 * @remarks
 * HTML Element: \<fast-data-grid-header\>
 */
@customElement({
    name: "fast-data-grid-header",
    template: gridHeaderTemplate,
    styles: headerStyles,
})
export class FASTDataGridHeader extends DataGridHeader {}

/**
 * Styles for DataGrid row
 * @public
 */
export const DataGridHeaderStyles = headerStyles;

/**
 * The FAST Data Grid Row Element. 
 *
 * @public
 * @remarks
 * HTML Element: \<fast-data-grid-row\>
 */
@customElement({
    name: "fast-data-grid-row",
    template: gridRowTemplate,
    styles: rowStyles,
})
export class FASTDataGridRow extends DataGridRow {}

/**
 * Styles for DataGrid row
 * @public
 */
export const DataGridRowStyles = rowStyles;

/**
 * The FAST Data Grid Rows Element. 
 *
 * @public
 * @remarks
 * HTML Element: \<fast-data-grid-rows\>
 */
@customElement({
    name: "fast-data-grid-rows",
    template: gridRowsTemplate,
    styles: rowsStyles,
})
export class FASTDataGridRows extends DataGridRow {}

/**
 * Styles for DataGrid rows
 * @public
 */
export const DataGridRowsStyles = rowsStyles;


/**
 * The FAST Data Grid Cell Element. 
 *
 * @public
 * @remarks
 * HTML Element: \<fast-data-grid-cell\>
 */
@customElement({
    name: "fast-data-grid-cell",
    template: gridCellTemplate,
    styles: cellStyles,
})
export class FASTDataGridCell extends DataGridCell {}

/**
 * Styles for DataGrid cell
 * @public
 */
export const DataGridCellStyles = cellStyles;

