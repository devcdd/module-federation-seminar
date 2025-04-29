import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";

// Remote Apps
const App1 = lazy(() => import("app1/app"));
const App2 = lazy(() => import("app2/app"));

function App() {
  return (
    <>
      {/* Remote Apps */}
      <div style={{ marginTop: "2rem" }}>
        <h2>Remote Apps:</h2>
        <ErrorBoundary
          fallback={
            <div style={{ padding: "1rem", color: "#666" }}>
              App1이 실행되고 있지 않습니다. (port: 4001)
            </div>
          }
        >
          <Suspense fallback={<div>Loading App1...</div>}>
            <App1 />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary
          fallback={
            <div style={{ padding: "1rem", color: "#666" }}>
              App2가 실행되고 있지 않습니다. (port: 4002)
            </div>
          }
        >
          <Suspense fallback={<div>Loading App2...</div>}>
            <App2 />
          </Suspense>
        </ErrorBoundary>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
