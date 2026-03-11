import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { pagesConfig } from "./pages.config";
import PageNotFound from "./PageNotFound";
import { analyzeSymptoms } from "./ai/analyzeSymptoms";
const { Pages, Layout, mainPage } = pagesConfig;

const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = Pages[mainPageKey];

const LayoutWrapper = ({ children, currentPageName }) =>
  Layout ? (
    <Layout currentPageName={currentPageName}>{children}</Layout>
  ) : (
    <>{children}</>
  );
async function handleSearch() {
  const ai = await analyzeSymptoms(symptom);

  console.log("AI diagnosis:", ai);

  const filtered = hospitals.filter(
    (h) => h.specialization === ai.specialization,
  );

  setResults(filtered);
}
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWrapper currentPageName={mainPageKey}>
              <MainPage />
            </LayoutWrapper>
          }
        />

        {Object.entries(Pages).map(([path, Page]) => (
          <Route
            key={path}
            path={`/${path}`}
            element={
              <LayoutWrapper currentPageName={path}>
                <Page />
              </LayoutWrapper>
            }
          />
        ))}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
