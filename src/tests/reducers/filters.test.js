import FiltersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = FiltersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = FiltersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = FiltersReducer(currentState, action); 
    expect(state.sortBy).toBe('date');
});

test('should set set text filter', () => {
    const text = 'hello from the otherside';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = FiltersReducer(undefined, action);
    expect(state.text).toEqual(text);
});

test('should set set start date', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = FiltersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should set set end date', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = FiltersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});