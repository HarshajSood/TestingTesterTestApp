import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Action, createReducer, on } from '@ngrx/store';
import { Employee } from 'src/app/employee';
import * as EmployeeActions from '../actions/employee.actions';

export const employeeFeatureKey = 'employee';

export interface EmployeeState {
  employees: Employee[];
}

export const initialState: EmployeeState = {
  employees: [
    {
      eid: 1,
      name: 'Visa 345',
      email: 'NL69INGB9965356246',
      currency: 'USD',
      country: 'USA',
      employeeid: 12321,
    },
    {
      eid: 2,
      name: 'Emporos 476',
      email: 'LB75882443252654241731968148',
      currency: 'GBP',
      country: 'UK',
      employeeid: 12232,
    },
    {
      eid: 3,
      name: 'Test Client',
      email: 'GR5601059955664517279723251',
      currency: 'EUR',
      country: 'Germany',
      employeeid: 43560,
    },
    {
      eid: 4,
      name: 'HSBC',
      email: 'GB58BARC20037816233954',
      currency: 'GBP',
      country: 'UK',
      employeeid: 45324,
    },
    {
      eid: 5,
      name: 'Barc GBP',
      email: 'GB18BARC20039588472398',
      currency: 'GBP',
      country: 'UK',
      employeeid: 32678,
    },
  ],
};

export const employeeReducer = createReducer(
  initialState,
  on(EmployeeActions.addEmployee, (state: EmployeeState, { employee }) => ({
    ...state,
    employees: [...state.employees, employee],
  })),
  on(EmployeeActions.deleteEmployee, (state: EmployeeState, { employee }) => ({
    ...state,
    employees: [...state.employees].filter((x) => x != employee),
  })),
  on(EmployeeActions.updateEmployee, (state: EmployeeState, { id, empl }) => ({
    ...state,
    employees: state.employees.map((employee) => employee),
  }))
);

export function empreducer(
  state: EmployeeState | undefined,
  action: Action
): any {
  return employeeReducer(state, action);
}
