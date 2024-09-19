import { AppDispatch } from '../store';
import { addArticle, updateArticle, deleteArticle } from './articleSlice';
import { Article } from '../../app/articles/models/articleInterface';
import axiosInstance from '../../api/coreApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createArticle = (article: Omit<Article, 'id'>) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.post<Article>('/articles', article);
        dispatch(addArticle(response.data));
    } catch (error) {
      throw new Error('An error occurred while creating the article');
    }
};

export const editArticle = (id: string, article: Omit<Article, 'id'>) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.put<Article>(`/articles/${id}`, article);
        dispatch(updateArticle(response.data));
    } catch (error) {
        throw new Error('An error occurred while updating the article');
    }
};

export const removeArticle = (id: string) => async (dispatch: AppDispatch) => {
    try {
        await axiosInstance.delete(`/articles/${id}`);
        dispatch(deleteArticle(id));
    } catch (error) {
        throw new Error('An error occurred while removing the article');
    }
};

// ASSYNC 
export const fetchArticles = createAsyncThunk<Article[], void>(
    'articles/fetchArticles',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get<Article[]>('/articles');
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue('Failed to fetch articles');
        }
    }
);

export const fetchArticleById = createAsyncThunk<Article, string>(
    'articles/fetchArticleById',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get<Article>(`/articles/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue('Failed to fetch article');
        }
    }
);