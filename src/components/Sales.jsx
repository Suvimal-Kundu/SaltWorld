import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Edit,
  Toolbar,
  InfiniteScroll,
  Resize
} from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';
function Sales() {
  const editing ={allowEditing: true};
  const toolbarOptions = ['Search','ExcelExport','PdfExport',  'Edit'];
  return (
    <div className="flex flex-row w-full">
      <GridComponent dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 10 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        height= {500}
        enableInfiniteScrolling= {true}
        infiniteScrollSettings= {{ initialBlocks: 5 }}
        allowResizing= {true}
      >
        <ColumnsDirective>
          <ColumnDirective field='SalesId' headerText='Sales Id' width='80' />
          <ColumnDirective field='ClientId' headerText='Client Id' width='80' />
          <ColumnDirective field='SaleItemId' headerText='Sale Item Id' width='80' />
          <ColumnDirective field='SaleItemPrice' headerText='Sale Item Price' width='100'/>
          <ColumnDirective field='HsnCode' headerText='Hsn Code' width='80' />
          <ColumnDirective field='SaleItemGST' headerText='Sale Item GST' width='80'/>
          <ColumnDirective field='BranchId' headerText='Branch Id' width='80'/>
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, InfiniteScroll,  Resize]} />
      </GridComponent>
    </div>
  )
}

export default Sales
