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
import ProductsForm from './forms/ProductsForm';
function Products() {
  const editing ={allowEditing: true};
  const toolbarOptions = ['Search','ExcelExport','PdfExport',  'Edit'];
  return (
    <div className="flex flex-row gap-1">
      <div >
      <GridComponent dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 10 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        height= {500}
        width= {950}
        enableInfiniteScrolling= {true}
        infiniteScrollSettings= {{ initialBlocks: 5 }}
        allowResizing= {true}
      >
        <ColumnsDirective>
          <ColumnDirective field='ProductId' headerText='Product Id' width='80' />
          <ColumnDirective field='ProductName' headerText='Name' width='80' />
          <ColumnDirective field='ProductDescription' headerText='Description' width='80' />
          <ColumnDirective field='ProductPricePerUnit' headerText='PPU' width='100'/>
          <ColumnDirective field='ProductUnit' headerText='Product Unit' width='80' />
          <ColumnDirective field='GSTRate' headerText='GST rate' width='80'/>
          <ColumnDirective field='HsnCode' headerText='Hsn Code' width='80'/>
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, InfiniteScroll,  Resize]} />
      </GridComponent>
      </div>
      <ProductsForm />
    </div>
  )
}

export default Products
