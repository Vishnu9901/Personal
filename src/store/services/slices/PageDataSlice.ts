// modalSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface PageDataState {
    plpPage: {
        category: string
        subCategory: string
    },
    footer:{
      category:string
    }
}

const initialState: PageDataState = {
    plpPage: {
        category: '',
        subCategory: ''
    },
    footer:{
        category:''
    }
    
};

const PageDataSlice = createSlice({
    name: 'PageData',
    initialState,
    reducers: {
        setPLPPageData: (state, action) => {
            state.plpPage = action.payload;
        },
        setFooterData: (state, action) => {
            state.footer = action.payload;
        }
    },
});

export const { setPLPPageData, setFooterData } = PageDataSlice.actions;
export default PageDataSlice.reducer;
