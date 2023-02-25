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
import ServiceForm from './forms/ServiceForm';
function Services() {
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
        height= {500}
        width= {950}
        enableInfiniteScrolling= {true}
        infiniteScrollSettings= {{ initialBlocks: 5 }}
        allowResizing= {true}
      >
        <ColumnsDirective>
          <ColumnDirective field='ServiceId' headerText='Service Id' width='80' />
          <ColumnDirective field='ServiceName' headerText='Name' width='80' />
          <ColumnDirective field='ServiceCategory' headerText='Category' width='80' />
          <ColumnDirective field='ServiceDescription' headerText='Description' width='80' />
          <ColumnDirective field='Duration' headerText='Duration' width='100'/>
          <ColumnDirective field='Service Cost' headerText='Service Cost' width='80' />
          <ColumnDirective field='SellingCost' headerText='Selling Cost' width='80' />
          <ColumnDirective field='TaxRate' headerText='Tax rate' width='80'/>
          <ColumnDirective field='HsnCode' headerText='Hsn Code' width='80'/>
          <ColumnDirective field='ResourceType' headerText='Resource Type' width='80'/>
          <ColumnDirective field='IncludeTax' headerText='Include Tax' width='80'/>
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, InfiniteScroll,  Resize]} />
      </GridComponent>
      </div>
      <ServiceForm />
    </div>
  )
}

export default Services
