import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootType } from '../store/redusers/rootReducer';

const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector;

export default useTypedSelector;
