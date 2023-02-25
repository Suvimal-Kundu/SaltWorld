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
import AppointmentForms from './forms/AppointmentForms';
function Membership() {
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
          <ColumnDirective field='MembershipId' headerText='Membership Id' minWidth= '100' width= '150' maxWidth= '300' />
          <ColumnDirective field='MembershipName' headerText='Name' minWidth= '100' width= '150' maxWidth= '300' />
          <ColumnDirective field='MembershipDescription' headerText='Description' minWidth= '100' width= '150' maxWidth= '300' />
          <ColumnDirective field='ServicePackage' headerText='Service Package' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='ServiceId' headerText='Service Id' minWidth= '100' width= '150' maxWidth= '300' />
          <ColumnDirective field='SessionType' headerText='Session Type' minWidth= '100' width= '150' maxWidth= '300' />
          <ColumnDirective field='NumberOfSessions' headerText='Number Of Sessions' minWidth= '100' width= '150' maxWidth= '300' />
          <ColumnDirective field='Validity' headerText='Validity' minWidth= '100' width= '150' maxWidth= '300' />
          <ColumnDirective field='OriginalPrice' headerText='Original Price' minWidth= '100' width= '150' maxWidth= '300' />
          <ColumnDirective field='SellingPrice' headerText='Selling Price' minWidth= '100' width= '150' maxWidth= '300' />
          <ColumnDirective field='HsnCode' headerText='Hsn Code' minWidth= '100' width= '150' maxWidth= '300' />
          <ColumnDirective field='TaxRate' headerText='Tax Rate' minWidth= '100' width= '150' maxWidth= '300' />
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, InfiniteScroll,  Resize]} />
      </GridComponent>
      </div>
      <AppointmentForms/>
    </div>
  )
}

export default Membership
