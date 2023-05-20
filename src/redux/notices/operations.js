import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSearchParams } from "redux/helpers";
import { async } from "q";

export const getNotices = createAsyncThunk(
    'notices/getNotices',
    async(credentials,{rejectWithValue})=>{
        const {category,...params} = credentials;
        try {
            await axios.get(`api/notices/${category}?${createSearchParams(params)}`);

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const getUserNotices = createAsyncThunk(
    '/notices/getUserNotices',
    async(params,{rejectWithValue})=>{
        try {
            await axios.get(`api/notices/${createSearchParams(params)}`);
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const getNoticesByQuery = createAsyncThunk(
    'notices/getNoticesByQuery',
    async(credentials,{rejectWithValue})=>{
        const {category,...params} = credentials;
        try {
            await axios.get(`/api/notices/search${category}?${createSearchParams(params)}`);
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const getNoticesById = createAsyncThunk(
    'notices/getNoticesById',
    async(_id,{rejectWithValue})=>{
        try {
            await axios.get(`/api/notices/${_id}`);
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const addNotice = createAsyncThunk(
    'notices/addNotice',
    async(credentials,{rejectWithValue})=>{
        const {category,...params}=credentials;
        try {
            await axios.post(`/api/notices/${category}`,params);
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const updateNotice=createAsyncThunk(
    'notices/updateNotice',
    async(credentials,{rejectWithValue})=>{
        const {_id,...params}=credentials;
        try {
            await axios.put(`/api/notices/${_id}`,params);
        } catch (error) {
            return rejectWithValue(error.message)
            
        }
    }
);

export const removeNotice = createAsyncThunk(
    'notices/removeNotice',
    async(_id,{rejectWithValue})=>{
        try {
            await axios.delete(`/api/notices${_id}`);
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const addFavoriteNotice = createAsyncThunk(
    'notices/addFavoriteNotice',
    async(_id, {rejectWithValue})=>{
        try {
            await axios.post(`/api/notices/${_id}`);
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const removeFavoriteNotice = createAsyncThunk(
    'notices/removeFavoriteNotice',
    async(_id,{rejectWithValue})=>{
        try {
            await axios.delete(`/api/notices/${_id}`);
        } catch (error) {
            return rejectWithValue(eror.message)
        }
    }
)