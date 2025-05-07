export default function FruitList(): React.JSX.Element {
    const fruits = ['🍎 사과', '🍌 바나나', '🍇 포도', '🍊 오렌지', '🍉 수박'];

    return (
        <div>
            <h2>🍏 과일 목록</h2>
            <ul>
                {
                    fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
                }
            </ul>
        </div>
    );
}