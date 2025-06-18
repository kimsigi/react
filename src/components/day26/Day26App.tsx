import ErrorBoundary from "./ErrorBoundary.tsx";
import {lazy, Suspense} from "react";

const SomeComponent = lazy(() => import('./SomeComponent'));

export default function Day26App() {
    return (
        <>
            <h1>🗓️ React 26일차: Error Boundary + Suspense </h1>
            <br />

            <ErrorBoundary>
                <Suspense fallback={<p>로딩 중...!!!!!.</p>}>
                    <SomeComponent />
                </Suspense>
            </ErrorBoundary>
        </>
    );
}