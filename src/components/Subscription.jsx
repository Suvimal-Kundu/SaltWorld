import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Edit,
  Toolbar
} from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';
import Form from './forms/Form';

function Subscription() {
  const editing ={allowEditing: true};
  const toolbarOptions = ['Search','ExcelExport','PdfExport',  'Edit'];
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-row gap-2 w-full">
      <GridComponent dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 10 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          <ColumnDirective field='ProductId' headerText='Product Id' textAlign='Right' width='100' />
          <ColumnDirective field='ProductName' headerText='Name' width='150' />
          <ColumnDirective field='ProductDescription' headerText='Description' />
          <ColumnDirective field='ProductPricePerUnit' headerText='PPU' />
          <ColumnDirective field='ProductUnit' headerText='Unit' textAlign='Right' format='C2' width='100' />
          <ColumnDirective field='GSTRate' headerText='GST Rate' />
          <ColumnDirective field='HsnCode' headerText='Hsn Code' />
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar]} />
      </GridComponent>
      </div>
      <Form />
    </div>
  )
}

export default Subscription
