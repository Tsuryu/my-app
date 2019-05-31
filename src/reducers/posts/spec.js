import { types } from './../../actions/types';
import postReducer from './reducer';

describe('Posts reducers', () => {

    it('Should return default state', () => {
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('It should return if receiving type', () => {
        const posts = [{title: 'Test 1'}, {title: 'Test 2'}, {title: 'Test 3'}];
        const newState = postReducer(undefined, {types: types.GET_POSTS, payload: posts});
        expect(newState).toEqual(posts);
    });
});