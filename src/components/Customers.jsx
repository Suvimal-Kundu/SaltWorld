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
import ClientsForm from './forms/ClientsForm';

function Customers() {
  const editing ={allowEditing: true};
  const toolbarOptions = ['Search','ExcelExport','PdfExport',  'Edit'];
  return (
      <div className="flex flex-row gap-1">
      <div >
      <GridComponent 
        height= {500}
        width= {950}
        dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 10 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        enableInfiniteScrolling= {true}
        infiniteScrollSettings= {{ initialBlocks: 5 }}
        allowResizing= {true}
      >
        <ColumnsDirective>
          <ColumnDirective field='ClientId' headerText='Client Id' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='FirstName' headerText='First Name' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='LastName' headerText='Last Name' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='MobileNumber' headerText='Mobile Number' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='Gender' headerText='Gender' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='DOB' headerText='DOB' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='Anniversary' headerText='Anniversary' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='Occupation' headerText='Occupation' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='ClientSource' headerText='Client Source' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='ClientType' headerText='Client Type' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='PAN' headerText='PAN' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='GST' headerText='GST' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='CompanyLegalName' headerText='Company Legal Name' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='CompanyTradeName' headerText='Company Trade Name' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='BillingAddress' headerText='Billing Address' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='ShippingAddress' headerText='Shipping Address' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='EmailNotification' headerText='Email Notification' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='EmailMarketingNotification' headerText='Email Marketing Notification' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='ParentBranchId' headerText='Parent Branch Id' minWidth= '100' width= '150' maxWidth= '300'/>
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, InfiniteScroll,  Resize ]} />
      </GridComponent>
    </div>
    <ClientsForm/>
    </div>
  )
}

export default Customers
