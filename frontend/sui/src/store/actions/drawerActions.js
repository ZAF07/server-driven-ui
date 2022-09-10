import { Actions } from '../../constants/constants';

const SetDrawerCustomisation = (payload) => {
  return { type: Actions.SetDrawerCustomisation, payload }
};

export {
  SetDrawerCustomisation,
}