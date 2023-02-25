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
function ClientMemberships() {
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
          <ColumnDirective field='ClientMembershipId' headerText='Client Membership Id' width='80' />
          <ColumnDirective field='ClientId' headerText='Client Id' width='80' />
          <ColumnDirective field='MembershipId' headerText='Membership Id' width='80' />
          <ColumnDirective field='MembershipPurchaseDate' headerText='Membership Purchase Date' width='100'/>
          <ColumnDirective field='MembershipStartDate' headerText='Membership Start Date' width='80' />
          <ColumnDirective field='MembershipOriginalEndDate' headerText='Membership Original End Date' width='80'/>
          <ColumnDirective field='MembershipActualEndDate' headerText='Membership Actual End Date' width='80'/>
          <ColumnDirective field='MembershipPauseDate' headerText='Membership Pause Date' width='80'/>
          <ColumnDirective field='MembershipResumeDate' headerText='Membership Resume Date' width='80'/>
          <ColumnDirective field='MembershipStatus' headerText='Membership Status' width='80'/>
          <ColumnDirective field='BranchId' headerText='Branch Id' width='80'/>
          <ColumnDirective field='ExtensionCount' headerText='Extension Count' width='80'/>
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, InfiniteScroll,  Resize]} />
      </GridComponent>
    </div>
  )
}

export default ClientMemberships
