import Hello from "./Hello";
import Welcome from "./Welcome";

export default function Day1App() {
    const userName: string = "홍길동";
    return (
        <>
        <Hello />
        <Welcome name="철수" />
        <Welcome name="영희" />
        <Welcome name={userName} />
        </>
    );
}
