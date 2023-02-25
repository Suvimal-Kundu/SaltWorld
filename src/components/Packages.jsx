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
import ServicePackagesForm from './forms/ServicePackagesForm';

function Packages() {
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
        <ColumnDirective field='ServicePackageId' headerText='Service Package Id' width='80' />
          <ColumnDirective field='PackageName' headerText='Name' width='80' />
          <ColumnDirective field='PackageDescription' headerText='Description' width='80' />
          <ColumnDirective field='ServiceId' headerText='Service Id' width='100'/>
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, InfiniteScroll,  Resize]} />
      </GridComponent>
      </div>
      <ServicePackagesForm />
    </div>
  )
}

export default Packages
