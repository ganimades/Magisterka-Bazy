import { Injectable } from '@angular/core';
import { ListType } from "../../../../shared/models";

@Injectable()
export class ListTypeService {
  listType: ListType;

  constructor() {
    this.listType = (localStorage.getItem('angular-listType') || 'list') as ListType;

  }

  getListType() {
    return this.listType
  }

  setListType(listType: ListType) {
    localStorage.setItem('angular-listType', listType);
    this.listType = listType
  }

}
