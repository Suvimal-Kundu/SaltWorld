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
function Resources() {
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
          <ColumnDirective field='ResourceId' headerText='Resource Id' width='80' />
          <ColumnDirective field='ResourceType' headerText='Resource Type' width='80' />
          <ColumnDirective field='ResourceName' headerText='Resource Name' width='80' />
          <ColumnDirective field='Status' headerText='Status' width='100'/>
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, InfiniteScroll,  Resize]} />
      </GridComponent>
    </div>
  )
}

export default Resources
