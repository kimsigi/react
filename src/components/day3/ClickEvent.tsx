export default function ClickEvent() {
    const handlerClick = function(): void {
        alert("버튼클릭2 클릭!");
    }

    return (
        <div>
            <button onClick={() => alert('버튼클릭!')}>버튼클릭</button>
            <button onClick={handlerClick}>버튼클릭2</button>
        </div>
    );
}