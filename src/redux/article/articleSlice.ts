import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../../app/articles/models/articleInterface';
import { fetchArticles, fetchArticleById } from './articleThunks';

interface ArticleState {
    articles: Article[];
    loading: boolean;
    error: string | null;
    currentArticle: Article | null;
}

const initialState: ArticleState = {
    articles: [],
    loading: false,
    error: null,
    currentArticle: null,
};

const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addArticle: (state, action: PayloadAction<Article>) => {
            state.articles.push(action.payload);
        },
        updateArticle: (state, action: PayloadAction<Article>) => {
            const index = state.articles.findIndex(article => article.id === action.payload.id);
            if (index !== -1) {
                state.articles[index] = action.payload;
            }
        },
        deleteArticle: (state, action: PayloadAction<string>) => {
            state.articles = state.articles.filter(article => article.id !== action.payload);
        },
        setCurrentArticle: (state, action: PayloadAction<Article>) => {
            state.currentArticle = action.payload;
        },
    },
    extraReducers: (builder) => {
        // ALL  
        builder.addCase(fetchArticles.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.loading = false;
            state.articles = action.payload;
        });
        builder.addCase(fetchArticles.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });

        // BY ID 
        builder.addCase(fetchArticleById.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.loading = false;
            state.currentArticle = action.payload;
        });
        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export const { addArticle, updateArticle, deleteArticle, setCurrentArticle } = articleSlice.actions;

export default articleSlice.reducer;
