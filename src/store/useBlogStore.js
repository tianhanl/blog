import { create } from 'zustand';

export const useBlogStore = create((set, get) => ({
  accessTime: '',
  articleList: [],
  articles: [],
  labels: [],
  currPosition: -1,

  previousArticleID: () => {
    const { currPosition, articleList } = get();
    if (currPosition <= 0) return -1;
    return articleList[currPosition - 1]?.number ?? -1;
  },
  nextArticleID: () => {
    const { currPosition, articleList } = get();
    if (currPosition < 0 || currPosition + 1 >= articleList.length) return -1;
    return articleList[currPosition + 1]?.number ?? -1;
  },

  setArticleList: ({ articleList, accessTime }) => set({ articleList, accessTime }),
  setArticle: ({ articleData }) => set(s => ({ articles: [...s.articles, articleData] })),
  setLabels: ({ labels }) => set({ labels }),
  setCurrPosition: (currPosition) => set({ currPosition }),
}));
