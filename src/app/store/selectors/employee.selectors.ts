import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEmployee from './../reducers/employee.reducers';

export const selectEmployeeState =
  createFeatureSelector<fromEmployee.EmployeeState>(
    fromEmployee.employeeFeatureKey
  );

export const selectEmployees = createSelector(
  selectEmployeeState,
  (state: fromEmployee.EmployeeState) => state.employees
);

export const selectbyid = (id: number) =>
  createSelector(selectEmployeeState, (state: fromEmployee.EmployeeState) =>
    state.employees.filter((x) => (x.employeeid = id))
  );

export const selectbyBankRef = (name: string) =>
  createSelector(selectEmployeeState, (state: fromEmployee.EmployeeState) =>
    state.employees.filter((x) => (x.name = name))
  );
