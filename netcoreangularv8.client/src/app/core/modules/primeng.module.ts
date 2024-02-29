import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FullCalendarModule } from '@fullcalendar/angular';

/*
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BlockUIModule } from 'primeng/blockui';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BundlesModule } from 'primeng/bundles';
import { CaptchaModule } from 'primeng/captcha';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DeferModule } from 'primeng/defer';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { DomModule } from 'primeng/dom';
import { DragDropModule } from 'primeng/dragdrop';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FocusTrapModule } from 'primeng/focustrap';
import { GMapModule } from 'primeng/gmap';
import { ImageModule } from 'primeng/image';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask'
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpeedDialModule } from 'primeng/speeddial';
import { SpinnerModule } from 'primeng/spinner';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
*/


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FullCalendarModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    DialogModule,
    DropdownModule,
    DynamicDialogModule,
    FileUploadModule,
    GalleriaModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    PanelMenuModule,
    ProgressBarModule,
    RadioButtonModule,
    StyleClassModule,
    TableModule,
    ToastModule
  ],
  exports: [
    FullCalendarModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    DialogModule,
    DropdownModule,
    DynamicDialogModule,
    FileUploadModule,
    GalleriaModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    PanelMenuModule,
    ProgressBarModule,
    RadioButtonModule,
    StyleClassModule,
    TableModule,
    ToastModule
  ]
})
export class PrimeNgModule { }

/*
  ButtonModule,
  CalendarModule,
  CardModule,
  ConfirmDialogModule,
  ConfirmPopupModule,
  DialogModule,
  DynamicDialogModule,
  EditorModule,
  InputTextModule,
  InputTextareaModule,
  MessageModule,
  MessagesModule,
  PanelModule,
  PanelMenuModule,
  ProgressBarModule,
  RadioButtonModule,
  StyleClassModule,
  FullCalendarModule,

  AutoCompleteModule,
AvatarModule,
AvatarGroupModule,
BlockUIModule,
BreadcrumbModule,
CaptchaModule,
CarouselModule,
CascadeSelectModule,
CheckboxModule,
ChipModule,
ChipsModule,
CodeHighlighterModule,
ColorPickerModule,
ContextMenuModule,
DataViewModule,
DeferModule,
DockModule,
DragDropModule,
EditorModule,
FieldsetModule,
FocusTrapModule,
GalleriaModule,
GMapModule,
ImageModule,
InplaceModule,
InputMaskModule,
InputNumberModule,
InputSwitchModule,
LightboxModule,
ListboxModule,
MegaMenuModule,
MenuModule,
MultiSelectModule,
OrderListModule,
OrganizationChartModule,
OverlayPanelModule,
PaginatorModule,
PickListModule,
ProgressSpinnerModule,
RatingModule,
RippleModule,
ScrollPanelModule,
ScrollTopModule,
SelectButtonModule,
SidebarModule,
SkeletonModule,
SlideMenuModule,
SliderModule,
SpeedDialModule,
SpinnerModule,
SplitterModule,
StepsModule,
TerminalModule,
TieredMenuModule,
TimelineModule,
ToggleButtonModule,
TreeSelectModule,
TreeTableModule,
TriStateCheckboxModule,
*/
