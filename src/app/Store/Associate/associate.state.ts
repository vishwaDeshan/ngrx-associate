import { AssociateModel } from '../Model/Associate.model';

export const InitialAssociateStates: AssociateModel = {
  assocaiteList: [],
  errormessage: '',
  associateobj: {
    id: 0,
    name: '',
    email: '',
    phone: '',
    type: 'CUSTOMER',
    address: '',
    associategroup: 'Level 1',
    status: true,
  },
};
