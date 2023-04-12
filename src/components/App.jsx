import { Routes, Route, Navigate } from 'react-router-dom';
import  Layout  from 'views/Layout/Layout';
import { lazy } from 'react';

const AddWordView = lazy(() =>
  import('../views/AddWord/AddWordView' /* WebpackChunkName: "AddWordView" */)
);
const TestWordsView = lazy(() =>
  import(
    '../views/TestWords/TestWordsView' /* WebpackChunkName: "TestWordsView" */
  )
);
const DictionaryView = lazy(() => import('../views/Dictionary/DictionaryView' /* WebpackChunkName: "DictionaryView" */));
const ResultsView = lazy(() => import('../views/Results/ResultsView' /* WebpackChunkName: "ResultsView" */));

export default function App () {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DictionaryView />} />
        <Route path="addWord" element={<AddWordView />} />
        <Route path="testWord" element={<TestWordsView />}/>
        <Route path="results" element={<ResultsView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};