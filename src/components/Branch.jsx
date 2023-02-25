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
function Branch() {
  const editing ={allowEditing: true};
  const toolbarOptions = ['Search','ExcelExport','PdfExport',  'Edit'];
  return (
      <div className="flex flex-row gap-1 w-full">
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
          <ColumnDirective field='BranchId' headerText='Branch Id' width='80' />
          <ColumnDirective field='BranchName' headerText='Branch Name' width='80' />
          <ColumnDirective field='BranchDetails' headerText='Branch Details' width='80' />
          <ColumnDirective field='BranchAddress' headerText='Branch Address' width='100'/>
          <ColumnDirective field='LegalName' headerText='Legal Name' width='80' />
          <ColumnDirective field='GST' headerText='GST' width='80'/>
          <ColumnDirective field='Mobile' headerText='Mobile' width='80'/>
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, InfiniteScroll,  Resize]} />
      </GridComponent>
    </div>
  )
}

export default Branch
