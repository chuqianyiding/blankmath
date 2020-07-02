import { Action } from "redux";

// export function typedAction<T extends string>(type: T): { type: T };
// export function typedAction<T extends string, P extends any>(
//   type: T,
//   payload: P
// ): { type: T; payload: P };
// export function typedAction(type: string, payload?: any) {
//   return { type, payload };
// }

export interface typedAction extends Action {
  type: string;
  payload?: any;
}

export interface CheckBoxType {
  checkboxName: string;
  value: string;
}
