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
import UsersForm from './forms/UsersForm';

function Employees() {
  const editing ={allowEditing: true};
  const toolbarOptions = ['Search','ExcelExport','PdfExport',  'Edit'];
  return (
    <div className="flex flex-row gap-1">
      <div >
      <GridComponent 
        dataSource={data}
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
          <ColumnDirective field='UserId' headerText='User Id' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='FirstName' headerText='First Name' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='LastName' headerText='Last Name' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='UserType' headerText='User Type' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='UserStatus' headerText='User Status' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='LoginAccount' headerText='Login Account' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='Password' headerText='Password' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='BranchId' headerText='Branch Id' minWidth= '100' width= '150' maxWidth= '300'/>
          <ColumnDirective field='Status' headerText='Status' minWidth= '100' width= '150' maxWidth= '300'/>
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, InfiniteScroll,  Resize]} />
      </GridComponent>
      </div>
      <UsersForm/>
    </div>
  )
}

export default Employees
