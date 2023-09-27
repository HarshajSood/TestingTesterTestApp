import { Action, createReducer, on } from '@ngrx/store';
import { Device } from 'src/app/device';
import * as DeviceActions from '../actions/device.actions';

export const deviceFeatureKey = 'device';

export interface DeviceState {
  devices: Device[];
}

export const initialState: DeviceState = {
  devices: [
    {
      deviceid: 1,
      type: 'Recieve',
      currency: 'EUR',
      description: 'Emporos 476',
      employeeid: 12321,
    },
    {
      deviceid: 2,
      type: 'Pay',
      currency: 'USD',
      description: 'Visa 345',
      employeeid: -3560,
    },
    {
      deviceid: 3,
      type: 'Pay',
      currency: 'GBP',
      description: 'Emporos 476',
      employeeid: -12789,
    },
    {
      deviceid: 4,
      type: 'Receive',
      currency: 'GBP',
      description: 'HSBC',
      employeeid: 19657,
    },
  ],
};

export const deviceReducer = createReducer(
  initialState,
  on(DeviceActions.addDevice, (state: DeviceState, { device }) => ({
    ...state,
    devices: [...state.devices, device],
  })),
  on(DeviceActions.deleteDevice, (state: DeviceState, { device }) => ({
    ...state,
    devices: [...state.devices].filter((x) => x != device),
  })),
  on(
    DeviceActions.updateDevice,
    (state: DeviceState, { id, typ, des, dev }) => ({
      ...state,
      devices: state.devices.map((device) =>
        device.employeeid != id &&
        device.type != typ &&
        device.description != des
          ? device
          : dev
      ),
    })
  )
);

export function devreducer(
  state: DeviceState | undefined,
  action: Action
): any {
  return deviceReducer(state, action);
}
