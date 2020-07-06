import { Action } from "redux";

export interface typedAction extends Action {
  type: string;
  payload?: any;
}

export interface CheckBoxType {
  checkboxName: string;
  value: boolean;
}
